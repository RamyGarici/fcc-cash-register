let price = 1.87;
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

const value= [
                ["ONE HUNDRED", 100],
                ["TWENTY", 20],
                ["TEN", 10],
                ["FIVE", 5],
                ["ONE", 1],
                ["QUARTER", 0.25],
                ["DIME", 0.1],
                ["NICKEL", 0.05],
                ["PENNY", 0.01]
            ];

const updateDrawerDisplay=()=> {
  const drawerDiv = document.getElementById("cash-drawer-display");
  drawerDiv.innerHTML = "<p><strong>Change in drawer:</strong></p>";

  cid.forEach(item => {
    drawerDiv.innerHTML += `<p>${item[0]}: $${item[1].toFixed(2)}</p>`;
  });
}




const changeDue = document.getElementById("change-due");

document.getElementById('purchase-btn').addEventListener('click', ()=>{
     const cash = parseFloat(document.getElementById('cash').value);
     
     

     const calculateChange = (cash)=>{
const reverseCid = [...cid].reverse()
        if(cash<price){
            alert("Customer does not have enough money to purchase the item");

        }
        else if(cash===price){
            changeDue.textContent = "No change due - customer paid with exact cash";


        }
        else{
            let amount=0
            let change = cash-price;
            const toGiveBack=change;
            let changeArr = []
            if(change>cid.reduce((acc, curr) => acc + curr[1], 0)){
                changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
            }
            else if(change<=cid.reduce((acc, curr) => acc + curr[1], 0)){
                for(let i=0;i<reverseCid.length;i++){
                    amount=0
                    while(change>=value[i][1] && reverseCid[i][1]>0){
                        amount+=value[i][1];
                        reverseCid[i][1]-=value[i][1];
                        change-=value[i][1]
                        change=Number(change.toFixed(2))
                    }
                    if(amount>0){
                   changeArr.push([value[i][0], amount]);
}
                }
                if(Number(toGiveBack.toFixed(2)) !=Number(changeArr.reduce((acc, curr) => acc + curr[1], 0).toFixed(2))){
                 changeDue.textContent ="Status: INSUFFICIENT_FUNDS"

                }
                else{
                    let totalLeft = Number(reverseCid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));
                    console.log(totalLeft)

  if (totalLeft === 0) { let output = "Status: CLOSED";
    changeArr.forEach(c => {
      output += ` ${c[0]}: $${c[1].toFixed(2)}`;
    });
    changeDue.textContent = output;}

else{
              let output = "Status: OPEN";
changeArr.forEach(c => {
  output += ` ${c[0]}: $${c[1].toFixed(2)}`;
});

  changeDue.textContent = output;
}
cid = [...reverseCid].reverse();
          updateDrawerDisplay();

}
          
            
            }
    
           

            

        }

     }
     calculateChange(cash)
});
updateDrawerDisplay()