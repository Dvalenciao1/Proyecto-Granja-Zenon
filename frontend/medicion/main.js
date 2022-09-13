import "./style.css";
import Axios from "axios";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>La Granja de Zen!</h1>
    <div class="card">
      <button id="datos" type="button">Datos</button>
      <button id="print" type="button">Presentar</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const datos = () => {
	return new Promise((resolve, reject) => {
		resolve(Axios.get("http://localhost:4000/humedad"));
	});
};

function presentar() {
	let datos1 = null;
  let charData = []
	for (const key in objeto) {
    let fecha = objeto[key].fecha
    fecha = new Date(fecha)
    const x = fecha.toString().split(' ')
    console.log(x)
		datos1 = new Object({ value: objeto[key].humedad, label: objeto[key].fecha });
    charData.push(datos1)
	}
  console.log(charData)
}

const boton = document.getElementById("datos");
const boton2 = document.getElementById("print");

let objeto = new Object();

boton.addEventListener("click", () => {
	datos().then((data) => {
		objeto = { ...data.data };
	});
});

boton2.addEventListener("click", presentar);
