import axios from "axios";

export const fetchNominations = async () => {
    const url = "http://localhost:3000/nominations";
    const {data} = await axios.get(url);

    return data;    
}