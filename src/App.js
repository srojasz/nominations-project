import React, {useEffect, useState} from 'react';
import NominationForm from './components/nominationForm/NominationForm';
import Dashboard from './components/dashboard/Dashboard';

import {fetchNominations, fetchEmailsNominated} from './utils/fetchNominations';
import './app.scss';

function App() {
    const [nominationList, setNominationList] = useState([]);
    const [emailsNominated, setEmailsNominated] = useState([]);

    useEffect(() => {
       fetchNominations().then(nominations => {
            setNominationList(nominations);
        });
        fetchEmailsNominated().then(emails => {
            setEmailsNominated(emails);
        })         
    }, []);

    const fieldsDashboard = ['Email', 'Description', 'Score', 'Status', 'Date'];

    return (
        <div className="app-container">
          <NominationForm emails={emailsNominated}/>
          <Dashboard nominations={nominationList} fieldsDashboard={fieldsDashboard}/>
        </div>
    );
}

export default App;
