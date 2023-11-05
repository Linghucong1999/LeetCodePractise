function scan(str) {
  let i = 0;  
  while (i < str.length) {  
    const char = str.charAt(i);  
    if (Number.isInteger(parseFloat(char))) {  
      let number = char;  
      while (i < str.length - 1 && Number.isInteger(parseFloat(str.charAt(i + 1)))) {  
        number += str.charAt(i + 1);  
        i++;  
      }  
      return parseInt(number);  
    }   
    i++;  
  }  
  return 0;
}

function clearInput(obj) {  
  let element = obj.parentElement.querySelector('input');  
  if (element) {  
      element.value = '';  
  }  
}
const str = 'abc123abc456';
console.log(scan(str));