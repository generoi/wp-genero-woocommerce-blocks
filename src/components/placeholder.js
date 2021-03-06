import { SVG, Path } from '@wordpress/primitives';

const overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

function PlaceholderIllustration({
  height = 1,
  isOverlay = false,
}) {

  return (
    <div style={ {
      border: 'dashed 1px currentColor',
      opacity: 0.4,
      ...(isOverlay ? overlayStyles : {})
    } }>
      <SVG
        className="components-placeholder__illustration"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 60 ${60 * height}`}
        preserveAspectRatio="none"
        style={ isOverlay ? {
          height: '100%',
          width: '100%',
        } : {} }
      >
        <Path
          vectorEffect="non-scaling-stroke"
          d={`M60 ${60 * height} 0 0`}
          style={{
            stroke: 'currentColor',
            strokeDasharray: 3,
          }}
        />
      </SVG>
    </div>
  );
}

export default function Placeholder({height, children}) {
  const isOverlay = (!height && children) || (height && !children);

  return (
    <div style={{position: 'relative', width: '100%'}}>
      <PlaceholderIllustration
        height={ height }
        isOverlay={ isOverlay }
      />
      <div style={ !isOverlay ? overlayStyles : {} }>
        { children }
      </div>
    </div>
  );
}
