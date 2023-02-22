const idPersona = sessionStorage.getItem("idPersona")
const token = sessionStorage.getItem("token")
const variable = process.env.REACT_APP_API_GENERAL + "/person"
console.log(variable)
export async function obtenerDatosPersona() {
    try {
        const response = await fetch(`${variable}/${idPersona}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
};
  
