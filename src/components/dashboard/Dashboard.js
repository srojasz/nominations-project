import React from 'react';

import NominationRow from './NominationRow';
import './dashboard.scss';

const Dashboard = ({nominations, fieldsDashboard}) => {
   return ( 
       <div className="dashboard">
            <div className="dashboard__header">
                {fieldsDashboard.map((field) => {
                    return <p key={field} className={`dashboard__field ${field.toLowerCase()}`}>{field}</p>
                })}
            </div>
       {nominations.length !== 0 ?
           nominations.map(({data}, index) => {
                   return <NominationRow info={data} key={index} />
           }) : <p className="">There are not nominations to show!</p>
       }
       </div>
   )
}

export default Dashboard;