import { login } from "../api/login";
import FormularioLogin from "../components/FormularioLogin";
import { Form, redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  await login(datos);
  console.log(datos)
  if (sessionStorage.getItem("token") === null) {
    <p> Error </p>;
  } else {
    return redirect("/index");
  }
}

function Login() {
  return (
    <div>
      <Form method="post">
        <FormularioLogin />

        <div className="button-login text-center py-3">
          <input
            className=" btn btn-secondary my-2 "
            type="submit"
            value="Ingresar"
          />
        </div>
      </Form>
    </div>
  );
}

export default Login;
