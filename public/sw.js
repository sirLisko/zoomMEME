/* eslint-disable */

importScripts("sw-toolbox.js");

toolbox.precache(["/", "/style.css", "/app.js"]);
toolbox.router.get("/*", toolbox.fastest);
