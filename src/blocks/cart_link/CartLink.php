<?php

namespace GeneroWP\WooCommerceBlocks\blocks\cart_link;

use GeneroWP\WooCommerceBlocks\Block;
use WP_REST_Response;
use WP_REST_Server;

class CartLink extends Block
{
    const CART_COUNT_COOKIE = 'wp_user_cart_count';

    protected string $namespace = 'genero-woo-blocks/v1';

    public function compose(): void
    {
        parent::compose();

        if (!function_exists('WC')) {
            return;
        }

        // @todo clear cookies
        add_action('woocommerce_set_cart_cookies', [$this, 'onCartChange']);
        add_filter('woocommerce_is_rest_api_request', [$this, 'simulateFrontend']);
        add_action('rest_api_init', [$this, 'registerRoutes']);
    }

    public function registerRoutes()
    {
        register_rest_route($this->namespace, '/cart/count', [
            'methods' => WP_REST_Server::READABLE,
            'callback' =>  [$this, 'getCartCount'],
            'permission_callback' => '__return_true',
        ]);
    }


    public function onCartChange($set)
    {
        $currentCartCount = (int) ($_COOKIE[self::CART_COUNT_COOKIE] ?? 0);
        if ($set) {
            $cartCount = (int) \WC()->cart->get_cart_contents_count();

            if ($cartCount !== $currentCartCount) {
                \wc_setcookie(self::CART_COUNT_COOKIE, (string) $cartCount);
                $_COOKIE[self::CART_COUNT_COOKIE] = (string) $cartCount;
            }
        } elseif (!$set && $currentCartCount) {
            \wc_setcookie(self::CART_COUNT_COOKIE, 0, time() - YEAR_IN_SECONDS);
            unset($_COOKIE[self::CART_COUNT_COOKIE]);
        }
    }
    /**
     * @see https://github.com/woocommerce/woocommerce/issues/23584
     */
    public function simulateFrontend($isRestApiRequest)
    {
        if (empty($_SERVER['REQUEST_URI'])) {
            return $isRestApiRequest;
        }

        $restPrefix = trailingslashit(rest_get_url_prefix());
        $isRestNamespace = strpos($_SERVER['REQUEST_URI'], $restPrefix . $this->namespace) !== false;

        if ($isRestNamespace) {
            return false;
        }
        return $isRestApiRequest;
    }

    public function getCartCount()
    {
        $result['count'] = \WC()->cart->get_cart_contents_count();
        return new WP_REST_Response($result);
    }
}
