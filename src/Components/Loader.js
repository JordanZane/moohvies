import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  position: relative;
`;

const LoaderContent = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 50%;
  border: 4px solid white;
  border-bottom-color: transparent;
  animation: ${rotate} 1s infinite linear;
`;

const Loader = () => {
  return (
    <div>
      <LoaderContainer>
        <LoaderContent />
      </LoaderContainer>
    </div>
  );
};

export default Loader;
