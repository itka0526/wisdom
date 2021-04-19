

const firststep = ()=>{
  
  const removeMe = ()=>{

    const secondstepimage = document.getElementById('secondstep');
    secondstepimage.innerHTML = `<img src="images/secondstepimg.png">`
    
    setTimeout(() => {
        secondstepimage.style.display='none';
        secondstepimage.innerHTML = 'just kidding ';
        document.getElementById('thirdstep').style.display = 'block';
        document.getElementById('thirdstepbtn').style.display = 'block';
    }, 5000);
  }

 removeMe();

}
document.getElementById('thirdstepbtn').addEventListener('click', ()=>{
    const calc = document.getElementById('thirdstep').value;
    const output = document.getElementById('output');
 
    
    if(calc > 30 && calc < 1000 ){

        output.innerHTML = 1021 - calc + "years old, so old.";
    }
    else if(calc < 30){
        output.innerHTML = 21 - calc + "years old, so young.";
    }
})
