import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComComp from "./comComp";

const HomeComp = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const imgData = await data.json();

    setImages(imgData);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron mt-5">
          <h1 className="display-4">¡Bienvenido a tu Agenda!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            lacinia hendrerit lectus. Nunc suscipit facilisis felis sed maximus.
            Integer consectetur nisl eu urna egestas vestibulum in et ante.
            Donec a felis mi. Nam in varius lorem, et lobortis erat. Phasellus
            euismod mauris eget est venenatis interdum. Pellentesque in blandit
            odio, sed euismod lectus. Nunc sagittis sagittis neque ut
            consectetur. Morbi semper molestie urna eu mattis. Nullam non
            molestie orci. Suspendisse pretium tristique varius. Praesent eget
            eros vitae sem dictum varius auctor sit amet lorem. Nunc cursus
            facilisis magna. Suspendisse tempus, tellus sed accumsan
            sollicitudin, ligula metus dapibus erat, nec elementum justo ex eu
            enim.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeComp;
