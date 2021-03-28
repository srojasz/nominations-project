import React from 'react';

import NominationRow from './NominationRow';
import './dashboard.scss';

const Dashboard = ({nominations, fieldsDashboard}) => {
   return ( 
       <div className="dashboard">
            <div className="dashboard__header">
                {fieldsDashboard.map((field, key) => {
                    return <p className={`dashboard__field ${field.toLowerCase()}`} key={key}>{field}</p>
                })}
            </div>
       {nominations.length !== 0 ?
           nominations.map(({data, key}) => {
                   return <NominationRow info={data} key={key} />
           }) : <p className="">There are not nominations to show!</p>
       }
       </div>
   )
}

export default Dashboard;