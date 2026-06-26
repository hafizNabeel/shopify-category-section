<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
class SEH_WooCommerce {
    public function __construct() { add_action('wp_ajax_seh_update_cart',array($this,'ajax_update_cart')); add_action('wp_ajax_nopriv_seh_update_cart',array($this,'ajax_update_cart')); }
    public function active(){ return class_exists('WooCommerce') && function_exists('WC') && WC()->cart; }
    public function count(){ return $this->active()?WC()->cart->get_cart_contents_count():0; }
    public function subtotal(){ return $this->active()?wp_kses_post(WC()->cart->get_cart_subtotal()):'$0.00'; }
    public function account_url(){ return $this->active()?wc_get_page_permalink('myaccount'):wp_login_url(); }
    public function cart_url(){ return $this->active()?wc_get_cart_url():'#'; }
    public function checkout_url(){ return $this->active()?wc_get_checkout_url():'#'; }
    public function search_url(){ return home_url('/'); }
    public function cart_items(){ return $this->active()?WC()->cart->get_cart():array(); }
    public function ajax_update_cart(){ check_ajax_referer('seh_cart_nonce','nonce'); if(!$this->active()) wp_send_json_success($this->fragments()); $key=sanitize_text_field($_POST['cart_key']??''); $qty=max(0,absint($_POST['quantity']??0)); $remove=!empty($_POST['remove']); if($key && isset(WC()->cart->cart_contents[$key])) { $remove ? WC()->cart->remove_cart_item($key) : WC()->cart->set_quantity($key,$qty,true); WC()->cart->calculate_totals(); } wp_send_json_success($this->fragments()); }
    public function fragments(){ ob_start(); $settings=SEH_Plugin::instance()->settings; $woo=$this; include SEH_PATH.'templates/cart-drawer.php'; $drawer=ob_get_clean(); return array('count'=>$this->count(),'subtotal'=>$this->subtotal(),'drawer'=>$drawer); }
}
