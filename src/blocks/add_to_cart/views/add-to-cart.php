<div class="<?php echo $block->classes; ?>">
    <?php while ( have_posts() ) : the_post() ?>
        <?php woocommerce_template_single_price(); ?>
        <?php woocommerce_template_single_add_to_cart(); ?>
    <?php endwhile; ?>
</div>
