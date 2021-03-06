import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
	RichText,
} from '@wordpress/block-editor';

function BlockEdit({attributes, setAttributes}) {
  const { label } = attributes;
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <a className="wp-block-genero-account-link__item wp-block-navigation-item__content">
          <RichText
            className="wp-block-genero-cart-account__item__label"
            value={ label }
            onChange={ (label) => setAttributes({label}) }
            placeholder={ __('Add label…') }
            withoutInteractiveFormatting
          />
        </a>
      </div>
    </>
  );
}

export default BlockEdit;
