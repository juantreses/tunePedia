import { useState } from "react";

export const useField = (str = "", errorSupport = false) => {
  const [value, setValue] = useState(str);
  const [error, setError] = useState(false);
  const onChange = (e) => {
    setError(false);
    setValue(e.target.value);
  };
  if (errorSupport) {
    return { value, onChange, error, setError, setValue };
  }
  return { value, onChange };
};
