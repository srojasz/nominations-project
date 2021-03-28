import axios from 'axios';
import {postUrl} from './constants';

export const addNewNomination = async (dataToPost) => {
    const {data} = await axios.post(postUrl, 
        dataToPost);
        console.log(data, 'desde fetch')
    return data;    
}