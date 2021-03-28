import axios from "axios";
import {basePath, nominationsPath} from './restResourcesConstants';

export const fetchNominations = async () => {
    try {
        const {data} = await axios.get(basePath + nominationsPath);
        console.log(data, 'data')
        return data;
    } catch (err) {
        console.error(err);
        throw new Error(err, "Error!");
    }
}

export const fetchEmailsNominated = async () => {
    try {
        const {data} = await axios.get(basePath + nominationsPath);
        const emails = data.map(({data}) => data).map(element => element[0].email);
        return emails;
    } catch (err) {
        console.error(err);
        throw new Error(err, "Error!");
    }
}