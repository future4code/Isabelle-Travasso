import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValue];
};

export default useInput;
