<?php
/**
 * Render callback for the scrolling-block Section block.
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
  <div class="scrolling-block-section alignfull">
    <div class="background-pattern" style="background-image: url('https://sld.tid.temporary.site/website_c268a004/wp-content/uploads/2025/07/background-pattern-smaller.webp')">
      <div class="gold-band"></div>
      <div class="textured-overlay" style="background-color: #483e30;">
      </div>
        <div class="scrolling-block-container max-width center-aligned">
          <div class="scroll-container">
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
          </div>
        </div>
    </div>
  </div>

<?php endif; ?>