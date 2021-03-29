import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Dashboard from './components/dashboard/Dashboard';
import NominationForm from './components/nominationForm/NominationForm';
import TextInput from './components/nominationForm/inputs/TextInput';

afterEach(cleanup);

describe("Render components", () => {
  it("renders NominationForm component", () => {
      const emails = ['test@email.com', 'newtest@hotmail.com'];
    render(
      <NominationForm emails={emails}/>
    );
  });

  it("renders Dashboard component", () => {
      const nominations = [
          {
            "message": "Request message response",
            "data": [
                {
                    "id": "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                    "email": "newcandidate@gmail.com",
                    "description": "newcandidate@gmail.com",
                    "score": {
                    "involvement": 8,
                    "talent": 10
                },
                    "referrer": "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                    "dateReferred": "2020-08-20T08:40:58.200Z",
                    "status": "PENDING"
                }
            ]
          },
          {
            "message": "Request message response",
            "data": [
                {
                    "id": "8c8ff55c-11f5-4b3c-8596-3d9831a7usiso9",
                    "email": "secondcandidate@gmail.com",
                    "description": "A great person who work with",
                    "score": {
                    "involvement": 9,
                    "talent": 9
                },
                    "referrer": "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                    "dateReferred": "2020-08-20T08:40:58.200Z",
                    "status": "PENDING"
                }
            ]
          },
      ];

      const fieldsDashboard = ['Email', 'Description', 'Score', 'Status', 'Date'];
        render(
          <Dashboard nominations={nominations} fieldsDashboard={fieldsDashboard}/>
        );
  });

  it("renders TextInput component", () => {
      const dataForm = {};
      const errors = {
          email: 'probando@test.com'
      }
      const onChangeFormData = jest.fn();
      render(
          <TextInput
            element="input"
            dataform={dataForm}
            error={errors.email}
            onChangeFormData={onChangeFormData}
            name="email"
            placeholder="Email"
            type="text"
          />
      );
  });
});