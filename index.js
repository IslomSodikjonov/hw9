// Task 1 
let nums = [1,2,3,4,5,6,7,8,9,10]

let even = nums.filter((figure) => figure % 2 === 0) 
let odd = nums.filter((figure) => figure % 2 === 1) 

console.log(even, odd);



// Task 2 
let students = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod', 'zafar']

let ln = students.sort( (strA, strB) => {
        return strB.length - strA.length;
    }

)

console.log("The longests name is " + ln[0]);



// Task 3
let names = [' Aleksey', ' Kartoshka', ' Margarita', ' Morgenshtern', ' Monica']
let name = prompt('Who do you want to remove from the list: ' + names) 

names.splice((name - 1), 1)

console.log(names)



// Task 4 
let arr = [1,2, false, 'hello', 24, 'world', undefined, null, 'error', 22] 

let integer = arr.filter((elem) => typeof elem  === "number")

if(integer.length === 5) {
    console.log('good)');
} else {
    console.log("bad(");
}



// Task 5
let cars = [20000,16000,40000,30000,35000,60000,13000,15000,45000,110000]
let from = prompt('costs from')
let up = prompt('costs up')

let canbuy = cars.filter((costs) => costs >= from && costs <= up)

console.log(canbuy);




