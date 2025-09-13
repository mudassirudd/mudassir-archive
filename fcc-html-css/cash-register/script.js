let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById("cash")
const changeDue = document.getElementById("change-due")
const purchaseBtn = document.getElementById("purchase-btn")





const checkCashRegister = (price,cash,cid)=>{
  let  changeNeeded = Math.round((cash - price)*100) 
  const totalCid =Math.round( cid.reduce((total,denom)=>{
    return total + denom[1]
  },0)*100)


  const units={
    "PENNY":1,
    "NICKEL":5,
    "DIME":10,
    "QUARTER":25,
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":10000,
  }

  if(totalCid < changeNeeded){
    return {
          status:"INSUFFICIENT_FUNDS",
          change:[]
        }
  }
  if(totalCid === changeNeeded){
return {
          status:"CLOSED",
          change:[...cid]
      .reverse()
      .filter(([_, amount]) => amount > 0)
        }  
        }

  if(totalCid > changeNeeded){
    const changeArr = []
    const reverseCid = [...cid].reverse()
  
    for (let [name,amount] of reverseCid){
      const unitValue = units[name]
      let  drawer = Math.round(amount*100)
      let used =0

      while(changeNeeded >= unitValue && drawer > 0){
        changeNeeded -= unitValue
        drawer -= unitValue
        used +=unitValue 
      }
      if(used > 0 ){
        changeArr.push([name,Number((used/100).toFixed(2))])
      }

      }
      if(changeNeeded === 0){
        return {
        status: "OPEN", 
        change: changeArr
        }
      }
      if(changeNeeded > 0){
        return {
          status:"INSUFFICIENT_FUNDS",
          change:[]
        }
    } 
  }
}





// buttonClick
purchaseBtn.addEventListener("click",()=>{
  let cash = Number(cashInput.value)
// cash < price
  if(cash < price){
    alert("Customer does not have enough money to purchase the item")
    return
  }
  // cash === price
  if(cash === price){
   changeDue.textContent = "No change due - customer paid with exact cash"
   return
  }
// calculate result
let result = checkCashRegister(price,cash,cid)


// display result
if(result.status === "INSUFFICIENT_FUNDS"){
  changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
} else if(result.status === "CLOSED"){
  const parts = result.change.map(([n,a])=>`${n}: $${a.toFixed(2)}`)
  changeDue.textContent = `Status: CLOSED ${parts.join(" ")}`
} else if(result.status === "OPEN"){
  const parts = result.change.map(([n,a]) => `${n}: $${a.toFixed(2)}`)
  changeDue.textContent = `Status: OPEN ${parts.join(" ")}`
}

  cashInput.value=''
})