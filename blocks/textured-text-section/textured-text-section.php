<?php
/**
 * Render callback for the textured-text Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$header_text  = $attributes['headerText'] ?? '';
$body_text  = $attributes['bodyText'] ?? '';
$color = $attributes['color'] ?? '';

?>
<div <?php
    if ($header_text != '') { ?>
      style="color: <?php echo esc_html($color); ?> "
    <?php
    } 
  ?> class="textured-text-section alignfull">
  <?php
    if ($header_text != '') { ?>
      <div class="header-text-container">
        <div class="header-text"><?php echo esc_html($header_text); ?></div>
      </div>
    <?php
    } 
  ?>
  <?php
    if ($body_text != '') { ?>
      <div class="body-text-container">
        <div class="body-text"><?php echo esc_html($body_text); ?></div>
      </div>
    <?php
    } 
  ?>