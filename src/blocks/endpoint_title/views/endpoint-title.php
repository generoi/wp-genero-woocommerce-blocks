<?php
$endpoint       = WC()->query->get_current_endpoint();
$action         = isset($_GET['action'] ) ? sanitize_text_field(wp_unslash($_GET['action'])) : '';
$endpoint_title = WC()->query->get_endpoint_title($endpoint, $action);
$title          = $endpoint_title ? $endpoint_title : get_the_title();
?>

<div class="<?php echo $block->classes; ?>">
    <h1><?php echo $title; ?></h1>
</div>
