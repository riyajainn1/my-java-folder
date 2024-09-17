// let a=true
// let b=false
// let score=80
// if(score>75){
//     console.log("GRADE A")
// }
// else if(score>65 && score<70){
//     console.log("GRADE B")
// }
// else if(score>40 && score<65){
//     console.log("GRADE C")
// }
// else(score>10 && score<30){
//     console.log("GRADE E")
// }
// let arr=[ 'riyaa',4,true,56]
// console.log(arr[0])
// let std={
//     id:1,
//     name:'riya',
//     age:19,
//     isPass:true

// }
// std.name="jain"
// console.log(std.name)
// function sum(a,b){
//     console.log(a+b);
// }
// sum(344565,928365353)
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(45,54)
// 
// function sum(a,b){
//     console.log("helloo")
//     return a+b
//     console.log('hiiii')
// }
// console.log(sum(5+4));
// let arr=[1,2,3,4,5,6,7,8]
// for (let i of arr){
//     console.log(i)
// }

// for (let i in arr){
//     console.log(i)
// }
// function sum(a){
//     console.log(` ${a.name}     ${a.lastName}`);
// }
// let obj={
//     id:2,
//     name:"riya",
//     lastName:"jain"
// }
// sum(obj)

// [ 
// // console.log(a)
// // let a=5



// // let a
// // console.log(a)
// // a=5
// ]



// var a=5
// {
//     var a=10
//     console.log(a)
// }
// console.log(a)
  



// let a=5
// {
//     let a=10
//     console.log(a)
// }
// console.log(a)


// function outer (a){
//     console.log(a);
//     a()
// }
// outer(function inner(){
//     console.log('hello');
// }

// function outer(){
//     console.log('outer');
//     function innner(){
//         console.log('inner')
//     }
//     return inner
// }
// let inner=outer()
// inner()





// arr me objects alag krna

// let arr=[1,2,3,'riya',false]
// function number(arr){
//     let result=[]
//     for(  let i of arr){ 
//         if( typeof i==='number'){
//             result.push(i)
//         }
// }
// return result
// }

// console.log(number(arr));










// 







// 




function step1(fn){
    setTimeout(()=>{
        console.log('select photo')
fn()
    },4000)
   

}
function step2(fn){
    setTimeout(()=>{
        console.log('filter')
fn()
    },2000)
   

}
function step3(fn){
    setTimeout(()=>{
        console.log('caption')
fn()
    },3000)
   

}
function step4(){
    setTimeout(()=>{
        console.log('post')
        

    },1000)
   

}
step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})