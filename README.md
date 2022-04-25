# Code Repository For mattcodes.net
This is the git repo for [mattcodes.net](http://mattcodes.net).
It is authored by [Matthew Crooks](https://github.com/mcrooks65)

## Build Notes & Website Plans
* I've registered the domain name mattcodes.net using AWS Route 53. I'll be building the website on this repository and uploading my work to an AWS S3 bucket which will host the site.  I configured the domain to route to the S3 bucket configured for static web hosting and I now have a brand new live website to work on.

* The plan is to deploy my school and personal projects for my job hunt portfolio, as well as any other handy little JS web accesssible things I think might be handy.

* _There is a known security flaw on this current build of the site.  See notes at the top of weather.js_

## Project Goals
1. Personal Dashboard
    * Clock, Date, to-do lists, maybe pulls in web accessible api data for weather, news headlines etc. 
    * This will be the landing page for now, but might end up being locked depending on how exensively i end up using this.
    * Links to other parts of the website.  Might use a nice header for this.
2. Portfolio Section 
    * Spooling up the various backend api's from my bootcamp projects and making them web accessible will take some figuring out.  But must be done!
3. FreeHolder Bug Tracker 
    * A bug tracking single page webapp for people who play FreeHolder to report bugs on.