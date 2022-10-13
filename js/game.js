const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const pontos = document.querySelector('.pontos');
const button = document.querySelector('.button');
let perdeu = ''

const jumper = (event) => {
    if (event.keyCode != 27) {
        mario.classList.add('jump')
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    };
}





const loop = setInterval(() => {



    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 79) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        clouds.style.left = `${cloudsPosition}px`
        clouds.style.animation = 'none';

        mario.src = '../imgs/game-over.png'
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        button.style.left = "50%"

        perdeu = 'S'
        button.style.left = "50%"          

        clearInterval(loop)
        setTimeout(() => {
            alert(`Seus pontos são: ${pontos.innerHTML}`)  
        }, 400);
        

    }

        const currentPontos = Number(pontos.innerHTML)
        pontos.innerHTML = (currentPontos + 0.01).toFixed(2)
        console.log(pontos.innerHTML)
    if (pontos.innerHTML >= 3 && pipePosition < 0){
         pipe.style.animation = `pipe-animation 2s infinite linear`
    }

}, 10);


const reloadESC = (event) => {
    if(event.keyCode === 27)
        window.location.reload(true)
}
const reload = () => {
        window.location.reload(true)
}
button.addEventListener("click", reload);
document.addEventListener("keyup", reloadESC);
document.addEventListener("keydown", jumper);
document.addEventListener("click", jumper);