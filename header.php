<?php

/**
 * 
 * 
 * The header for wildernest
 * 
 * @package HCSolutions
 * @subpackage wildernest
 * 
*/
?>

<!DOCTYPE html>

<html <?php language_attributes(); ?>>

	<head>

		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >

		<!-- Add Meta Data + Structured data here -->


		<!-- Include the roboto font -->
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

		<?php
		wp_body_open();
		?>

		<header id="site-header" class="center-aligned">

			<div class="sizing-container">

				<div class="header-inner">

					<div class="header-titles">

						<?php
							if (function_exists('the_custom_logo')) {
							    the_custom_logo();
							}
						?>

					</div><!-- .header-titles -->

					<button id="hamburger-icon" class="mobile-menu-hamburger mobile-only" aria-label="Open Mobile Menu">
						<span></span>
						<span></span>
						<span></span>
					</button>


					<div class="header-navigation-wrapper desktop-only">

						<?php
						if ( has_nav_menu( 'primary' ) ) {
							?>

								<nav class="primary-menu-wrapper" aria-label="<?php echo esc_attr_x( 'Horizontal', 'menu', 'twentytwenty' ); ?>">

									<ul class="primary-menu reset-list-style">

									<?php
									if ( has_nav_menu( 'primary' ) ) {

										wp_nav_menu(
											array(
												'container'  => '',
												'items_wrap' => '%3$s',
												'theme_location' => 'primary',
											)
										);

									} 
									?>

									</ul>

								</nav><!-- .primary-menu-wrapper -->

							<?php
						}

						?>

					</div><!-- .header-navigation-wrapper -->

				</div><!-- .header-inner -->

			</div>


		</header><!-- #site-header -->

		<?php
		// Output the menu modal.
		get_template_part( 'template-parts/mobile-menu' );