import React from 'react';

import './nominationrow.scss'

const NominationRow = ({info}) => {
    console.log(info)
    return info.map(({id, email, description, score, status, dateReferred, key}) => {
        const average = (score.involvement + score.talent) / 2;
        return status !== 'REJECTED'
        ? <div className="nomination-row" id={id} key={key}>
            <p className="nomination-row__value email">{email}</p>
            <p className="nomination-row__value description">{description}</p>
            <p className="nomination-row__value score">{average}</p>
            <p className="nomination-row__value status">{status}</p>
            <p className="nomination-row__value date">{dateReferred}</p>
        </div>
        : null
    })
}

export default NominationRow;