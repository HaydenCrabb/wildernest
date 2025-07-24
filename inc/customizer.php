<?php

function themeslug_sanitize_url( $url ) {
  return esc_url_raw( $url );
}

function wildernest_customize_register( $wp_customize ) {

  // Add Settings 
  // The actuall setting that will be stored in the database. 
  $wp_customize->add_setting( 'footer_site_logo' , array(
        'default' => get_template_directory_uri() . '/wp-content/uploads/2023/08/v2_6-e1693584761466.png',
        'transport'     => 'refresh',
        'height'        => 101,
        'width'        => 400,
   ) );
  $wp_customize->add_setting( 'footer_intro_line', array(
      'default'           => 'Let\'s talk luxury',
      'sanitize_callback' => 'sanitize_text_field',
      'transport'         => 'refresh',
  ) );
  $wp_customize->add_setting( 'footer_info_email', array(
      'default'           => 'info@wildernestriver.com',
      'sanitize_callback' => 'sanitize_text_field',
      'transport'         => 'refresh',
  ) );
  $wp_customize->add_setting( 'footer_info_address', array(
      'default'           => '850 Williamson Ln    |    Eagle, ID    |    83616',
      'sanitize_callback' => 'sanitize_text_field',
      'transport'         => 'refresh',
  ) );
  $wp_customize->add_setting( 'footer_info_phone', array(
      'default'           => '(208) 247-6300',
      'sanitize_callback' => 'sanitize_text_field',
      'transport'         => 'refresh',
  ) );


  // Add Sections
  // Sections are viewed in the customizer

  $wp_customize->add_section( 'more_footer_options' , array(
         'title'      => __( 'Footer Options', 'wildernest' ),
         'priority'   => 30,
     ) );


  // Add Controls
  // Controls allow the user to edit and change the setting. 
  $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'footer_site_logo_control', array(
          'label'             => __('Footer Site Logo', 'wildernest'),
          'section'           => 'more_footer_options',
          'settings'          => 'footer_site_logo',    
      )));
  $wp_customize->add_control( 'footer_intro_line', array(
      'label'       => __( 'Footer Intro Text', 'wildernest' ),
      'section'     => 'more_footer_options',
      'type'        => 'text',
  ) );
  $wp_customize->add_control( 'footer_info_email', array(
      'label'       => __( 'Footer info email', 'wildernest' ),
      'section'     => 'more_footer_options',
      'type'        => 'text',
  ) );
  $wp_customize->add_control( 'footer_info_address', array(
      'label'       => __( 'Footer info address', 'wildernest' ),
      'section'     => 'more_footer_options',
      'type'        => 'text',
  ) );
  $wp_customize->add_control( 'footer_info_phone', array(
      'label'       => __( 'Footer info Phone Number', 'wildernest' ),
      'section'     => 'more_footer_options',
      'type'        => 'text',
  ) );
}
add_action('customize_register', 'wildernest_customize_register');



?>