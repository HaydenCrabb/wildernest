<?php
/*
Template Name: Blank Template
Template Post Type: page
*/

get_header();
?>

<main id="site-content">
	<!-- Blank template file being utilized -->

	<?php

		if ( have_posts() ) {

			the_post();

			get_template_part( 'template-parts/blank-content', get_post_type() );
		}

	?>

</main>


