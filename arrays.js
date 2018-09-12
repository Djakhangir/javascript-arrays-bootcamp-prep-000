<<<<<<< HEAD

 var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  

 function addElementToBeginningOfArray(array, element) {
array=[element, ...array]
  return array;
}

 function  destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift(element)
 return array
}

function addElementToEndOfArray (array, element) {
  array=[...array, element]
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  array=array.slice(1)
return array
  }
  
  function destructivelyRemoveElementFromEndOfArray (array) {
    array.pop()
    return array
  } 
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
  
}


 
=======
 var array = [
  'element1'
  'element2'
  ] 
  function addElementToBeginningOfArray(array, element) {
  array.unshift('element')
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) { var array = ['element', 'element2']
['element', ...array]
    }
  
>>>>>>> 5890cf16671bb8beee73b6914700aec7dd2051d9
  