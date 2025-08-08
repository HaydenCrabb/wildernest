<?php
/**
 * Render callback for the Polaroid Image Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$images_array  = $attributes['images'] ?? [];
$overlay_text = $attributes['overlayText'] ?? '';

/* Hardcoding values for just a bit of testing */

$overlay_text = "Customized down to every knob and handle";

// End Harcoding testing section
?>


  <div class="gallery-section alignfull">
    <div class="overlay-text-container">
      <h3><?php echo $overlay_text; ?></h3>
    </div>
    <div class="scroll-button-container">
      <div class="left-button"><span></span></div>
      <div class="right-button"><span></span></div>
    </div>
    <div class="gallery-inner">
      <?php for ($index = 0; $index < count($images_array); $index++): 
        $image_src = esc_url($images_array[$index]['url']);
        $image_alt = esc_attr($images_array[$index]['alt']);
        $image_cap = esc_attr($images_array[$index]['caption'] ?? '');
        ?>
        <div class="gallery-image-container">
          <img src="<?php echo $image_src; ?>" alt="<?php echo $image_alt; ?>" loading="lazy" decoding="async">
          <div class="image-caption"><?php echo $image_cap; ?></div>
        </div>
      <?php endfor; ?>
    </div>
  </div>
