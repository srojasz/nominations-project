# Talent nomination system

My task has been implement the frontend part of the system that allows Nova members to nominate peers, and allows Nova admins to list all the non-rejected nominations.

## Requirements

- Nova members can nominate their peers by providing their email, a short explanation on why the person is a good fit, and a score between 0 and 10 of: the candidate’s involvement with other communities, and overall talent.

- Nominations of emails that are already in the network are not accepted nor stored by the system. All the rest of the nominations of candidates are stored.

- Stored nominations that have less than 8 in overall talent are automatically rejected and trigger an email to both the referrer and the candidate explaining the rejection.

- An admin can list all the non-rejected nominations, including who is the referring Nova member.

## How to start the project

1. Clone the repository
2. `npm run server` -> This script executes json server, the tool I have chosen to simulate an API Rest.
3. `npm run start`
4. `npm run test`

## More information
Some parts of this project have been tested with React Testing Library and Jest.

Made with ❤️ by Sara Rojas