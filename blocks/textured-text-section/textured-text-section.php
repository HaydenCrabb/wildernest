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
$overlay_color = $attributes['overlayColor'] ?? '#494D3D';


// Only render the block if we have some content.
if ($header_text != '' || $body_text != '') :
?>
  <div class="textured-text-section alignfull">
    <div class="background-pattern" style="background-image: url('https://sld.tid.temporary.site/website_c268a004/wp-content/uploads/2025/07/background-pattern-smaller.webp')">
      <div class="gold-band"></div>
      <div class="textured-overlay" style="background-color: <?php echo $overlay_color ?>;">
      </div>
        <div class="textured-text-container max-width center-aligned">
          <?php
            if ($header_text != '') { ?>
              <div class="header-text-container">
                <h2 class="header-text"><?php echo esc_html($header_text); ?></h2>
              </div>
            <?php
            } 
          ?>
          <?php
            if ($body_text != '') { ?>
              <div class="body-text-container">
                <p class="body-text"><?php echo esc_html($body_text); ?></p>
              </div>
            <?php
            } 
          ?>
        </div>
    </div>
  </div>

<?php endif; ?>