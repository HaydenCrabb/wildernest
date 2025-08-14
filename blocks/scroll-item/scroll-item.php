<?php
/**
 * Render callback for the textured-text Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$mainImageURL = $attributes['mainImage']['url'] ?? '';
$description = $attributes['description'] ?? '';

?>

  <div class="scroll-item-container">
    <img class="scroll-item-image" src="<?php echo esc_url($mainImageURL); ?>">
    <h4 class="scroll-item-description"><?php echo $description; ?></h4>
  </div>
