<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
class SEH_Plugin {
    private static $instance;
    public $settings; public $woocommerce; public $shortcode;
    public static function instance() { return self::$instance ?: ( self::$instance = new self() ); }
    private function __construct() {
        $this->settings = new SEH_Settings();
        $this->woocommerce = new SEH_WooCommerce();
        $this->shortcode = new SEH_Shortcode( $this->settings, $this->woocommerce );
        add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_assets' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_assets' ) );
    }
    public function register_frontend_assets() {
        wp_register_style( 'seh-frontend', SEH_URL . 'assets/css/frontend.css', array(), SEH_VERSION );
        wp_register_script( 'seh-frontend', SEH_URL . 'assets/js/frontend.js', array(), SEH_VERSION, true );
        wp_localize_script( 'seh-frontend', 'SEH_DATA', array(
            'ajaxUrl' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce( 'seh_cart_nonce' ),
            'isWoo' => class_exists( 'WooCommerce' ),
        ) );
    }
    public function admin_assets( $hook ) {
        if ( 'settings_page_simple-ecommerce-header' !== $hook ) { return; }
        wp_enqueue_media();
        wp_enqueue_style( 'seh-admin', SEH_URL . 'assets/css/admin.css', array(), SEH_VERSION );
        wp_enqueue_script( 'seh-admin', SEH_URL . 'assets/js/admin.js', array(), SEH_VERSION, true );
    }
}
