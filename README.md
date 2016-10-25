MASTERKEVIN REACT PROJECT

- Global dependencies:
	+ npm install -g browserify
	+ npm install -g exorcist
	+ npm install -g watchify
	+ npm install -g grunt-cli

- Server entry point is app.js.

- Every route is specified within the routes/ folder and exported as a module, and then instanciated in app.js.

- public/ is the static files folder.

- Within every route folder in "public/" Browserify, Exorcist (-g) are used to generate js bundles and their source maps.
  The following command lifts the server watches the js files and generates bundles if modified:
	+ grunt server

