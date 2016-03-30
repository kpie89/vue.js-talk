'use strict';

import Vue from 'vue';
import App from './App.vue';




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

  computed: {
    completions: function() {
      return this.tasks.filter(function(task) {
        return task.completed;
      });
    },

     todos: function() {
       return this.tasks.filter(function(task) {
         return ! task.completed;
       });
     }
   },

  filters: {
    toBeDone: function(tasks) {
      return tasks.filter(function(task) {
        return !task.completed;
      });
    },

    completedTask: function(tasks) {
      return tasks.filter(function(task) {
        return task.completed;
      });
    }
  },

  methods: {

    addTask: function(e) {
      e.preventDefault();
      this.tasks.push({
        body: this.newTask,
        completed: false
      });

      this.newTask = '';
    },

    removeTask: function(task) {
      this.tasks.$remove(task);
    },

    updateTask: function(task) {
      this.removeTask(task);

      this.newTask = task.body;

      this.$$.editTask.focus();
    },

    taskDone: function(task) {
      task.completed = true;
    }
  }
});
