---
title: When CSS seems scary
image: /images/writing.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
authors:
  - anne-greeth-schot-vanherwijnen
date: Wed Oct 6 2021
tags:
  - css
  - tech
---

In this blogpost I want to show you how I tackle CSS. There are so many CSS rules, so many properties and options that it might feel overwhelming. I would recommend that you start small. 

If we take the example of a HTML button element. You might like it the way it is or you might prefer to give it a bit more charm.  
This blogpost will use this piece of code: `<button>Click me</button>` in a file saved as `.html`. Nothing fancy!

# Tip 1: Open the browser
Often when I want to (re)design something I open up the dev-tools in the browser by right clicking and choosing “inspect element”. This will give you a place to write CSS inline for that specific element (see GIF below). Writing styles inline like that assures that your written styles will be applied, except when someone added `!important` to that property. The browser will give you auto-completion and a ton of options and you can see your changes directly.

![A simple HTML button being right clicked. In the dev tools the sentence "start typing CSS here" is added to the Style Attribute](/blogpost-assets/css/rightclick.gif)

# Tip 2: Step by step
Don’t think you have to know right away where your design will go. You can just start bit by bit changing what is already there. I usually start with some spacing, the height/width and color.

![HTML button being styled with height, background-color and border-radius](/blogpost-assets/css/button_style.gif)

As you can see in the GIF the dev-tools show a lot of suggestions when you start typing a property or value. There is a [list of colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) that  are supported by the browser by name. This is the list I use in the GIF. It also updates when you move with arrowkeys through the list.

## What about the default styling
A browser has it's own style sheet called `user agent stylesheet` that provides some default styling. This styling differs per browser. Luckily there are ways to make this consistent between browsers, [this blogpost by Chris Coyier called "Reboot, Resets, and Reasoning"](https://css-tricks.com/reboot-resets-reasoning/) explains more about resetting and normalizing styling between browsers. This is useful when you want to write your CSS and have it look the same across browsers.

![The default buttons for Firefox, Safari, Chrome and Opera](/blogpost-assets/css/default_browser_buttons.png)
*The default buttons for Firefox, Safari, Chrome and Opera*

# Tip 3: Steal like an artist
Luckily a lot of people with CSS experience have built awesome codepens and libraries. You can steal from those by just copy-pasting or steal from them by understanding and adapting what they made. Often when you try to describe what you are looking for you will either find some code that does exactly that, learn more about the different building blocks of what you want to built (and can probably start building yourself), or know what your next google search should be. 

When googleing: "awesome css buttons", I came across tons of websites with lists of buttons and I found the awesome codepen below. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Blobs button" src="https://codepen.io/hilwat/embed/BeemVX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hilwat/pen/BeemVX">
  Blobs button</a> by Hilary (<a href="https://codepen.io/hilwat">@hilwat</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


# Tip 4: Kill the perfectionist
The difficult thing with design is that we know our taste and we know what others are capable of. This might put up a hurdle for writing your CSS, because somebody else might know a better or more beautiful solution. However, they also had to learn how to get there. If your CSS does what it needs to and looks the way you like (at this point in time), you’ve done it! You wrote CSS!

# Bonus tip: Use resources to learn
The [MDN docs on CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) have explanations of all the properties and what parameters you can and cannot pass. Also [CSS-tricks](https://css-tricks.com/) is your friend, where MDN has the definition CSS-tricks has often more of the implementation.  You can use these resources to learn, or of course to re-learn, because there is no shame in finding out how to flex box more than once

I hope these tips will allow you to start feeling more comfortable with CSS, and remember that when CSS seems scary to do it anyway!
