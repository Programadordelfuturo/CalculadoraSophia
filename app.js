const keys = document.querySelectorAll(".key");
const resultado = document.querySelector(".resultado");
const botonIgual = document.querySelector("#solucion");
const exit = document.querySelector("#eliminar");
const off = document.querySelector(".OFF");
const body = document.querySelector("body");
const checkBox = document.querySelectorAll("[type='checkbox']")
const primerChecked = document.querySelector(".C1");
const secondChecked = document.querySelector(".C2");
const tercerChecked = document.querySelector(".C3");

let keyPressed = "";
let displayValue = "";
let value = "";
let operator = "";
let solucion = [];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];


for (let i = 0; i < keys.length; i++) {

  keys[i].addEventListener("click", (e) => {
    keys[i].classList.add("pressed");

    keyPressed = e.target.textContent;

    if(numbers.includes(keyPressed) && solucion.length === 0) {
      displayValue +=keyPressed
      resultado.innerHTML = displayValue;
      } else if (!numbers.includes(keyPressed) && solucion.length === 0) {
          switch (keyPressed) {
            case "AC":
              clear();
              clearTotal();   
              break
            case '+':
              value = Number(displayValue);
              operator = '+';
              clear();
              break
            case '-':
              value = Number(displayValue);
              operator = '-';
              clear();
              break
            case '*':
              value = Number(displayValue);
              operator = '*';
              clear();
              break
            case '/':
              value = Number(displayValue);
              operator = '/';
              clear();
              break
            case '=':
              let igual = calculator(operator, value, Number(displayValue));
              clear();
              resultado.innerHTML = igual
              solucion.push(igual)
              break
          } 
          
        } else if (solucion.length === 1 && numbers.includes(keyPressed)) {
          clear();
          clearTotal();
          console.log(displayValue, solucion, resultado)
          displayValue +=keyPressed;
          resultado.innerHTML = displayValue;
        } else if (solucion.length === 1 && !numbers.includes(keyPressed)) {
            switch(keyPressed) {
              case "AC":
                clear();
                clearTotal();
                break
              case '+':
                value = solucion[0];
                operator = '+';
                clear();
                break
              case '-':
                value = solucion[0];
                operator = '-';
                clear();
                break
              case '/':
                value = solucion[0];
                operator = '/';
                clear();
                break
              case '*':
                value = solucion[0];
                operator = '*';
                clear();
                break
              case '=':
                let newIgual = calculator(operator, value, Number(displayValue));
                clear();
                resultado.innerHTML = newIgual;
                solucion.push(newIgual);
                solucion.splice(0, 1);
                break
            } 
            console.log(solucion) 
          }    
  });

  keys[i].addEventListener("transitionend", () => {
    if (keys[i].classList.contains("pressed")) {
      keys[i].classList.remove("pressed");
    }
  });
}

off.addEventListener("click", () => {
  clear();
  clearTotal();
})

function clear() {
  displayValue = "";
  resultado.innerHTML = "";
}

function clearTotal() {
  solucion = [];
}

function calculator(operator, num1, num2) {
  let all = 0;
  switch (operator) {
    case '+':
      all = num1 + num2
      break
    case '-':
      all = num1 - num2
      break
    case '*':
      all = num1 * num2
      break
    case '/':
      all = num1 / num2
      break
  }
  return all;
}

let state1 = [];
let state2 = [];
let state3 = [];

checkBox.forEach((element)=>{
  element.addEventListener("click", (e)=>{
    press = e.target.checked;
    // console.log(e.target.classList.contains('C1'));
    // console.log(press)

    if(press && e.target.classList.contains('C1') && body.style.background !== 'var(--tercer-color)'){
      body.style.background = 'var(--tercer-color)';
      body.style.backgroundSize = 'cover'
    } else {
      body.style.background == 'var(--primary-color)'
    }

    if(press && e.target.classList.contains('C2') && body.style.background !== 'var(--four-color)'){
      body.style.background = 'var(--four-color)'
      body.style.backgroundSize = 'cover'  
    } else {
      body.style.background == 'var(--primary-color)'
    }

    if(press && e.target.classList.contains('C3') && body.style.background !== 'var(--five-color)') {
      body.style.background = 'var(--primary-color)'
      body.style.backgroundSize = 'cover'
    } else {
      body.style.background == 'var(--primary-color)'
    }
  })
});