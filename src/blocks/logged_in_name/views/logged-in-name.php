<?php if (is_user_logged_in()) : ?>
    <div class="<?php echo $block->classes; ?>">
        <p><?php echo WC()->customer->get_display_name(); ?></p>
    </div>
<?php endif; ?>
