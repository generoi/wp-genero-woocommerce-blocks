import { useBlockProps } from '@wordpress/block-editor';
import Placeholder from '../../../components/placeholder';

function BlockEdit({attributes, setAttributes}) {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <Placeholder
          height={0.25}
        >
          Add to cart
        </Placeholder>
      </div>
    </>
  );
}

export default BlockEdit;
