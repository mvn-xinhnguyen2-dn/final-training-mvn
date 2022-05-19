import { useState } from "react";

export default function useField(type) {
  const [value, setValue] = useState('');
  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValue(value)
  };
  const bind = {
    value,
    type,
    onChange: handleOnChange
  }
  return bind;
}
