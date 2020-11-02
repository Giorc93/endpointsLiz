import React, { Fragment, useState, useEffect } from "react";

const ComComp = () => {
  const [comArr, setComArr] = useState([]);

  const getComments = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2");
    const comData = await data.json();

    console.log(comData);
    setComArr(comData.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="container mt-4 mb-2 ">
          <h2 className="display-4">Comentarios</h2>
          <p className="lead">
            Praesent nec metus euismod, laoreet augue faucibus, bibendum tortor.
            Donec accumsan blandit porttitor. Morbi tempor ultrices nunc non
            placerat. Duis neque risus, viverra et congue sed, laoreet eu
            libero. Aenean nibh magna, lacinia sed nisi id, volutpat tristique
            felis. Nulla eleifend augue in venenatis mollis. Vestibulum bibendum
            dolor quis rutrum finibus. Maecenas tristique, ligula eget finibus
            maximus, leo ante tempus nibh, vitae egestas est metus a lorem.
          </p>
        </div>

        <div>
          {comArr.slice(0, 6).map((item, index) => {
            return (
              <div className="media mt-5 rounded-pill" key={index}>
                <img
                  className="rounded-circle mr-3 ml-1"
                  src={item.avatar}
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-2 mb-4 mt-0">
                    {item.first_name} {item.last_name}
                  </h5>
                  Vivamus et lacus vestibulum enim rutrum vestibulum eget sed
                  enim. Vivamus nec urna pulvinar justo porttitor vestibulum.
                  Quisque id dui aliquam, tristique mauris non, volutpat dolor.
                  Curabitur quis fringilla tortor. Sed et dui quis leo feugiat
                  tincidunt ut ac nibh.
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
