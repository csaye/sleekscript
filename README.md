# SleekScript

<p>
  <a href="https://sleekscript.vercel.app">
    <img height="200px" src="https://user-images.githubusercontent.com/27871609/126735757-5df17ebc-2a3b-4625-bceb-65195ddd47b8.png">
  </a>
</p>

A pythonic language that compiles to JavaScript.

Try it here: [sleekscript.vercel.app](https://sleekscript.vercel.app).

SleekScript is inspired by [CoffeeScript](https://coffeescript.org).

## Statements

SleekScript statements are separated by a newline or a semicolon. The resulting JavaScript is automatically styled.

<table>
<tr><td><b>SleekScript</b></td><td><b>SleekScript</b></td><td><b>JavaScript</b></td></tr>
<tr>
<td>

```coffee
1+1
2+2
3+3
```
</td>
<td>

```coffee
1+1;2+2;3+3
```
</td>
<td>

```js
1 + 1;
2 + 2;
3 + 3;
```
</td>
</tr>
</table>

## Variable Declarations

Variables are automatically defined in SleekScript.

<table>
<tr><td><b>SleekScript</b></td><td><b>JavaScript</b></td></tr>
<tr>
<td>

```coffee
a = 0
b = a
```
</td>
<td>

```js
var a, b;

a = 0;
b = a;
```      
</td>
</tr>
</table>

## Keywords

Certain keywords are included in order to create more intuitive operator sequences.

|SleekScript|JavaScript|
|---|---|
|`is`|`===`|
|`isnt`|`!==`|
|`and`|`&&`|
|`or`|`\|\|`|
|`not`|`!`|
|`yes` `on`|`true`|
|`no` `off`|`false`|
|`print`|`console.log`|

## If Statements

If statements can be written in the form `if x then y`.

<table>
<tr><td><b>SleekScript</b></td><td><b>JavaScript</b></td></tr>
<tr>
<td>

```coffee
if a is b then print("a is b")
```
</td>
<td>

```js
if (a === b) console.log("a is b");
```      
</td>
</tr>
</table>

## Example

<table>
<tr><td><b>SleekScript</b></td><td><b>JavaScript</b></td></tr>
<tr>
<td>

```coffee
a = yes # var a
b = a # var b
c = no # var c

if a is b then print("a is b")
if b isnt c then print("b is not c")
if a is b or a is c then print("a is b or c")

# print result
print(a and b and c)
```
</td>
<td>

```js
var a, b, c;

a = true; // var a
b = a; // var b
c = false; // var c

if (a === b) console.log("a is b");
if (b !== c) console.log("b is not c");
if (a === b || a === c) console.log("a is b or c");

// print result
console.log(a && b && c);
```      
</td>
</tr>
</table>

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
