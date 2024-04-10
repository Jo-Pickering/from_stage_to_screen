//Adding hide/show blog content for each week on clicking the title

//Variable to be compared with
let weekValue = "";

//Function for title click - set the weekValue variable as equal to the text content of the clicked heading
const weekTitleClick = (event) => {
  weekValue = event.currentTarget.textContent.replace(" ", "-").toLowerCase();
  console.log(weekValue);
  //find the div with the same id as the weekValue and toggle it's visibility
  let findDiv = document.getElementById(weekValue);
  console.log(findDiv);
  findDiv.classList.toggle("hide");
};

//Listener function for week-titles
const addWeekTitleListener = (weekTitleElement) => {
  weekTitleElement.addEventListener("click", weekTitleClick);
};

//Group all the week titles together and loop through them and attach Event Listener
const weekTitleElements = document.querySelectorAll(".blog-week-title");
weekTitleElements.forEach(addWeekTitleListener);
