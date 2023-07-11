// {[()]} sort bracket
// function sortBrackets(str) {
//     let opens = [];
//     let openBrackets = ['(', '{', '['];
//     let closeBrackets = ['}', ']', ')'];

//     for (let i = 0; i < str.length; i++) {
//         if (openBrackets.includes(str[i])) {
//             opens.push(str[i]);
//         }
//         else if (closeBrackets.includes(str[i])) {
//             let last = opens.pop();
//             if((last === '(' && str[i] !== ')' 
//             || last === '{' && str[i] !== '}' ||
//             last === '[' && str[i] !== ']')) {
//                 return false;
//             } 
//         }
//     }
//     return true;
// }
// console.log(sortBrackets('((){}[])'));
// console.log(sortBrackets('{[]}()((({}{})))'));


// function getShapeOfArea(n) {
//     return (n ** 2) + (n - 1) ** 2;
// }
// getShapeOfArea(3);


// function generatePassword() {
//     var length = 8,
//         charset = 'abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789',
//         retVal = '';
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }
// console.log(generatePassword());


// function myInterval(clb, interval) {
//     let timer = setTimeout(function n() {
//         clb();
//         timer = setTimeout(n, interval)
//     }, interval);
// }
// myInterval(() => console.log('hello world'), 1000);


// function longestSortedPart(arr) {
//     let sort = [];
//     let max = [arr[0]];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= arr[i - 1]) {
//             max.push(arr[i]);
//         }
//         else {
//             if (max.length > sort.length) {
//                 sort = max;
//             }
//             max = [arr[i]];
//         }
//     }
//     if (max.length > sort.length) {
//         sort = max;
//     }
//     return sort;
// }

// let arr = [-1,2,3,4,5,6,-10,0,1,-40,-30,-10];
// console.log(longestSortedPart(arr)); 


// function* fibonacci() {
//     let p = 0, n = 1;
//     while (true) {
//       yield p;
//       [p, n] = [n, p + n];
//     }
//   }  

// const result = fibonacci();
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);


// function medianOfTwoArrays(n, m) {
//         let nums = n.concat(m).sort((a, b) => a - b);
//         let middle = Math.floor(nums.length / 2);
//         return nums.length % 2 === 0 ? (nums[middle - 1] + nums[middle]) / 2 : nums[middle];
// }
// console.log(medianOfTwoArrays([1, 2, 3], [1, 2, 3]));


// function generateParenthese(bracketCases = 3) { // +prompt('input your number (1-8)'); 
//     let result = [];

//     if (bracketCases < 1 || bracketCases > 8) {
//         return `${bracketCases} is not valid number. You need input number 1 - 8`
//     }

//     function foo(str, open, close) {
//         if (str.length === bracketCases * 2) {
//             result.push(str);
//         }

//         if (open < bracketCases) {
//             foo(str + '(', open + 1, close);
//         }

//         if (close < open) {
//             foo(str + ')', open, close + 1);
//         }
//     }
//     foo('', 0, 0);
//     return result;
// }

// console.log(generateParenthese());


// const email = prompt('Enter your Email');
// function validEmail(email) {
//   const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
//   return emailPattern.test(email);
// }
// console.log(validEmail(email));


// function findWordsWithSuffix(text, suffix) {
//     const regex = new RegExp(`\\b\\w*${suffix}\\w*\\b`, 'gi');
//     return text.match(regex) || [];
//   }
//   const text = 'Hello my name is Aram';
//   const suffix = 'ar';
//   const wordsWithSuffix = findWordsWithSuffix(text, suffix);
//   console.log(wordsWithSuffix);


// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//   let div = divs[i];
//   let color = generateRandomColor();
//   div.style.backgroundColor = color;
// }
// function generateRandomColor() {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   let color = "rgb(" + red + ", " + green + ", " + blue + ")"
//   return color;
// }


// let divs = document.getElementsByTagName("div");
// let colors = [0xFF0000, 0x0000FF, 0x00FF00, 0xFFFF00, 0xFFA500];
// for (let i = 0; i < divs.length; i++) {
//   let div = divs[i];
//   let randomIndex = Math.floor(Math.random() * colors.length);
//   let color = colors[randomIndex];
//   let decimalColor = color.toString(10);
//   div.style.backgroundColor = decimalColor;
// }

// HEX N 2

// const divs = document.getElementsByTagName('div');

// for (const div of divs) {
//   let hexNum = 16777216;
//   let randomIndex = Math.floor(Math.random() * (hexNum + 1));
//   let hexColor = randomIndex;
//   div.style.backgroundColor = hexColor;
//   console.log(hexColor);
// }

// HEX N 2