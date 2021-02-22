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

---

## Results: 

Let's go over the code first. It's important to understand the mechanics to fully appreciate what's happening. 

### Step 1: Source Code: 

The data file, written in javascript is a massive array (which looks quite similar to a dictionary in Python) and looks like this, which each sighting instance happening between the curly braces and consisting of what looks like 5 key:value pairs. 

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/data_source_code.png">

We then need to import it into the javascript file that parses the data based on our search requests. The following code, seen in our other javascript file does exactly that. 

<img src="https://github.com/carlosjennings1991/UFOs/blob/main/code.png">
