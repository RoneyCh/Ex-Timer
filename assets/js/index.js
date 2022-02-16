const timer = document.querySelector(".timer");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) =>
  item.addEventListener("click", (e) => {
    const clique = e.currentTarget.classList;

    if (clique.contains("iniciar")) {
      timer.classList.remove('pausado');  
      contador();
    }
    if(clique.contains('pausar')) {
        timer.classList.add('pausado'); 
        clearInterval(contando);
    }
    if(clique.contains('zerar')) {
        clearInterval(contando);
        count = 0;
        timer.textContent = '00:00:00'; 
    }
  })
);

let count = 0;
let contando;

const contador = () => {
  contando = setInterval(() => {
    count++;
    timer.textContent = getTimeFromSec(count);
  }, 1000);
};

const getTimeFromSec = (sec) => {
  const data = new Date(sec * 1000);
  return data.toLocaleTimeString("pt-BR", {
    timeZone: "GMT",
  });
};
