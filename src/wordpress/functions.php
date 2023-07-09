<?php

add_filter('rest_endpoints', function ($endpoints) {
    if (!is_user_logged_in()) {
        foreach ($endpoints as $route => $endpoint) {
            if (0 === stripos($route, '/wp/')) {
                unset($endpoints[$route]);
            }
        }
    }
    return $endpoints;
});

add_action('rest_api_init', function () {
    register_rest_route(
        'api',
        '/data',
        array(
            'methods' => 'GET',
            'callback' => 'generate_api_data',
            'permission_callback' => '__return_true',
        )
    );
});

function remove_html_comments($content)
{
    return preg_replace('/<!--(.|\s)*?-->/', '', $content);
}

function generate_api_data()
{
    $posts = get_posts([
        'posts_per_page' => -1,
        'post_type' => 'post',
        'post_status' => 'published',
    ]);

    if (isset($posts) && !empty($posts)) {
        foreach ($posts as $post) {
            $content = $post->post_content;
            $post->post_content = parse_blocks($content);
        }
    }

    $pages = get_posts([
        'posts_per_page' => -1,
        'post_type' => 'page',
        'post_status' => 'published',
    ]);

    if (isset($pages) && !empty($pages)) {
        foreach ($pages as $page) {
            $content = $page->post_content;
            $page->post_content = parse_blocks($content);
        }
    }

    $response = [
        'posts' => $posts,
        'pages' => $pages,
    ];

    return rest_ensure_response($response);
}