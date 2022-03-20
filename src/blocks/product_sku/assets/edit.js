import { useBlockProps } from '@wordpress/block-editor';
import Placeholder from '../../../components/placeholder';

function BlockEdit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <Placeholder>
          Product SKU
        </Placeholder>
      </div>
    </>
  );
}

export default BlockEdit;
