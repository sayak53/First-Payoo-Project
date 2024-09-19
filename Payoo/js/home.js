document.getElementById('btn-logout').addEventListener('click',function(){
    window.location.href='index.html'
})

document.getElementById('btn-addmoney').addEventListener('click',function(event){
    event.preventDefault()
    const addMoneyInput=document.getElementById('input-add-money').value
    const pinInput=document.getElementById('input-pin').value

    console.log(addMoneyInput,pinInput)
})