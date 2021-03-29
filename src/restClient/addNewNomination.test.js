import {addNewNomination} from './addNewNomination';
import axios from 'axios';
import {basePath, membersPath} from './restResourcesConstants';

it("add new member nomination", async () => {
    const memberToPost = {
        email : "prueba@prueba.es",
        description : "Great guy!",
        score : {
            involvement : 8,
            talent : 9
        }
    };

    const members = await axios.get(basePath + membersPath).then(({data}) => data);
    const result = await addNewNomination(memberToPost);
    expect(result.length).toEqual(members.length + 1)
});