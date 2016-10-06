<?php namespace Swiss\RestApi;

function my_awesome_posts() {

    $json = array();

    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 250
    );

    $query = new \WP_Query($args);

    global $post;

    if (!empty( $query->posts ) ) {

        foreach($query->posts as $post){

            setup_postdata($post);
            
            $wp_post = new \Swiss\Post($post); 
            array_push($json, $wp_post);
        }
    }

    return $json;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'swiss/v1', '/posts', array(
        'methods' => 'GET',
        'callback' => '\Swiss\RestApi\my_awesome_posts',
    ) );

} );