MASTERKEVIN REACT PROJECT

- Server entry point is app.js.

- Every route is specified within the routes/ folder and exported as a module, and then instanciated in app.js.

- public/ is the static files folder.

- Within every route folder in public/ Browserify and Exorcist (-g) are used to generate js bundles:
	+  browserify file.js -o bundle.js
	+  browserify file.js --debug | exorcist bundle.map.js > bundle.js
