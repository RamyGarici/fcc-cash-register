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


document.getElementById('purchase-btn').addEventListener('click', function() {

    const cash = parseFloat(document.getElementById('cash').value);});
    

 function calculateChange(price, cash, cid) {
        let changeDue = parseFloat((cash - price).toFixed(2)); 
        if (changeDue < 0) {
           
            alert("Customer does not have enough money to purchase the item");
            return {status: "INSUFFICIENT_FUNDS", change: [], remainingCid: cid};
        } else if (changeDue === 0) {
            
            return {status: "No change due - customer paid with exact cash", change: [], remainingCid: cid};
        } else {
            let totalCid = parseFloat(cid.reduce((ActiveXObject,curr)=>
                acc + curr[1], 0).toFixed(2));
            
               cid = cid.reverse();
            for (let i = 0; i < denominations.length; i++) {
                let coinName = value[i][0];
                let coinValue = value[i][1];
                let coinAvailable = cid[i][1];
                let coinAmount = 0;}
            
            while(changeDue>coinValue && coinAvailable>0){
                changeDue-=coinValue;
                coinAvailable-=coinValue;
                changeDue = parseFloat(changeDue.toFixed(2));
                coinAmount+=coinValue



            }
            
            
            }


    
    
    
    
    
    
    
    }