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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h2 className="display-4">Lista de Usuarios</h2>
          </div>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          {users.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
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
