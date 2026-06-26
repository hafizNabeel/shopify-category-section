<?php
/**
 * Plugin Name: Simple Ecommerce Header
 * Description: A clean, responsive WooCommerce-ready ecommerce header shortcode with search, account, wishlist, cart drawer, and trust bar.
 * Version: 1.0.0
 * Author: Simple Ecommerce Header
 * Text Domain: simple-ecommerce-header
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'SEH_VERSION', '1.0.0' );
define( 'SEH_FILE', __FILE__ );
define( 'SEH_PATH', plugin_dir_path( __FILE__ ) );
define( 'SEH_URL', plugin_dir_url( __FILE__ ) );

require_once SEH_PATH . 'includes/class-seh-plugin.php';
require_once SEH_PATH . 'includes/class-seh-settings.php';
require_once SEH_PATH . 'includes/class-seh-woocommerce.php';
require_once SEH_PATH . 'includes/class-seh-shortcode.php';

add_action( 'plugins_loaded', array( 'SEH_Plugin', 'instance' ) );
