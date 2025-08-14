<?php
/**
 * Render callback for the textured-text Section block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner block content (not used here).
 * @return string HTML output.
 */

$header_text  = $attributes['headerText'] ?? '';

$background_url = get_site_url() . '/wp-content/uploads/2025/07/background-pattern-smaller.webp';

$header_text = "By The Numbers";

if ( empty( $attributes['items'] ) || !is_array( $attributes['items'] ) ) {
    return '';
  }
?>

  <div class="textured-text-section by-the-numbers-section alignfull">
    <div class="background-pattern" style="background-image: url(<?php echo $background_url ?>)">
      <div class="gold-band"></div>
      <div class="textured-overlay" style="background-color: #2C465D"></div>
        <div class="numbers-container max-width center-aligned">
          <div class="header-container">
            <h3 class="header-text fade-slide-in"><?php echo $header_text; ?></h3>
          </div>
          <div class="by-the-numbers-grid">
            <?php foreach ( $attributes['items'] as $item ) : ?>
              <div class="by-the-numbers-item">
                <div class="number"><?php echo esc_html( $item['number'] ); ?></div>
                <div class="description"><?php echo esc_html( $item['description'] ); ?></div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
