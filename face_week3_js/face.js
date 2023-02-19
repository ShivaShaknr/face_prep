//for each
const numbers_each = [1, 2, 3];
numbers_each.forEach(num => console.log(num * 2));
// Output: 2, 4, 6


//map
const numbers_map = [1, 2, 3];
const doubledNumbers = numbers_map.map(num => num * 2);
console.log(doubledNumbers);
// Output: [2, 4, 6]


//filter
const numbers_filter = [1, 2, 3];
const evenNumbers = numbers_filter.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2]


//reduce
const numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(numbers.reduce(getSum,0));
// Output: 6


//for each console
const names = ['shiva', 'pradeep', 'cg', 'rovind'];

names.forEach(name => console.log(name));
// //output : shiva 
//            pradeep
//            cg
//            rovind


//Use map to create a new array by changing each number to square in the numbers array
const numbers1 = [1, 2, 3, 4, 5];

const squares = numbers1.map(num => num ** 2);

console.log(squares);
//output:[1, 4, 9, 16, 25]


//Use filter to filter out country start with 'E';
const countries = ['Argentina', 'Brazil', 'Chile', 'Ecuador', 'Europe', 'Germany', 'England'];
function checkcountry(country) {
    return country = countries[0]=='E';
  }
console.log(checkcountry);
 
//output:Ecudor,Europe,England

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
    const stringList = arr.filter(item => typeof item === 'string');
    return stringList;
  }
  const myArray = [1, 'hello', true, 5, 'world'];
  const stringList = getStringLists(myArray);
  console.log(stringList); 
  
// Output: ['hello', 'world']

const countries1 = ['Finland', 'Fiji', 'France', 'Germany', 'Greece', 'Honduras', 'Hungary', 'Ireland', 'Italy', 'Japan', 'Jamaica', 'Jordan', 'Kenya', 'Korea', 'Latvia', 'Liberia', 'Lesotho'];

const initialLetters = countries1.map(country => country.charAt(0));

const initialLetterCount = initialLetters.reduce((acc, letter) => {
  if (letter in acc) {
    acc[letter]++;
  } else {
    acc[letter] = 1;
  }
  return acc;
}, {});

const maxCount = Math.max(...Object.values(initialLetterCount));

const mostCommonInitialLetters = Object.keys(initialLetterCount).filter(letter => initialLetterCount[letter] === maxCount);

console.log(`The most common initial letter(s) for a country name is/are ${mostCommonInitialLetters.join(', ')}`);

//The most common initial letter(s) for a country name is/are F

//Assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.-using destruction


const constants = [2.718, 3.14159, 9.81, 37, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e); // 2.718
console.log(pi); // 3.14159
console.log(gravity); // 9.81
console.log(humanBodyTemp); // 37
console.log(waterBoilingTemp); // 100


// const a = {4, 5, 8, 9}
// const b = {3, 4, 5, 7}
// const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const contries2 = ['Finland', 'Sweden', 'Norway'];


const emptySet = new Set();


const set0To10 = new Set();
for (let i = 0; i <= 10; i++) {
  set0To10.add(i);
}


set0To10.delete(5);


set0To10.clear();


const setcontries2 = new Set(contries2.slice(0, 5));


const countryCharCount = new Map();
contries2.forEach(country => {
  countryCharCount.set(country, country.length);
});


const a1 = new Set([4, 5, 8, 9]);
const b1 = new Set([3, 4, 5, 7]);

// Union of a and b
const union = new Set([...a1, ...b1]);
console.log(union); // Set { 4, 5, 8, 9, 3, 7 }

// Intersection of a and b
const intersection = new Set([...a1].filter(x => b1.has(x)));
console.log(intersection); // Set { 4, 5 }

// Difference of a with b
const difference = new Set([...a1].filter(x => !b1.has(x)));
console.log(difference); // Set { 8, 9 }


function mostSpokenLanguages(countries, n) {
   
    const languageCount = {};
  
    
    for (const country of countries) {
      
      for (const language of country.languages) {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      }
    }
  
    
    const languageArray = Object.entries(languageCount);
  
    
    languageArray.sort((a, b) => b[1] - a[1]);
  
    
    const topLanguages = languageArray.slice(0, n);
  
    
    return topLanguages.map(([language, count]) => ({ [language]: count }));
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
//   //output:[
// {'English':91},
// {'French':45},
// {'Arabic':25},
// {'Spanish':24},
// {'Russian':9},
// {'Portuguese':9},
// {'Dutch':8},
// {'German':7},
// {'Chinese':5},
// {'Swahili':4},
// {'Serbian':4}
// ]
  

const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: new Map(),
    expenses: new Map(),
  

    get totalIncome() {
      let total = 0;
      for (const amount of this.incomes.values()) {
        total += amount;
      }
      return total;
    },

    get totalExpense() {
      let total = 0;
      for (const amount of this.expenses.values()) {
        total += amount;
      }
      return total;
    },

    accountInfo() {
      return `Account Information:\nName: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome}\nTotal Expense: ${this.totalExpense}`;
    },
  
 
    addIncome(description, amount) {
      this.incomes.set(description, amount);
    },
  

    addExpense(description, amount) {
      this.expenses.set(description, amount);
    },

    accountBalance() {
      return this.totalIncome - this.totalExpense;
    }

    
  };
  console.log(myAccount.accountInfo());
// Output: Account Information:
//         Name: Alice Smith
//         Total Income: 6000
//         Total Expense: 2000

console.log(myAccount.accountBalance());
// Output: 4000


const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); 
//output ["HTML","CSS","JS","React","Node","Python"]

const age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);  
// "250"

const isMarried = true;
const strIsMarried = JSON.stringify(isMarried);
console.log(strIsMarried); 
// "true"

const student = {
    firstName:'Aaaa',
    lastName:'Ye',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
  
  const studentStringified = JSON.stringify(student);
  console.log(studentStringified);

  
// //output
// {"firstName":"Aaaa","lastName":"Ye","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]}


const studentSubset = {
    firstName: student.firstName,
    lastName: student.lastName,
    skills: student.skills
  };
  
  const studentString = JSON.stringify(studentSubset);
  
  console.log(studentString);

  //output{"firstName":"Aaaa","lastName":"Ye","skills":["HTML","CSS","JS","React","Node","Python"]}


  


  





    




