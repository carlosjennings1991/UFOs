# Searching for UFO's
---
For this project, we review a large dataset of purported UFO sightings. Each instance includes a date, city, state, country, shape, duration and comments (screenshot below). 

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/row_sample.png">

The technical aspect was to convert this data, which was given as a large JavaScript array, into a table which would be dynamically filtered on a website, which itself was also customized to be mobile responsive and reflect a desired aesthetic. 

While we are accustomed to being able to easily filter things on the internet, there's a lot going on behind the scenes, such as accomodating multiple filters, event listeners and resetting the table. 

All content was created through javascript, html, and css. Individual source files linked below: 
[html](https://github.com/carlosjennings1991/UFOs/blob/main/index.html)
[css](https://github.com/carlosjennings1991/UFOs/blob/main/static/css/style_from_bootstrap.css)
[js](https://github.com/carlosjennings1991/UFOs/blob/main/static/js/app.js)
[js](https://github.com/carlosjennings1991/UFOs/blob/main/static/js/data.js)

The website itself can be visited here - https://carlosjennings1991.github.io/UFOs/

---

## Results: 

Let's go over the code first. It's important to understand the mechanics to fully appreciate what's happening. 

### Step 1: Source Code: 

The data file, written in javascript is a massive array (which looks quite similar to a dictionary in Python) and looks like this, which each sighting instance happening between the curly braces and consisting of what looks like 5 key:value pairs. 

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/data_source_code.png">

We then need to import it into the javascript file that parses the data based on our search requests. The following code, seen in our other javascript file does exactly that. 

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/code.png">

The above code does the following

* Import the data (line 2)
* Takes the table and through javascript, builds the table in html row by row, filling each cell data value by data value. 
* Creates an empty list called 'filters' (very important because it feeds into another function later)
* Creates a function called 'updateFilters' which takes the search parameters inputted by the user, converts them to a value that is used to update the previously empty filters list, and then the 'updateFilters' function calls the 'filterTable' function.
* Creates a function called 'filterTable' which takes in the filters (provided by the user) and rebuilds the table based on the given filters. 
* Returns the table based on user inputs.  

The result is that we can filter the table based on any of five filters, and any combination of the five filters. The below example is one where I'm searching for all the sightings that were triangle in shape and 1/11/2010 in date. This filters the table down to two results. 

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/filtered_results.png">

---
## Summary

First and foremost, the central limitation is the size of the dataset. You really can't use more three or more filters and expect three or more results. 

Secondly, parts of the dataset are a little suspect. All the sightings are in 2010 and in January 2010 at that. There are also some type errors in the data set that were brought over from the data.js file. (shown below)

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/text_errors.png" width="449" height="245">

Finally, for the website itself, it would be great if there were more pages like one for a photo gallery, or in-depth articles about these close encounters with the third kind ;)
