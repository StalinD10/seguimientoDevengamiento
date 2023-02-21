export async function login(dato) {
  const variable = process.env.REACT_APP_API_GENERAL + "/accrual/authorization"

  try {
    const respuesta = await fetch(variable, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dato),
    });

    if (respuesta.ok) {
      const token = await respuesta.json();
      console.log(token);
      const valorToken = token.token;
      sessionStorage.setItem("token", valorToken);
      const partesToken = valorToken.split(".");
      const decoded = atob(partesToken[1]);
      const valorJson = JSON.parse(decoded);
      const idDocente = valorJson.sub;

     
      
      sessionStorage.setItem("idDocente", idDocente);
    } else {
      console.log(respuesta.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}
