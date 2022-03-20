<?php
$post_id = get_the_ID();

if (get_post_type($post_id) !== 'product') {
    return;
}

$product = wc_get_product($post_id);
$posts_per_page = 4;

$related_products = $product->get_upsell_ids();

if (count($related_products) < $posts_per_page) {
    $related = array_filter(array_map('wc_get_product', wc_get_related_products($product->get_id(), ($posts_per_page - count($related_products)), $product->get_upsell_ids())), 'wc_products_array_filter_visible');

    foreach ($related as $item) {
        $related_products[] = $item->get_id();
    }
}
?>

<?php if (! empty($related_products)) : ?>
    <div class="<?php echo $block->classes; ?>">
        <?php woocommerce_product_loop_start(); ?>
        <?php foreach ($related_products as $related_product) : ?>
            <?php
            $post_object = get_post($related_product);
            setup_postdata($GLOBALS['post'] =& $post_object);
            wc_get_template_part('content', 'product');
            ?>
        <?php endforeach; ?>
        <?php woocommerce_product_loop_end(); ?>
    </div>
<?php endif; ?>

