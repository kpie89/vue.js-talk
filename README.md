## Prerequisites

-   Basic Understanding of JavaScript

## Objectives

By the end of this, developers should be able to:

-   Understand the core concepts of Vue.js
-   Set up a Vue.js app
-   Create a To-Do list app using Vue.js
-

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
2.  Install dependencies with `npm install`.


## Leading Topic Heading

From (https://vuejs.org/guide/overview.html)

"Vue.js (pronounced /vjuː/, like view) is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible.

Vue.js itself is not a full-blown framework - it is focused on the view layer only. It is therefore very easy to pick up and to integrate with other libraries or existing projects. On the other hand, when used in combination with proper tooling and supporting libraries, Vue.js is also perfectly capable of powering sophisticated Single-Page Applications."

## Demo

View is already installed and ready to use from this repo. Let's dive into a few of the core concepts.

I have made a simple Listr (yay Listr) app using Vue.js. At the very basis of all of Vue. js is creating new instances of Vue and attaching them to certain elements in the view-layer so they can be easily manipulated.

For example:

Let's make a new div in our HTML file.

```
<div class="example">
  {{ greeting }}
</div>
```

Then we can create a new instance of Vue in another JS file:

```
new Vue ({
  el: "example",
  data: {
    greeting: "Hello World"
   }
  })
```

  Notice that in the new instance of Vue we have created, we attached it to the 'example' div using the 'el' binding. Now, everything within the 'example' div will be in the scope of the new Vue instance.

  
