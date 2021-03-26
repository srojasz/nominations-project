import axios from "axios";

export const fetchNominations = async () => {
    const url = "/nominations";
    const response = await axios.get(url);
    console.log(response);

    return response;
    
}