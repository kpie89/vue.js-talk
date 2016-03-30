## Prerequisites

-   Basic Understanding of JavaScript

## Objectives

By the end of this, developers should be able to:

-   Understand the core concepts of Vue.js
-   Set up a Vue.js app
-   Create a To-Do list app using Vue.js

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
2.  Install dependencies with `npm install`.


## What the heck is Vue.js?

From (https://vuejs.org/guide/overview.html)

"Vue.js (pronounced /vjuː/, like view) is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible.

Vue.js itself is not a full-blown framework - it is focused on the view layer only. It is therefore very easy to pick up and to integrate with other libraries or existing projects. On the other hand, when used in combination with proper tooling and supporting libraries, Vue.js is also perfectly capable of powering sophisticated Single-Page Applications."

## Core Concept

At the very basis of all of Vue. js is creating new instances of Vue and attaching them to certain elements in the view-layer so they can be easily manipulated.

For example:

Let's make a new div in our HTML file.

```
<div id="example">
  {{ greeting }}
</div>
```

Then we can create a new instance of Vue in another JS file:

```
new Vue ({
  el: "#example",
  data: {
    greeting: "Hello World"
   }
  })
```

  Notice that in the new instance of Vue we have created, we attached it to the 'example' div using the 'el' binding. Now, everything within the 'example' div will be in the scope of the new Vue instance.

## Yummy Built-Ins

  We bind data very easily using Vue.js. I'll use an example from my Taskr app.

```
new Vue({
  el: '#demo',
  data: {
    tasks: [{
      body: 'Learn Vue.js',
      completed: false
    }, {
      body: 'Present your findings',
      completed: false
    }],

    newTask: ''
  },
```

Notice that our Vue instance has an element labeled newTask. The way we bind this element to whatever data we are inputting is by using:

```
<input class="form-control"
       v-model="newTask"</input>
```

This nice syntactical sugary goodness is built in to Vue.js and tells Vue to bind whatever data goes into the input field with the newData element in our Vue instance.

Another great example of a built-in method from Vue.js that could prove to be very helpful is the v-repeat method. To display our list the syntax is as follows using the Vue instance we have established:

```
<ol>
<li v-repeat="task in tasks"> {{ task.body }}</li>
</ol>
```

No, really that's it. The v-repeat method will iterate through all of your data and assign 'task' (or whatever you wanna call it) in each one of your tasks to a new list item.

Notice the mustache helpers. This should be very familiar to you by this point. It essentially acts as hbs helpers from Ember. Remember those?

The last method we'll talk about is 'v-on'. This one takes some action (whatever action JavaScript knows about) on some element in your HTML and then performs a method you assign it. For example:

```
<button v-on="click: removeTask(task)">&#x2716</button>
```

This is the example from our removeTask method. Vue says "Okay, when this button gets clicked perform method 'removeTask'". It then refers to the vue instance and sees the method we have put into place and performs whatever actions necessary.

## Follow-along

Follow along with me as I explain some of the methods that we made. There are a bunch of helper methods built in to Vue.js that in my next talk I would like to go over in more detail. For now, listen to me as I explain the couple that I have used.

## Filtering

Another nice feature is using custom filters with Vue.js. When we complete a task, we want that task to move into our 'Finished Task' div. Vue.js simply supports piping a filter into any one of it's built-in methods. For example:

```
<li class="list-group-item" v-repeat="task in tasks | toBeDone">
```

We've piped in 'toBeDone' which we will configure in our 'main.js' file like so:

```
filters: {
  toBeDone: function(tasks) {
    return tasks.filter(function(task) {
      return !task.completed;
    });
  },
```

Vue knows 'filter' and can pass it a function that returns only the tasks that do not have completed as true. Simple as that.

## Computed Properties

So we want to see how many tasks we still have to do and how many we have completed. That's easy...we can use a computed property. Just like with filters and methods on our view instance. We add computed properties right in our Vue instance:

```
computed: {
  completions: function() {
    return this.tasks.filter(function(task) {
      return task.completed;
    });
  },
```

Then in our HTML file instead of simply rendering the length of all of our data, we need to return:

```
{{ completions.length }}
```

There we go, a basic look at using computed properties.

## Conclusion

Vue.js is a nice, simple library that can either be used in conjunction with other frameworks but also has the capability to be used to completely build a scaled SPA.

Questions?
