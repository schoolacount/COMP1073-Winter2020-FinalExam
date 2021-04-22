/* 
If ‘start’ is chosen in the dropdown message  :
the background colour of the page should change to #C47C47
 new div is added to the page. The div contains an H1 with the class of ‘welcome_heading” and text content that says ‘Welcome To Your Final Exam. Good Luck’

 If ‘complete’ is chosen from the dropdown message: 
The background color of the page should change to #C0FFEEA new div is added to the page.
 The div contains an H1 with the class of ‘finished heading’ and text content that says “Great Job! Thanks for a Great Semester”! 
Remember to ensure your code is properly formatted and valid! Create a folder called Q1 and include all your code files inside. Publish your page using Github Pages. Include a link to your GitHub repo and published page as your answer.
*/

const select = document.querySelector("select");
select.addEventListener("change", () => {
    
    if (select.value === 'start') {
        document.querySelector("body").style.backgroundColor="#C47C47";
    
        document.body.appendChild(document.createElement("DIV")).appendChild(document.createElement("H1")).className="welcome_heading";
        document.querySelector(".welcome_heading").textContent="Welcome To Your Final Exam. Good Luck";
    
    } else {
        document.querySelector("body").style.backgroundColor="#C0FFEEA";
        
        document.body.appendChild(document.createElement("DIV")).appendChild(document.createElement("H1")).className="finished_heading";
        document.querySelector(".finished_heading").textContent="Great Job! Thanks for a Great Semester"
    }
    
})

