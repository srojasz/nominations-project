import React, { useState } from "react";

import RangeInput from "./inputs/RangeInput";
import Input from './inputs/TextInput';
import SubmitInput from "./inputs/SubmitInput";

import "./nominationForm.scss";

import { printErrors } from "../../utils/formLogic";

const NominationForm = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    desc: "",
    involvement: 5,
    talent: 5,
  });

  let [error, setErrors] = useState({
    email: "",
    desc: "",
  });

  const onChangeFormData = (ev) => {
    const { value } = ev.target;
    const inputName = ev.target.name;
    setDataForm(
        { ...dataForm,
            [inputName]: value
        }
    );
    setErrors({});
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errors = printErrors(dataForm);
    setErrors(errors); 

    //Crear función para comprobar si el email ya ha sido referenciado.
    const dataToPost = {
      email: dataForm.email,
      description: dataForm.desc,
      score: {
        involvement: parseInt(dataForm.involvement),
        talent: parseInt(dataForm.talent),
      },
    };
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        element="input"
        dataform={dataForm}
        error={error.email}
        onChangeFormData={onChangeFormData}
        name="email"
        placeholder="Email"
        type="text"
      />
      <Input
        element="textarea"
        dataform={dataForm}
        error={error.desc}
        onChangeFormData={onChangeFormData}
        name="desc"
        placeholder="Descripción"
        type=""
      />
      <RangeInput
        dataForm={dataForm}
        label="involvement"
        min="0"
        max="10"
        onChangeFormData={onChangeFormData}
      />
      <RangeInput
        dataForm={dataForm}
        label="talent"
        min="0"
        max="10"
        onChangeFormData={onChangeFormData}
      />
      <SubmitInput value="Send"/>
    </form>
  );
}

export default NominationForm;
