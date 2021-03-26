import React from 'react';

import './nominationrow.scss'

const NominationRow = ({info}) => {
    return info.map(({id, email, description, score, status, dateReferred}) => {
        const average = (score.involvement + score.talent) / 2;        
        return status !== 'REJECTED'
        ? <div className="nomination-row" id={id} key={id}>
            <p className="nomination-row__value">{email}</p>
            <p className="nomination-row__value">{description}</p>
            <p className="nomination-row__value">{average}</p>
            <p className="nomination-row__value">{status}</p>
            <p className="nomination-row__value">{dateReferred}</p>
        </div>
        : null
    })
}

export default NominationRow;