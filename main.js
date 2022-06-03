const teams = [
  {
    img: "./assets/img/wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnet",
    role: "Founder & CEO",
  },
  {
    img: "./assets/img/angela-caroll-chief-editor.jpg",
    name: "Angela Caroll",
    role: "Chief Editor",
  },
  {
    img: "./assets/img/walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager",
  },
  {
    img: "./assets/img/angela-lopez-social-media-manager.jpg",
    name: "Angela Lopez",
    role: "Social Media Manager",
  },
  {
    img: "./assets/img/scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer",
  },
  {
    img: "./assets/img/barbara-Ramos-graphic-designer.jpg",
    name: "Barbara Ramos",
    role: "Graphic Designer",
  },
];

let containerTeamCard = document.querySelector(".container__teamcard");
let inputName = document.getElementById("name");
let inputRole = document.getElementById("role");
let inputImage = document.getElementById("img");
let buttonAddMember = document.querySelector(".add__button");

buttonAddMember.addEventListener("click", (e) => {
  e.preventDefault();
  dispalyImage();
  addNewObject(inputName, inputRole, inputImage);
});

//  funzione per creare nuovo oggetto
function addNewObject(name, role, image) {
  let newObj = {
    img: inputImage.value,
    name: inputName.value,
    role: inputRole.value,
  };
  teams.push(newObj);
  console.log(teams);
}

dispalyImage();

function dispalyImage() {
  containerTeamCard.innerHTML = "";
  for (i = 0; i < teams.length; i++) {
    containerTeamCard.innerHTML += `<div class="card">
    <img
      src="${teams[i].img}"
      alt="wayne-barnett-founder-ceo"
    />
    <h5 class="name">${teams[i].name}</h5>
    <p class="role">${teams[i].role}</p>
  </div>`;
  }
}
