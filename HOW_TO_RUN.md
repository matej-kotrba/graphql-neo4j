## How to run this project locally

1. Install bun, you can do so for example via `npm install -g bun`
2. Run docker script, just copy the code from the sh file and run it in the terminal
3. Open port http://localhost:7474, you will have to sign in there, both username and password are 'neo4j'
4. Then you will get prompted to update password, you can for example use the one used in the code 'developmentpassword'
5. Then connect to the DB instance, use bolt as protocol and fill the username and new password
6. For the GraphQL endpoint go to http://localhost:4000
7. To update DB with the data run the seed.ts script like so `bun run ./src/seed.ts`

You are all setup 🦭

### Data are not persisted throughout sessions
