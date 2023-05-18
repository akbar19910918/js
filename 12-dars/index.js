


// let date=new Date();

// function format(str){
//     if(str=="LT"){
//         console.log(date.getHours()+":"+date.getMinutes());
//     }
   

//     else if(str=="LTS"){
//         console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
//     }
    

//     else if(str=="L"){
//         console.log(date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear());
//     }


//     else if(str=="l"){
//         console.log(date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear());
//     }
   

//     else if(str=="LL"){
//         var month = date.toLocaleString('uz-UZ', { month: 'long' });
//        console.log(month+" "+date.getDate()+", "+date.getFullYear());
//     }


//     else if(str=="ll"){
//         var month = date.toLocaleString('uz-UZ', { month: 'short' });
//        console.log(month+" "+date.getDate()+", "+date.getFullYear());
//     }
   

//     else if(str=="LLL"){
//         var month = date.toLocaleString('uz-UZ', { month: 'long' });
//        console.log(month+" "+date.getDate()+", "+date.getFullYear() +" "
//         +date.getHours()+":"+date.getMinutes());
//     }
    

//     else if(str=="lll"){
//         var month = date.toLocaleString('uz-UZ', { month: 'short' });
//        console.log(month+" "+date.getDate()+", "+date.getFullYear() +" "
//         +date.getHours()+":"+date.getMinutes());
//     }

//     else if(str=="LLLL"){
//          var month = date.toLocaleString('uz-UZ', { month: 'long' });
//         var haftaKuni = date.toLocaleString('uz-UZ', {weekday: 'long'});
//        console.log(haftaKuni+", "+month+" "+date.getDate()+", "+date.getFullYear()
//        +" "+date.getHours()+":"+date.getMinutes());
//     }
  

//     else  if(str=="llll"){
//          var month = date.toLocaleString('uz-UZ', { month: 'short' });
//         var haftaKuni = date.toLocaleString('uz-UZ', {weekday: 'short'});
//        console.log(haftaKuni+", "+month+" "+date.getDate()+", "+date.getFullYear()
//        +" "+date.getHours()+":"+date.getMinutes());
//     }
   
//     else {
//         console.log("format topilmadi");
//     }

// }


// format("LLLL");
const moment = () => {
    return {
      format(symbol) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let week = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let nameMonth = [
          "January",
          "Feburary",
          "March",
          "Aprel",
          "May",
          "June",
          "July",
          "August",
          "September",
          "Octomber",
          "Noverber",
          "December",
        ];
        let nameDay = [
          "Sunday",
          "Mondey",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        if (symbol === "LT") {
          console.log(`${hours}:${minutes} PM`);
        } else if(symbol===" "){
           console.log('Eng');
        } else if (symbol === "LTS") {
          console.log(`(${hours}:${minutes}:${seconds} PM`);
        } else if (symbol === "L" && month.toString().length < 2) {
          console.log(`0${month}/${day}/${year}`);
        } else if (symbol === "L") {
          console.log(`${month}/${day}/${year}`);
        } else if (symbol === "l") {
          console.log(`${month}/${day}/${year}`);
        } else if (symbol === "LL") {
          console.log(`${nameMonth[month]} ${day}, ${year}`);
        } else if (symbol === "ll") {
          console.log(`${nameMonth[month].slice(0, 3)} ${day}, ${year}`);
        } else if (symbol === "LLL") {
          console.log(
           ` ${nameMonth[month]} ${day}, ${year} ${hours}:${minutes} PM`
          );
        } else if (symbol === "lll") {
          console.log(
            `${nameMonth[month].slice(
              0,
              3
            )} ${day}, ${year} ${hours}:${minutes} PM`
          );
        } else if (symbol === "LLLL") {
          console.log(
            `${nameDay[week]}, ${nameMonth[month]} ${day}, ${year} ${hours}:${minutes} PM`
          );
        } else if (symbol === "llll") {
          console.log(
            `${nameDay[week].slice(0, 3)}, ${nameMonth[month].slice(
              0,
              3
            )} ${day}, ${year} ${hours}:${minutes} PM`
          );
        }
      },
    };
  };
  
  moment().format(" ");
