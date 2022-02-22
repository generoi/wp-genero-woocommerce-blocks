<div class="<?php echo $block->classes; ?>">
    <?php setup_postdata($attributes->postId); ?>
    <?php wc_get_template_part('content', 'product'); ?>
    <?php wp_reset_postdata(); ?>
</div>
