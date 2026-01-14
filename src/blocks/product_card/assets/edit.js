import { useBlockProps } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { SelectControl } from '@wordpress/components';
//import { useState, useMemo, useEffect } from '@wordpress/element';

function useProductEntities() {
	const { products, isResolvingProducts, hasResolvedProducts } = useSelect(
		(select) => {
			const {
				getEntityRecords,
				isResolving,
				hasFinishedResolution,
			} = select(coreStore);

			const postsParameters = [
				'postType',
				'product',
				{
					order: 'asc',
					orderby: 'title',
					per_page: -1,
				},
			];

			return {
				products: getEntityRecords(...postsParameters) || null,
				isResolvingProducts: isResolving(
					'getEntityRecords',
					postsParameters
				),
				hasResolvedProducts: hasFinishedResolution(
					'getEntityRecords',
					postsParameters
				),
			};
		},
		[]
	);

	return {
		products,
		isResolvingProducts,
		hasResolvedProducts,
	};
}

function BlockEdit({attributes, setAttributes}) {
  const {
    postId,
  } = attributes;

  const blockProps = useBlockProps();

  const {
    products,
    hasResolvedProducts,
  } = useProductEntities();

  return (
    <>
      <div {...blockProps}>
        <SelectControl
          label="Product"
          hideLabelFromVision={ true }
          value={ postId || undefined }
          options={
            hasResolvedProducts
              ? [
                  {value: undefined, label: 'None'},
                  ...products.map((entity) => ({value: entity.id, label: entity.title.rendered}))
                ]
              : [{value: undefined, label: '...'}]
          }
          onChange={ (postId) => setAttributes({postId: parseInt(postId)}) }
        />
      </div>
    </>
  );
}

export default BlockEdit;
