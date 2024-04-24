//Adding hide/show blog content for each week on clicking the title

import { weekTitleClick } from "./modules.js";

//Listener function for week-titles
const addWeekTitleListener = (weekTitleElement) => {
  weekTitleElement.addEventListener("click", weekTitleClick);
};

//Group all the week titles together and loop through them and attach Event Listener
const weekTitleElements = document.querySelectorAll(".week-title");
weekTitleElements.forEach(addWeekTitleListener);
