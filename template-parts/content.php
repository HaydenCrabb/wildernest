<?php
/**
*
* The main content file that displays full width cover images.
* 
* @package HCSolutions
* @subpackage Wildernest
*
*
*/
?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<?php
		if (is_front_page()) { 
			get_template_part('template-parts/cover-header-video');
		}
		else {
			get_template_part('template-parts/cover-header');
		}
	?>

	<div class="post-inner">
		<div class="content max-width center-aligned">
			<?php
			the_content( __( 'Continue reading', 'twentytwenty' ) );

			?>
		</div>
	</div>

	<?php
		get_footer();