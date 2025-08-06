<?php
/**
 * Render callback for the scrolling-block Section block.
 *
 * @param array  $attributes Block attributes.
 * @param string $content    Inner block content (children from InnerBlocks).
 * @return string HTML output.
 */

$unique_id     = 'scrolling-block-' . uniqid();
?>

<div id="<?php echo esc_attr($unique_id); ?>" class="scrolling-block-section alignfull">
    <div class="scroll-background alignfull" style="background-color: #483e30;">
        <div class="gold-band"></div>
        <div class="scrolling-block-container center-aligned" >
        <div class="scroll-wrapper">
                <div class="scroll-content">
                    <?php echo $content; ?>
                </div>
                <div class="scroll-content">
                    <?php echo $content; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("#<?php echo $unique_id; ?> .scroll-wrapper");
    if (!container) return;

    // Duplicate content for seamless looping
    container.innerHTML += container.innerHTML;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // adjust scroll speed

    function autoScroll() {
        scrollAmount -= scrollSpeed; // ✅ scroll right-to-left

        if (Math.abs(scrollAmount) >= container.scrollWidth / 2) {
            // Reset scroll to start when half of duplicated content is scrolled
            scrollAmount = 0;
        }

        container.scrollLeft = Math.abs(scrollAmount);
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
});
</script>

<style>
#<?php echo $unique_id; ?> .scroll-container::-webkit-scrollbar {
    display: none; /* hides scrollbar on Chrome/Safari */
}
#<?php echo $unique_id; ?> .scroll-container > * {
    min-width: 250px; /* adjust as needed for child blocks */
    flex-shrink: 0;
}
</style>