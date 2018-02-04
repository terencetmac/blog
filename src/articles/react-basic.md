---
title: 'Get started with React in 2017, Part 1 - React Basic [Walk-through]'
date: 2017-06-06
---

It's 2017 and if you haven't already heard, React is pretty awesome. Unfortunately, it takes a little more effort to get started and become productive.

If you're still not convinced, read [this](https://blog.syncano.io/reactjs-reasons-why-part-1/), [this](https://hackernoon.com/angular-vs-react-the-deal-breaker-7d76c04496bc) or the many articles [discussing JS frameworks](https://risingstars2016.js.org/).

My goal is to provide a detailed walk-through for starting your React project from scratch and help you understand why certain components are necessary and how they relate to modern JavaScript application development. 

Whilst there are many other starter projects ([here](https://github.com/facebookincubator/create-react-app), [here](https://www.reactboilerplate.com/) and [here](https://zeit.co/blog/next)), it can be intimidating to see so many new and unfamiliar technologies and not fully understand why these components are needed.

> **tl; dr**;  
This is detailed guide and reference for starting your own React project from scratch.

>- [React Basic Github Repo](https://github.com/terencetmac/ReactBasic)
>- *coming up in Part 2 - React Plus*
>- *coming up in part 3 - React Superpowers*

> Every section starts with an overview of the steps required, the motivation behind doing it and a detailed explanation of how to do it. 

Let's get started.

## Overview ##
1. [Code Version Control with Git](#step1codeversioncontrolwithgit)
2. [Using NPM for Package Management](#step2initialiseyourprojectasannpmproject)
3. [Installing the Basic Packages Required for React](#step3installingthebasicpackagesrequiredforreact)
  - Module Bundling with Webpack
  - Install React Core Components
  - Install React's Convenience Packages (ES6 & JSX)
4. [Create your Project's Basic Folders and Files
](#step4createbasicfoldersandfiles)
5. [Putting it All Together for Hello World!](#step5helloworldwithreactbasic)

### Step 0. Create a new Folder for your Project ###
1. Open up your terminal and navigate to a folder where you want to your project to live.

2. Create your project folder and navigate to that folder
`mkdir react-basic`  
`cd react-basic`

### Step 1. Code version control with Git ###

In the Terminal from your `react-basic` folder,

1. Initialise a Git Repository
   ` git init `  
2. Create a Git ignore file
   `touch .gitignore `

**Why?**
> From [Atlassian](https://www.atlassian.com/git/tutorials/what-is-version-control), *(emphasis mine)* 

> ... help a software team **manage changes to source code over time**. Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, **developers can turn back the clock and compare earlier versions of the code to help fix the mistake** while minimising disruption to all team members.

Version control is a tenant of modern software development and Git is a great tool for this. If you haven't been using Git to keep track of your projects, you should start with this one.

As you write more code for the project, you want to `git commit` (or check in) these files into the project's Git repository. This allows you or a fellow developer to easily `git clone` (or download) your project and contribute to the project. If you host this Git repository online, E.g. in a public Github or Bitbucket repository, anyone who has access to the URL will be able to see your project files.

But wait, what if your files contain secret information like your database login and 3rd party API keys? How about NPM project files? Should they be the Git repository as well?

A `.gitignore` file tells Git not to commit certain files or folders into your git repository. In general, people don't commit dependencies and config files that contain sensitive information that you don't want public.

You can find a sample `.gitignore` file in any of the React-* repos linked in this article.

### Step 2. Initialise your project as an NPM project.
1. In the Project Root Directory, initialise your NPM project with
`npm init ` to create a `package.json` file.

2. Follow the prompts. Any information you enter here can be changed later. The only thing that really matters now is your project name. It cannot contain spaces and must be lowercase.

**Why?**
> From NPM's website, *(emphasis mine)*  
> ... NPM makes it easy for JavaScript developers to **share the code that they've created to solve particular problems**, and for other developers **to reuse that code** in their own applications.

NPM is an online package registry for Javascript. It allows you to easily import packages that other people have written to extend the functionality of your own application.

You'll often see this in the documentation of plugins published online, with instructions to include the plugin as a script tag from a CDN, install with Bower or install with NPM. Either is fine, but using NPM makes it easier to manage as your application grows.

For example, to install jQuery, you can use a script tag in your HTML. If you install it via NPM, you'll do `npm install --save jquery` instead. So if another developer wants to work on your code base, they can easily use `npm install` to download all your project's dependencies, instead of downloading them manually from each project site.

**Note**  
With NPM you can install packages as **dependencies** or **dev dependencies**. For the most part, this isn't too important now, but in general, if the package is necessary for your application in production, E.g. frameworks like React/Angular etc. then install it as a dependency with `npm install --save <package-name>`. 

If you only need that package in your development environment, E.g. test runners like Mocha or Jest, save them as dev-dependencies with `npm install --save-dev <package-name>`.

If you're not sure which is the right package, you can search from within the command line with `npm search <package-name>`.

### Step 3. Installing the Basic Packages Required for React
1. Install a module loader, Webpack and Webpack's dev server
`npm install --save-dev webpack webpack-dev-server` 

2. Install React's core modules
`npm install --save react react-dom`

3. Install React's convenience modules, used with Webpack  
`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react`

#### 1. Install Webpack and Webpack's Dev Server as dev dependencies.  
` npm install --save-dev webpack webpack-dev-server`  

**Why?**  
Imagine you have 3 components in 3 separate JS files, header.js, sidebar.js and main.js. In order to get these into the browser, you have to add script tags to your HTML file. For example:
```
  // An example index.html
  ...
    <script src="js/components/header.js"></script>
    <script src="js/components/sidebar.js"></script>
    <script src="js/components/main.js"></script>
  </body>
  ... 
```

So now it works, all fine and dandy. But what if later on, your header.js file needs something from main.js? Now, this won't work because main.js is loaded after header.js. Also, what if you had 15 components? Then you'll have to manually include at least 15 script tags on your page.

If only there was a way where we can specify a main `.js` file, step through the code and automatically include the files that are required?

That's basically what a module bundler does and we use Webpack. 

**Note**  
Many tutorials online use Webpack 1 but Webpack 2 has been released and not everything is backwards compatible. For more, see [here](https://webpack.js.org/guides/migrating/).

Next, you'll need some way to serve your files that can be accessed from the browser. In order of ascending difficulty:

a. Use Python's SimpleHTTPServer that comes with most Macs
b. Use Webpack's Dev Server
c. Set up a Node server within your project (Use for production apps)

Options *a* and *b* are great options for quickly prototyping something but you should not use them for production applications. Since we're setting up a simple React application for development, let's pick one of them.

Webpack's Dev Server is the better choice here because it comes with several built-in features that make your development process easier. Read more about it [here](https://webpack.js.org/configuration/dev-server/).

####2. Install React's Core Components####
`npm install --save react react-dom`

At this point, you can already start to write a basic React application. However, you'll notice that a bunch of sample code from the docs and many tutorials will not work because they use ES6 and JSX.

To write ES6 and JSX, you'll need some way to transpile your code into a format that all browsers understand.

####3. Install React's Convenience Packages####
`npm install --save-dev babel-cli babel-core babel-loader babel-preset-env babel-preset-react`

**a. What's the fuss about ES6?**  
ES6 (a.k.a. ES2015) is simply the next version of JavaScript, with added features to the language. Unfortunately, not all these new features are supported across all browsers yet. To ensure that our new JS features can run on all browsers, we use Babel to transpile (convert) our code into ES5 (the previous version of JS).

Now you can use Babel directly to do this, but since we're using Webpack, we'll get Webpack to help us do this.

**b. JSX?**  
While we're at it, React recommends using JSX, which is a flavour of writing JavaScript that allows you to write HTML directly in JavaScript. You don't have to use JSX to write React apps, but as you will see, makes React components easier to write. Also, because browsers cannot recognise JSX, we will also use Babel to transpile JSX into valid HTML.

But...

- [JSX violates the separation of concerns](http://blog.andrewray.me/youre-missing-the-point-of-jsx/) by mixing [HTML, CSS and JavaScript](http://nayaabkhan.me/react/the-react-philosophy)!
- [I don't want to learn a new syntax!](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98)

Now that we're past that, here's how we get it working. We use Webpack loaders to transpile ES6 and JSX code for us. Above, we installed the required Babel packages (at the time of writing) that work with Webpack.

At this point, you might be wondering how in the world can one keep track of all these necessary packages. For example, if you visit the plugin page on Babel, you will see this:

![](/content/images/2017/06/babel-plugin-page.png) *Babel plugin documentation, accessed 2 Jun 2017*

Unfortunately, in the world of NPM, there really isn't a simple solution to this. Picking the right package requires a healthy mix of intuition, research and luck. My recommendation is to understand what you need to do, then look directly at the documentation to figure out which package is needed.

### Step 4. Create Basic Folders and Files
Now that we've got all the packages we need, we'll start getting our project folders and files in order. There's no one right way to organise your folders but here are my basic considerations.

* **Public or Distribution folder** for assets that will be served from. Static HTML, CSS, Images and JS files that are served to the public will reside here.

* **Source folder** for all your development files. Here is where you will do most of your development.
```
// An example project

/ (project root)
  /dist
    index.html
    /css
    /js
    /img
  /src
    /components <-- React components can go here
```

### Step 5. Hello World with React Basic ###
Let's briefly revisit what we've done and our goal for today. We've installed Webpack, React and Babel's Webpack plugins and we're ready to go. By the end of this tutorial, we should have a basic Hello World React application.

The general idea as we build our app is as follows:

1. We create new `.js` files for React Components inside the source   directory (/src)
2. Webpack will watch our source directory for changes to any files inside
3. When files change, Webpack will start from the entry file `index.js`, go through every `import` statement and bundle these files together in the correct order
4. It will then output a `bundle.js` file in our designated output directory (/dist/js)
5. In order for Webpack to be able to process ES6 and JSX properly, we need to ensure we're using the Babel preset packages that we installed
6. We can then visit our app at our localhost address to see changes

Let's start putting everything together.

####1. Setup Webpack's Configuration####
######a. Create webpack.config.js file in your project's root directory######
`touch webpack.config.js`

######b. Setup basic Webpack Config
```
// webpack.config.js

  // Require Node's path module
  var path = require('path');

  module.exports = {
    // Define an entry file for Webpack to Start
    entry: './src/index.js',
    
    output: {
      // Name your output file
      filename: 'bundle.js',
      // Tell Webpack what directory to put it in. E.g. '/dist/js'
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/js/'
    }
  }
```
######c. Setup Babel's ES6 & JSX loaders in Webpack
```
// webpack.config.js
  ...
  output: { ...
  },

  module: {
    rules: [
      {
        // Tell Webpack to apply the loader to files that match
        // this regular expression
        test: /\.(js|jsx)$/, 
        // but skip these files/folders
        exclude: /node_modules/, 
        // using this specific loader
        loader: 'babel-loader'
      }
    ]
  }
  ...
```
######d. Configure Babel's presets

1. Create a `.babelrc` file. In your project's root directory,
`touch .babelrc`

2. Configure Babel's presets for JSX (react) and ES6 (env)
```
// .babelrc
  {
    "presets": ["env", "react"]
  }
```

######e. Create your application's index.html
1. In /dist, create an `index.html` file. 
I like to use a basic HTML5 template like the one [here](https://www.sitepoint.com/a-basic-html5-template/).

2. Update the script reference to your bundle.js file as follows.
```
// index.html
  ...
  <body>
    <div id="app"></div>    

    <script src="js/bundle.js"></script>
  </body>
  ...
```

######f. Create your first React component, a.k.a your entry file defined in Webpack's configuration
1. Create an `index.js` file in your project's /src directory
`touch src/index.js` from your project root.

```language-javascript
// src/index.js
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';

  class App extends Component {
    constructor() {
      super();
    }
    render() {
      return (
        <h1>Hello World!</h1>
      )
    }
  }

  ReactDOM.render(
    <App />, // The name of the component as defined above
    document.getElementById('app') // ID of the root DOM element in index.html where React should render the app
  );
```
We're almost done, but you might be wondering how you can see this page in the browser to verify that it is working correctly. To start Webpack's Dev Server, in the Terminal from your project's root directory, run 
`node_modules/webpack-dev-server/bin/webpack-dev-server.js --open --content-base dist/`

or if you have previously installed Webpack's Dev Server globally with `-g`, `webpack-dev-server --open -content-base dist/`

- --open opens the url in default browser
- --content-base dist/ serves files in the dist/ directory 

You can verify that everything is working by pointing your browser to `http://localhost:8080` and you should see your Hello World! application.

######f. One last thing...
So every time you want to get your application running, you have to start your server by running webpack-dev-server. But this command is a little too long for my liking. To make it easier for ourselves, NPM comes with a feature called Scripts, which allow you to write simple shortcuts that will run commands in the terminal.

To do this, open up your package.json file and type the following:
```
// package.json
  ...
  "scripts": {
    "dev": "webpack-dev-server --open --content-base dist/"
  }
  ...
```
Now, everytime you want to start your dev server, all you need to do is run `npm run dev` in the terminal. You'll notice that "dev" corresponds to the key we set in "scripts". You can set any key and run the commands defined accordingly with `npm run <script key>`.

Phew, we're done! Almost, kind of, mostly. What's next? Writing the rest of your application. 

My goal was to help you understand why and what we need to do to in order to get a React application up. If there's still anything that's unclear you would like me to explain, let me know.

You can also get a copy of the React Basic project from the Github Repo. Instructions on how to use it can be found in the Readme.

As mentioned at the beginning of the article (that seems like a long time ago), I mentioned that React has a learning curve before writing your first line of application code, but after you get the hang of how to get up your project, you'll begin to uncover the endless potential of the React ecosystem.

If you have any questions or comments, feel free to contact me via Twitter [@terencetmac](https://twitter.com/terencetmac)

Till the next time! 

### *Upcoming* ###
1. React Plus (With Linting and Testing)
2. React with Superpowers (React Router, Redux and more...)
