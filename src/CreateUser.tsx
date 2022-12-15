import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Input, FormValues, ID } from "./types";

function CreateUser(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    await axios.post("http://localhost:3000/users", data);
    reset();
  };

  function InputComponent({ label, type, id, placeholder }: Input) {
    return (
      <div className="form-group col-md-3">
        <label>{label}</label>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          {...register(id as ID, { required: true})}
        />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <InputComponent
          label="Email"
          type="email"
          id="email"
          placeholder="Email"
        />
        <InputComponent label="Name" type="text" id="name" placeholder="Name" />
      </div>
      <div className="row">
        <InputComponent
          label="Adresse"
          type="text"
          id="adresse"
          placeholder="Adresse"
        />
        <InputComponent
          label="Birthdate"
          type="text"
          id="birthDate"
          placeholder="Birthdate"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit User
      </button>
    </form>
  );
}

export default CreateUser;
