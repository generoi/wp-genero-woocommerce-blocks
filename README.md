# wp-genero-woocommerce-blocks

> WooCommerce blocks for the gutenberg editor

## Requirements

_Does the plugin have any requirements?_

## Features

_A list of features_.

## API

_Any hooks exposed?_

```php
// Load recaptcha script.
add_filter('gravityforms-timber/options', function ($options) {
  $options['recaptcha'] = true;
});
```

## Development

Install dependencies

    composer install
    npm install

Run the tests

    npm run test

Build assets

    # Minified assets which are to be committed to git
    npm run production

    # Watch for changes and re-compile while developing the plugin
    npm run watch

## Translations

    npm run translate
