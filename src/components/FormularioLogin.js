function FormularioLogin() {
  return (
    <div>
      <div className="container py-3  text-center ">
        <div className="card-header py-3">
          <h3>Iniciar Sesion</h3>
        </div>
        <div className="card-body">
          <div>
            <form>
              <div className="form-group  d-flex justify-content-center align-items-center py-4">
                <label className="col-sm-2 col-form-label"> Usuario: </label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="form-group d-flex justify-content-center align-items-center">
                <label className="col-sm-2 col-form-label"> Contraseña: </label>
                <div className="col-sm-3">
                  <input type="password" minLength={10} maxLength={10} className="form-control" />
                </div>
              </div>
                            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioLogin;
