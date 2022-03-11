import { useBlockProps } from '@wordpress/block-editor';
import Placeholder from '../../../components/placeholder';

function BlockEdit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <Placeholder height={0.35}>
          Account Content
        </Placeholder>
      </div>
    </>
  );
}

export default BlockEdit;
