const randomBtn = document.querySelector('.randomBtn');
const colorInput = document.querySelector('#colorInput');
const applyBtn = document.querySelector('.applyBtn');
const currentColorValue = document.querySelector('.currentColorValue'); 
const container = document.querySelector('.container'); 

const colorArray = ['red', 'blue', 'green', 'yellow', 'lightgreen', 'aqua', 'violet', 'lightcoral', 'cyan', 'tomato', 'white', 'lightseagreen'];

const randomColor = ()=>{
    const randomNumber = Math.floor(Math.random()*colorArray.length) 
    return colorArray[randomNumber]
}


const changeColor = (color) =>{
    container.style.backgroundColor = color;
    currentColorValue.innerText = color
};


const randomBtnClick = () =>{
 let color = randomColor()
 changeColor(color)
};

const applyBtnClick = () =>{
    const color = colorInput.value;
    changeColor(color)
};



randomBtn.addEventListener('click', randomBtnClick);
applyBtn.addEventListener('click', applyBtnClick)

