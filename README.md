# Fourier-Sketcher
````````````````````````````````````````````````````````````````````
  Draw all kind of complex picture using fourier transform using P5.js.
````````````````````````````````````````````````````````````````````

## Principle
``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
  All images are modeled by a discrete function. In this project, we are only interested in the      
contoured image, without color. the contour images are images composed of two black and white
colors, which makes it easier to determine the discrete function which models it. Once we get
our discrete function, which is an interpolation, in the form of a set of coordinates, which 
can be stored in files or data structures (JSON, XML ..), we can transform it into a combination
sines and cosines that define epicycles with factors that define their radius.
  Contoured images can be obtained by an external processing (opencv for example not applying a
thresholding by hysteresis, and filters of Prewitt and Sobel derivative).
````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

## How it work
``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
  After cloning the project into your working directory, you have 3 files, index.html, sketch.js
and fourier.js. Index.html invoke the P5.js processing library, the sketch.js contain the sketch
property, you can consult the P5.js documentation; and fourier.js is our dft code that will convert
our function to the sines and cosines combination.
  So how we specify, we need the input the image, or specifically the function, and here you are,
a live sketcher that draw your picture with epicycles.
  As an example, we can give in the sketch.js the circle equation with the (0,0) origin: x^2+y^2 = r^2 
and the x-axis drawer will draw with sines, y-axis drawer will draw with cosines, and the final 
result is a very precise circle
 ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
 
# To be continued
 



