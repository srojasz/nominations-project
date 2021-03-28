import React, { useState } from "react";

import RangeInput from "./inputs/RangeInput";
import TextInput from './inputs/TextInput';
import SubmitInput from "./inputs/SubmitInput";

import "./nominationForm.scss";

import { printErrors } from "../../utils/formLogic";
import { addNewNomination } from "../../utils/addNewNomination";

const NominationForm = ({emails}) => {
  const [dataForm, setDataForm] = useState({
    email: "",
    desc: "",
    involvement: 5,
    talent: 5,
  });

  const [errors, setErrors] = useState({
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

  console.log(errors)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errors = printErrors(dataForm);
    setErrors(errors);
    if (!emails.find(email => email === dataForm.email)) {
        const dataToPost = {
            email : dataForm.email,
            description : dataForm.description,
            score : {
                involvement : parseInt(dataForm.involvement),
                talent : parseInt(dataForm.talent)
            }
        }
     
        // addNewNomination(dataToPost).then(newNomination => {
        //     console.log(newNomination, 'new Nomination objetc')
        // })
        
    } else {
        alert("No podemos procesar tu petició porque el email ya ha sido referenciado. Por favor, revisa tu email");
        // Send email to warn user and referred that emails has alredy been nominated.
    }   
  }
 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput
        element="input"
        dataform={dataForm}
        error={errors.email}
        onChangeFormData={onChangeFormData}
        name="email"
        placeholder="Email"
        type="text"
      />
      <TextInput
        element="textarea"
        dataform={dataForm}
        error={errors.desc}
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
