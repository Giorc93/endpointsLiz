import React, { Fragment, useState, useEffect } from "react";

const UsersComp = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await data.json();

    setUsers(usersData);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="container mt-4 mb-4">
          <h2 className="display-4">Lista de Usuarios</h2>
        </div>

        <table className="table table-light table-hover">
          <thead className="nback">
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Página Web</th>
            </tr>
          </thead>
          {users.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </Fragment>
  );
};
export default UsersComp;

/*
<ul>
        {users.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - {item.email}
            </li>
          );
        })}
      </ul>
      */
