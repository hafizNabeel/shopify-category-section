# Simple Ecommerce Header

A standalone WordPress plugin that provides one clean ecommerce header via the `[simple_ecommerce_header]` shortcode. It supports WooCommerce carts when WooCommerce is active and keeps working with an empty demo cart state when WooCommerce is unavailable.

## Install

1. Upload the `simple-ecommerce-header` folder to `wp-content/plugins/`.
2. Activate **Simple Ecommerce Header** in **Plugins**.
3. Visit **Settings → Simple Header** to customize the logo, layout, menu, icons, search, cart drawer, trust bar, and mobile header.

## Usage

Add this shortcode anywhere shortcodes are supported:

```text
[simple_ecommerce_header]
```

## Elementor

Drag a **Shortcode** widget into your page or template and paste `[simple_ecommerce_header]`.

## WooCommerce

When WooCommerce is active the header displays live cart count, subtotal, products, quantity controls, remove buttons, and product search.
