import * as React from 'react';
import './color.scss';

interface ColorResultType {
  colorName: string;
}

const ColorResult: React.FC<ColorResultType> = ({colorName}: ColorResultType) => {
  return (
    <div id="color" style={{backgroundColor: colorName}}/>
  )
}

export default ColorResult;