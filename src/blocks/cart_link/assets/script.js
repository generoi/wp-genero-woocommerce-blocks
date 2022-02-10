const CART_COOKIE = 'wp_user_cart_count';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

  return match ? match[2] : null;
}

function ready(fn) {
  if (document.readyState !== 'loading'){
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn);
}

function getCartCount() {
  return parseInt(getCookie(CART_COOKIE) || 0);
}

function refreshCartCounter() {
  const cartCount = getCartCount();
  for (const el of document.querySelectorAll('[data-cart-link-counter]')) {
    el.textContent = cartCount ? cartCount : '0';
  }
}

ready(() => refreshCartCounter());
