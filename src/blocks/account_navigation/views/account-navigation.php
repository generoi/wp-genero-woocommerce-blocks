<div class="<?php echo $block->classes; ?>">
    <?php
    if (is_user_logged_in()) {
        do_action('woocommerce_account_navigation');
    }
    ?>
</div>
