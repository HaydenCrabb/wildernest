<?php

/**
 * 
 * 
 * The footer for wildernest
 * 
 * @package HCSolutions
 * @subpackage wildernest
 * 
*/
?>

		<footer id="site-footer">

			<div class="footer-inner max-width center-aligned">
				<div class="smaller-inner-footer">

					<div class="footer-columns">
						<div id="footer-logo-column" class="wp-block-column">
							<div class="footer-logo-inner">
								<img decoding="async" src="<?php echo get_theme_mod('footer_site_logo'); ?>" alt="" class="wp-image-64 footer_site_logo" srcset="<?php echo get_theme_mod('footer_site_logo'); ?> 300w, <?php echo get_theme_mod('footer_site_logo'); ?> 768w, <?php echo get_theme_mod('footer_site_logo'); ?> 800w" sizes="(max-width: 300px) 100vw, 300px">
							</div>
						</div>
						<div id="footer-info-column" class="wp-block-column">
							<div class="info-column-inner">
								<p id="footer-info-line"><?php echo get_theme_mod('footer_intro_line') ?></p>
								<p id="footer-info-email"><?php echo get_theme_mod('footer_info_email') ?></p>
								<p id="footer-info-address"><?php echo get_theme_mod('footer_info_address') ?></p>
								<p id="footer-info-phone"><?php echo get_theme_mod('footer_info_phone') ?></p>
							</div>
						</div>
					</div>
					<div class="footer-nav-alignment">
						<div class="reset-list-style footer-nav">
							<?php
		                                    
		                        wp_nav_menu( array(
		                            'theme_location'  => 'footer',
		                            'container' => false,
		                            'items_wrap' => '%3$s',
		                            'walker' => new Wildernest_Footer_Menu_Walker()
		                        ) );
		                    ?>
		                </div>
		            </div>
	            </div>
			</div>

		</footer><!-- #site-footer -->

		<!-- JQuery CDNs -->
		<script src='https://code.jquery.com/jquery-3.7.0.min.js' integrity='sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=' crossorigin='anonymous'></script>
		<script src="https://code.jquery.com/jquery-migrate-3.4.1.min.js" integrity="sha256-UnTxHm+zKuDPLfufgEMnKGXDl6fEIjtM+n1Q6lL73ok=" crossorigin="anonymous"></script>

		<!-- GSAP animation CDNs -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>	

		<script src="<?php echo get_template_directory_uri()?>/assets/js/script.js?v=<?php echo time(); ?>"></script>

		<?php wp_footer(); ?>

	</body>
</html>