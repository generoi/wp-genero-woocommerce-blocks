<div class="<?php echo $block->classes; ?>">
    <?php while ( have_posts() ) : the_post() ?>
        <?php woocommerce_show_product_images(); ?>
    <?php endwhile; ?>
</div>
