import { Client } from "pg";

//  Hardcoded local db connection information in the script.
//  Hence, the script only populates local db
const SQL = `CREATE TABLE IF NOT EXISTS usernames(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

const main = async () => {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://gatere:gK1ny@njui.10@localhost:5432/top_users",
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
};

main();
