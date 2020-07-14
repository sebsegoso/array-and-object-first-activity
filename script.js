//1- Titulo
document.write("<h1>Estadisticas centro medico ñuñoa<hr /></h1>");

//2- Definir arreglos y objetos , especialidad y consulta
let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];

let traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
];

let dental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

//3- Determinar longitud de los array (Cantidad de consultas por especialidad)
let atencionesRadiologia = radiologia.length;
let atencionesTraumatologia = traumatologia.length;
let atencionesDental = dental.length;

//4- Mostrar en pantalla la cantidad de consultas por especialidad
document.write(
    `<h3>Cantidad de atenciones para radiología: </h3><p>${atencionesRadiologia}</p>`
);
document.write(
    `<h3>Cantidad de atenciones para traumatología: </h3><p>${atencionesTraumatologia}</p>`
);
document.write(
    `<h3>Cantidad de atenciones dentales: </h3><p>${atencionesDental}</p><hr />`
);

//5- Mostrar en pantalla el rut y la previsión del primer y último paciente atendido por especialidad (Ojo: en la guía dice RUT y previsión. El nombre se usa como ejemplo)

//5.1- Radiología
document.write(`<h2>Radiología</h2>`)
//5.1.1- Primera atención
let rutPrimeraRadiologia = radiologia[0].rut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); /* Extrayendo el rut de la primera consulta de la especialidad Radiología + poner puntos separadores de miles*/
let previsionPrimeraRadiologia = radiologia[0].prevision; /* Extrayendo la prevision de la primera consulta de la especialidad Radiología*/
let rutYPrevisionPrimeraRadiologia = (`Primer paciente: ${rutPrimeraRadiologia} - ${previsionPrimeraRadiologia}`); /*Juntando datos */
//5.1.2- Última atención
let rutUltimaRadiologia = radiologia[atencionesRadiologia - 1].rut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); /* Extrayendo el rut de la última consulta de la especialidad Radiología + poner puntos separadores de miles*/
let previsionUltimaRadiologia = radiologia[atencionesRadiologia - 1].prevision; /* Extrayendo la prevision de la última consulta de la especialidad Radiología*/
let rutYPrevisionUltimaRadiologia = (`Último paciente: ${rutUltimaRadiologia} - ${previsionUltimaRadiologia}`); /*Juntando datos */
//5.1.3- Juntar y mostrar datos
let datosPrimeraYUltimaAtencionRadiologia = (`<p>${rutYPrevisionPrimeraRadiologia} | ${rutYPrevisionUltimaRadiologia}</p>`)
document.write(datosPrimeraYUltimaAtencionRadiologia);

//5.2- Traumatología
document.write(`<h2>Traumatología</h2>`)
//5.2.1- Primera atención
let rutPrimeraTraumatologia = traumatologia[0].rut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); /* Extrayendo el rut de la primera consulta de la especialidad Traumatología + poner puntos separadores de miles*/
let previsionPrimeraTraumatologia = traumatologia[0].prevision; /* Extrayendo la prevision de la primera consulta de la especialidad Traumatología*/
let rutYPrevisionPrimeraTraumatologia = (`Primer paciente: ${rutPrimeraTraumatologia} - ${previsionPrimeraTraumatologia}`); /*Juntando datos */
//5.2.2- Última atención
let rutUltimaTraumatologia = traumatologia[atencionesTraumatologia - 1].rut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); /* Extrayendo el rut de la última consulta de la especialidad Traumatología + poner puntos separadores de miles*/
let previsionUltimaTraumatologia = traumatologia[atencionesTraumatologia - 1].prevision; /* Extrayendo la prevision de la última consulta de la especialidad Traumatología*/
let rutYPrevisionUltimaTraumatologia = (`Último paciente: ${rutUltimaTraumatologia} - ${previsionUltimaTraumatologia}`); /*Juntando datos */
//5.2.3- Juntar y mostrar datos
let datosPrimeraYUltimaAtencionTraumatologia = (`<p>${rutYPrevisionPrimeraTraumatologia} | ${rutYPrevisionUltimaTraumatologia}</p>`)
document.write(datosPrimeraYUltimaAtencionTraumatologia);

//5.3- Dental
document.write(`<h2>Dental</h2>`)
//5.3.1- Primera atención
let rutPrimeraDental = dental[0].rut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); /* Extrayendo el rut de la primera consulta de la especialidad Dental + poner puntos separadores de miles*/
let previsionPrimeraDental = dental[0].prevision; /* Extrayendo la prevision de la primera consulta de la especialidad Dental*/
let rutYPrevisionPrimeraDental = (`Primer paciente: ${rutPrimeraDental} - ${previsionPrimeraDental}`); /*Juntando datos */
//5.3.2- Última atención
let rutUltimaDental = dental[atencionesDental - 1].rut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); /* Extrayendo el rut de la última consulta de la especialidad Dental + poner puntos separadores de miles*/
let previsionUltimaDental = dental[atencionesDental - 1].prevision; /* Extrayendo la prevision de la última consulta de la especialidad Dental*/
let rutYPrevisionUltimaDental = (`Último paciente: ${rutUltimaDental} - ${previsionUltimaDental}`); /*Juntando datos */
//5.3.3- Juntar y mostrar datos
let datosPrimeraYUltimaAtencionDental = (`<p>${rutYPrevisionPrimeraDental} | ${rutYPrevisionUltimaDental}</p>`)
document.write(datosPrimeraYUltimaAtencionDental);

//Sebastián Segura Osorio - Julio 2020//