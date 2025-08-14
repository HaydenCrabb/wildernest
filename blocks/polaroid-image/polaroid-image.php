<?php
/**
 * Render callback for the Polaroid Image Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$main_image_url  = $attributes['mainImage']['url'] ?? '';
$main_heading  = $attributes['mainHeading'] ?? '';
$sub_heading  = $attributes['subHeading'] ?? '';

$main_image_style = 'style="background-image: url(' . esc_url($main_image_url) . ')"';


?>
<div class="polaroid-image-section center-aligned">
  <div class="polaroid-heading-container">
    <h3 class="polaroid-heading"><?php echo $main_heading; ?></h3>
    <h4 class="polaroid-sub-heading"><?php echo $sub_heading; ?></h4>
  </div>
  <div class="polaroid-image-container slight-slide-down">
    <div class="polaroid-highlight"></div>
    <div class="polaroid-outer">
      <div class="polaroid-image" <?php echo $main_image_style; ?>></div>
    </div>
  </div>
</div>