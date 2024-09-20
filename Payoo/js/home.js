document.getElementById('btn-logout').addEventListener('click',function(){
    window.location.href='index.html'
})

document.getElementById('btn-addmoney').addEventListener('click',function(event){
    event.preventDefault()
    const addMoneyInput=document.getElementById('input-add-money').value
    const pinInput=document.getElementById('input-pin').value

    if(pinInput=='0000'){
        console.log("money added")
    }
    else{
        alert("wrong pin!")
    }

    const accountBalance=document.getElementById('balance').innerText
    
    const addMoney=parseInt(addMoneyInput)
    const mainBalance=parseInt(accountBalance)

    const newbalance=addMoney+mainBalance
    
    document.getElementById('balance').innerText=newbalance
})