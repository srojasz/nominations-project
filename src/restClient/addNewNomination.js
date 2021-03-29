import axios from 'axios';
import {basePath, membersPath} from './restResourcesConstants';

export const addNewNomination = async (dataToPost) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        };
        const {data} = await axios.post(basePath + membersPath, 
            dataToPost, {headers});
        return data;
    } catch (err) {
        console.error(err, 'Error');
        throw new Error(err, "Error!");
    }   
}