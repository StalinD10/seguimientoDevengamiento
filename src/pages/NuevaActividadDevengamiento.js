import { Form, useActionData } from "react-router-dom";
import FormularioNuevaActividad from "../components/FormularioNuevaActividad";
import Swal from "sweetalert2";
import Error from "../components/Error";

const token = sessionStorage.getItem("token");
const variableSubmit = process.env.REACT_APP_API_GENERAL + "/activityPlanAccrual";

export async function action({ request }) {
  const storedData = localStorage.getItem("datoSeleccionado");
const idPersona = sessionStorage.getItem("idPersona");
  const idUniversidad = 1;
  const period = localStorage.getItem("periodo");
  const institutionNameLocal =  localStorage.getItem("universidad")
  const idCarrera = localStorage.getItem("idCarrera");
  const nombreOtraInstitucion = localStorage.getItem("nombreOtraInstitucion");
  const idFacultad = localStorage.getItem("idFacultad");
  const detalleDocente = localStorage.getItem("detalleDocente");
  const idPlan = sessionStorage.getItem("idPlan");
  const enlaceVerificacion = localStorage.getItem("enlaceVerificacion");
  const idActividad = localStorage.getItem("idActividad")

  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  datos.idActivitySubtype = storedData;
  datos.period = period;
  datos.idPerson= idPersona;

  if (detalleDocente !== "") {
    datos.descriptionSubtype = detalleDocente;
  }

  if (enlaceVerificacion == "" && nombreOtraInstitucion == "") {
    datos.idCareer = idCarrera;
    datos.idFaculty = idFacultad;
    datos.idUniversity = idUniversidad;
    datos.institutionName = institutionNameLocal;
  }
  if (idCarrera == "") {
    datos.otherInstitutionName = nombreOtraInstitucion;
    datos.verificationLink = enlaceVerificacion;
  }


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
    const respuesta = await fetch(variableSubmit, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
        datos),
    });
    const actividades = await respuesta.json();
    sessionStorage.setItem("idPlan", actividades)
    if (respuesta.ok) {
      await Swal.fire({
        title: "Enviado",
        text: "El formulario ha sido enviado correctamente",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Enviar otra Respuesta",
        cancelButtonText: "Cerrar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/nuevaActividad";
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setTimeout(function () {}, 1);
        }
      });
    } else {
      await Swal.fire({
        title: "Error",
        text: "Ocurrió un error al enviar el formulario",
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
            className="btn btn-primary my-2 "
            type="submit"
            value="Registrar"
          />
        </div>
      </Form>
    </div>
  );
}

export default NuevaActividadDevengamiento;
