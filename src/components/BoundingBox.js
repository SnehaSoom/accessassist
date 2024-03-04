import React from 'react';

const BoundingBox = ({ boundingBoxes }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Map through boundingBoxes and display bounding boxes */}
      {boundingBoxes && boundingBoxes.map((box, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            border: '2px solid #ff0000',
            boxSizing: 'border-box',
            left: `${box.left}px`,
            top: `${box.top}px`,
            width: `${box.width}px`,
            height: `${box.height}px`,
          }}
        />
      ))}
      {/* Additional content */}
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Your additional content here */}
      </div>
    </div>
  );
};

export default BoundingBox;
