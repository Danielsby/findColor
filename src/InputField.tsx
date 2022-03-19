import * as React from 'react';

interface InputFieldType {
  colorName: string;
  setColorName: any;
}

const InputField: React.FC<InputFieldType> = ({colorName, setColorName}: InputFieldType) => {
  return (
    <input value={colorName} onChange={(e) => setColorName(e.currentTarget.value)}/>
  )
}

export default InputField;