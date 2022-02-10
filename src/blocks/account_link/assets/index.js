/** @wordpress */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'
import { createBlock } from '@wordpress/blocks';

import edit from './edit'
import metadata from './block.json';

registerBlockType(metadata.name, {
  ...metadata,
  title: __('WooCommerce Account Link'),
  description: __('A link to the users account page'),
  icon: 'image-flip-horizontal',
  edit,
  save() {
    return <InnerBlocks.Content />;
  },
  transforms: {
    from: [
      {
        type: 'block',
        blocks: ['core/navigation-link'],
        transform: () => createBlock('genero/account-link'),
      }
    ]
  }
});
