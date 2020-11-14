<?php

function momentu_js_scripts() {

    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );

    if ( is_front_page() ) :

        wp_enqueue_style( 'front-page-style', get_template_directory_uri() . '/css/front-page.css', false );
        wp_enqueue_script( 'front-page-script', get_template_directory_uri() . '/js/front-page.js', false );

    endif;
}
add_action( 'wp_enqueue_scripts', 'momentu_js_scripts' );

?>