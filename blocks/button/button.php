<?php
/**
 * Render callback for the textured-text Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$button_text = $attributes['buttonText'] ?? '';
$buttonUrl = $attributes['buttonUrl'] ?? '';


// Only render the block if we have some content.
if ($button_text != '' && $buttonUrl != '') :
?>
  <div class="button-container">
    <a class="hcsolutions-button" href="<?php echo esc_url($buttonUrl); ?>">
      <span><?php echo $button_text ?></span>
    </a>
  </div>

<?php endif; ?>