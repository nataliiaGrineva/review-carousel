const reviews = [
  {
    id: 1,
    name: 'Princess Bubblegum',
    job: 'Gum Person',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/2/2d/Young_Princess_Bubblegum_1.png',
    text: 'Princess Bubblegum is the current incarnation of the Candy Elemental, comparable to the inhabitants of the Candy Kingdom, who are all composed of types of desserts and candies.',
  },
  {
    id: 2,
    name: 'Finn',
    job: 'Human',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png',
    text: 'Finn Mertens is the protagonist in Adventure Time.',
  },
  {
    id: 3,
    name: 'Jake',
    job: 'Dog',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png',
    text: "Jake is one of the main characters of Adventure Time. He is a dog/shape-shifter hybrid, referred to by others as a magical dog, and Finn's constant companion, best friend, and adoptive brother.",
  },
  {
    id: 4,
    name: 'Marceline',
    job: 'Vampire',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/ef/Marceline_de_ni%C3%B1a.png',
    text: 'Marceline Abadeer is one of the main characters in Adventure Time and the main protagonist of the miniseries Stakes.',
  },
  {
    id: 5,
    name: 'Princess Cookie',
    job: 'Cookie',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/b/b3/Princess_Cookie.png',
    text: 'Princess Cookie is a Candy Person who appears in the episode "Princess Cookie."',
  },
  {
    id: 6,
    name: 'Lumpy Space Princess',
    job: 'Lumpy Space Person',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png',
    text: 'Lumpy Space Princess is the queen of Lumpy Space. She is one of the three most recurring princesses, the other two being Flame Princess and Princess Bubblegum.',
  },
  {
    id: 7,
    name: 'Flame Princess',
    job: 'Flame Person',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/1/12/Flame_Queen.png',
    text: 'Flame Princess, whose name is Phoebe and who is occasionally called FP, is the current ruler of the Fire Kingdom as well as Finn\'s ex-girlfriend.',
  },
  {
    id: 8,
    name: 'BMO',
    job: 'Video Game Console System',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png',
    text: 'BMO is Finn and Jake\'s living video game console system, portable electrical outlet, computer, music player, VCR, video player, video editor, roommate, camera, alarm clock, toaster, flashlight, strobe light, skateboarder, soccer player, tape player, chef, detective, and friend.',
  },
  {
    id: 9,
    name: 'Lady Rainicorn',
    job: 'Rainicorn',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png',
    text: 'Lady Rainicorn is a female Rainicorn and is Princess Bubblegum\'s royal steed, best friend, and companion. She is also Jake\'s girlfriend, and sometimes follows Finn and Jake on their adventures. She only speaks Korean, speaking English only when equipped with a universal translator device.',
  },
  {
    id: 10,
    name: 'Ice King',
    job: 'Human',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png',
    text: 'Simon Petrikov, formerly known as the Ice King, is the pentagonist of Adventure Time.',
  },
  {
    id: 11,
    name: 'The Lich',
    job: 'Cosmic Entity',
    img: 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/1/1d/Modelsheet_sweetp._nude-0.png',
    text: 'He is an ancient cosmic being who is the manifestation of the inevitable death of all things.',
  },
];

// select items
const img = document.getElementById('person_img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev_btn');
const nexBtn = document.querySelector('.next_btn');
const randomBtn = document.querySelector('.random_btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

const setDisabledButton = (item) => {
  if (item > 0 && item < reviews.length - 1) {
    prevBtn.disabled = false;
    nexBtn.disabled = false;
  } else if (item === 0) {
    prevBtn.disabled = true;
    nexBtn.disabled = false;
  } else if (item === reviews.length - 1) {
    prevBtn.disabled = false;
    nexBtn.disabled = true;
  }
};

// show person based on item
const showPerson = (person) => {
  const item = reviews[person];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person

nexBtn.addEventListener('click', function() {
  currentItem++;
  showPerson(currentItem);
  setDisabledButton(currentItem);
});

prevBtn.addEventListener('click', function() {
  currentItem--;
  showPerson(currentItem);
  setDisabledButton(currentItem);
});

const setRandomPerson = () => {
  const randomPerson = Math.floor(Math.random() * reviews.length);

  currentItem = randomPerson;
  showPerson(currentItem);
  setDisabledButton(currentItem);
};

randomBtn.addEventListener('click', setRandomPerson);
