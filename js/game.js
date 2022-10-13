const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const pontos = document.querySelector('.pontos');
const button = document.querySelector('.button');


const jumper = (event) => {
    if (event.keyCode != 27) {
        mario.classList.add('jump')
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 800)
    };
}





const loop = setInterval(() => {



    const pipePosition = Number(window.getComputedStyle(pipe).left.replace('px', ''));
    const cloudsPosition = clouds.offsetLeft;
    const marioPositionY = Number(window.getComputedStyle(mario).bottom.replace('px', ''));

    if (pipePosition <= 25  && pipePosition > 0 && marioPositionY <= 37) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPositionY}px`

        clouds.style.left = `${cloudsPosition}px`
        clouds.style.animation = 'none';

        mario.src = '../imgs/game-over.png'
        mario.style.width = "30px"
        mario.style.marginLeft = "25px"


        button.style.left = "30%"          
        
        clearInterval(loop)
        setTimeout(() => {
            alert(`Seus pontos são: ${pontos.innerHTML}`)  
        }, 10);
        
        
    }
    
    const currentPontos = Number(pontos.innerHTML)
    pontos.innerHTML = (currentPontos + 0.01).toFixed(2)

    if (currentPontos >= 0 && currentPontos < 5){
        console.log('a')
        pipe.style.animation = `pipe-animation 3s infinite linear`
    }else if (currentPontos >= 5 && currentPontos <10){
        pipe.style.animation = `pipe-animation 2s infinite linear`
    }else {
        pipe.style.animation = `pipe-animation 1s infinite linear`

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