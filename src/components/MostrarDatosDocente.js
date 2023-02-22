import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import NuevaActividadDevengamiento from "../pages/NuevaActividadDevengamiento";

const idPersona = sessionStorage.getItem("idPersona");
const token = sessionStorage.getItem("token");
const variable = process.env.REACT_APP_API_GENERAL + "/person";
const variableDatosDocente =
  process.env.REACT_APP_API_GENERAL + "/docent/byIdPerson";
const variableDatosDevengamiento =
  process.env.REACT_APP_API_GENERAL + "/accrualData/ByIdPerson";
const variableRedes = process.env.REACT_APP_API_GENERAL + "/network/byIdPerson";

const useLoaderData = () => {
  const [data, setData] = useState({});
  const loader = async () => {
    try {
      const response1 = await fetch(`${variable}/${idPersona}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data1 = await response1.json();

      setData([{ ...data1 }]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loader();
  }, []);

  return data;
};
const useLoaderData2 = () => {
  const [data2, setData2] = useState({});
  const loader2 = async () => {
    try {
      const response2 = await fetch(`${variableDatosDocente}/${idPersona}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const dataDocente = await response2.json();

      setData2([{ ...dataDocente }]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loader2();
  }, []);
  return data2;
};

const useLoaderData3 = () => {
  const [data3, setData3] = useState({});
  const loader3 = async () => {
    try {
      const response3 = await fetch(
        `${variableDatosDevengamiento}/${idPersona}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dataDevengamiento = await response3.json();
      const fechaLecturaTesisAnio = dataDevengamiento.readingThesisDate[0];
      const fechaLecturaTesisMes = dataDevengamiento.readingThesisDate[1];
      const fechaLecturaTesisDia = dataDevengamiento.readingThesisDate[2];
      const fechaLecturaTesis =
        fechaLecturaTesisAnio +
        "-" +
        fechaLecturaTesisMes +
        "-" +
        fechaLecturaTesisDia;

      const fechaReintegroTesisAnio = dataDevengamiento.refundDate[0];
      const fechaReintegroTesisMes = dataDevengamiento.refundDate[1];
      const fechaReintegroTesisDia = dataDevengamiento.refundDate[2];
      const fechaReintegroTesis =
        fechaReintegroTesisAnio +
        "-" +
        fechaReintegroTesisMes +
        "-" +
        fechaReintegroTesisDia;

      setData3([
        { ...dataDevengamiento, fechaLecturaTesis, fechaReintegroTesis },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loader3();
  }, []);
  return data3;
};

const useLoaderData4 = () => {
  const [data4, setData4] = useState({});
  const loader4 = async () => {
    try {
      const response4 = await fetch(`${variableRedes}/${idPersona}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const dataRedes = await response4.json();

      setData4([{ ...dataRedes }]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loader4();
  }, []);

  return data4;
};

function MostrarDatosDocente() {
  const datos = useLoaderData();
  const datosDocente = useLoaderData2();
  const datosDevengamiento = useLoaderData3();
  const datosRedes = useLoaderData4();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditDev, setShowEditDev] = useState(false);
  const handleCloseEditDev = () => setShowEditDev(false);
  const handleShowEditDev = () => setShowEditDev(true);

  const [showEditRed, setShowEditRed] = useState(false);
  const handleCloseEditRed = () => setShowEditRed(false);
  const handleShowEditRed = () => setShowEditRed(true);

  // Obtener datos del editar Datos Devengamiento
  const [enlaceTesis, setEnlaceTesis] = useState("");
  const [fechaLectura, setFechaLectura] = useState("");
  const [fechaReintegro, setFechaReintegro] = useState("");
  const [tiempoDevengamiento, setTiempoDevengamiento] = useState("");
  const [enlaceAdendaContrato, setEnlaceAdendaContrato] = useState("");

  function handleChangeEnlaceTesis(event) {
    setEnlaceTesis(event.target.value);
  }
  function handleChangeFechaLectura(event) {
    setFechaLectura(event.target.value);
  }

  function handleChangeFechaReintegro(event) {
    setFechaReintegro(event.target.value);
  }

  function handleChangeTiempoDevengamiento(event) {
    setTiempoDevengamiento(event.target.value);
  }

  function handleChangeEnlaceAdendaContrato(event) {
    setEnlaceAdendaContrato(event.target.value);
  }

  return (
    <div>
      <Navigation />

      <div className="p-3 m-3">
        <h3 className="p-2">Datos Generales</h3>

        <Table striped>
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo Institucional</th>
            </tr>
          </thead>
          {datos.length ? (
            <tbody>
              {datos.map((docente, index) => (
                <tr key={index}>
                  <td>
                    {docente.identification === null
                      ? "No disponible"
                      : docente.identification}
                  </td>
                  <td>
                    {docente.name === null ? "No disponible" : docente.name}
                  </td>
                  <td>
                    {docente.lastname === null
                      ? "No disponible"
                      : docente.lastname}
                  </td>

                  <td>
                    {docente.email === null ? "No disponible" : docente.email}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p>No existen datos del docente disponibles</p>
          )}

          <thead>
            <tr>
              <th>Facultad</th>
              <th>Modalidad del Devengamiento</th>
              <th>Categoria del Docente</th>
            </tr>
          </thead>
          {datosDocente.length ? (
            <tbody>
              {datosDocente.map((docenteData, index) => (
                <tr key={index}>
                  <td>
                    {docenteData.faculty === null
                      ? "No disponible"
                      : docenteData.faculty}
                  </td>
                  <td>
                    {docenteData.modality === null
                      ? "No disponible"
                      : docenteData.modality}
                  </td>
                  <td>
                    {docenteData.category === null
                      ? "No disponible"
                      : docenteData.category}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p>No existen datos del docente disponibles</p>
          )}
        </Table>
      </div>
      <div className="p-3 m-3">
        <h3 className="p-2">Devengamiento</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Enlace de Tesis</th>
              <th>Fecha de lectura de la tesis</th>
              <th>Fecha de reintegro</th>
            </tr>
          </thead>
          {datosDevengamiento.length ? (
            <tbody>
              {datosDevengamiento.map((devengamiento, index) => (
                <tr key={index}>
                  <td>
                    {devengamiento.thesisLink === null
                      ? "No disponible"
                      : devengamiento.thesisLink}
                  </td>
                  <td>
                    {devengamiento.fechaLecturaTesis === null
                      ? "No disponible"
                      : devengamiento.fechaLecturaTesis}
                  </td>
                  <td>
                    {devengamiento.fechaReintegroTesis === null
                      ? "No disponible"
                      : devengamiento.fechaReintegroTesis}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p>No existen datos del docente disponibles</p>
          )}
          <thead>
            <th>Tiempo de Devengamiento</th>
            <th>Enlace de Contrato o Adenda</th>
            <th> </th>
          </thead>
          {datosDevengamiento.length ? (
            <tbody>
              {datosDevengamiento.map((devengamiento, index) => (
                <tr key={index}>
                  <td>
                    {devengamiento.accrualTime === null
                      ? "No disponible"
                      : devengamiento.accrualTime}
                  </td>
                  <td>
                    {devengamiento.contractAddendumLink === "null"
                      ? "No disponible"
                      : devengamiento.contractAddendumLink}
                  </td>
                  <td>
                    <Button variant="primary" onClick={handleShowEditDev}>
                      Editar
                    </Button>
                    <Modal show={showEditDev} onHide={handleCloseEditDev}>
                      <Modal.Header closeButton>
                        <Modal.Title>Datos de Devengamiento</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <div className="container py-3  text-center ">
                          <div className="card-body">
                            <div>
                              <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                                <label
                                  className="p-2 col-form-label"
                                  htmlFor="Enlace de la tesis"
                                >
                                  Enlace de la tesis
                                </label>
                                <div className="p-2 col-sm-8">
                                  <input
                                    className="form-control"
                                    type="url"
                                    placeholder="http://ejemplo.com"
                                    value={enlaceTesis}
                                    onChange={handleChangeEnlaceTesis}
                                  ></input>
                                </div>
                              </div>
                            </div>
                            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                              <label
                                className="p-2 col-form-label"
                                htmlFor="Fecha de lectura de la tesis"
                              >
                                Fecha de lectura de la tesis
                              </label>
                              <div className="p-2 col-sm-8">
                                <input
                                  type="date"
                                  required={true}
                                  id="Fecha de lectura de la tesis"
                                  className="form-control"
                                  value={fechaLectura}
                                  onChange={handleChangeFechaLectura}
                                />
                              </div>
                            </div>
                            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                              <label
                                className="p-2 col-form-label"
                                htmlFor="Fecha de reintegro"
                              >
                                Fecha de reintegro
                              </label>
                              <div className="p-2 col-sm-8">
                                <input
                                  type="date"
                                  required={true}
                                  id="Fecha de reintegro"
                                  className="form-control"
                                  value={fechaReintegro}
                                  onChange={handleChangeFechaReintegro}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                                <label
                                  className="p-2 col-form-label"
                                  htmlFor="Enlace de la tesis"
                                >
                                  Tiempo de devengamiento (meses){" "}
                                </label>
                                <div className="p-2 col-sm-8">
                                  <input
                                    className="form-control"
                                    type="number"
                                    placeholder="0"
                                    value={tiempoDevengamiento}
                                    onChange={handleChangeTiempoDevengamiento}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                              <label
                                className="p-2 col-form-label"
                                htmlFor="Enlace de la tesis"
                              >
                                Enlace de Adenda o Contrato
                              </label>
                              <div className="p-2 col-sm-8">
                                <input
                                  className="form-control"
                                  type="url"
                                  placeholder="http://ejemplo.com"
                                  value={enlaceAdendaContrato}
                                  onChange={handleChangeEnlaceAdendaContrato}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseEditDev}
                        >
                          Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleCloseEditDev}>
                          Enviar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p>No existen datos del docente disponibles</p>
          )}
        </Table>
      </div>
      <div className="p-3 m-3">
        <h3 className="p-2">Redes</h3>
        <Table striped>
          <thead>
            <tr>
              <th>REDI/ CEDIA</th>
              <th>Sistema de Investigadores nacionales de Senescyt</th>
              <th>Codigo ORCI</th>
              <th> </th>
            </tr>
          </thead>
          {datosRedes.length ? (
            <tbody>
              {datosRedes.map((redes, index) => (
                <tr key={index}>
                   <td>
                    {redes.cedia === null
                      ? "No disponible"
                      : redes.cedia}
                  </td>   
                  <td>
                    {redes.rniSenesyt === null
                      ? "No disponible"
                      : redes.rniSenesyt
                    }
                  </td>   
                  <td>
                    {redes.orcidCode === null
                      ? "No disponible"
                      : redes.orcidCode
                    }
                  </td>   
              <td>
                <Button variant="primary" onClick={handleShowEditRed}>
                  Editar
                </Button>
                <Modal show={showEditRed} onHide={handleCloseEditRed}>
                  <Modal.Header closeButton>
                    <Modal.Title>Datos de Redes </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container py-3  text-center ">
                      <div className="card-body">
                        <div>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="Senescyt"
                            >
                              Forma parte de la Red de Investigadores nacionales
                              de REDI/ CEDIA{" "}
                            </label>
                            <div className="p-2 col-sm-8">
                              <select
                                id="select"
                                className="form-control"
                                required={true}
                                name="idSenescyt"
                              >
                                <option>Seleccione... </option>
                                <option value="1">SI</option>
                                <option value="2">NO</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="Senescyt"
                            >
                              Está registrado en el sistema de Investigadores
                              nacionales de Senescyt
                            </label>
                            <div className="p-2 col-sm-8">
                              <select
                                id="select"
                                className="form-control"
                                required={true}
                                name="idSenescyt"
                              >
                                <option>Seleccione... </option>
                                <option value="1">SI</option>
                                <option value="2">NO</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                              <label
                                className="p-2 col-form-label"
                                htmlFor="Senescyt"
                              >
                                Tiene código ORCID{" "}
                              </label>
                              <div className="p-2 col-sm-8">
                                <select
                                  id="select"
                                  className="form-control"
                                  required={true}
                                  name="idSenescyt"
                                >
                                  <option>Seleccione... </option>
                                  <option value="1">SI</option>
                                  <option value="2">NO</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditRed}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseEditRed}>
                      Enviar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
           ))}
           </tbody>
         ) : (
           <p>No existen datos del docente disponibles</p>
         )}
        </Table>
      </div>
      <div className="py-2 text-center">
        <Button variant="primary" onClick={handleShow}>
          Observaciones{" "}
        </Button>{" "}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Observaciones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Comentar si existe alguna novedad con los datos para
                  modificarlos
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MostrarDatosDocente;
