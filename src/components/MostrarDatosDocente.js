import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";

import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function MostrarDatosDocente() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditDev, setShowEditDev] = useState(false);
  const handleCloseEditDev = () => setShowEditDev(false);
  const handleShowEditDev = () => setShowEditDev(true);

  const [showEditRed, setShowEditRed] = useState(false);
  const handleCloseEditRed = () => setShowEditRed(false);
  const handleShowEditRed = () => setShowEditRed(true);
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Facultad</th>
              <th>Modalidad del Devengamiento</th>
              <th>Categoria del Docente</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Mark</td>
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
              <th>Fecha de reintegro</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>http:</td>
              <td>18/85/6255</td>
              <td>5525/525/1200</td>

            </tr>

          </tbody>
          <thead>
            <tr>
              <th>Tiempo de devengamiento (meses)</th>
              <th>Enlace de Adenda o contrato </th>
              <th>  </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18</td>
              <td>No hay</td>
              <td>
                <Button variant="primary" onClick={handleShowEditDev}>Editar </Button>{' '}
                <Modal
                  show={showEditDev}
                  onHide={handleCloseEditDev}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Datos de Devengamiento</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container py-3  text-center ">

                      <div className="card-body">
                        <div>

                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label className="p-2 col-form-label"
                              htmlFor="Enlace de la tesis">
                              Enlace de la tesis  </label>
                            <div className="p-2 col-sm-8">
                              <input class="form-control" type="url" placeholder="http://ejemplo.com"></input>
                            </div>
                          </div>
                        </div>
                        <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                          <label className="p-2 col-form-label"
                            htmlFor="Fecha de lectura de la tesis">
                            Fecha de lectura de la tesis
                          </label>
                          <div className="p-2 col-sm-8">
                            <input type="date" required={true} id="Fecha de lectura de la tesis" name="Fecha de lectura de la tesis" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                          <label className="p-2 col-form-label"
                            htmlFor="Fecha de reintegro">
                            Fecha de reintegro
                          </label>
                          <div className="p-2 col-sm-8">
                            <input type="date" required={true} id="Fecha de reintegro" name="Fecha de reintegro" className="form-control" />
                          </div>
                        </div>
                        <div>

                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label className="p-2 col-form-label"
                              htmlFor="Enlace de la tesis">
                              Tiempo de devengamiento (meses)  </label>
                            <div className="p-2 col-sm-8">
                              <input class="form-control" type="number" placeholder="0"></input>
                            </div>
                          </div>
                        </div>
                        <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                          <label className="p-2 col-form-label"
                            htmlFor="Enlace de la tesis">
                            Enlace de la tesis  </label>
                          <div className="p-2 col-sm-8">
                            <input class="form-control" type="url" placeholder="http://ejemplo.com"></input>
                          </div>
                        </div>

                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditDev}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseEditDev}>
                      Enviar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="p-3 m-3">
        <h3 className="p-2">Redes</h3>
        <Table striped>
          <thead>
            <tr>
              <th>REDI/ CEDIA</th>
              <th>Sistema de Investigadores nacionales de Senescyt</th>
              <th>Redes sociales de investigación</th>
              <th>Link de redes sociales de investigación</th>
              <th>Codigo ORCI</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>
                <Button variant="primary" onClick={handleShowEditRed}>Editar</Button>{' '}
                <Modal
                  show={showEditRed}
                  onHide={handleCloseEditRed}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Datos de Redes </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container py-3  text-center ">

                      <div className="card-body">
                        <div>

                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label className="p-2 col-form-label"
                              htmlFor="Senescyt">
                              Forma parte de la Red de Investigadores nacionales de REDI/ CEDIA  </label>
                            <div className="p-2 col-sm-8">
                              <select id="select" className="form-control"
                                required={true} name="idSenescyt">
                                <option >Seleccione... </option>
                                <option value="1">SI</option>
                                <option value="2">NO</option>
                              </select>
                            </div>

                          </div>
                        </div>

                        <div>

                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label className="p-2 col-form-label"
                              htmlFor="Senescyt">
                              Está registrado en el sistema de Investigadores nacionales de Senescyt  </label>
                            <div className="p-2 col-sm-8">
                              <select id="select" className="form-control"
                                required={true} name="idSenescyt">
                                <option >Seleccione... </option>
                                <option value="1">SI</option>
                                <option value="2">NO</option>
                              </select>
                            </div>

                          </div>
                        </div>
                        <div>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label className="p-2 col-form-label"
                              htmlFor="Senescyt">
                              Pertenece a redes sociales de investigación  </label>
                            <div className="p-2 col-sm-8">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                  google scholar
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                  mendeley
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                  research gate
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                  linkedin
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                  NINGUNO
                                </label>
                              </div>

                            </div>

                          </div>
                          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                            <label className="p-2 col-form-label"
                              htmlFor="Enlace de la tesis">
                              Colocar un link de referecia
                              <div>
                                <var>Colocar link de referencia de todas las redes que posea. Ejemplo: LinkedIn: enlace , mendeley: enlace.</var>

                              </div>

                            </label>
                            <div className="p-2 col-sm-8">
                              <input class="form-control" type="url" placeholder="http://ejemplo.com"></input>
                            </div>
                          </div>
                          <div>

                            <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                              <label className="p-2 col-form-label"
                                htmlFor="Senescyt">
                                Tiene código  ORCID  </label>
                              <div className="p-2 col-sm-8">
                                <select id="select" className="form-control"
                                  required={true} name="idSenescyt">
                                  <option >Seleccione... </option>
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
          </tbody>
        </Table>
      </div>
      <div className="py-2 text-center">
        <Button variant="primary" onClick={handleShow}>Observaciones </Button>{' '}
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Observaciones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comentar si existe alguna novedad con los datos para modificarlos</Form.Label>
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