import axios from "axios";
import {fetchUrl} from './constants';

export const fetchNominations = async () => {
    const {data} = await axios.get(fetchUrl);
    return data;    
}

export const fetchEmailsNominated = async () => {
    const {data} = await axios.get(fetchUrl);
    const emails = data.map(({data}) => data).map(element => element[0].email);
    return emails;
}