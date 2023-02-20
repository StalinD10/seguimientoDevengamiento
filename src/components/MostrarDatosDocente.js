import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
function MostrarDatosDocente() {
  return (
    <div>
      <Navigation />
      <div className="p-3 m-3">
        <h3 className="p-2">Docente</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo Institucional</th>
              <th>Facultad</th>
              <th>Modalidad del Devengamiento</th>
              <th>Categoria del Docente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="p-3 m-3">
        <h3 className="p-2">Devengamiento</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Enlace de Tesis</th>
              <th>Fecha de lectura de la tesis</th>
              <th>Tiempo de devengamiento (meses)</th>
              <th>Adenda o contrato </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="p-3 m-3">
        <h3 className="p-2">Redes</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Red CEDIA</th>
              <th>RNI Senescyt</th>
              <th>Codigo Orcid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="py-2 text-center">
        <Button variant="primary">Editar Datos</Button>{" "}
        <Button variant="primary">Agregar Observaciones</Button>{" "}
      </div>
    </div>
  );
}

export default MostrarDatosDocente;
