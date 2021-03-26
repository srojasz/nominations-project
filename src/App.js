import React, {useEffect, useState} from 'react';
import NominationForm from './components/nominationForm/NominationForm';

import {fetchNominations} from './utils/fetchNominations';

function App() {
    const [nominationList, setNominationList] = useState([]);

    useEffect(() => {
        console.log(fetchNominations().then((response) => console.log(response, 'desde app')))
         
    }, []);
  
    return (
    <div className="App">
      <NominationForm />
    </div>
  );
}

export default App;
