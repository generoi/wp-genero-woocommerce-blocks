<div class="<?php echo $block->classes; ?> wp-block-navigation-item">
    <a class="wp-block-genero-account-link__item wp-block-navigation-item__content" href="<?php echo wc_get_page_permalink('myaccount'); ?>">
        <span class="wp-block-navigation-item__label">
            <?php echo $block->attributes->label ?? ''; ?>
        </span>
    </a>
</div>
