import { students } from "./data/sample_data.js";

const result = students.some((student) => student.lastname === "Doe");

console.log(result); //solo devuelve true o false si existe la condición