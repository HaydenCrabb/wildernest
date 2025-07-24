<?php
/**
 * Wildernest Functions and such. 
 *
 *
 *
 * @package HCSolutions
 * @subpackage Wildernest
 */


function theme_support() {

	add_theme_support( 'post-thumbnails' );

	// Custom logo.
	$logo_width  = 120;
	$logo_height = 90;

	add_theme_support(
		'custom-logo',
		array(
			'height'      => $logo_height,
			'width'       => $logo_width,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'script',
			'style',
			'navigation-widgets',
		)
	);

	load_theme_textdomain( 'wildernest' );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/*
	 * Adds `async` and `defer` support for scripts registered or enqueued
	 * by the theme.
	 */
	// $loader = new TwentyTwenty_Script_Loader();
	// add_filter( 'script_loader_tag', array( $loader, 'filter_script_loader_tag' ), 10, 2 );

}

add_action( 'after_setup_theme', 'theme_support' );


// Customizer
require get_template_directory() . '/inc/customizer.php';

//footer walker
require get_template_directory() . '/inc/wildernest-footer-walker.php';

// Add Menu Locations
function wildernest_menus() {

	$locations = array(
		'primary'  => __( 'Desktop Horizontal Menu', 'wildernest' ),
		'mobile'   => __( 'Mobile Menu', 'wildernest' ),
		'footer'   => __( 'Footer Menu', 'wildernest' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'wildernest_menus' );


// Register the stylesheet.

function wildernest_enqueue_styles() {

	$theme_version = wp_get_theme()->get( 'Version' );

    wp_enqueue_style('wildernest-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'wildernest_enqueue_styles');

/* This function remove the posts page from the menu. since we don't need it in this theme. */
function remove_posts_menu() {
    remove_menu_page('edit.php');
}
add_action('admin_menu', 'remove_posts_menu');
