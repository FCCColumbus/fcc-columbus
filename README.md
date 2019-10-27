# FreeCodeCamp Columbus

[![Build Status](https://img.shields.io/travis/FCCColumbus/F3C_Website.svg)](https://travis-ci.org/FCCColumbus/F3C_Website) [![Coverage Status](https://coveralls.io/repos/github/FCCColumbus/F3C_Website/badge.svg?branch=master)](https://coveralls.io/github/FCCColumbus/F3C_Website?branch=master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/f1911a031821489fa3d59908ad637c8e)](https://www.codacy.com/app/FCCColumbus/F3C_Website?utm_source=github.com&utm_medium=referral&utm_content=FCCColumbus/F3C_Website&utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/fcccolumbus/f3c_website/badge.svg)](https://snyk.io/test/github/fcccolumbus/f3c_website) [![David](https://img.shields.io/david/FCCColumbus/F3C_Website.svg)](https://github.com/FCCColumbus/F3C_Website/blob/master/package.json) [![GitHub pull requests](https://img.shields.io/github/issues-pr/FCCColumbus/F3C_Website.svg)](https://github.com/FCCColumbus/F3C_Website/pulls)

Free Code Camp is an open source learning community that helps beginner coders learn to develop for the web. Free Code Camp Columbus is a sub-group called a campsite loosely affiliated with the parent group of Free Code Camp. Here at Free Code Camp Columbus we have created a group website to bring all of our many group interaction technologies into one unified application to grow as a group and also learn to code along the way.

Contributions to this website are restricted to Free Code Camp Columbus campers only.

## Installation and Setup
Contributions to the F3C_wesite require a github account [(if you don't have one, sign up here)](https://github.com/join?source=header-repo) and [git](https://git-scm.com/) (version control software) installed on your computer.

You will also need a local IDE (such as VSCode) and Node.js. Installation of Git, an IDE and Node are beyond the scope of this document, but we've included some [helpful links below](##useful-links).

Setup will be divided into three sections
* [Integrating github](#Integrate-github)
* [Setting up the node.js server](#Setting-up-node)
* Understanding the workflow



### Integrate github
#### Step 1: Fork the repository
([Fork instructions open sourced from Github](https://help.github.com/articles/fork-a-repo/))
>[A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.](https://help.github.com/articles/fork-a-repo/)

Forking allows one to copy the F3C_website into their own repository so they can mess with it to their heart's content.
To fork you need to:
1. Head to the repository location [https://github.com/FCCColumbus/F3C_Website](https://github.com/FCCColumbus/F3C_Website)
1. In the top-right corner of the page, click Fork. ![location of the fork button](https://help.github.com/assets/images/help/repository/fork_button.jpg)
#### Step 2: Create a local clone of the your fork
1. On GitHub, navigate to your fork of the F3C_Website repository.
2. Under the repository name, click Clone or download. ![sample clone button](https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png)
3. In the Clone with HTTPs section, copy the clone URL for the repository
4. Open Git Bash
5. Type `git clone`, and then paste the URL you copied in Step 2.
```
git clone https://github.com/YOUR_USERNAME/F3C_Website.git
```
6. Press Enter. Your local clone will be created.
#### Step 3: Configure Git to sync your fork with the original F3C_website repository
>[When you fork a project in order to propose changes to the original repository, you can configure Git to pull changes from the original, or upstream, repository into the local clone of your fork.](https://help.github.com/articles/fork-a-repo/#step-3-configure-git-to-sync-your-fork-with-the-original-spoon-knife-repository) 
1. Navigate to the directory of the local clone of your fork. Type `cd F3C_Website`
2. Type `git remote -v` and press Enter. You'll see the current configured remote repository for your fork.
```
$ git remote -v
origin    https://github.com/YOUR_USERNAME/F3C_Website.git (fetch)
origin    https://github.com/YOUR_USERNAME/F3C_Website.git (push)
```
3. Type `git remote add upstream https://github.com/FCCColumbus/F3C_Website.git`
4. To verify the new upstream repository you've specified for your fork, type `git remote -v` again. You should see the URL for your fork as origin, and the URL for the original repository as upstream.
```
$ git remote -v
origin    https://github.com/YOUR_USERNAME/F3C_Website.git (fetch)
origin    https://github.com/YOUR_USERNAME/F3C_Website.git (push)
upstream  https://github.com/FCCColumbus/F3C_Website.git (fetch)
upstream  https://github.com/FCCColumbus/F3C_Website.git (push)
```
### Setting up node
#### Install dependencies

    npm i

#### Start local development server

    npm start

#### Build production files

    npm run prod:build

#### Lint javascript

    npm run lint

#### Fix javascript (lint)

    npm run fix

#### Run tests

    npm run test

#### View in your browser:

[http://localhost:3000/](http://localhost:3000/)

## Useful links
#### Git
* [git documentation](https://git-scm.com/book/en/v2)
* [Udemy git course](https://www.udacity.com/course/ud775) ~~ [Intro video](https://youtu.be/Ytux4IOAR_s)
* [Harvard CSS50 lecture on Github/Github flow and TravisCI](https://www.youtube.com/watch?v=2A7nVdAoqqk)
#### IDEs
* [VSCode](https://code.visualstudio.com/)
* [https://www.reddit.com/r/learnprogramming/wiki/tools](https://www.reddit.com/r/learnprogramming/wiki/tools)
#### Node.js
* [Nodejs.org](https://nodejs.org/en/)
#### React
* [Reactjs.org](https://reactjs.org/docs/getting-started.html)

## License

Distributed under an [MIT License](LICENSE).

## footnotes

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
