const cashier=(price, cash)=>{

    let amountOfNotes;

    // calculate change
    let change = parseFloat((cash - price).toFixed(2));

    console.log(`Price: ${price}€`);
    console.log(`Amount: ${cash}€`);
    console.log(`Change: ${change}€`);

    if(cash < price){
        console.log(`you don't have enough money`);
    }
    
    // Create array to go through with loop
    let current=[500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]

    // loop through the array
    for(let i=0;i<current.length;i++){
        
        if(change >= current[i]){
            
            // calculate change by amount in array
            amountOfNotes = Math.floor( change / current[i] );

            // change divisible by amount in array
            change = parseFloat( (change % current[i]).toFixed(2) );

            console.log(`${amountOfNotes} x ${current[i]}€`)
        }
    }   
}
cashier(3.75,50);
console.log();
/*
Price: €3.75
Amount:€50
Change:€46.25
2 x €20 // 2x twenty euros notes
1 x €5 // 1x five euros notes
1 x €1 // 1x one euro coin
1 x €0.2 // 1x twenty cents coin
1 x €0.05 // 1x five cents coin*/
cashier(4.50,20);
console.log();
/*
Price: €4.5
Amount:€20
Change:€15.5
1 x €10 // 1x ten euros notes
1 x €5 // 1x five euros notes
1 x €0.5 // 1x fifty cents coin
*/

cashier(10.50,10);
/*
Price: 10.5€
Amount: 10€
Change: -0.5€
you don't have enough money
*/