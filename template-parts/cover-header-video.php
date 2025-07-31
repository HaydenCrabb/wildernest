<?php
/**
 * The main content file that displays full width cover video.
 *
 * @package HCSolutions
 * @subpackage Wildernest
 */

$max_height = is_front_page() ? '105vh' : '70vh';
$cover_header_classes = is_front_page() ? 'front-page' : '';

// Optional: set video URL (you can use a static file or get from a custom field)
$video_url = get_template_directory_uri() . '/assets/video/cover-header-video.mp4';

$front_page_icon = '';

if (is_front_page()) {
	$front_page_icon = get_theme_mod('front-page-icon');
}

?>

<div class="cover-header video-cover-header <?php echo $cover_header_classes; ?>" style="max-height: <?php echo $max_height; ?>;">
	<div class="cover-overlay"></div>
	<video autoplay muted loop playsinline>
		<source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="screen-height-container">
		<div class="play-video-button roboto"><a href="#">Play Full Video</a><span class="video-play-button"></span></div>
		<div class="cover-header-inner max-width">
			<!-- Your inner content -->
			<div class="text-container">
				<div class="heading-inner-containers">
					<?php if ($front_page_icon != ''): ?>
						<div class="front-page-icon-container">
							<img class="front-page-icon" src="<?php echo $front_page_icon; ?>">
						</div>
					<?php endif; ?>
					<h1 class="heading"><?php echo get_the_title(); ?></h1>
				</div>
			</div>
		</div>
	</div>
</div>