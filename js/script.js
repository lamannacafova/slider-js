const slider=document.querySelector("#slider")
const imagesData=["tom and jerry.jpg","sedrik and shen.jpg","spancbuk.jpg","pinokiyo.jpg","miq-miq.jpg"]
let x=0
show()
function prev(){
    if(x>0){
        x--
    }
    else{
        x=imagesData.length-1
    }
    show()
}
function next(){
    if(x < imagesData.length-1){
        x++
    } 
    else{
        x=0
    }  
    show()
}
function show(){
    slider.style.background=`url('./img/${imagesData[x]}') center/cover`
}

const nextInterval=setInterval(next,2000)