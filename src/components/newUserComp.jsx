import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import AlertComp from "./alertComp";

const NewUserComp = () => {
  const { register, errors, handleSubmit } = useForm();
  const [resp, setResp] = useState(null);

  const sendData = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        setResp(true);
        console.log(resp);
      })
      .catch((err) => {
        setResp(false);
        console.log(resp);
      });
  };
  const onSubmit = (data, e) => {
    sendData(data);
    e.target.reset();
  };
  return (
    <Fragment>
      <div className="container">
        <h1>New User</h1>
        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                ref={register({
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Sólo puede contener carácteres alfabéticos",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors?.nombre?.message}
              </span>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                ref={register({
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Sólo puede contener carácteres alfabéticos",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors?.apellido?.message}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="usuario@ejemplo.com"
              ref={register({
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.email?.message}
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
        <AlertComp state={resp} />
      </div>
    </Fragment>
  );
};

export default NewUserComp;
