import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRow from "./UserRow";
import { IUser, FetchedUser } from "./types";

function Body({ fetchedUsers }: { fetchedUsers: FetchedUser[] }): JSX.Element {
  return (
    <tbody>
      {fetchedUsers.length
        ? fetchedUsers.map((object: IUser, i: number) => (
            <UserRow index={i} user={object} key={object.email} />
          ))
        : []}
    </tbody>
  );
}
function Table(): JSX.Element {
  const [users, setUsers] = useState<FetchedUser[] | []>([]);
  async function fetchData(): Promise<void> {
    try {
      const response: { data: { users: FetchedUser[] } } = await axios.get(
        "http://localhost:3000/users",
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return !users.length ? (
    <div>Loading...</div>
  ) : (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Birth date</th>
          <th scope="col">Adresse</th>
        </tr>
      </thead>
      <Body fetchedUsers={users} />
    </table>
  );
}
export default Table;
