const randomColor = function(){
    let hex = '0123456789ABCDEF'
    color= "#"
    for(let i = 0; i<6; i++ ){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
const startColorChange = () => {
    if(!intervalId){
    intervalId = setInterval(changebg, 1000)
    }
    function changebg(){
        document.querySelector('body').style.backgroundColor = randomColor()
    }

}
const stopColorChange= () => {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener("click", startColorChange)
document.querySelector('#stop').addEventListener("click", stopColorChange)