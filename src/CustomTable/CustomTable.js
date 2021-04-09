import React from "react";

export default function CustomTable({data, headers}) {
  return(
    <table cellPadding={5} cellSpacing={5}>
      <thead>
        <tr>
          {headers.map(({name, title, sortable}) => (
            <th key={name}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
      </tbody>
    </table>
  )
}