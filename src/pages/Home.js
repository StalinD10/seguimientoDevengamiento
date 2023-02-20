import image from "../img/uce.png";
import Navigation from "../components/Navigation";
function Home() {
  return (
    <div>
      <Navigation />
      <div className="container-md p-5 y">
        <h4 className="text">
          {" "}
          Bienvenido al Sistema de Seguimiento a Devengamientos de los Docentes
        </h4>
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
