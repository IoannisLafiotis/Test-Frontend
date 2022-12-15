import React from "react";
import { IUser } from "./types";

function UserRow({ index, user }: { index: number; user: IUser }): JSX.Element {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.birthDate}</td>
      <td>{user.adresse}</td>
    </tr>
  );
}

export default UserRow;
