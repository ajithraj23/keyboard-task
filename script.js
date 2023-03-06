var popup = document.getElementById("32");


document.addEventListener("keydown" , function(e){
    console.log(e);
    if(e.keyCode == 16){
        if(e.location == 2){
            document.querySelector('.ShiftRight').classList.add('active')

            setTimeout(function(){
                document.querySelector('.ShiftRight').classList.remove('active')
            }, 500)
        }
        else{
            document.getElementById(e.keyCode).classList.add('active')
        }
    }
    else{
        document.getElementById(e.keyCode).classList.add('active')
    }
    setTimeout(function(){
        document.getElementById(e.keyCode).classList.remove('active')
    }, 500)

})

