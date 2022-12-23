import { useState } from "react";

export const useInputs = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    nickName: "",
  });

  const onChangeInput = (event) => {
    const { value, name } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInput = () => {
    setInputs({
      userId: "",
      password: "",
      passwordCheck: "",
      nickName: "",
    });
  };

  return [inputs, onChangeInput, clearInput, setInputs];
};
