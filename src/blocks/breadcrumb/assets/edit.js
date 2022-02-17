import { useBlockProps } from '@wordpress/block-editor';
import Placeholder from '../../../components/placeholder';

function BlockEdit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <Placeholder>
          Breadcrumb
        </Placeholder>
      </div>
    </>
  );
}

export default BlockEdit;
