class Alumno {
    constructor (nombre, materia, nota) {
        this.nombre = nombre;
        this.materia = materia;
        this.nota = nota;
    }
}


const alumno1 = new Alumno (prompt("Ingrese Alumno"), prompt("Ingrese materia"), parseFloat(prompt("Ingrese nota")));

const alumno2 = new Alumno (prompt("Ingrese Alumno"), prompt("Ingrese materia"), parseFloat(prompt("Ingrese nota")));

const alumno3 = new Alumno (prompt("Ingrese Alumno"), prompt("Ingrese materia"), parseFloat(prompt("Ingrese nota")));

const alumno4 = new Alumno (prompt("Ingrese Alumno"), prompt("Ingrese materia"), parseFloat(prompt("Ingrese nota")));

const alumnos = [alumno1, alumno2, alumno3, alumno4];

const divalum = document.getElementById("alumncontainer");

let aprobado;

alumnos.forEach(alumnos => {
    if (alumnos.nota >= 6){
        aprobado = "Aprobado";
    }
    else {
        aprobado = "Desaprobado";
    }

    divalum.innerHTML += `
    <div id="alumn">
        <p>Nombre: ${alumnos.nombre}</p>
        <p>Materia: ${alumnos.materia}</p>
        <p>Nota: ${alumnos.nota}</p>
        <p>${aprobado}</p>
    </div>
    <br>
    `;
})
