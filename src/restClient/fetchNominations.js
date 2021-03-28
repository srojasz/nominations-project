import axios from "axios";
import {basePath, nominationsPath} from './restResourcesConstants';

export const fetchNominations = async () => {
    const {data} = await axios.get(basePath + nominationsPath);
    return data;    
}

export const fetchEmailsNominated = async () => {
    const {data} = await axios.get(basePath + nominationsPath);
    const emails = data.map(({data}) => data).map(element => element[0].email);
    return emails;
}