import { useBlockProps } from '@wordpress/block-editor';
import Placeholder from '../../../components/placeholder';

function BlockEdit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <Placeholder>
          Checkout Progress
        </Placeholder>
      </div>
    </>
  );
}

export default BlockEdit;
