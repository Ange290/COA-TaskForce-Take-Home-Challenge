function String(input) {
    let result = '';
    
    
    if (input.length % 3 === 0) {
        
        result = input.split('').reverse().join('');
    } 
  
    else if (input.length % 5 === 0) {
        
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
    
    else if (input.length % 15 === 0) {
        
         result = input.split('').reverse().map(char => char.charCodeAt(0)).join('');
    } 
  
    else {
        
        result = input;
    }
    
    return result;
}

const input = "LAMANDA AYAMA! ANGE UWIZERA";
console.log(String(input));
