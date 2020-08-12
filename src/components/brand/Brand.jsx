import React from 'react';

import { Box, Flex } from '..';

const size = '120px';

const blueBox = {
  width: size,
  height: '60px',
  background: '#204EF0',
};

const gradBox = {
  width: size,
  height: size,
  background:
    'radial-gradient(174.09% 353.7% at 121.14% 89.59%, #D3E0FA 0%, rgba(238, 224, 255, 0.28) 41.13%, rgba(225, 224, 255, 0.17) 100%)',
};

const blackBox = {
  width: size,
  height: '30px',
  background: '#000',
};

const dgreyBox = {
  width: size,
  height: '30px',
  background: '#696969',
};

const greyBox = {
  width: size,
  height: '30px',
  background: '#E7E7E7',
};

const lgreyBox = {
  width: size,
  height: '30px',
  background: '#F4F4F4',
};

const dgreen = {
  width: '30px',
  height: '30px',
  background: '#439D72',
};

const dred = {
  width: '30px',
  height: '30px',
  background: '#B44C3E',
};

const dyellow = {
  width: '30px',
  height: '30px',
  background: '#BE8D2D',
};

const dpurp = {
  width: '30px',
  height: '30px',
  background: '#372989',
};

const green = {
  width: '30px',
  height: '30px',
  background: '#A3D8BE',
};

const red = {
  width: '30px',
  height: '30px',
  background: '#ED9C91',
};

const yellow = {
  width: '30px',
  height: '30px',
  background: '#EDC069',
};

const purp = {
  width: '30px',
  height: '30px',
  background: '#9487E2',
};

const lgreen = {
  width: '30px',
  height: '30px',
  background: '#D0F3E2',
};

const lred = {
  width: '30px',
  height: '30px',
  background: '#FBE7E5',
};

const lyellow = {
  width: '30px',
  height: '30px',
  background: '#FAF3E5',
};

const lpurp = {
  width: '30px',
  height: '30px',
  background: '#DBD7F8',
};

export default function Brand() {
  return (
    <Flex>
      <div style={blueBox} />
      <div style={gradBox} />
      <div>
        <div style={blackBox} />
        <div style={dgreyBox} />
        <div style={greyBox} />
        <div style={lgreyBox} />
      </div>
      <div>
        <div style={dgreen} />
        <div style={dred} />
        <div style={dyellow} />
        <div style={dpurp} />
      </div>
      <div>
        <div style={green} />
        <div style={red} />
        <div style={yellow} />
        <div style={purp} />
      </div>
      <div>
        <div style={lgreen} />
        <div style={lred} />
        <div style={lyellow} />
        <div style={lpurp} />
      </div>
    </Flex>
  );
}
