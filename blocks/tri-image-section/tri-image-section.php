<?php
/**
 * Render callback for the Polaroid Image Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$main_image_url  = $attributes['mainImage']['url'] ?? '';
$top_right_image_url  = $attributes['topRight']['url'] ?? '';
$bottom_right_image_url  = $attributes['bottomRight']['url'] ?? '';

$main_image_style = 'style="background-image: url(' . esc_url($main_image_url) . ')"';
$top_right_style = 'style="background-image: url(' . esc_url($top_right_image_url) . ')"';
$bottom_right_style = 'style="background-image: url(' . esc_url($bottom_right_image_url) . ')"';


?>


  <div class="tri-image-section alignfull">
    <div class="main-image-container image" <?php echo $main_image_style; ?> >
    </div>
    <div class="secondary-images-container">
      <div class="top-right-container image" <?php echo $top_right_style; ?> ></div>
      <div class="bottom-right-container image" <?php echo $bottom_right_style; ?>></div>
    </div>
  </div>
