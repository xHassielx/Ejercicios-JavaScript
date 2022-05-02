// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img:
      "https://xavierferras.com/wp-content/uploads/2019/02/267-persona-2-1-300x268.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    img:
      "https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "intern",
    img:
      "https://pbs.twimg.com/media/DcGWJ8SX0AA7s57.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "the boss",
    img:
      "https://pbs.twimg.com/profile_images/1191541615606849536/1-aL50mf_400x400.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. ",
  },
  {
    id: 5,
    name: "Steve Jobs",
    job: "The Other Boss",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    text:
      "This Page is Amazing.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set item inicial
let currentItem = 0;

// carga item de inicio
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// mostrar persona basada en el item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// mostrar siguiente persona
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// mostrar persona anterior
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// mostrar persona random
randomBtn.addEventListener("click", function () {
  console.log("Hola");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
