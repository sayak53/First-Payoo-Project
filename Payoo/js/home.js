document.getElementById('btn-logout').addEventListener('click',function(){
    window.location.href='index.html'
})
//  add-money function starts here
document.getElementById('btn-addmoney').addEventListener('click',function(event){
    event.preventDefault()
    const addMoneyInput=document.getElementById('input-add-money').value
    const pinInput=document.getElementById('input-pin').value
    console.log(addMoneyInput)
    if(pinInput=='0000'){
        const accountBalance=document.getElementById('balance').innerText
    
        const addMoney=parseInt(addMoneyInput)
        const mainBalance=parseInt(accountBalance)

        const newbalance=addMoney+mainBalance
    
    document.getElementById('balance').innerText=newbalance
    }
    else{
        alert("wrong pin!")
    }
})
//  add-money function ends here

// form functions like hidden or block- starts
document.getElementById('add-btn').addEventListener('click',function(){
    document.getElementById('add-form').setAttribute('class','block')
})

document.getElementById('cashout-btn').addEventListener('click',function(){
    document.getElementById('cashout-form').setAttribute('class','block')
    document.getElementById('add-form').setAttribute('class','hidden')
})

document.getElementById('transfer-btn').addEventListener('click',function(){
    document.getElementById('transfer-form').setAttribute('class','block')
    document.getElementById('add-form').setAttribute('class','hidden')
    document.getElementById('cashout-form').setAttribute('class','hidden')
})
// ends here
 
// cashout function starts here
document.getElementById('btn-outmoney').addEventListener('click',function(event){
    event.preventDefault()
    const cashoutMoneyInput=document.getElementById('input-cashout-money').value
    const pinInput=document.getElementById('inputout-pin').value

    if(pinInput=='1111'){
        const accountBalance=document.getElementById('balance').innerText
    
        const deleteMoney=parseInt(cashoutMoneyInput)
        const mainBalance=parseInt(accountBalance)

        const newbalance=mainBalance-deleteMoney
    
    document.getElementById('balance').innerText=newbalance
    }
    else{
        alert("wrong pin!")
    }
})
// cashout function ends here

// transfer section starts here
document.getElementById('btn-transfermoney').addEventListener('click',function(event){
    event.preventDefault()
    const transferMoneyInput=getInputValue('input-transfer-money')
    // const transferPin=getInputValue('input-transfer-pin')

    if(pinInput=='2222'){
        const accountBalance=document.getElementById('balance').innerText

        const mainBalance=parseInt(accountBalance)

        const newbalance=mainBalance-transferMoneyInput

        document.getElementById('balance').innerText=newbalance
    }
    else{
        alert("Wrog Pin!")
    }
})
// transfer section ends here