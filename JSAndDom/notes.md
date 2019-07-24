

HTML is received
HTML tags are converted to tokens
tokens are converted to Nodes
Nodes are converted to the DOM
When you request a website, no matter what backend language is powering that website, it will respond with HTML. The browser receives a stream of HTML. The bytes are run through a complicated (but fully documented) parsing process that determines the different characters (e.g. the start tag character <, an attribute like href, a closing angle bracket like >). After parsing has occurred, a process called tokenization. Tokenization takes one character at a time and builds up tokens. The tokens are:

DOCTYPE
start tag
end tag
comment
character
end-of-file

Let's take a break for a second. At this state, the browser has received the bytes that've been sent by a server. 
The browser has converted the bytes to tags and has read through the tags to create a list of tokens.

This list of tokens then goes through the tree construction stage. The output of this stage is a tree-like structure - this is the DOM!

I want to point out two important quotes that Illya said in the video:

a tree structure that captures the content and properties of the HTML and all the relationships between the nodes

the DOM is the full, parsed representation of the HTML

So the DOM is a model (representation) of the relationships and attributes of the HTML document that was received. Remember that DOM stands 
for "Document Object Model". Something that I've found to be true as I've been learning is that to break something down, just read the thing
backwards:

Document Object Model

...would become…

Object Model of the Document!

Remember that a JavaScript object is a tree-like structure that has properties and values. So the DOM can be accessed using a special object provided by the browser: document

Try this:

open the console on this page
type out the word document
careful not to declare it (const document)
careful not to wrap it in quotes ("document")
press enter
A Screenshot viewing the `document` object in the DevTools' Console pane.
Viewing the document object in the DevTools' Console pane.

The document object is provided by the browser and is a representation of the HTML document. 
This object is not provided by the JavaScript language. ECMAScript is the language specification that JavaScript is based on, 
and it only references the document object model in one place, in its "Global Object" section:

In addition to the properties defined in this specification the global object may have additional host defined properties. This 
may include a property whose value is the global object itself; for example, in the HTML document object model the window property 
of the global object is the global object itself. (source)

Basically, this says that the document object is not part of JavaScript, but is expected to already exist and be freely 
accessible to JavaScript code.

The DOM is standardized by the W3C. There are a number of specifications that make up the DOM, here are few:

Core Specification
Events Specification
Style Specification
Validation Specification
Load and Save Specification
To see the full list of DOM specs, check out the standard at:
https://www.w3.org/standards/techs/dom#w3c_all



outerHTML represents the HTML element itself, as well as its children.


<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"


whenever we use .innerHTML this render html with new text pass

As you saw, .innerText will get the visible text of the element. This is an important distinction! 
If CSS is used to hide any text inside that element, .innerText will not return that text, while
 .textContent will return it. And it's not just the hiding/showing nature of CSS that .innerText 
adheres to, .innerText will also honor changes to things like capitalization.

The .textContent property has been a standard for quite a long time. Conversely, .innerText property is a 
relatively new addition to the HTML specification. It has been around for a while but was not fully supported 
by all browser because it was not a part of the HTML specification.

Between .textContent and .innerText, you probably want to use .textContent since that will return all 
of the text no matter what. Rarely will you actually want only the visible text.


Inserting HTML In Other Locations

By definition, the .appendChild() method will add an element as the last child of the parent element. 
It's impossible to put it as the first child or anywhere else...it has to be the last child. Wouldn't 
it be nice if there were a little flexibility in where we could add the child element?

Enter the .insertAdjacentHTML() method! The .insertAdjacentHTML() method has to be called with two arguments:

the location of the HTML
the HTML text that is going to be inserted
The first argument to this method will let us insert the new HTML in one of four different locations

beforebegin – inserts the HTML text as a previous sibling afterbegin – inserts the HTML text as the first 
child beforeend – inserts the HTML text as the last child afterend – inserts the HTML text as a following sibling

A visual example works best, and MDN's documentation has a fantastic example that I'll modify slightly:

<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
Here's how we'd call .insertAdjacentHTML():

const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);


In this section, we learned how to create new DOM elements and add them to the page. We looked at the following methods:

.createElement() to create new elements
.appendChild() to add a child element to a parent element as its last child
.createTextNode() to create a text node
.insertAdjacentHTML() to put HTML text anywhere around an element
Some important things to note are:

if an element already exists in the DOM and this element is passed to .appendChild(), the `.appendChild() method will move it rather 
than duplicating it
an element's .textContent property is used more often than creating a text node with the .createTextNode() method
the .insertAdjacentHTML() method's second argument has to be text, you can't pass an element


# Event Delegation

Remember the event object that we looked at in the previous section? That's our ticket to getting back the original functionality!

The event object has a .target property. This property references the target of the event. Remember the capturing, at target, and bubbling phases?...these are coming back into play here, too!

Let's say that you click on a paragraph element. Here's roughly the process that happens:

a paragraph element is clicked
the event goes through the capturing phase
it reaches the target
it switches to the bubbling phase and starts going up the DOM tree
when it hits the <div> element, it runs the listener function
inside the listener function, event.target is the element that was clicked
So event.target gives us direct access to the paragraph element that was clicked. Because we have access to the element directly, we can access its .textContent, modify its styles, update the classes it has - we can do anything we want to it!

```javascript
const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);
```
Código de prueba de rendimiento
La forma estándar de medir el tiempo que tarda el código en ejecutarse es usando performance.now(). performance.now()devuelve una marca de tiempo que se mide en milisegundos, por lo que es extremadamente precisa. ¿Qué tan preciso? Esto es lo que dice su página de documentación:

Precisa a cinco milésimas de milisegundo (5 microsegundos)

¡Eso es increíblemente preciso!

Si alguna vez ha usado un procedimiento de sincronización en otro lenguaje de programación, es posible que haya oído hablar de la época de la época (también llamada hora de Unix o hora de POSIX). Estas herramientas le indican el tiempo transcurrido desde el 1/1/1970 (el primero de enero). El performance.now()método del navegador es ligeramente diferente, ya que comienza a medir desde el momento en que se cargó la página. La información detallada se puede encontrar en su página de documentación: performance.now () en MDN

Estos son los pasos a seguir para performance.now()medir la velocidad de su código:

Se usa performance.now()para obtener la hora de inicio inicial del código.
ejecuta el código que quieres probar
Ejecutar performance.now()para obtener otra medida de tiempo.
restar el tiempo inicial del tiempo final
En realidad, agregar doscientos párrafos a la página va a ser relativamente rápido, así que reduzcamos las cosas utilizando un conjunto de forbucles anidados que solo cuentan de uno a cien ... ¡cien veces!

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}
A continuación, agregaremos el performance.now()código para medir la duración de estos bucles:

const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');


¿Por qué estamos haciendo esto? El navegador está trabajando constantemente para que la pantalla coincida con el DOM. Cuando agregamos un nuevo elemento, el navegador debe ejecutar un reflowcálculo (para determinar el nuevo diseño de la pantalla) y luego repaintla pantalla. Esto lleva tiempo.


¡Esto es exactamente por qué tenemos el DocumentFragment ! Según la documentación, un DocumentFragment:

representa un objeto de documento mínimo que no tiene padre. Se utiliza como una versión ligera de Documento que almacena un segmento de una estructura de documento que consta de nodos como un documento estándar.

Así que es como crear otro árbol DOM liviano. Pero la parte beneficiosa de esto es lo que dice a continuación:

La diferencia clave es que debido a que el fragmento del documento no forma parte de la estructura de árbol del documento activo, los cambios realizados en el fragmento no afectan al documento, causan un reflujo o incurren en cualquier impacto en el rendimiento que pueda ocurrir cuando se realizan los cambios.

En otras palabras, los cambios realizados en un DocumentFragment suceden fuera de la pantalla; No hay reflujo y costo de repintado mientras construyes esto. ¡Así que esto es exactamente lo que necesitamos!

Podemos usar el .createDocumentFragment()método para crear un objeto DocumentFragment vacío. Este código debe ser muy familiar para ti, porque se ve muy similar a document.createElement().

const myDocFrag = document.createDocumentFragment();
Reescribamos nuestro código para usar un DocumentFragment en lugar de <div>.

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!

"O podríamos ocultar #comments , eliminar el correo no deseado y mostrarlo de nuevo, eso es sorprendentemente rápido, al costo de un reflujo y dos repintados (y poco más). Es rápido porque la ocultación no cambia el diseño, solo borra esa sección de la pantalla (1 repintado). Cuando vuelves a ver la sección modificada, es un reflujo y un repintado.

En general, si tiene que hacer un grupo de cambios, ocultar / cambiar todo / mostrar es un gran patrón para usar si los cambios están relativamente contenidos."
