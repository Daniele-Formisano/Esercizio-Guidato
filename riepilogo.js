const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

console.log("Nomi degli studenti:");
studenti.forEach((studente) => console.log(studente.nome));

console.log("Primo studente con voto maggiore a 90:");
const primoStudente90 = studenti.find((studente) => studente.voto >= 90);
console.log(primoStudente90);

console.log("Media dei voti degli studenti");
const mediaVoti =
  studenti.reduce((a, studente) => a + studente.voto, 0) / studenti.length;
console.log(mediaVoti);

console.log("Nomi degli studenti in maiuscolo");
const nomiInMaiuscolo = studenti.map((studente) => studente.nome.toUpperCase());
console.log(nomiInMaiuscolo);

console.log("Studenti con voto maggiore a 85");
const studentiConAlmeno85 = studenti.filter((studente) => studente.voto >= 85);
console.log(studentiConAlmeno85);
