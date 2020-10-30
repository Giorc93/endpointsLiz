import React, { Fragment, useState, useEffect } from "react";

const ComComp = () => {
  const [comArr, setComArr] = useState([]);

  const getComments = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comData = await data.json();

    setComArr(comData);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h2 className="display-4">Comentarios</h2>
            <p className="lead">
              Praesent nec metus euismod, laoreet augue faucibus, bibendum
              tortor. Donec accumsan blandit porttitor. Morbi tempor ultrices
              nunc non placerat. Duis neque risus, viverra et congue sed,
              laoreet eu libero. Aenean nibh magna, lacinia sed nisi id,
              volutpat tristique felis. Nulla eleifend augue in venenatis
              mollis. Vestibulum bibendum dolor quis rutrum finibus. Maecenas
              tristique, ligula eget finibus maximus, leo ante tempus nibh,
              vitae egestas est metus a lorem.
            </p>
          </div>
        </div>
        <div>
          {comArr.slice(0, 10).map((item, index) => {
            return (
              <div className="media mt-5" key={index}>
                <img
                  src="https://via.placeholder.com/150"
                  className="mr-3"
                  alt="..."
                />
                <div className="media-body">
                  <h5 className="mt-0">{item.email} </h5>
                  {item.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ComComp;
