//25.Create a function that converts a string to camel case.

function toCamelCase(str) {
    return str
      .toLowerCase() 
      .replace(/[-](.)/m, (match, letter) => letter.toUpperCase()); 
  }
  console.log(toCamelCase("-moise"));
//39.Implement a function to check if two arrays are equal.

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
  }
  console.log(arraysEqual([1, 2, 3], [1, 2, 3]));

  // 40.Write a function that converts a string to snake_case.

  function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/\s+/g, '_');
  }
  
  
  console.log(toSnakeCase("helloWorld"));
  //41.Create a function that returns all substrings of a given string.
  function getAllSubstrings(str) {
    const substrings = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.slice(i, j));
      }
    }
    return substrings;
  }
  
  console.log(getAllSubstrings("abc")); 
  //42.Write a function that checks if a given year is a leap year.

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  
  console.log(isLeapYear(2024)); 
  //38.Write a function that formats a date as DD/MM/YYYY.

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
  //37.Create a function to generate a random hexadecimal color code.
  function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  console.log(randomHexColor());