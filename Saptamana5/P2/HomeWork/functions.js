function is_string(something){
    let result= typeof(something)== 'string'

    return result
}

is_string('w3resources')
is_string([1,2,3,4])

//EX2

function is_Blank(without){
    let result = (without) === ""

    return result
}


//Ex3 

function string_to_array(input){
    let result = (input.split(' '))
    return result
}

//Ex4 

function abbrev_name(name){
    let newName = name.split(' ');
    let abrev = `${newName[0]} ${newName[1].charAt(0)}.`

    return abrev;
    }

//EX5

function capitalize(name) {

    let firstLetter= name.replace(name[0], name[0].toUpperCase())

    return firstLetter
}


// Ex6

function truncate_string(stringName, slicePosition){

    let result= stringName.slice(0, slicePosition)
    return result
}

//Ex7

function isUpperCaseAt(string, number){
    return string[number]=== string[number].toUpperCase();    
}

//EX8 

function insert(string, stringPosition){

    
}
//Ex9

function insert(string, text = '', position = 0) {
    let p1 = string.slice(0, position);
    let p3 = string.slice(position);
    return p1 + text + p3;
  }

//EX10
function remove_first_occurrence(stringA, stringB){
    return stringA.replace(stringB, '');
    }  
function compare_string(stringA, stringB){

 let result= "stingA" === "stingB";
 return result
}



//EX11
function isUncapitalized(name){

    let firstLetter = name.replace(name[0], name[0].toLowerCase());

    return firstLetter;

}