import Table from "react-bootstrap/Table";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import Navigation from "./Navigation";

function MostrarActividades() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditar, setShoweditar] = useState(false);
  const handleCloseEditar = () => setShoweditar(false);
  const handleShowEditar = () => setShoweditar(true);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [valorSelectModal, setValorSelectModal] = useState("");
  const [valorSelectUniversidad, setvalorSelectUniversidad] = useState("");
  const [valorSelectFacultad, setvalorSelectFacultad] = useState(1);
  const [valorSelectCarrera, setvalorSelectCarrera] = useState("");
  const [data, setData] = useState([]);
  const [dataFacultades, setDataFacultades] = useState([]);
  const [actividadID, setActividadID] = useState([]);
  const [actividadDocente, setActividadDocente] = useState([]);
  const [actividadInnovacion, setActividadInnovacion] = useState([]);
  const [actividadInvestigadora, setActividadInvestigadora] = useState([]);
  const [tipoActividad, setTipoActividad] = useState([]);
  const [selectedOption, setselectedOption] = useState("");
  const [valorOtraInstitucion, setvalorOtraInstitucion] = useState("");
  const [valorEnlaceVerificacion, setValorEnlaceVerificacion] = useState("");
  const [valorDetalleActividadDocente, setvalorDetalleActividadDocente] =
    useState("");


  function handleChange(event) {
    setValorSelectModal(event.target.value);
    setvalorSelectUniversidad(event.target.value);
    setvalorSelectFacultad(event.target.value);
    setvalorSelectCarrera(event.target.value);
    setselectedOption(event.target.value);
  }
  function handleChange2(event) {
    setvalorDetalleActividadDocente(event.target.value);
    setvalorOtraInstitucion(event.target.value);
  }

  function handleChange3(event) {
    setvalorDetalleActividadDocente(event.target.value);
  }
  function handleChange4(event) {
    setValorEnlaceVerificacion(event.target.value);
  }

  function cambiarModal() {
    const valueSelect = document.getElementById("select").value;
    const select = document.getElementById("select");
    if (valueSelect == "1") {
      select.setAttribute("onChange", cambiarEstadoModal1(!estadoModal1));
    }
    if (valueSelect == "2") {
      select.setAttribute("onChange", cambiarEstadoModal2(!estadoModal2));
    }
    if (valueSelect == "3") {
      select.setAttribute("onChange", cambiarEstadoModal3(!estadoModal3));
    }
    if (valueSelect == "4") {
      select.setAttribute("onChange", cambiarEstadoModal4(!estadoModal4));
    }
  }

  function cambiarModalInstitucion() {
    const valueSelectInstitucion = document.getElementById(
      "select-tipoInstitucion"
    ).value;
    const selectInstitucion = document.getElementById("select-tipoInstitucion");

    if (valueSelectInstitucion === "0") {
      selectInstitucion.setAttribute(
        "onChange",
        cambiarEstadoModal5(!estadoModal5)
      );
      localStorage.setItem("idUniversidad", 1);
    }
    if (valueSelectInstitucion == "1") {
      selectInstitucion.setAttribute(
        "onChange",
        cambiarEstadoModal6(!estadoModal6)
      );
      const nombreOtraInstitucion = valorOtraInstitucion;
      localStorage.setItem("nombreOtraInstitucion", nombreOtraInstitucion);
    }
  }
  return (
    <div>
      <Navigation />
      <div className="p-3 m-3">

        <h3 className="p-2">Actividades del periodo 2022-2023</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Tipo de actividad</th>
              <th>Fecha de inicio </th>
              <th>Fecha de finalización</th>
              <th>Detalle de la actividad</th>
              <th>Enlaces de evidencia</th>
              <th>Lugar de la actividad</th>
              <th >Carrera</th>
              <th>Facultad</th>
              <th>Enlace de verificación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>estrucuras</td>
              <td>14/12/2015</td>
              <td>12/10/2022</td>
              <td>esta actividad
                sdsdsdsdsdd/.....</td>
              <td>http//.......</td>
              <td>universidad central</td>
              <td>economia</td>
              <td>estadistica</td>
              <td>http://l....</td>
              <td>revisión</td>
              <div >
                <Button variant="primary" onClick={handleShowEditar}>Editar</Button>{" "}
                <Modal
                  show={showEditar}
                  onHide={handleCloseEditar}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Actividad Devengamiento</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                      <label className="p-2 col-form-label" htmlFor="tipoActividad">
                        Elija el tipo de actividad
                      </label>
                      <div className="p-2 col-sm-5">
                        <select
                          onChange={() => {
                            cambiarModal();
                          }}
                          id="select"
                          className="form-control"
                          required={true}
                          name="idTipoActividad"
                        >
                          <option className="text-center">*** Seleccione ***</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Fourth</option>
                        </select>
                      </div>
                      <Modal
                        show={estadoModal1}
                        onHide={() => cambiarEstadoModal1(false)}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Estructuras I + D</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="tipoInstitucion"
                            >
                              Selecciona una opción
                            </label>
                            <div className="p-2 col-sm-6">
                              <select
                                id="select-actividadID"
                                value={valorSelectModal}
                                onChange={handleChange}
                                className="form-control"
                              >
                                <option className="text-center">
                                  {" "}
                                  ** Seleccione **{" "}
                                </option>
                                {actividadID.map((object) => (
                                  <option key={object.id} value={object.id}>
                                    {object.tipoActEstructura}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => cambiarEstadoModal1(false)}
                          >
                            Aceptar
                          </Button>
                        </Modal.Footer>
                      </Modal>


                      <Modal
                        show={estadoModal2}
                        onHide={() => cambiarEstadoModal2(false)}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Actividad Docente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="tipoInstitucion"
                            >
                              Selecciona una opción
                            </label>
                            <div className="p-2 col-sm-6">
                              <select
                                id="select-actividad-docente"
                                value={valorSelectModal}
                                onChange={handleChange}
                                className="form-control"
                              >
                                <option> * Seleccione * </option>
                                {actividadDocente.map((object) => (
                                  <option key={object.id} value={object.id}>
                                    {object.tipoActDocente}
                                  </option>
                                ))}
                              </select>

                              <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                                <label
                                  className="p-2 col-form-label"
                                  htmlFor="valorDetalleActividadDocente"
                                >
                                  Detalle de la actividad
                                </label>
                                <div className="p-2 col-sm-12">
                                  <input
                                    id="valorDetalleActividadDocente"
                                    className="form-control"
                                    type="text"
                                    value={valorDetalleActividadDocente}
                                    onChange={handleChange3}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => cambiarEstadoModal2(false)}
                          >
                            Aceptar
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <Modal
                        show={estadoModal3}
                        onHide={() => cambiarEstadoModal3(false)}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Actividad Investigadora</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="tipoInstitucion"
                            >
                              Selecciona una opción
                            </label>
                            <div className="p-2 col-sm-6">
                              <select
                                id="select-actividad-investigadora"
                                value={valorSelectModal}
                                onChange={handleChange}
                                className="form-control"
                              >
                                <option> ** Seleccione ** </option>
                                {actividadInvestigadora.map((object) => (
                                  <option key={object.id} value={object.id}>
                                    {object.tipoActInvestigadora}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => cambiarEstadoModal3(false)}
                          >
                            Aceptar
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <Modal
                        show={estadoModal4}
                        onHide={() => cambiarEstadoModal4(false)}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title> Actividad Innovacion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="select-actividad-docente"
                            >
                              Selecciona una opción
                            </label>
                            <div className="p-2 col-sm-6">
                              <select
                                id="select-actividad-innovacion"
                                value={valorSelectModal}
                                onChange={handleChange}
                                className="form-control"
                                cursor="pointer"
                              >
                                <option> ** Seleccione ** </option>
                                {actividadInnovacion.map((object) => (
                                  <option key={object.id} value={object.id}>
                                    {object.tipoActInnovacion}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => cambiarEstadoModal4(false)}
                          >
                            Aceptar
                          </Button>
                        </Modal.Footer>
                      </Modal>

                    </div>


                    <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                      <label className="p-2 col-form-label" htmlFor="fechaInicio">
                        Fecha de Inicio
                      </label>
                      <div className="p-2 col-sm-5">
                        <input
                          type="date"
                          required={true}
                          id="fechaInicio"
                          name="fechaInicio"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                      <label className="p-2 col-form-label" htmlFor="fechaFin">
                        Fecha de Finalización
                      </label>
                      <div className="p-2 col-sm-5">
                        <input
                          type="date"
                          required={true}
                          id="fechaFin"
                          name="fechaFin"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                      <label className="p-2 col-form-label" htmlFor="descripcion">
                        Detalle de la actividad
                      </label>
                      <div className="p-2 col-sm-5">
                        <input
                          type="text"
                          required={true}
                          id="descripcion"
                          name="descripcion"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                      <label className="p-2 col-form-label" htmlFor="evidencias">
                        Enlace de la evidencia
                      </label>
                      <div className="p-2 col-sm-5">
                        <input
                          type="url"
                          required={true}
                          id="evidencias"
                          name="evidencias"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                      <label className="p-2 col-form-label" htmlFor="tipoInstitucion">
                        Elija la institución donde va a realizar la actividad
                      </label>
                      <div className="p-2 col-sm-5">
                        <select
                          id="select-tipoInstitucion"
                          required={true}
                          onChange={() => {
                            cambiarModalInstitucion();
                          }}
                          name="tipoInstitucion"
                          className="form-control"
                        >
                          <option className="text-center"> ** Seleccione **</option>
                          <option className="opcion" value="0">
                            Universidad
                          </option>
                          <option className="opcion" value="1">
                            Otra Institucion
                          </option>
                        </select>
                      </div>
                      <Modal
                        show={estadoModal5}
                        onHide={() => cambiarEstadoModal5(false)}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title> Institución de la Actividad</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="select-actividad-docente"
                            >
                              Selecciona una opción
                            </label>
                            <div className="p-2 col-sm-8">
                              <select
                                id="select-universidad"
                                value={valorSelectUniversidad}
                                onChange={handleChange}
                                className="form-control"
                              >
                                <option disabled> * Seleccione * </option>
                                <option className="text-center" value="1">
                                  Universidad Central del Ecuador
                                </option>
                              </select>
                              <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                                <label
                                  className="p-2 col-form-label"
                                  htmlFor="select-facultad"
                                >
                                  Selecciona la Facultad
                                </label>
                                <div className="p-2 col-sm-12">
                                  <select
                                    id="select-facultad"
                                    className="form-control"
                                    value={valorSelectFacultad}
                                    onChange={(e) =>
                                      setvalorSelectFacultad(e.target.value)
                                    }
                                  >
                                    <option> * Seleccione * </option>
                                    {dataFacultades.map((object) => (
                                      <option key={object.id} value={object.id}>
                                        {object.nombreFacultad}
                                      </option>
                                    ))}
                                  </select>
                                  <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                                    <label
                                      className="p-2 col-form-label"
                                      htmlFor="select-carrera"
                                    >
                                      Selecciona la Carrera
                                    </label>
                                    <div className="p-2 col-sm-12">
                                      <select
                                        id="select-carrera"
                                        className="form-control"
                                        value={valorSelectCarrera}
                                        onChange={(e) =>
                                          setvalorSelectCarrera(e.target.value)
                                        }
                                      >
                                        <option> * Seleccione * </option>
                                        {data.map((object) => (
                                          <option key={object.id} value={object.id}>
                                            {object.nombreCarrera}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => cambiarEstadoModal5(false)}
                          >
                            Aceptar
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <Modal
                        show={estadoModal6}
                        onHide={() => cambiarEstadoModal6(false)}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title> Actividad Innovacion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="nombreOtraInstitucion"
                            >
                              Nombre de la otra Institución
                            </label>
                            <div className="p-2 col-sm-6">
                              <input
                                id="nombreOtraInstitucion"
                                className="form-control"
                                type="text"
                                value={valorOtraInstitucion}
                                onChange={handleChange2}
                              />
                            </div>
                          </div>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label
                              className="p-2 col-form-label"
                              htmlFor="enlaceVerificacion"
                            >
                              Enlace de verificación
                            </label>
                            <div className="p-2 col-sm-6">
                              <input
                                id="enlaceVerificacion"
                                className="form-control"
                                type="url"
                                value={valorEnlaceVerificacion}
                                onChange={handleChange4}
                              />
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => cambiarEstadoModal6(false)}
                          >
                            Aceptar
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>


                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditar}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseEditar}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </tr>
          </tbody>


        </Table>
        <div>
          <Button variant="primary" onClick={handleShow}>Enviar </Button>{" "}
          <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton >
              <Modal.Title>Revisión</Modal.Title>
            </Modal.Header>
            <Modal.Body>Al momento de confirmar el envío, las actividades ingresadas seran enviadas a revision.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleClose}>Confirmar </Button>

            </Modal.Footer>
          </Modal>

        </div>


      </div>
    </div>
  )
}

export default MostrarActividades;