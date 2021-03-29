import axios from 'axios';
import {basePath, membersPath} from './restResourcesConstants';

export const addNewNomination = async (dataToPost) => {
    const {data} = await axios.post(basePath + membersPath, 
        dataToPost);
    return data;    
}