OVCSS
=====
<img src="http://img.shields.io/badge/Version-1.0.1-green.svg">

Organised Views CSS

Download the framework : http://lukyvj.github.io/OVCSS/ovcss-v1.0.1.zip


#What is it ?
OVCSS is a MVCSS, which means this is a Model Views Cascading Stylesheet.

How a MVCSS works ? (v1.0.1)

    index.html
    |
    |_ ovcss.css
      |
      |_ base/_normalize.css
      |_ bourbon/_bourbon.scss
      |_ base/_settings.scss
                 |
                 |_  animation.scss
                 |_  base.scss
                 |_  buttons.scss
                 |_  classes.scss
                 |_  colors.scss
                 |_  debug.scss
                 |_  form.scss
                 |_  grid.scss
                 |_  icons.scss
                 |_  images.scss
                 |_  mixins.scss
                 |_  normalize.scss
                 |_  settings.scss
                 |_  shame.scss
                 |_  typography.scss
                 |_  variables.scss

And loaded in the right order in `_settings.scss` :

    /* ==========================================================================
     OVCSS Settings library :
    ========================================================================== */
    
        @import '_variables.scss';      // Define Main vars (root, path, ect)
        @import '_mixins.scss';         // Import the mixins.
        @import '_typography.scss';     // Import your typography stylesheet.
        @import '_grid.scss';           // Import your grid system.
        @import '_icons.scss';          // Import the icon fonts.
        @import '_images.scss';         // Import the images
        @import '_colors.scss';         // Import your colorscheme first.
        @import '_buttons.scss';        // Import the Buttons stylesheet ( After the colors, the typograhy).
        @import '_classes.scss';        // Import the Classes file.
        @import '_form.scss';           // Import the form stylesheet.
        @import '_animation.scss';      // Import the keyframes animations stylesheet.
        @import '_base.scss';           // Import your Base Stylesheet.
        @import '_shame.scss';          // If it's a hack, it goes in shame.css.
        
        @import '_debug.scss';          // Debugger


# Features
## Grid system
By default, OVCSS use the [lemonade.im](http://lemonade.im) grid system.

# OVCSS Usecase

## [EfficaCSS](http://lukyvj.github.io/EfficaCSS/)
