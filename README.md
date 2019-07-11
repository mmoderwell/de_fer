# de_fer
A simple web app to map and visualize different geographical data.

Named after the French cartographer, Nicolas de Fer was less a scientist than he was an artist.
De Fer is known for producing over 600 maps, each a unique work of art. This repo helps you do the same.

## How to use

Before you can visualize any data, you'll need to:

* Clone this repository and start the backend:

      $ git clone https://github.com/mmoderwell/de_fer.git
      $ cd de_fer/backend
      
From the `/backend` folder, run
      $ node subzero.js

Launch mapping.html in a browser and you should see a map of all the U.S counties and their respective market shares.

## Authors

* **Matt Moderwell** - *Initial work* - [mmoderwell](https://mmoderwell.com)

See also the list of [contributors](https://github.com/mmoderwell/de_fer/contributors) who participated in this project.

## License

This project is licensed under the MIT License; go ahead and do whatever you like with it.

## Inspiration

I wanted an easy way to visualize different county level data for a market share project. 
I had a bunch of data points for each county in the us but it was hard for me to make sense of them
and how they compared to the rest of the country. With this tool, I'm able to quickly look at each metric,
or a combination on more than one, and compare the values with the rest.

While the end goal of this data is to run it through some machine learning models, being able to visually see the data
before then gives a better understanding of the data we are working with and hopefully gives more direction when 
tuning things later on.
