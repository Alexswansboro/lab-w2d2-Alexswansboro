// // 1. Create a function called "sum" that takes an array of numbers and
// // returns the sum of those numbers.

function sum(numbers) {
  var sumTotal = 0
  for (var i = 0; i < numbers.length; i++) {
    sumTotal += numbers[i];
  }
  return sumTotal
}

// // 2. Create a function called "average" that takes an array of numbers
// // and returns the average of those numbers.

function average(numbers) {
  var total = 0
  if (numbers.length === 0) {
    return
  }
  total = sum(numbers)
  var average = total / numbers.length
  return average
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection (array1, array2){
  var newArray = [];
  for(var i = 0; i<array1.length; i++) {
    for (var b = 0; b<array2.length; b++){
      if (array1[i] === array2[b]){
        newArray.push(array1[i])
      }
    }
  }
  return newArray;
}


// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum (numbers){
  var smallest;
    for(var i = 0; i < numbers.length; i++){
      if (typeof(smallest)==='undefined' || numbers[i]<smallest){
        smallest = numbers[i];
      }
    }
  return smallest;
}
// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
function destructiveMinimum (numbers){
  var smallest, smallestIndex;
  for(var i = 0; i < numbers.length; i++){
    if (typeof(smallest)==='undefined' || numbers[i]<smallest){
      smallest = numbers[i];
      smallestIndex = i
      console.log("numbers", numbers, "smallest", smallest);
    }
  }
  numbers.splice(smallestIndex, 1);
  return smallest;
}

function selectionSort(unsortedArray){
  var copiedOriginal= JSON.parse(JSON.stringify(unsortedArray));
  console.log("unsortedArray", unsortedArray)
  var sortedArray = [];
  for(var i = 0; i<unsortedArray.length; i++){
    var smallestNum = destructiveMinimum(copiedOriginal);
    console.log("smallestNum", smallestNum);
    sortedArray.push(smallestNum)
  }
  return sortedArray;
}



// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser(name, Date){
  var people = {
    name : name,
    dob : Date
  }
return people
}


// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

function calculateAge (user, date){
  var birthday = user.dob
  var age = howOld(birthday, date)
  return age

  // people.dob
// take user birthdate from createUser function
//run that date through my code from yesterday to calculate age

}



function howOld (birthdate, dateNow){
  var birthYear = birthdate.getFullYear()
  var currentYear = dateNow.getFullYear()
  var birthMonth = birthdate.getMonth()
  var currentMonth = dateNow.getMonth()
  var birthDay = birthdate.getDate()
  var currentDay = dateNow.getDate()
  var ageInYears = currentYear-birthYear
  if(birthMonth > currentMonth){
      ageInYears = ageInYears - 1;
  }else if (birthMonth === currentMonth){
      if (birthDay > 
           currentDay){
          ageInYears = ageInYears - 1;
      }
  }
  return ageInYears;
}
// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

function addAge(user, date){
  user.age= calculateAge(user, date)
}

// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

function createUsers (arrayName, arrayBirth){
  // var namesAndBirthdays = arrayName.concat.(arrayBirth);
  var users = [];
  for(var i = 0; i<arrayName.length; i++){
    var name = arrayName[i]
    var dob = arrayBirth[i]
    var objectVar = {name: name, dob: dob}
    users.push(objectVar)
  }
  return users;     

}

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.

function averageAge (users, currentDate){
  var ages = []
  var averageAge = ageTotal/users.length
  for (var i = 0; i < users.length; i++){
    var user = users[i]
    ages.push(calculateAge(user, currentDate))
  }
}
