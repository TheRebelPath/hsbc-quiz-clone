const questions = [
  {
    questionText: "Pablo Garea es mejor conocido como?",
    answerOptions: [
      { answerText: "El azotador de locas", isCorrect: false },
      { answerText: "El guapo de colima", isCorrect: false },
      { answerText: "El camino de la serpiente", isCorrect: true },
      { answerText: "El Querendon de Adamar", isCorrect: false },
    ],
  },
  {
    questionText: "Cual es el titulo honorario del papa del Galote?",
    answerOptions: [
      { answerText: "Sr Calderas", isCorrect: false },
      { answerText: "Uyuyuy", isCorrect: false },
      { answerText: "El Coco", isCorrect: false },
      { answerText: "Sr Chapala", isCorrect: true },
    ],
  },
  {
    questionText: "Quien es el CEO de Edicion Especial?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Diego Garea", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Mark Zuckerberg", isCorrect: false },
    ],
  },
  {
    questionText: "En que película interpreta Johnny Depp al Capitán Jack Sparrow?",
    answerOptions: [
      { answerText: "Piratas del Caribe: El cofre de la muerte", isCorrect: false },
      { answerText: "Alicia en el país de las maravillas", isCorrect: false },
      { answerText: "Piratas del Caribe: La maldición del Perla Negra", isCorrect: true },
      { answerText: "El joven manos de tijera", isCorrect: false },
    ],
  },
  {
    questionText: "Cual es el nombre real de la cantante Beyoncé?",
    answerOptions: [
      { answerText: "Beyoncé Knowles-Carter", isCorrect: true },
      { answerText: "Beyoncé Johnson", isCorrect: false },
      { answerText: "Beyoncé Smith", isCorrect: false },
      { answerText: "Beyoncé Williams", isCorrect: false },
    ],
  },
  {
    questionText: "En qué serie de televisión se encuentra el personaje Walter White?",
    answerOptions: [
      { answerText: "Breaking Bad", isCorrect: true },
      { answerText: "The Walking Dead", isCorrect: false },
      { answerText: "Stranger Things", isCorrect: false },
      { answerText: "Game of Thrones", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el nombre del famoso ratón de Disney?",
    answerOptions: [
      { answerText: "Jerry", isCorrect: false },
      { answerText: "Mickey Mouse", isCorrect: true },
      { answerText: "Stuart Little", isCorrect: false },
      { answerText: "Remy", isCorrect: false },
    ],
  },
  {
    questionText: "Quién interpretó el papel de Iron Man en las películas de Marvel?",
    answerOptions: [
      { answerText: "Chris Hemsworth", isCorrect: false },
      { answerText: "Mark Ruffalo", isCorrect: false },
      { answerText: "Chris Evans", isCorrect: false },
      { answerText: "Robert Downey Jr.", isCorrect: true },
    ],
  },
  {
    questionText: "Cuál es la ciudad natal de Batman?",
    answerOptions: [
      { answerText: "Gotham City", isCorrect: false },
      { answerText: "Metropolis", isCorrect: false },
      { answerText: "Central City", isCorrect: false },
      { answerText: "Ciudad Gótica", isCorrect: true },
    ],
  },
  {
    questionText: "Qué personaje es conocido por la frase 'May the Force be with you'?",
    answerOptions: [
      { answerText: "Darth Vader", isCorrect: false },
      { answerText: "Yoda", isCorrect: true },
      { answerText: "Han Solo", isCorrect: false },
      { answerText: "Luke Skywalker", isCorrect: false },
    ],
  },
  {
    questionText: "En qué película se encuentra el personaje Forrest Gump?",
    answerOptions: [
      { answerText: "Forrest Gump", isCorrect: true },
      { answerText: "Rain Man", isCorrect: false },
      { answerText: "Saving Private Ryan", isCorrect: false },
      { answerText: "Cast Away", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el nombre del actor que interpreta a Tony Stark en el MCU?",
    answerOptions: [
      { answerText: "Chris Pratt", isCorrect: false },
      { answerText: "Tom Hanks", isCorrect: false },
      { answerText: "Robert Downey Jr.", isCorrect: true },
      { answerText: "Chris Evans", isCorrect: false },
    ],
  },
  {
    questionText: "Quién es el autor de la serie de libros 'Harry Potter'?",
    answerOptions: [
      { answerText: "Stephen King", isCorrect: false },
      { answerText: "J.R.R. Tolkien", isCorrect: false },
      { answerText: "George R.R. Martin", isCorrect: false },
      { answerText: "J.K. Rowling", isCorrect: true },
    ],
  },
  {
    questionText: "Cuál es el nombre del protagonista en la película 'The Matrix'?",
    answerOptions: [
      { answerText: "John Wick", isCorrect: false },
      { answerText: "Neo", isCorrect: true },
      { answerText: "Trinity", isCorrect: false },
      { answerText: "Morpheus", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el nombre del dinosaurio principal en 'Jurassic Park'?",
    answerOptions: [
      { answerText: "Stegosaurus", isCorrect: false },
      { answerText: "Tyrannosaurus Rex", isCorrect: true },
      { answerText: "Velociraptor", isCorrect: false },
      { answerText: "Brachiosaurus", isCorrect: false },
    ],
  },
  {
    questionText: "Quién interpretó a Katniss Everdeen en la serie de películas 'Los Juegos del Hambre'?",
    answerOptions: [
      { answerText: "Emma Watson", isCorrect: false },
      { answerText: "Jennifer Lawrence", isCorrect: true },
      { answerText: "Shailene Woodley", isCorrect: false },
      { answerText: "Natalie Portman", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el nombre del planeta natal de Superman?",
    answerOptions: [
      { answerText: "Krypton", isCorrect: true },
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: false },
      { answerText: "Asgard", isCorrect: false },
    ],
  },
  {
    questionText: "En qué película de Disney aparece el personaje Simba?",
    answerOptions: [
      { answerText: "Mulan", isCorrect: false },
      { answerText: "Aladdin", isCorrect: false },
      { answerText: "The Lion King", isCorrect: true },
      { answerText: "Beauty and the Beast", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el nombre del director de la trilogía 'El Señor de los Anillos'?",
    answerOptions: [
      { answerText: "Steven Spielberg", isCorrect: false },
      { answerText: "George Lucas", isCorrect: false },
      { answerText: "Peter Jackson", isCorrect: true },
      { answerText: "Christopher Nolan", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el título de la primera película de la saga 'Star Wars'?",
    answerOptions: [
      { answerText: "The Empire Strikes Back", isCorrect: false },
      { answerText: "Return of the Jedi", isCorrect: false },
      { answerText: "A New Hope", isCorrect: true },
      { answerText: "The Phantom Menace", isCorrect: false },
    ],
  },
  {
    questionText: "En qué película se encuentra el personaje James Bond?",
    answerOptions: [
      { answerText: "Die Hard", isCorrect: false },
      { answerText: "Mission: Impossible", isCorrect: false },
      { answerText: "Casino Royale", isCorrect: true },
      { answerText: "The Bourne Identity", isCorrect: false },
    ],
  },
  {
    questionText: "Quién es el protagonista de la película 'Deadpool'?",
    answerOptions: [
      { answerText: "Hugh Jackman", isCorrect: false },
      { answerText: "Ryan Reynolds", isCorrect: true },
      { answerText: "Chris Pratt", isCorrect: false },
      { answerText: "Chris Hemsworth", isCorrect: false },
    ],
  },
  {
    questionText: "Cuál es el nombre del protagonista en la serie 'Sherlock Holmes'?",
    answerOptions: [
      { answerText: "John Watson", isCorrect: false },
      { answerText: "Hercule Poirot", isCorrect: false },
      { answerText: "Adrian Monk", isCorrect: false },
      { answerText: "Sherlock Holmes", isCorrect: true },
    ],
  },
];

export default questions
