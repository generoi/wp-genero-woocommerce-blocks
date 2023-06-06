<?php
$query = new WP_Query([
    'post_type' => 'product',
    'post_status' => 'published',
    'meta_key' => 'total_sales',
    'orderby' => 'meta_value_num',
    'posts_per_page' => 3,
]);
?>

<?php if ($query->have_posts()) : ?>
    <div class="<?php echo $block->classes; ?>">
        <?php woocommerce_product_loop_start(); ?>

        <?php while ($query->have_posts()) : ?>
            <?php
            $query->the_post();
            do_action('woocommerce_shop_loop');
            wc_get_template_part('content', 'product');
            ?>
        <?php endwhile; ?>

        <?php woocommerce_product_loop_end(); ?>
    </div>
<?php endif; ?>

<?php
wp_reset_query();
?>
