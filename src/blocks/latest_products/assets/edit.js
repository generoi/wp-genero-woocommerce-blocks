import { useBlockProps } from '@wordpress/block-editor';
import Placeholder from '../../../components/placeholder';

function BlockEdit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <Placeholder height={0.2}>
          Latest Products
        </Placeholder>
      </div>
    </>
  );
}

export default BlockEdit;
