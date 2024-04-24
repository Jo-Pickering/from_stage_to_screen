//Function for title click - set the weekValue variable as equal to the text content of the clicked heading and expand/collapse content.
const weekTitleClick = (event) => {
  //Variable to be compared with
  let weekValue = "";
  weekValue = event.currentTarget.textContent.replace(" ", "-").toLowerCase();
  //find the div with the same id as the weekValue and toggle it's visibility
  let findDiv = document.getElementById(weekValue);
  findDiv.classList.toggle("hide");
};

export { weekTitleClick };
