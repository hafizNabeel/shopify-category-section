<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
class SEH_Shortcode {
    private $settings; private $woo;
    public function __construct($settings,$woo){ $this->settings=$settings; $this->woo=$woo; add_shortcode('simple_ecommerce_header',array($this,'render')); }
    public function render(){ wp_enqueue_style('seh-frontend'); wp_enqueue_script('seh-frontend'); $settings=$this->settings; $woo=$this->woo; ob_start(); include SEH_PATH.'templates/header-simple.php'; return ob_get_clean(); }
}

if(!class_exists('SEH_Walker_Fallback')){ class SEH_Walker_Fallback{ public static function menu(){ echo '<ul class="seh-menu"><li><a href="'.esc_url(home_url('/')).'">'.esc_html__('Home','simple-ecommerce-header').'</a></li><li><a href="'.esc_url(home_url('/shop/')).'">'.esc_html__('Shop','simple-ecommerce-header').'</a></li><li><a href="'.esc_url(home_url('/contact/')).'">'.esc_html__('Contact','simple-ecommerce-header').'</a></li></ul>'; } } }
