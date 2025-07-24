<?php
/**
 * Displays the menu on mobile
 *
 * @package HCSolutions
 * @subpackage Wildernest
 */

?>

<div class="menu-modal">

	<div class="menu-modal-inner">

		<nav class="mobile-nav-menu" aria-label="Mobile menu displaying menu items for Wildernest Site">

			<ul class="mobile-menu-list-wrapper">
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

		</nav>

	</div><!-- .menu-modal-inner -->

</div><!-- .menu-modal -->