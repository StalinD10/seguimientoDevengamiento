import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import Navigation from "./Navigation";

const token = sessionStorage.getItem("token");
const idPlan = sessionStorage.getItem("idPlan");
const variableTipoActividad = process.env.REACT_APP_API_GENERAL + "/type";
const variableFacultad =
  process.env.REACT_APP_API_GENERAL + "/faculty/byIdUniversity";
const variableCarrera =
  process.env.REACT_APP_API_GENERAL + "/career/byIdFaculty";
const variableSubTipo = process.env.REACT_APP_API_GENERAL + "/subtype/byIdType";
const variableObtenerActividades = process.env.REACT_APP_API_GENERAL+"/activityPlan/byPlan"


function MostrarActividades({}) {
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
  const [subActividades, setSubActividades] = useState([]);
  const [tipoActividad, setTipoActividad] = useState([]);
  const [selectedOption, setselectedOption] = useState("");
  const [valorActividades, setValorActividades] = useState(1);
  const [valorOtraInstitucion, setvalorOtraInstitucion] = useState("");
  const [valorEnlaceVerificacion, setValorEnlaceVerificacion] = useState("");
  const [valorDetalleActividadDocente, setvalorDetalleActividadDocente] =
    useState("");

    function handleChange(event) {
      setValorSelectModal(event.target.value);
  
      setselectedOption(event.target.value);
    }
  
    function handleChange2(event) {
      setvalorOtraInstitucion(event.target.value);
    }
  
    function handleChange3(event) {
      setvalorDetalleActividadDocente(event.target.value);
    }
  
    function handleChange4(event) {
      setValorEnlaceVerificacion(event.target.value);
    }
  
    function handleChange5(event) {
      setvalorSelectUniversidad(event.target.value);
      setvalorSelectFacultad(event.target.value);
      setvalorSelectCarrera(event.target.value);
    }
    let idActividad = valorActividades;
    localStorage.setItem("idActividad", idActividad);

    let idFacultad = valorSelectFacultad;
  localStorage.setItem("idFacultad", idFacultad);

    useEffect(() => {
      const peticion = async () => {
        let idActividad = localStorage.getItem("idActividad");
        let idFacultad = localStorage.getItem("idFacultad");
        try {
          const response = await fetch(`${variableFacultad}/1`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data1 = await response.json();
          setDataFacultades(data1);
  
          const response3 = await fetch(`${variableCarrera}/${idFacultad}`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data3 = await response3.json();
          setData(data3);
          setselectedOption(data3[0].value);
  
          const response2 = await fetch(`${variableSubTipo}/${idActividad}`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data2 = await response2.json();
  
          setSubActividades(data2);
  
          const response7 = await fetch(`${variableTipoActividad}`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data7 = await response7.json();
          setTipoActividad(data7);
        } catch (error) {
          console.log(error);
        }
      };
      peticion();
      const intervalId = setInterval(peticion, 1000);
      return () => clearInterval(intervalId);
    }, []);
    
  function cambiarModal() {
    const valueSelect = document.getElementById("select").value;
    setValorActividades(valueSelect);
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

  // Consultas para datos de la actividad de devengamiento

  const useLoaderData1 = () => {
    const [dataActividad, setDataActividad] = useState({});
    const loader2 = async () => {
      try {
        const response2 = await fetch(`${variableObtenerActividades}/${idPlan}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        const dataActividades = await response2.json();
       
        setDataActividad( dataActividades);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      loader2();
    }, []);
    return dataActividad;
  };
  
  

const datosActividadPlan = useLoaderData1();

// Obtener datos del editar actividad


  return (
    <div>
      <Navigation />
      <div className="p-3 m-3">

        <h3 className="p-2">Actividades del periodo 2022-2023</h3>
        {datosActividadPlan.length ? (
        <Table striped>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Tipo de actividad</th>
              <th>Fecha de inicio </th>
              <th>Fecha de finalizaci??n</th>
              <th>Detalle de la actividad</th>
              <th>Enlaces de evidencia</th>
              <th>Lugar de la actividad</th>
              
              <th></th>
            </tr>
          </thead>
        
          <tbody>
            {datosActividadPlan.map((actividades, index) => (
                <tr key={index}>
                  <td>
                    {actividades.activity.idActivity === null
                      ? "No disponible"
                      : actividades.activity.idActivity}
                  </td>
                  <td>
                    {actividades.type.nameActivityType === null
                      ? "No disponible"
                      : actividades.type.nameActivityType
                    }
                  </td>
                  <td>
                    {actividades.activity.startDate=== null
                      ? "No disponible"
                      : actividades.activity.startDate}
                  </td>
                  <td>
                    {actividades.activity.endDate === null
                      ? "No disponible"
                      : actividades.activity.endDate}
                  </td>
                  <td>
                    {actividades.activity.description === null
                      ? "No disponible"
                      : actividades.activity.description
                    }
                  </td>

                  <td>
                    {actividades.activity.evidences === null
                      ? "No disponible"
                      : actividades.activity.evidences
                    }
                  </td>

              <div >
                <Button disabled variant="primary" onClick={handleShowEditar}>Editar</Button>
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
              <div className="p-2 col-sm-6">
                <select
                  onChange={() => {
                    cambiarModal();
                  }}
                  id="select"
                  className="form-control"
                  required={true}
                  name="idActivityType"
                >
                  <option className="text-center">*** Seleccione ***</option>
                  {tipoActividad.map((object) => (
                    <option
                      key={object.idActivityType}
                      value={object.idActivityType}
                    >
                      {object.nameActivityType}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
              <label className="p-2 col-form-label" htmlFor="starDate">
                Fecha de Inicio
              </label>
              <div className="p-2 col-sm-6">
                <input
                  type="date"
                  required={true}
                  id="starDate"
                  name="starDate"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
              <label className="p-2 col-form-label" htmlFor="endDate">
                Fecha de Finalizaci??n
              </label>
              <div className="p-2 col-sm-6">
                <input
                  type="date"
                  required={true}
                  id="endDate"
                  name="endDate"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
              <label className="p-2 col-form-label" htmlFor="descriptionActivity">
                Detalle
              </label>
              <div className="p-2 col-sm-6">
                <input
                  type="text"
                  required={true}
                  id="descriptionActivity"
                  name="descriptionActivity"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
              <label className="p-2 col-form-label" htmlFor="evidences">
                Enlace de la evidencia
              </label>
              <div className="p-2 col-sm-6">
                <input
                  type="url"
                  required={true}
                  id="evidences"
                  name="evidences"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
              <label className="p-2 col-form-label" htmlFor="tipoInstitucion">
                Elija la instituci??n donde va a realizar la actividad
              </label>
              <div className="p-2 col-sm-6">
                <select
                  id="select-tipoInstitucion"
                  required={true}
                  onChange={() => {
                    cambiarModalInstitucion();
                  }}
                  
                  className="form-control"
                >
                  <option className="text-center"> ** Seleccione **</option>
                  <option className="text-center" value="0">
                    Universidad
                  </option>
                  <option className="text-center" value="1">
                    Otra Institucion
                  </option>
                </select>
              </div>
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
                    Selecciona una opci??n
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
                      {subActividades.map((object) => (
                        <option 
                          key={object.idActivitySubtype}
                          value={object.idActivitySubtype}
                        >
                          {object.nameActivitySubtype}
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
                    Selecciona una opci??n
                  </label>
                  <div className="p-2 col-sm-6">
                    <select
                      id="select-actividad-investigadora"
                      value={valorSelectModal}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option> ** Seleccione ** </option>
                      {subActividades.map((object) => (
                        <option
                          key={object.idActivitySubtype}
                          value={object.idActivitySubtype}
                        >
                          {object.nameActivitySubtype}
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
                    htmlFor="select-actividad-docente"
                  >
                    Selecciona una opci??n
                  </label>
                  <div className="p-2 col-sm-6">
                    <select
                      id="select-actividad-docente"
                      value={valorSelectModal}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option> ** Seleccione ** </option>
                      {subActividades.map((object) => (
                        <option
                          key={object.idActivitySubtype}
                          value={object.idActivitySubtype}
                        >
                          {object.nameActivitySubtype}
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
                    Selecciona una opci??n
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
                      {subActividades.map((object) => (
                        <option
                          key={object.idActivitySubtype}
                          value={object.idActivitySubtype}
                        >
                          {object.nameActivitySubtype}
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

            <Modal
              show={estadoModal5}
              onHide={() => cambiarEstadoModal5(false)}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title> Instituci??n de la Actividad</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                  <label
                    className="p-2 col-form-label"
                    htmlFor="select-actividad-docente"
                  >
                    Selecciona una opci??n
                  </label>
                  <div className="p-2 col-sm-8">
                    <select
                      id="select-universidad"
                      value={valorSelectUniversidad}
                      onChange={handleChange5}
                      className="form-control"
                    >
                      <option disabled> ** Seleccione ** </option>
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
                          <option> ** Seleccione ** </option>
                          {dataFacultades.map((object) => (
                            <option
                              key={object.idFaculty}
                              value={object.idFaculty}
                            >
                              {object.facultyName}
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
                              <option> ** Seleccione ** </option>
                              {data.map((object) => (
                                <option
                                  key={object.idCareer}
                                  value={object.idCareer}
                                >
                                  {object.careerName}
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
                <Modal.Title> Otra Instituci??n</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                  <label
                    className="p-2 col-form-label"
                    htmlFor="nombreOtraInstitucion"
                  >
                    Nombre de la Instituci??n
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
                    Enlace de verificaci??n
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
          ))}
          </tbody>
      

        </Table>
          ) : (
            <p>No existen datos del docente disponibles</p>
          )}
        <div>
          <Button variant="primary" onClick={handleShow}>Enviar </Button>{" "}
          <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton >
              <Modal.Title>Revisi??n</Modal.Title>
            </Modal.Header>
            <Modal.Body>Al momento de confirmar el env??o, las actividades ingresadas seran enviadas a revision.
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