<div class="<?php echo $block->classes; ?>">
    <?php
    if (!is_user_logged_in()) {
        echo do_shortcode('[woocommerce_my_account]');
    } else {
        do_action('woocommerce_account_content');
    }
    ?>
</div>
