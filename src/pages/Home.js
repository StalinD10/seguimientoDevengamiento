import image from "../img/uce.png";
import Navigation from "../components/Navigation";
import Alert from 'react-bootstrap/Alert';
const periodo = localStorage.getItem("periodo");

function Home() {
  return (
    <div>
      <Navigation />
      <div className="container-md py-4">
        <h4 className="text text-center">
          Bienvenido al Sistema de Seguimiento a Devengamientos de los Docentes
        </h4>
        <div className='d-flex flex-column justify-content-center align-items-center py-5 '>
    <Alert variant='primary'className=" col-sm-5 text-center">
        Usted se encuentra en el periodo: <h3>{periodo}</h3>
    </Alert>
    </div>
      </div>
      <div className="row justify-content-md-center align-items-center m-5 border border-secondar">
        <div className="col-md-auto m-5 image">
          <img className=" p-1" src={image} alt="imagen uce" width="200" />
        </div>
        <div className="col col-lg-5">
          <p>
            En este sistema, los docentes podrán registrar su devengamiento de
            las becas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
