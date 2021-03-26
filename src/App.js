import React, {useEffect, useState} from 'react';
import NominationForm from './components/nominationForm/NominationForm';
import Dashboard from './components/dashboard/Dashboard';

import {fetchNominations} from './utils/fetchNominations';
import './app.scss';

function App() {
    const [nominationList, setNominationList] = useState([]);

    useEffect(() => {
       fetchNominations().then(nominations => {
            setNominationList(nominations);
        })         
    }, []);

    const fieldsDashboard = ['Email', 'Description', 'Score', 'Status', 'Date'];

    return (
        <div className="app-container">
          <NominationForm />
          <Dashboard nominations={nominationList} fieldsDashboard={fieldsDashboard}/>
        </div>
    );
}

export default App;
