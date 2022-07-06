function cashier(price, paid){
    let counts = {
        fiftyEuroNote: 50,
        twentyEuroNote: 20,
        tenEuroNote: 10,
        fiveEuroNote: 5,
        twoEuroCoin: 2,
        oneEuroCoin: 1
    }

    let centCounts = {
        fiftyCentCoin: 50,
        twentyCentCoin: 20,
        tenCentCoin: 10,
        fiveCentCoin: 5,
        twoCentCoin: 2,
        oneCentCoin: 1
    }
    // total change:
    let change = (paid-price).toFixed(2);
    
    if(change < 0){
        return `customer still needs to pay €${Math.abs(change)}`
    } else if (change == 0){
        return `no change needed`
    } else {
        // split to euros and cents:
        const changeStr = change.toString();
        const changeArr = changeStr.split('.');
        // euros:
        let integer = Number(changeArr[0]);
        // cents:
        let cents = Number(changeArr[1]);
        
        for(const property in counts){
            let value = counts[property]
            counts[property] = Math.floor(integer/value);
            integer = integer%value;
        }

        for(const property in centCounts){
            let value = centCounts[property]
            centCounts[property] = Math.floor(cents/value);
            cents = cents%value;
        }
        
        let totalChangeCount = Object.assign(counts, centCounts);
        for(const property in totalChangeCount){
            if(totalChangeCount[property] == 0 || isNaN(totalChangeCount[property])){
                delete totalChangeCount[property];
            }
        }

        let objValue = Object.values(totalChangeCount);
        let objKey = Object.keys(totalChangeCount);
        
        let result = objValue.map((item, index) => {
            if(item > 1){
                return item.toString() + ' ' + objKey[index] + 's'
            } 
            return item.toString() + ' ' + objKey[index]
        })

        return result.toString().split(',').join('\n')
    }

}

 console.log(cashier(49, 50));
 console.log(cashier(49.99, 50));
 console.log(cashier(17.77, 20));
 console.log(cashier(3.75, 50));
 console.log(cashier(4,3));
 console.log(cashier(4,4));