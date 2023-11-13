let edad = Number (prompt("ingrese su edad"));
let licenciaProfesional = confirm("tiene licencia profesional");
if (edad >= 25 && licenciaProfesional){
    alert("es apto");
} else {
    alert("no es apto");
}