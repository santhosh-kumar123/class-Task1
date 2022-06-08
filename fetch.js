// let fetchdata = async () => {
//     try {
//         let data = await window.fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         let fetchdata1 = await data.json()
//         console.log(fetchdata1);
       
//         fetchdata1.map((data) => {
//             let {id}=data
//              let x = document.getElementById("table");
//             x.innerHTML += `<tr><th>name:</th><th>id:</th><th>email:</th><tr>  <td>${data.name}</td><td>${id}</td><td> ${data.email}</td></tr>`;
//             document.body.appendChild(x);
//         })
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchdata()



// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(...numbers);
// // expected output: 6

// console.log(sum.apply(null, numbers));
// // expected output: 6




// let fetchdata=async ()=>{
//     try {
//         let data = await window.fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         let fetchdata1 = await data.json()
//         console.log(fetchdata1);
//         fetchdata1.map((user) => {
//             let div = document.createElement("div")
//             div.innerHTML += " "
//             div.innerHTML+=`${user.name}   ${user.id}`
//             document.body.appendChild(div)
            
// })
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchdata()