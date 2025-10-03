const questions = [
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion1.mp3", 
    answerOptions: [
      { answerText: "People frighten", isCorrect: false },
      { answerText: "Electrified", isCorrect: false },
      { answerText: "I choose you", isCorrect: false },
      { answerText: "You are the one that I want", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion2.mp3",
    answerOptions: [
      { answerText: "Waterloo", isCorrect: false },
      { answerText: "Mamma mía", isCorrect: false },
      { answerText: "Dancing Queen", isCorrect: true },
      { answerText: "Chiquitita", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion3.mp3",
    answerOptions: [
      { answerText: "La niña fresa", isCorrect: false },
      { answerText: "Mami que será lo que tiene el negro", isCorrect: false },
      { answerText: "Un limón y medio limón", isCorrect: false },
      { answerText: "Cachete con cachete", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion4.mp3",
    answerOptions: [
      { answerText: "Cachete con cachete", isCorrect: false },
      { answerText: "Para no verte más", isCorrect: false },
      { answerText: "Mami que será lo que tiene el negro", isCorrect: true },
      { answerText: "Living jump", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion5.mp3",
    answerOptions: [
      { answerText: "Fiesta", isCorrect: false },
      { answerText: "La Barbacoa", isCorrect: true },
      { answerText: "Barbacue", isCorrect: false },
      { answerText: "Morcillas", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion6.mp3",
    answerOptions: [
      { answerText: "Hay que venir al sur", isCorrect: false },
      { answerText: "Explota me expló", isCorrect: false },
      { answerText: "Pedro", isCorrect: false },
      { answerText: "Fiesta", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion7.mp3",
    answerOptions: [
      { answerText: "Mi Gato", isCorrect: true },
      { answerText: "Sarandonga", isCorrect: false },
      { answerText: "Colores en el viento", isCorrect: false },
      { answerText: "Gato al agua", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion8.mp3",
    answerOptions: [
      { answerText: "Los pollitos", isCorrect: false },
      { answerText: "Mallorca", isCorrect: false },
      { answerText: "Fiesta", isCorrect: false },
      { answerText: "Pajaritos", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion9.mp3",
    answerOptions: [
      { answerText: "Flechas de amor", isCorrect: false },
      { answerText: "El Baúl de los recuerdos", isCorrect: true },
      { answerText: "Soy rebelde", isCorrect: false },
      { answerText: "Por qué será", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion10.mp3",
    answerOptions: [
      { answerText: "Corre caballito", isCorrect: false },
      { answerText: "Ola Ola Ola", isCorrect: false },
      { answerText: "Corazón Contento", isCorrect: true },
      { answerText: "Campanera", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion11.mp3",
    answerOptions: [
      { answerText: "Quince años tiene mi amor", isCorrect: true },
      { answerText: "Resistiré", isCorrect: false },
      { answerText: "Amor de verano", isCorrect: false },
      { answerText: "Un ángel", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion12.mp3",
    answerOptions: [
      { answerText: "Colores de patria", isCorrect: false },
      { answerText: "Mi bandera", isCorrect: false },
      { answerText: "Macarena", isCorrect: false },
      { answerText: "Sevilla", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion13.mp3",
    answerOptions: [
      { answerText: "Sevilla", isCorrect: false },
      { answerText: "Amante bandido", isCorrect: true },
      { answerText: "Tú y yo", isCorrect: false },
      { answerText: "Don diablo", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion14.mp3",
    answerOptions: [
      { answerText: "Sábanas blancas", isCorrect: false },
      { answerText: "Sobreviviré", isCorrect: false },
      { answerText: "Devórame otra vez", isCorrect: true },
      { answerText: "Desátame", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion15.mp3",
    answerOptions: [
      { answerText: "Cien Gaviotas", isCorrect: true },
      { answerText: "Hoy vuelan", isCorrect: false },
      { answerText: "Volverán", isCorrect: false },
      { answerText: "Volando voy", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion16.mp3",
    answerOptions: [
      { answerText: "Sin papeles", isCorrect: false },
      { answerText: "Sin poder hablar", isCorrect: false },
      { answerText: "Por que sí", isCorrect: false },
      { answerText: "Sin documentos", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion17.mp3",
    answerOptions: [
      { answerText: "Negro y blanco", isCorrect: false },
      { answerText: "Blanco y negro", isCorrect: true },
      { answerText: "Lo veo negro", isCorrect: false },
      { answerText: "Lo veo blanco", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion18.mp3",
    answerOptions: [
      { answerText: "Pena me da", isCorrect: false },
      { answerText: "Que se me ha muerto", isCorrect: false },
      { answerText: "El canario", isCorrect: false },
      { answerText: "Pena, penita, pena", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion19.mp3",
    answerOptions: [
      { answerText: "Aguanta", isCorrect: false },
      { answerText: "Perdóname", isCorrect: true },
      { answerText: "Sólo tú", isCorrect: false },
      { answerText: "Tú y yo", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion20.mp3",
    answerOptions: [
      { answerText: "Me quedo contigo", isCorrect: true },
      { answerText: "Amor de compra y venta", isCorrect: false },
      { answerText: "Mata a la cucaracha", isCorrect: false },
      { answerText: "El torete", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion21.mp3",
    answerOptions: [
      { answerText: "El torete", isCorrect: false },
      { answerText: "Me quedo contigo", isCorrect: false },
      { answerText: "Amor de compra y venta", isCorrect: true },
      { answerText: "Paloma blanca", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion22.mp3",
    answerOptions: [
      { answerText: "Thriller", isCorrect: false },
      { answerText: "Smooth criminal", isCorrect: true },
      { answerText: "Are you OK", isCorrect: false },
      { answerText: "Billie Jean", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion23.mp3",
    answerOptions: [
      { answerText: "Apatrullando la ciudad", isCorrect: false },
      { answerText: "Torito guapo", isCorrect: false },
      { answerText: "Amapolas", isCorrect: false },
      { answerText: "El bichito del amor", isCorrect: true }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion24.mp3",
    answerOptions: [
      { answerText: "Una rosa es una rosa", isCorrect: false },
      { answerText: "Cruz de Navajas", isCorrect: true },
      { answerText: "Hijo de la luna", isCorrect: false },
      { answerText: "Mario", isCorrect: false }
    ]
  },
  {
    questionText: "¿Cómo se llama esta canción?",
    audio: "/cancion25.mp3",
    answerOptions: [
      { answerText: "Como yo te amo", isCorrect: true },
      { answerText: "Pega la vuelta", isCorrect: false },
      { answerText: "Olvídate", isCorrect: false },
      { answerText: "Yo", isCorrect: false }
    ]
  }
];

export default questions;
