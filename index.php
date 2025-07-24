<?php 
/**
*
*
* A Theme designed for Wildernest River
* 
* @package HCSolutions
* @subpackage Wildernest
*
*/


get_header();
?>

<main id="site-content">
	<!-- Index file being utilized -->

	<?php

		if ( have_posts() ) {

			the_post();

			get_template_part( 'template-parts/content', get_post_type() );
		}

	?>

</main>