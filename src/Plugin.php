<?php
namespace GeneroWP\WooCommerceBlocks;

use Illuminate\Support\Str;
use ReflectionClass;

class Plugin
{
    protected static $instance;

    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    public function __construct()
    {
        add_action('plugins_loaded', [$this, 'init']);
        add_filter('block_categories_all', [$this, 'registerBlockCategory']);
    }

    public function init()
    {
        foreach (glob(__DIR__ . '/blocks/*/*.php') as $file) {
            $composer = __NAMESPACE__ . str_replace(
                ['/', '.php'],
                ['\\', ''],
                Str::after($file, __DIR__)
            );

            if (is_subclass_of($composer, Block::class) && ! (new ReflectionClass($composer))->isAbstract()) {
                (new $composer())->compose();
            }
        }
    }

    public function registerBlockCategory(array $categories): array
    {
        $categories[] = [
            'slug' => 'woocommerce-genero',
            'title' => __('WooCommerce (Genero)'),
            'icon' => null,
        ];
        return $categories;
    }

    public function loadTextdomain(): void
    {
        load_plugin_textdomain(
            'wp-genero-woocommerce-blocks',
            false,
            dirname(plugin_basename(__FILE__)) . '/languages'
        );

    }
}
