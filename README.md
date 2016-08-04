#RGBlind

RGBlind is an open-source real-time color blindness simulation tool for the web. It is developed to:
* Help organizations, designers and web developers understand how color blind users might experience their webpages.
* Help designers and web developers understand the problematics with designing for color blind users.

The aim is to help make better structured webpages with high readability, for everyone.

RGBlind is initiated, designed and developed by Interaktiva rum (Interactive rooms), http://www.interaktivarum.se/en, and funded by The Internet Foundation in Sweden, http://www.iis.se/english/.

##Setup
No installation is needed, just clone the or download the files and place them in a folder of your choice. The folder named **rgblind** contains all the files you need to simulate color blindness on your own website:
* rgblind.js
* rgblind.css
* rgblind.svg

When including **rgblind.js** on your webpage, the Javascript code injects the **rgblind.css** stylesheet and the SVG filters from **rgblind.svg** into the HTML code. The filters are applied by assigning classes to the DOM elements in the HTML code.

```
<script src="rgblind/rgblind.js"></script>
```
*Include *rgblind.js*

```
<img src="Ishihara_9.png" class="protanope"/>
```
*Apply protanope filter to the image element*

See example: [simple example](examples/example.html).

##Other RGBlind implementations
RGBlind is available as (1) an extension to the user's web browser, (2) a webpage where the user can input an url for simulation, and (3) an open source toolkit for developers to use in their own web development code.