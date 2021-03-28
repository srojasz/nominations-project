import {fetchNominations} from '../fetchNominations';

describe("Get nominations list", () => {
  test("Get all nominations", async () => {
    const nominations = [
      {
        message: "Request message response",
        data: [
            {
                id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                email: "newcandidate@gmail.com",
                description: "newcandidate@gmail.com",
                score: {
                involvement: 8,
                talent: 10
            },
                referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                dateReferred: "2020-08-20T08:40:58.200Z",
                status: "PENDING"
            }
        ]
      },
    ];

    const expected = [
        {
            data: [
                {
                    id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                    email: "newcandidate@gmail.com",
                    description: "newcandidate@gmail.com",
                    score: {
                    involvement: 8,
                    talent: 10
                },
                    referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
                    dateReferred: "2020-08-20T08:40:58.200Z",
                    status: "PENDING"
                }
            ]
        }      
    ];

    const result = await fetchNominations(nominations);

    expect(result).toEqual(expected);
  });
});