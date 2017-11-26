build:
	- rm -r dist
	mkdir dist
	mkdir dist/js
	./node_modules/.bin/webpack -p
	./node_modules/.bin/html-minifier index.html -o dist/index.html
	mkdir dist/css
	./node_modules/.bin/cleancss css/style.css -o dist/css/style.css
