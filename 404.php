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
	<!-- 404 page loading -->
	<?php
		$post_id = 260;
		$post = get_post( $post_id );

		if ( $post ) {
			setup_postdata( $post );
			get_template_part( 'template-parts/content', get_post_type( $post ) );
			wp_reset_postdata();
		} else {
			echo '<p>Sorry, this page could not be found.</p>';
		}
	?>
</main>