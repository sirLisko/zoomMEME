build:
	- rm -r dist
	mkdir dist
	mkdir dist/js
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert js/app.js -o dist/index.html
	./node_modules/.bin/webpack -p
	mkdir dist/css
	./node_modules/.bin/cleancss css/style.css -o dist/css/style.css
