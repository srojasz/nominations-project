import React, { useState } from "react";

import RangeInput from "./inputs/RangeInput";
import TextInput from './inputs/TextInput';
import SubmitInput from "./inputs/SubmitInput";

import "./nominationForm.scss";

import { printErrors } from "../../businessLogic/nominationFormLogic";
import { addNewNomination } from "../../restClient/addNewNomination";

const NominationForm = ({emails, addNominationsToState, addEmailToState}) => {
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

  
  const [nominationCompleted, setNominationCompleted] = useState(false);

  const onChangeFormData = (ev) => {
    const { value } = ev.target;
    const inputName = ev.target.name;
    setDataForm(
        { ...dataForm,
            [inputName]: value
        }
    );
    setErrors({});
    setNominationCompleted(false); 
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errors = printErrors(dataForm);
    setErrors(errors);

    if (errors.email === '' && errors.desc === '') {
        if (!emails.find(email => email === dataForm.email)) {
            const dataToPost = {
                email : dataForm.email,
                description : dataForm.desc,
                score : {
                    involvement : parseInt(dataForm.involvement),
                    talent : parseInt(dataForm.talent)
                }
            }
            addNewNomination(dataToPost).then(newMembers => {
                 console.log(newMembers, 'new Members')
            });

            const newNomination = {
                message: "Request message response",
                data: [
                    {
                      id: "8ssff55c-11f5-4b3c-8596-3d9831a8934d",
                      email: dataForm.email,
                      description: dataForm.desc,
                      score: {
                        involvement: parseInt(dataForm.involvement),
                        talent: parseInt(dataForm.talent)
                      },
                      referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                      dateReferred: "2021-03-20T08:40:58.200Z",
                      status: dataForm.talent >= 8 ? 'PENDING' : 'REJECTED'
                    }
                  ]
                };

                // Update the state.
                addNominationsToState(newNomination);
                addEmailToState(dataForm.email);
                setNominationCompleted(true);        
        } else {
            alert("We can't add your nomination, that email has alredy been nominated.");
        }
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
        type="text"
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
      {nominationCompleted ? <p className="nomination-completed">Your nomination has been sent!</p> : null}
    </form>
  );
}

export default NominationForm;
