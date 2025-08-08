<?php
/**
 * Template for the dynamic block render.
 *
 * This file is auto-included by WordPress because of the "render" key in block.json.
 * It should return a string, not define a function.
 */

// Access the block attributes and inner content via these variables:
$background_url   = esc_url( $attributes['background_image']['url'] ?? '' );

$header = $attributes['header'] ?? '';
$subheading = $attributes['subHeading'] ?? '';

$buttonText = $attributes['buttonText'] ?? '';
$buttonUrl = esc_url($attributes['buttonUrl']) ?? '';

$buttonUrl = get_site_url() . '/contact-us';

?>


<div class="cover-image-section floating-banner alignfull" style="background-image: url('<?php echo $background_url; ?>');">
  <div class="cover-image-section-cover" style="background-color: #000; opacity: 0.15;"></div>
   <?php if ($header != '' || $subheading != ''): ?>
    <div class="float-section">
      <div class="gold-band"></div>
      <?php if ($header != '') : ?>
          <h3 class="header"><?php echo $header; ?></h3>
      <?php endif; ?>
      <?php if ($subheading != '') : ?>
          <h4 class="floating-subheading"><?php echo $subheading; ?></h4>
      <?php endif; ?>
      <?php if ($buttonText != '' && $buttonUrl != '') : ?>
        <div class="button-container">
          <a class="hcsolutions-button" href="<?php echo $buttonUrl; ?>"><span><?php echo $buttonText; ?></span></a>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</div>
