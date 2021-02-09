# 30 Minute Film Festival

## The Triple A Team

[Go to the website](https://aayronaayush.github.io/30mff)

I decided to make the team "Triple A Team" because of the fact that all the member of ours group had names starting with an "A"

### Project Description

For this project I tried to keep the design as minimal as possible. I did not want to make the website or the website very happening as I wanted the user to focus on the main content of the page which would be whatever is displayed right after the navbar. For the same reason there is only one block of content displayed on the webpage at a time. Initially, the webpage would load with the film or the video as that is usually what the user or the viewer would mostly come to view.

I also tried to make the user experience as clean as possible by avoid the number of actions the user of have to take to view the different content. In this instance, the user would just need to click on the title of whatever they are tried to view to see the content and since the navigation buttons are nearby it is easy to find and use.

### Process

The began development process by initializing a github repository so that it would be easier log the progress and revert back to a certain stage in the project should I need to. Then I created an index file and added all the content.

After this I created and styled the navigation bar. At the same time as I was creating the navigation bar I added the navigation functionality that allowed the user to jump to different sections of the website.

I then centred the different content of the page vertically and horizontally by using the CSS **display:flex;** property along with **justify-content: center;**, **align-items:center;** and **flex-direction:column**.

After this I went on to add the functionality to hide div and to enable to proper div.

For the crew member, I added the functionality of only showing the user information should the user/viewer want to see this information. By added **mouseenter** and **mouseleave** event listener to each of the crew members block. After this for **mouseenter** I had the function such that when the mouse is over the image the crew member's name, major and class would appear and their image would become slightly bigger. For **mouseleave** I reverted the added function.

### Reflection

There are parts of the website that I would like to change. The first begin the way, the Javascript code is written to display and hide the different content block. At the moment when a nav button is clicked, the display property of all content is manipulated. The chosen block's display property is set to _block_ and the rest of the block's display property is set to _none_. The code would be more efficient if we only do the operation where it changes the display property of the current block to _none_ and the chosen block's display property to _block_. At the moment the code is running in linear time by implementing the said change the code will run in linear time.

Another I would probably make is I would add transitions to make the changes smoother. At the moment, the changes are every choppy or jumpy as the change abruptly happens there is not transition or smoothness.
