<?php
/**
 * The main content file that displays full width cover image.
 *
 * @package HCSolutions
 * @subpackage Wildernest
 */

$max_height = is_front_page() ? '105vh' : '80vh';
$cover_header_classes = is_front_page() ? 'front-page' : '';

$cover_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full');

$cover_inner_style = 'style=" background-image: url(' . $cover_image_url . ')"';

$subheading = get_post_meta($post->ID, 'wildernest_subheading_setting', true);

?>

<div class="cover-header static-image <?php echo $cover_header_classes; ?>" style="height: <?php echo $max_height; ?>;">
	<div class="cover-overlay"></div>
	<div class="scroll-indicator"><span class="roboto">Scroll</span> ––––––––</div>
	<div class="cover-header-inner max-width" <?php echo $cover_inner_style ?>>
		<div class="text-container">
			<div class="heading-inner-containers">
				<h1 class="heading"><?php echo get_the_title(); ?></h1>
				<?php if ($subheading != ''): ?>
					<h2 class="subheading"><?php echo $subheading; ?></h2>
				<?php endif; ?>
			</div>
		</div>
		<!-- Your inner content -->
	</div>
</div>