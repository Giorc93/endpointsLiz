import React, { Fragment } from "react";

const ErrorComp = () => {
  return (
    <Fragment>
      <div class="alert alert-danger" role="alert">
        ¡La ruta que buscas no existe!
      </div>
    </Fragment>
  );
};

export default ErrorComp;
