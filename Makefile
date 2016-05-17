build:
	- rm -r dist
	mkdir dist
	mkdir dist/js
	jspm bundle-sfx js/main dist/js/app.js
	./node_modules/.bin/uglifyjs dist/js/app.js -o dist/js/app.js
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert js/app.js -o dist/index.html
	mkdir dist/css
	./node_modules/.bin/cleancss css/style.css -o dist/css/style.css
