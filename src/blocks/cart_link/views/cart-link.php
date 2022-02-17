<div class="<?php echo $block->classes; ?> wp-block-navigation-item">
    <a class="wp-block-genero-cart-link__item wp-block-navigation-item__content" href="<?php echo wc_get_page_permalink('cart'); ?>">
        <span class="wp-block-navigation-item__label">
            <?php echo $block->attributes->label ?? ''; ?>
            <span data-cart-link-counter></span>
        </span>
    </a>
</div>
