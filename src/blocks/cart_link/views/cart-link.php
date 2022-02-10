<div class="<?php echo $block->classes; ?>">
    <a class="wp-block-genero-cart-link__item" href="<?php echo wc_get_page_permalink('cart'); ?>">
        <?php echo $block->attributes->label ?? ''; ?>
        <span data-cart-link-counter></span>
    </a>
</div>
