import { data } from "./data/data.js";

let container = document.querySelector('.container');
const input = document.querySelector(".input__name");
const select = document.querySelector(".choose-one");
const reset = document.querySelector("h1");
const like = document.querySelector(".like");

const createCard = (obj) => {
  const card = document.createElement('article');
  card.className = "card";
  card.innerHTML = `<img class="ava" src="${obj.image}" alt="ava">
  <h3>${obj.name}</h3>
  <p class="actor">Actor: ${obj.actor}</p>
  <p class="gender">Gender: ${obj.gender}</p>
  <p class="house">House: ${obj.house}</p>
  <p class="wand-core">Wand core: ${obj.wand.core}</p>
  <p class="alive">Alive: ${obj.alive === true ? "yes" : "no"}</p>
   
   <label for="checkbox">    
<input class="checkbox" id="checkbox" type="checkbox">
 <span class="circle">  
      <svg class= "like"
          width="800px"
          height="800px"
          viewBox="0 0 1024 1024"
         
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"
            fill="lightgray"
          /></svg >
        </span>
 </label>`;
  
  container.append(card)
}

// функция  заполняющая карточки при загрузке страницы
const creator = () => {
  container.innerHTML = '';
  data.forEach(el => createCard(el))
}
creator()



// функция отслеживающая инпут
let creator2 = () => {
  container.innerHTML = '';
  data.forEach(el => {
    if (
      el.name.toLowerCase().includes(input.value.toLowerCase())
      
    ) {
      createCard(el)
    }
  })
}  


// функция отслеживающая инпут и селект
const creator3 = () => {
  container.innerHTML = "";
  data.forEach((el) => {
    if (el.name.toLowerCase().includes(input.value.toLowerCase()) &&
    el.house === select.value) {
      createCard(el);
    } else if (
      select.value === "" &&
      el.name.toLowerCase().includes(input.value.toLowerCase())
    ) {
       createCard(el);
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
