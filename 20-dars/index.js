// let ar=[1,2,3,4,5,6,7];
// Array.prototype.delete=function (id){
//     let res=this.filter((value)=>value!=id )
//     console.log(res);
// };
// ar.delete(3)

let ar =[123456789]
Array.prototype.delete = function (id){
    let array=ar.toString(ar)
        let arr=Array.from(array,(value)=>value)
        let res=arr.filter((value)=>value!=id)
        console.log(res);
};
ar.delete(1)

// Array.prototype.delete = fucntion (id) {
//     let array=ar.toString(ar)
//     let arr=Array.from(ar,(value)=>value)
//     let res=this.filter((value)=>value!=id)
//     console.log(res);
// };

// ar.delete(1)


// let array=ar.toString(ar)
// let arr=Array.from(array,(value)=>value)
// console.log(arr);