let element
element = document.createElement('link');
element.setAttribute('rel', 'preload');
element.setAttribute('href', 'output.css');
element.setAttribute('as', 'style');
document.head.appendChild(element);

element = document.createElement('link');
element.setAttribute('rel', 'preconnect');
element.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(element);

element = document.createElement('link');
element.setAttribute('rel', 'preconnect');
element.setAttribute('href', 'https://fonts.gstatic.com');
element.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(element);

element = document.createElement('link');
element.setAttribute('rel', 'stylesheet');
element.setAttribute('href', 'output.css');
element.setAttribute('media', 'print');
element.setAttribute('onload', 'this.media=\'all\'');
document.head.appendChild(element);

element = document.createElement('link');
element.setAttribute('rel', 'stylesheet');
element.setAttribute('href', 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&family=Noto+Serif+JP:wght@200..900&family=Outfit:wght@100..900&family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');
document.head.appendChild(element);

element = document.createElement('link');
element.setAttribute('rel', 'stylesheet');
element.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
element.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(element);
