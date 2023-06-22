<?php
global $product;
if (! is_object($product)) {
    $product = wc_get_product(get_the_ID());
}
?>

<div class="<?php echo $block->classes; ?>">
    <?php if (wc_product_sku_enabled() && ( $product->get_sku() || $product->is_type('variable') )) : ?>
        <span class="sku_wrapper">
            <?php esc_html_e('SKU:', 'woocommerce'); ?>
            <span class="sku"><?php echo ( $sku = $product->get_sku() ) ? $sku : esc_html__('N/A', 'woocommerce'); ?></span>
        </span>
    <?php endif; ?>
</div>
