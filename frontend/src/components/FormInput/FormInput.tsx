import React from "react";
import { Wrapper } from "./FormInput.style";

interface FormInputInterface {
  type: string;
  name: string;
  value: string | number;
  min?: number;
  errorMessage: string;
  required: boolean;
  handleChange: (e: React.FormEvent) => void;
}

const FormInput = ({
  type,
  name,
  value,
  errorMessage,
  handleChange,
  required,
  min,
}: FormInputInterface) => {
  return (
    <Wrapper>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        required={required}
        min={min}
      />
      {errorMessage !== "" && (
        <span className="alert alert-danger">{errorMessage}</span>
      )}
    </Wrapper>
  );
};

export default FormInput;
