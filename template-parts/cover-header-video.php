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
?>

<div class="cover-header <?php echo $cover_header_classes; ?>" style="max-height: <?php echo $max_height; ?>;">
	<video autoplay muted loop playsinline>
		<source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="cover-header-inner" style="position: relative; z-index: 1;">
		<!-- Your inner content -->
	</div>
</div>