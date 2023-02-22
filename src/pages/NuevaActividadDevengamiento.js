import { Form, useActionData } from "react-router-dom";
import FormularioNuevaActividad from "../components/FormularioNuevaActividad";
import Swal from "sweetalert2";
import Error from "../components/Error";

const token = sessionStorage.getItem("token");

export async function action({ request }) {
  console.log(request);
  const storedData = localStorage.getItem("datoSeleccionado");

  const idUniversidad = localStorage.getItem("idUniversidad");
  const idCarrera = localStorage.getItem("idCarrera");
  const nombreOtraInstitucion = localStorage.getItem("nombreOtraInstitucion");
  const idFacultad = localStorage.getItem("idFacultad");
  const detalleDocente = localStorage.getItem("detalleDocente");
  const idPlan = sessionStorage.getItem("idPlan");
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  datos.idSubTipoActividad = storedData;
  datos.idUniversidad = idUniversidad;
  datos.idCarrera = idCarrera;
  datos.nombreOtraInstitucion = nombreOtraInstitucion;
  datos.idFacultad = idFacultad;
  datos.detalleDocente = detalleDocente;
  datos.idPlan = idPlan;

  //Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  //Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  try {
    const respuesta = await fetch(import.meta.env.VITE_API_AGREGAR_ACTIVIDAD, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });
    const actividades = await respuesta.json();

    if (respuesta.ok) {
      await Swal.fire({
        title: "Enviado",
        text: "El formulario ha sido enviado correctamente",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
        cancelButtonText: "Enviar otra respuesta",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/mostrarActividades";
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setTimeout(function () {}, 1);
        }
      });
    } else {
      await Swal.fire({
        title: "Error",
        text: "Ocurrió un error al enviar el formulario, debes llenar primero el PLAN DE DEVENGAMIENTO",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    }
  } catch (error) {
    console.error(error);
    await Swal.fire({
      title: "Error",
      text: "Ocurrió un error al enviar el formulario",
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  }
  return datos;
}

function NuevaActividadDevengamiento() {
  const errores = useActionData();
  return (
    <div>
      <Form method="post">
       
        <FormularioNuevaActividad />
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error} </Error>)}
        <div className="text-center py-3">
          <input
            className="btn btn-secondary my-2 "
            type="submit"
            value="Ingresar"
          />
        </div>
      </Form>
    </div>
  );
}

export default NuevaActividadDevengamiento;
