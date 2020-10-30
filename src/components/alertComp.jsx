import React, { Fragment } from "react";

const AlertComp = (props) => {
  if (props.state === true) {
    return (
      <Fragment>
        <div className="alert alert-success" role="alert">
          ¡Usuario creado correctamente!
        </div>
      </Fragment>
    );
  } else if (props.state === false) {
    return (
      <Fragment>
        <div className="alert alert-danger" role="alert">
          ¡Algo salió mal, intenta nuevamente!
        </div>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default AlertComp;
