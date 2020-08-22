import React from 'react';
import * as iconlib from './iconlib';

function getViewBox(x, y) {
  /*
  let x = 0;
  let y = 0;
  let lx = 0;
  let ly = 0;
  paths.forEach((path) => {
    let pathVals = path.d;
    console.log(pathVals);
    pathVals = pathVals.replace(/[A-Z]/g, '\n ').replace(/[-]/g, '');
    console.log(pathVals);
  });

  */
  return `0 0 ${x} ${y}`;
}

const default_size = 18;
const default_viewbox = 18;

const Icon = ({
  name,
  fill = '#204EF0',
  size = default_size,
  size_y = default_size,
  viewbox_x = default_viewbox,
  viewbox_y = default_viewbox,
}) => {
  const paths = iconlib[name];
  const viewbox = getViewBox(viewbox_x, viewbox_y); // Pass paths to this to finish the function.

  if (!paths) {
    throw new Error('No paths given to icon.');
  }

  // Use border for development:
  // style={{ border: '1px solid #EEE', borderRadius: '4px' }}
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size_y === default_size ? size : size_y}px`}
      viewBox={viewbox}
    >
      <title>{`icon-${name}`}</title>
      {paths.map((pathContent, i) => {
        return <path key={i} d={pathContent.d} fill={fill} />;
      })}
    </svg>
  );
};

/** @component */
export default Icon;
