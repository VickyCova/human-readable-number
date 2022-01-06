 module.exports = function toReadable(number) {
    let str = number.toString();  
    let num = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let ten = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let hundred = 'hundred'; let summTwo = +(str[1] + str[2])    
    
    const firstNumber = str[0];
    const secondNumber = str[1];
    const thirdNumber = str[2];
    
    if(number === 0) {
        return 'zero'
    }

    if (number < 20) {
          return num[number]
    }

    if (number >=20 && number<100) {        
         return (ten[firstNumber] + ' ' +  num[secondNumber]).trim()
    }

    if (number >=100 && number<1000 && summTwo >= 20) {
        return (num[firstNumber] + ' ' + hundred + ' ' +  ten[secondNumber] + ' ' + num[thirdNumber]).trim()
    }

    if (number >=100 && number<1000 && summTwo < 20) {
        return (num[firstNumber] + ' ' + hundred + ' ' +  num[summTwo]).trim()
    }
}
