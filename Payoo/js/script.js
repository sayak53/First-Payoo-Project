document.getElementById('btn-login').addEventListener('click',function(event){
    const phNum=document.getElementById('number').value
    const digitPin=document.getElementById('digit-pin').value

    console.log(phNum,digitPin)

    if(phNum=='2024' && digitPin=='1234'){
        event.preventDefault()
        window.location.href = 'home.html'
    }
    else{
        alert("Wrong Number or digit-pin")
    }

})