// Exercise 1 : Change The Navbar
// Instructions
//  <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

// In the <div> above, change the value of the id attribute from navBar
//  to socialNetworkNavigation, 
// using the setAttribute method.


//let change = document.body.firstElementChild.setAttribute("id","socialNetworkNavigation")




// We are going to add a new <li> to the <ul>.


// let ul = document.body.firstElementChild.firstElementChild
// let newLi = document.createElement('li')  
// ul.appendChild(newLi)
// let logOut= document.createTextNode(`Logout`)
// newLi.appendChild(logOut)


//-------------------------EXCERCISE 2: USERS ---------------------------------------

// <html>
// <body>
//   <div id="container">Users:</div>
//   <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
//   <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
//   </ul>
// </body>
// </html>



// // In the HTML above change the name “Pete” to “Richard”.
// let changePeteToRichard = document.getElementsByClassName("list")[0].querySelector("li").textContent = "Richard"

// //let newChange= changePeteToRichard.setAttribute("text","Richard")


// // Change each first name of the two <ul>'s to your name.


// let uls = document.getElementsByClassName("list")


// for (let elem of uls){
// 	elem.firstElementChild.textContent= "Cecile"


// }


// // At the end of each <ul> add a <li> that says “Hey students”.



// // Delete the name Sarah from the second <ul>.

// document.body.children[2].removeChild(document.body.children[2].children[1])






//----------------------- Exercise 3 : Users And Style-----------------------



// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>



// Add a “light blue” background color and some padding to the <div>.
//document.body.firstElementChild.style.backgroundColor="lightblue"
document.body.firstElementChild.classList.add("div")

// Do not display the first name (John) in the list.


document.body.children[1].removeChild(document.body.children[1].firstElementChild)



// Add a border to the second name (Pete).
let liPete = document.body.children[1].firstElementChild
liPete.classList.add("pete")
// Change the font size of the whole body.

document.body.classList.add("wholebody")
// Bonus: If the background color of the div is “light blue”, 
// alert “Hello x and y” (x and y are the users in the div).


