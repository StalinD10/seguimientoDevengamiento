import FormularioLogin from "../components/FormularioLogin";
import { Form } from "react-router-dom";

function Login() {
  return (
    <div>
      <Form method="post">
        <FormularioLogin />

        <div class="text-center py-3">
          <input
            class="btn btn-secondary my-2 "
            type="submit"
            value="Ingresar"
          />
        </div>
      </Form>
    </div>
  );
}

export default Login;
