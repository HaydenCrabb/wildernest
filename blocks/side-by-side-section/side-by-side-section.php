<?php
/**
 * Render callback for the Side-by-Side Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$left_image_url  = $attributes['leftImage']['url'] ?? '';
$right_image_url = $attributes['rightImage']['url'] ?? '';
$hover_text  = $attributes['hoverText'] ?? '';

?>
<div class="side-by-side-section alignfull">
  <?php
    if ($hover_text != '') { ?>
      <div class="hover-text-container">
        <div class="hover-text fade-slide-in"><?php echo esc_html($hover_text); ?></div>
      </div>
    <?php
    } 
  ?>

  <div class="left-image side-by-side-column">
    <?php if ( $left_image_url ) : ?>
      <div class="inner-image-container" style="background-image: url(<?php echo esc_url($left_image_url); ?>)">
      </div>
    <?php endif; ?>
  </div>

  <div class="right-image side-by-side-column">
    <?php if ( $right_image_url ) : ?>
      <div class="inner-image-container" style="background-image: url(<?php echo esc_url($right_image_url); ?>)">
      </div>
    <?php endif; ?>
  </div>
</div>