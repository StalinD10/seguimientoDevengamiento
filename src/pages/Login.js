
import FormularioLogin from "../components/FormularioLogin";
import { Form, redirect } from "react-router-dom";
import Swal from "sweetalert2";

const variable = process.env.REACT_APP_API_GENERAL + "/accrual/authorization"

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  
  console.log(datos)
  
  try {
    const respuesta = await fetch(variable, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (respuesta.ok) {
      const token = await respuesta.json();
      console.log(token);
      const valorToken = token.token;
      sessionStorage.setItem("token", valorToken);
      const partesToken = valorToken.split(".");
      const decoded = atob(partesToken[1]);
      const valorJson = JSON.parse(decoded);
      const idDocente = valorJson.sub;
      sessionStorage.setItem("idPersona", idDocente);
      window.location.href = "/index";
     } else {
    await Swal.fire({
        title: 'Error',
        text: 'Usuario o Contraseña incorrectos',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
       
    });
}
} catch (error) {
console.error(error);
await Swal.fire({
    title: 'Error',
    text: 'Ocurrió un error al Iniciar Sesión',
    icon: 'error',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
});
}
return null;
}


function Login() {
  return (
    <div>
      <Form method="post">
        <FormularioLogin />

        <div className="button-login text-center py-3">
          <input
            className=" btn btn-primary my-2 "
            type="submit"
            value="Ingresar"
          />
        </div>
      </Form>
    </div>
  );
}

export default Login;
