import { data } from "./data/data.js";

let container = document.querySelector('.container');
const input = document.querySelector(".input__name");
const select = document.querySelector(".choose-one");
const reset = document.querySelector("h1");


const createCard = (obj) => {
  const card = document.createElement('article');
  card.className = "card";
  card.innerHTML = `<img class="ava" src="${obj.image}" alt="ava">
  <h3>${obj.name}</h3>
  <p class="actor">Actor: ${obj.actor}</p>
  <p class="gender">Gender: ${obj.gender}</p>
  <p class="house">House: ${obj.house}</p>
  <p class="wand-core">Wand core: ${obj.wand.core}</p>
  <p class="alive">Alive: ${obj.alive === true ? 'yes' : 'no'}</p>`;
  return card
}

// функция  заполняющая карточки при загрузке страницы
const creator = () => {
  container.innerHTML = '';
  data.forEach(el => container.append(createCard(el)))
}
creator()



// функция отслеживающая инпут
let creator2 = () => {
  container.innerHTML = '';
  data.forEach(el => {
    if (
      el.name.toLowerCase().includes(input.value.toLowerCase())
      
    ) {
      container.append(createCard(el))
    }
  })
}  


// функция отслеживающая инпут и селект
const creator3 = () => {
  container.innerHTML = "";
  data.forEach((el) => {
    if (el.name.toLowerCase().includes(input.value.toLowerCase()) &&
    el.house === select.value) {
      container.append(createCard(el));
    } else if (
      select.value === "" &&
      el.name.toLowerCase().includes(input.value.toLowerCase())
    ) {
       container.append(createCard(el));
    }
  });
}




input.addEventListener("input", function () {
  creator3();
});
select.addEventListener('change', function () {
  creator3()
})
reset.addEventListener('click', function () {
  select.value = "";
  input.value = '';
  creator();
})