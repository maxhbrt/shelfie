# Objectives

## Events

- Students can handle events using HTML attributes, Javascript properties, and addEventListener.
- Students can discuess the benefits and drawbacks of each approach.
- Students can define event bubbling.
- Students can use stopPropagation and preventDefault in event handlers.

## DOM

- Students can use querySelector and querySelectorAll to select elements in Javascript.
- Students can use createElement, append, parentNode and remove to dynamically update the DOM.
- Students can use getAttribute and setAttribute to update element properties.

## Compatability and Security

- Students can describe XSS.
- Students can describe polyfills and their importance.


**Functions set as attributes**
- easy to read and follow
- easy to write
- no separation of concerns
- only one function per argument

```html
<button onclick="saySomething('you said something')">Click</button>

```

**Functions set as properties**

- easy to write
- provides seperation of concerns
- less obvious whats happens
- only one function per event
- 

```js
<button id="mybutton">Click</button>
```
```js
document.getElementById("mybutton").onclick = function(event){
    event.stopPropagation();
    alert("you've been alerted again");
```


**Function as eventListener**
- easy to write
- provides seperation of concerns
- events are less obvious
- allow for multiple functions to a single event

```js
function listenerAlert() {
    alert("you were clicked");
}

document.getElementById("mybutton").addEventListener("click", listenerAlert);
```

```js
document.getElementsByTagName("div");
document .getElementsByClassName("element")
document.getelementById("element")
```


<!-- Introduce Jquery -->

```js
$("div")
${".element"}
$("#element")
```

<!-- 2013 browser catch up -->

```js

document.querySelector("div")
document.querySelector(".element")
document.querySelector("#element)
```