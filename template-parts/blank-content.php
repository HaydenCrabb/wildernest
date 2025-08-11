<?php
/**
*
* Basically blank..
* 
* @package HCSolutions
* @subpackage Wildernest
*
*
*/

$post_inner_class = ''

?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<div style="width:100%; height: 200px; display: block;"></div>

	<div class="post-inner <?php echo $post_inner_class; ?>">
		<div class="content max-width center-aligned">
			<?php
			the_content( __( 'Continue reading', 'twentytwenty' ) );

			?>
		</div>
	</div>

	<?php
		get_footer();