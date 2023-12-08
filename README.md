# Simple Course Registration Project 

This template provides a minimal description of this project features. And tools used to make it alive.

# Live Link <br/>
[Click here to visit the live site](https://amusing-territory.surge.sh)
# Project Features

This is a SPA(Single Page Application) which portrays a course selling educational website.  
Here, The top theree features of this project is listed below:

* One of the main features of this project is the user can select multiple unique cards.   
  Which will be added to the cart section automatically.
* Here, the user can select any cards under some logical conditions. such as, same card  
  is not selectable multiple times. 
* And also, upon clicking on any cards, it's price and  
  credit hour is calculated automatically in the cart section only if it mets the logical  
  maximum requirement of price and hour.If the user exceeds if, a warning message  
  will be shown.  

# Tools used to power this project

1. JS framework: plain React,
2. CSS framework: tailwind,
3. Build tool for local development and production: Vite,
4. Prompt warning messages: React toast plugin

# How I managed the state in this project

I learnt it very well that whenever state is changed, then the whole component weill render  
as well as all the descendent components along with it. So, if i isolate all the individual  
components with their unique state, then i won't be able to use a common state    
through multiple components. Then i came across a unique solution. That is lifting state up
design pattern , where you have to uplift your state to a common ancestor with the state 
depending handler and change it accordingly for every component that needs it.
here, my component structure is given below:


* App <---(state is lifted up here.)
  * Courses
      * Course
  * Cart
      * CartItems



if you have further query about this project, you can [mail](https://qarimahdi217@gmail.com) me.
