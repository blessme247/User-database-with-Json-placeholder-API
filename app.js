//1.  API url
const url = "https://jsonplaceholder.typicode.com/users";

// Reset search box 
const select = document.querySelector("#filter");
const searchBox = document.querySelector("#search");
let selectedOption = select.options[select.selectedIndex].value;

searchBox.placeholder = "Search by " + selectedOption;
searchBox.value = "";


// 2. fetch users from the API url
function fetchUsers() {
    // 2.1 make use of the browser fetch API
    fetch(url).then((response)=>response.json())
    .then((data) => {
        // 2.2 Passing the user data to the renderUsers function
        renderUsers(data);
    });
}



// 3. Render the users in the DOM
function renderUsers(usersData) {
    const ul = document.getElementById("users-list-wrapper");
    
    // 3.1 Render an li tag for each of the users
    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="user-info">
            <div class="user-summary">
                <span>${index + 1}.</span>
                <span class="name">${user.name}</span>
                <span>-</span>
                <span class="username">${user.username}</span>
            </div>
            <button class="btn" id="moreBtn"  onClick="showToggle(this)">Show More</button>
           
        </div>
        <div class="user-more-info">
        <div class="flex-container">
    <span class="email"><span style="font-weight: 500;">Email:</span> <em>${user.email}</em></span>
    <span class="phone"><span style="font-weight: 500;   background-color: hsl(178, 81%, 94%);">Number:</span> <em>${user.phone}</em></span>
    <span class="address"><span style="font-weight: 500;">Address:</span> <em>${user.address.street}, ${
      user.address.suite
    }, ${user.address.city}, ${user.address.zipcode} </em></span>
    <span class="website"><span style="font-weight: 500;   background-color: hsl(178, 81%, 94%);">Website:</span> <em>${user.website}</em></span>
    </div>
        </div>
        `;
        // 3.2 Append the current user li tag to the ul tag
        ul.appendChild(li);
    });
}
       // Search based on filter
     function   searchBy() {
    const select = document.querySelector("#filter");
    let selectedOption = select.options[select.selectedIndex].value;
  
    if (selectedOption === "username") {
      searchUserByUsername();
    } 
     else if (selectedOption === "name") {
      searchUserByName();
    }
  };


    showToggle = (e) => {
        if (e.parentElement.nextElementSibling.style.display === "block") {
          e.innerText = "Show More";
      
          e.parentElement.nextElementSibling.style.display = "none";
        } else {
          e.innerText = "Show Less";
          e.parentElement.nextElementSibling.style.display = "block";
          
        }
      };
  
        
  
        // check what option is selected from the drop down list and update placeholder accordingly
        function dropdown() {
            const select = document.querySelector("#filter");
            const searchBox = document.querySelector("#search");
           
            let selectedOption = select.options[select.selectedIndex].value;
            searchBox.placeholder = 'Search by ' + selectedOption; 

        }


        // Add a search function to the DOM
        function searchUserByUsername(){
            const searchBox = document.querySelector('#search');
            const ul = document.getElementById("users-list-wrapper");
            const inputValue = searchBox.value.toUpperCase();
            const usersList = ul.querySelectorAll("li") /*array of all the li tags*/
          
            // Loop through all the users and render the ones that matches
            for (let index = 0; index < usersList.length; index++) { 
                const usernameSpanTag = usersList[index].querySelector(".username");
                const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
                const isMatch =  usernameSpanTagValue.indexOf(inputValue) > -1;
             
                if(isMatch) {
                    usersList[index].style.display = "block";
                }
                else {
                    usersList[index].style.display = "none";
                }
            }
        }
       

        function searchUserByName(){
            const searchBox = document.querySelector('#search');
            const ul = document.getElementById("users-list-wrapper");
            const inputValue = searchBox.value.toUpperCase();
            const usersList = ul.querySelectorAll("li") /*array of all the li tags*/

            // Loop through all the users and render the ones that matches
            for (let index = 0; index < usersList.length; index++) { 
                const usernameSpanTag = usersList[index].querySelector(".name");
                const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
                const isMatch =  usernameSpanTagValue.indexOf(inputValue) > -1;
             
                if(isMatch) {
                    usersList[index].style.display = "block";
                }
                else {
                    usersList[index].style.display = "none";
                }
            }
        }
fetchUsers();