'use client'
import React from 'react';
import { keyframes } from '@emotion/react';

// Define keyframes
const spin = keyframes`
  0%, 100% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
`;

const loaderStyle = {
  transform: 'rotateZ(45deg)',
  perspective: '1000px',
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  color: '#fff',
  position: 'relative', // Added to support pseudo-elements

  '&::before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'inherit',
    height: 'inherit',
    borderRadius: '50%',
    transform: 'rotateX(70deg)',
    animation: `${spin} 1s linear infinite`,
  },
  '&::after': {
    color: '#FF3D00',
    transform: 'rotateY(70deg)',
    animationDelay: '.4s',
  },
};

const loading = () => {
  return <div style={loaderStyle}></div>;
};

export default loading;
