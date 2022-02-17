<div class="<?php echo $block->classes; ?>">
    <?php while ( have_posts() ) : the_post() ?>
        <?php woocommerce_output_all_notices(); ?>
    <?php endwhile; ?>
</div>
