import React, {useEffect, useState} from 'react';
import NominationForm from './components/nominationForm/NominationForm';
import Dashboard from './components/dashboard/Dashboard';

import {fetchNominations, fetchEmailsNominated} from './restClient/fetchNominations';
import './app.scss'; 

function App() {
    const [nominationList, setNominationList] = useState([]);
    const [emailsNominated, setEmailsNominated] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
       fetchNominations().then(nominations => {
            setLoading(true);
            setNominationList(nominations);
            setLoading(false);
        });
        fetchEmailsNominated().then(emails => {
            setEmailsNominated(emails);
        })         
    }, []);

    // Helpers.
    const addNominationsToState = (newNomination) => setNominationList([...nominationList, newNomination]);
    const addEmailsToState = (newEmail) => setEmailsNominated([...emailsNominated, newEmail]);

    const fieldsDashboard = ['Email', 'Description', 'Score', 'Status', 'Date'];

    return (
        <div className="app-container">
          <NominationForm emails={emailsNominated} addNominationsToState={addNominationsToState} addEmailToState={addEmailsToState}/>
          {loading
              ? <div data-testid="loading">Loading...</div>
              : <Dashboard nominations={nominationList} fieldsDashboard={fieldsDashboard}/>
          }
          </div>
    );
}

export default App;
