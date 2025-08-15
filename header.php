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

		<?php 
			$featured_image = get_the_post_thumbnail_url(get_the_ID(), 'full') ?? '';
			$site_url = get_site_url();
			$site_title = get_bloginfo('name');
			$favicon_url = get_template_directory_uri() . '/assets/images/favicon.ico';
			$apple_touch_icon = get_template_directory_uri() . '/assets/images/apple-touch-icon.png';
			$favicon_32 = get_template_directory_uri() . '/assets/images/favicon-32x32.png';
			$page_title = get_the_title();
		?>

		<!-- Add Meta Data + Structured data here -->
		<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "Neighborhood",
		  "name": "<?php echo $site_title ?>",
		  "alternateName": "Wildernest River Neighborhood",
		  "description": "A boutique luxury neighborhood along the Boise River in Eagle, Idaho, offering fully custom homes in a scenic, river-adjacent setting.",
		  "url": "<?php echo $site_url; ?>",
		  "image": ["<?php echo $featured_image; ?>"],
		  "keywords": [
		    "custom homes Eagle Idaho",
		    "luxury custom homes Eagle ID",
		    "Boise River living",
		    "riverfront neighborhood",
		    "Eagle Idaho real estate"
		  ],
		  "geo": {
		    "@type": "GeoShape",
		    "polygon": "43.676 -116.337 43.675 -116.336 43.673 -116.325 43.675 -116.327 43.677 -116.333"
		  },
		  "hasMap": "https://maps.google.com/?q=Wildernest+River+Eagle+ID",
		  "containedInPlace": {
		    "@type": "City",
		    "name": "Eagle",
		    "address": {
		      "@type": "PostalAddress",
		      "addressLocality": "Eagle",
		      "addressRegion": "ID",
		      "postalCode": "83616",
		      "addressCountry": "US"
		    }
		  },
		  "isPartOf": {
		    "@type": "Place",
		    "name": "Boise Metropolitan Area"
		  },
		  "amenityFeature": [
		    {
		      "@type": "LocationFeatureSpecification",
		      "name": "Boise River access",
		      "value": true,
		      "description": "Immediate proximity to the Boise River and nearby greenbelt."
		    },
		    {
		      "@type": "LocationFeatureSpecification",
		      "name": "Trails & Greenbelt",
		      "value": true
		    },
		    {
		      "@type": "LocationFeatureSpecification",
		      "name": "Scenic Views",
		      "value": true,
		      "description": "Mature trees, water, and open-space vistas."
		    }
		  ],
		  "mainEntityOfPage": {
		    "@type": "WebPage",
		    "@id": "<?php echo $site_url; ?>"
		  }
		}
		</script>

		<!-- Primary SEO Meta Tags -->
		<meta name="description" content="Wildernest River is Eagle Idaho’s premier luxury neighborhood along the Boise River, offering fully custom homes in a scenic, river-adjacent setting. Build your dream home in one of Idaho's most beautiful locations.">
		<meta name="keywords" content="custom homes Eagle Idaho, luxury custom homes Eagle ID, Boise River living, riverfront neighborhood, Eagle Idaho real estate, Boise River custom homes, Idaho luxury real estate, riverfront custom home community">
		<meta name="author" content="Wildernest River">

		<!-- Open Graph / Facebook / LinkedIn -->
		<meta property="og:type" content="website">
		<meta property="og:title" content="Wildernest River | <?php echo $page_title; ?>">
		<meta property="og:description" content="Discover Wildernest River — a boutique luxury neighborhood offering fully customizable homes along the scenic Boise River in Eagle, Idaho.">
		<meta property="og:url" content="<?php echo $site_url; ?>">
		<meta property="og:image" content="<?php echo $featured_image; ?>">
		<meta property="og:image:alt" content="Luxury custom home along the Boise River in Eagle, Idaho">
		<meta property="og:site_name" content="<?php echo $site_title ?>">

		<!-- Twitter Card -->
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="<?php echo $page_title; ?>">
		<meta name="twitter:description" content="Build your custom dream home at Wildernest River — a luxury neighborhood along the Boise River in Eagle, Idaho.">
		<meta name="twitter:image" content="<?php echo $featured_image ?>">
		<meta name="twitter:image:alt" content="Luxury custom home along the Boise River in Eagle, Idaho">
		<!-- <meta name="twitter:site" content="@YourTwitterHandle"> -->

		<!-- Favicon & App Icons -->
		<link rel="icon" href="<?php echo $favicon_url; ?>" type="image/x-icon">
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $apple_touch_icon; ?>">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $favicon_32; ?>">
		<link rel="manifest" href="<?php echo get_site_url(); ?>/site.manifest">

		<!-- Mobile / Browser Colors -->
		<meta name="theme-color" content="#494D3D">
		<meta name="msapplication-TileColor" content="#494D3D">


		<!-- "sameAs": [
		    "https://www.instagram.com/yourbrand",
		    "https://www.facebook.com/yourbrand"
		  ] -->


		<!-- Include the roboto font and defer until after page load -->
		<link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
		<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"></noscript>

		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

		<?php
		wp_body_open();
		?>

		<header id="site-header" class="center-aligned max-width">

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