

function doubledValue(arr){
    let newArr =[];
    arr.forEach(function (num) {
        newArr.push(num*2);
    });
    return newArr;

}

function OnlyEvenValues(arr){
    let newArr=[];
    arr.forEach(function(num){
        if(num % 2 === 0){
        newArr.push(num);
        }
        })
        return newArr;
}

function showFirstAndLast(arr){
    let newArr=[];
    arr.forEach(function(str){
        let first = str.charAt(0);
        let last = str.charAt(str.length-1);
        newArr.push(first+last);
    
    })
return newArr;
}


function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
    val[key]=value;
   
 })
 return arr;
}

///I kno w i want to iterate over the string array I created and log only the vowels in the 
//ojects then keep count of the number of times they appear
function vowelCount(str){
     let stringArray = [...str];
     
    stringArray.forEach(element=>{
        let allLowerCase = element.toLowerCase();
        
        for(i=0; i<allLowerCase.length; i++){
            if(i === 'a'){
                obj.a = obj.a + 1 || 0;
            }
            if(i === 'e'){
                obj.e=obj.e + 1 || 0;
            }
            if(i === 'i'){
                obj.i +=obj.i + 1||0;
            }
            if(i === ''){
                obj.o =obj.o + 1||0;
            }
            if(i === 'u'){
                obj.u =obj.u + 1||0;
            }
        }
});

}

//Map Exercises 
function doubleValuesWithMap(arr){
  return arr.map(function(value){
        return value * 2;
        
    });
}

function valTimesIndex(arr){
    return arr.map(function (value, index){
        return value * index;
    })
}

function extractKey(array){
  return array.map(function(value){
       return value.name;
        
    });
}

function extractFullName(arr){
    return arr.map(function (value){

    return value.first +' '+ value.last;
});
}

//Fileter 
function filterByValue(arr, key){
  return arr.filter(function(value){
        return value[key];
    })
}
//Can't get it to return undefined keep just get an empty array
function find(arr, val){
    return arr.filter(function(num){
        if (num === val){
            return val;
        }
        else {
            return undefined;
        }
    });
}
function findInObj(arr,key,values){
    return arr.filter(function (val){
        return val[key] === values;
//[0] what does this do and why does it presences only return the first value in the arry with out it I get all they values inthe array
    })[0];
}

//want the function to use filter that will loop through
function removeVowels(str){
    const vowels = 'aeiou';
    let output =str.toLowerCase().split('').filter(function(values){
      return vowels.indexOf(values) ===-1;
    });
   return output.join('');

}

function doubleOddNumbers(arr){
   let oddNums= arr.filter(function(num){
        return num % 2 !== 0;
    });
    return oddNums.map(function(oddnum){
    return oddnum * 2;
    })
}



