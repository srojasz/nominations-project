import React from 'react';

import NominationRow from './NominationRow';
import './dashboard.scss';

const Dashboard = ({nominations, fieldsDashboard}) => {
   return nominations.length === 0 ? <p>No hay nominaciones que mostrar</p> : 
   <div className="dashboard">
        <div className="dashboard__header">
            {fieldsDashboard.map((field, key) => {
                return <p className={`dashboard__field ${field.toLowerCase()}`} key={key}>{field}</p>
            })}
         
        </div>
   {nominations.map(({data, key}) => {
        return <NominationRow info={data} key={key} />
   })
   }
   </div>
}

export default Dashboard;