import {data} from "./mock.js"
// element yaratish
const box=document.createElement("div");
box.innerHTML="<a href='#'>LINK</a> ";
// insert
const container=document.querySelector("#container");
// appent,prepend,before,after
// container.append(box);
// container.prepend(box);
// container.before(box);
// container.after(box);

// container.insertAdjacentHTML("beforebegin","salom")
// container.insertAdjacentHTML("afterbegin","salom")
// container.insertAdjacentHTML("afterend","salom");
// container.insertAdjacentHTML("beforeend","salom");

// Style berish
// container.style.background="lightblue"
// container.style.borderRadius="10px"
// container.style.padding="20px"

// container.style.cssText=`
// background:blue;
// border-radius:20px;
// padding:30px`

// console.log(container.offsetWidth);
// console.log(container.clientWidth);
// console.log(container.offsetHeight);
// console.log(container.clientHeight);
// console.log(container.scrollHeight);

// const button=document.querySelector("#button")
// button.onclick=()=>{
//     // container.scroll(0,15);
//     // container.scrollTo(0,15);
//     container.scrollBy({
//         behavior:"smooth",
//         top:15,
//     });
// }

// console.log(container.getBoundingClientRect());
// const button = document.querySelector("#button");
// const initialHeight =container.clientHeight; 
// button.onclick=()=>{
//  console.log(container.clientHeight);
//  console.log(container.scrollHeight);
//  if(container.clientHeight !== container.scrollHeight){
//     container.style.height=`${container.scrollHeight}px`
//  }else container.style.height=`${initialHeight}px`
// }

// const button = document.querySelector("#button");
// const initialHeight =container.clientHeight; 
// button.onclick=()=>{
//  console.log(container.clientHeight);
//  console.log(container.scrollHeight);
//  if(container.clientHeight !== container.scrollHeight){
//     container.style.height=`${container.scrollHeight}px`;
//     button.innerText="kamroq ko'rsat"
//  }else {
//     container.style.height=`${initialHeight}px`;
//      button.innerText="ko'proq ko'rsat"     
//      }
// }

// CRUD

const body=document.querySelector("#body");
const list=document.createElement("div");
const displayData=(data)=>{
    list.innerHTML=""
data.map((user)=>{
    const userElement=document.createElement("h3");
    const onDelete=(data,id)=>{
        let result=[];
        result=data.filter((user)=>{
            return user.id !== id;
        });
        displayData(result);
    };
    const button=document.createElement("button");
    button.innerText="Delete";
    button.onclick=()=> onDelete(data,user.id);
    userElement.innerText=`${user.id}.${user.fullName}`;
    userElement.append(button);
    list.append(userElement);
} );
};
displayData(data);
body.append(list);

const sort=(data)=>{
    let res=[];
    res=data.sort((a,b)=>a.fullName.localeCompare(b.fullName));
    displayData(res);
}

const sortButton=document.querySelector("#sort")
sortButton.onclick =()=>sort(data)






