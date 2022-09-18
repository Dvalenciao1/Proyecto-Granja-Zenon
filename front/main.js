document.querySelector("#app").innerHTML = `
	<div>
		<h1>La Granja de Zenon!</h1>
		<div class="card">
			<button id="datos" type="button">Datos</button>
		</div>
		<div class="card">
			<div id="chart-container">FusionCharts XT will load here!</div>
		</div>
	</div>
`;

const datos = () => {

	fetch("https://granja-zenon-humedad.herokuapp.com/humedad")
		.then((res) => res.json())
		.then((data) => {
			objeto = data;
			presentar();
		});
};

function presentar() {
	let datos1 = null;
	let charData = [];
	for (const key in objeto) {
		let fecha = objeto[key].fecha;
		fecha = new Date(fecha);
		const formatFecha = fecha.toString().split(" ");
		const date = `${formatFecha[2]}/${formatFecha[1]}/${formatFecha[3]}`;
		datos1 = new Object({ value: objeto[key].humedad, label: date });
		charData.push(datos1);
	}
	charData.sort(function (a, b) {
		if (a.label.split("/")[2] > b.label.split("/")[2]) {
			return 1;
		}
		if (a.label.split("/")[2] < b.label.split("/")[2]) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});
	configFusion(charData);
}

function configFusion(charData) {
	const chartConfigs = {
		//Specify the chart type
		type: "column2d",
		//Set the container object
		renderAt: "chart-container",
		//Specify the width of the chart
		width: "800",
		//Specify the height of the chart
		height: "400",
		//Set the type of data
		dataFormat: "json",
		dataSource: {
			chart: {
				//Set the chart caption
				caption: "Medicion de Humedad",
				//Set the x-axis name
				xAxisName: "Fechas de Medicion",
				//Set the y-axis name
				yAxisName: "Cantidad de Humedad",
				numberSuffix: " g/m^3",
				//Set the theme for your chart
				theme: "candy",
			},
			// Chart Data from Step 2
			data: charData,
		},
	};

	FusionCharts.ready(() => {
		let fusionCharts = new FusionCharts(chartConfigs);
		fusionCharts.render();
	});
}

const boton = document.getElementById("datos");

let objeto = new Object();

boton.addEventListener("click", () => {
	datos();
});
