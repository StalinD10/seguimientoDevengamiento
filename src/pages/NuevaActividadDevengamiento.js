import { Form } from "react-router-dom"
import FormularioNuevaActividad from "../components/FormularioNuevaActividad"
function NuevaActividadDevengamiento() {
  return (
    <div>
      <Form method="post">
        <FormularioNuevaActividad />

        <div class="text-center py-3">
          <input
            class="btn btn-secondary my-2 "
            type="submit"
            value="Ingresar"
          />
        </div>
      </Form>
    </div>
  )
}

export default NuevaActividadDevengamiento
