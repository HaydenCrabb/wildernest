<?php
    /**
     * Render callback for the FAQ block.
     *
     * @param array $attributes Block attributes.
     * @param string $content Inner block content (not used here).
     * @return string HTML output.
    */


?>
<div class="textured-text-section faq alignfull">
  <div class="background-pattern" style="background-image: url('https://sld.tid.temporary.site/website_c268a004/wp-content/uploads/2025/07/background-pattern-smaller.webp')">
    <div class="gold-band"></div>
    <div class="textured-overlay faq-textured-overlay" style="background-color: #4F5341"></div>
    <div class="faq-block max-width center-aligned">
      <h3 class="fade-slide-in">Frequently Asked Questions</h3>
      <?php foreach ( $attributes['faqItems'] as $item ) :
        $question = isset( $item['question'] ) ? $item['question'] : '';
        $answer   = isset( $item['answer'] ) ? $item['answer'] : '';
      ?>
        <div class="faq-item">
          <div class="faq-header">
            <div class="plus-button"><span class="left"></span><span class="right"></span></div>
            <h4 class="faq-question"><?php echo $question; ?></h4>
          </div>
          <div class="answer-body">
            <p class="faq-answer"><?php echo $answer; ?></p>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>

