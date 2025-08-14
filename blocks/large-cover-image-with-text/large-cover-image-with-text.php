<?php
/**
 * Template for the dynamic block render.
 *
 * This file is auto-included by WordPress because of the "render" key in block.json.
 * It should return a string, not define a function.
 */

// Access the block attributes and inner content via these variables:
$background_url   = esc_url( $attributes['background_image']['url'] ?? '' );
$overlay_color    = esc_attr( $attributes['overlay_color'] ?? '#000000' );
$overlay_opacity  = floatval( $attributes['overlay_opacity'] ?? 0.15 );

$header = $attributes['header'] ?? '';
$paragraph = $attributes['paragraph'] ?? '';

$buttonText = $attributes['buttonText'] ?? '';
$buttonUrl = esc_url($attributes['buttonUrl']) ?? '';

$include_parrallax = esc_attr( $attributes['parrallax'] ?? false);
$parrallax_text = ($include_parrallax ? 'parrallax' : '');

?>

<div class="cover-image-section alignfull <?php echo $parrallax_text; ?>" style="background-image: url('<?php echo $background_url; ?>');">
  <div class="cover-image-section-cover" style="background-color: <?php echo $overlay_color; ?>; opacity: <?php echo $overlay_opacity; ?>;"></div>
  <?php if ($header != '' || $paragraph != ''): ?>
    <div class="text-container">
      <?php if ($header != '') : ?>
        <div class="header-container">
          <h2 class="header"><?php echo $header; ?></h2>
        </div>
      <?php endif; ?>
      <?php if ($paragraph != '') : ?>
        <div class="cover-paragraph-container">
          <p class="cover-paragraph"><?php echo $paragraph; ?></p>
        </div>
      <?php endif; ?>
      <?php if ($buttonText != '' && $buttonUrl != '') : ?>
        <div class="button-container">
          <a class="hcsolutions-button" href="<?php echo $buttonUrl; ?>"><span><?php echo $buttonText; ?></span></a>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</div>