// import { h } from "preact";
// import { render } from "preact-render-to-string";
// import { App } from "../web-client";
// import {
//   RegistrarToolGoDaddyClient,
//   TRegistrarToolGoDaddyClientOptions
// } from "../RegistrarToolGoDaddyClient";
let stylesheetContents = "hey"; //require( "./index.css");

const clientBuildContents = '{CLIENT_BUILD_CONTENTS}';

addEventListener("install", e => {});

addEventListener("fetch", e => {
  e.respondWith(handleRequest(e.request));
});

async function handleRequest(req) {
  if (req.url.includes("style.css")) return handleStylesheetRequest();
  if (req.url.includes("app.js")) return handleClientBuildRequest();

  return new Response(
    `
  <!DOCTYPE HTML>
  <html>
  
  <head>
    <base href="/" />
    <link rel="stylesheet" href="/index.css" />
  </head>
  
  <body>
    <script src="/app.js"></script>
  </body>
  
  </html>
  `,
    { headers: { "Content-Type": "text/html" } }
  );
}

function handleStylesheetRequest() {
  return new Response(stylesheetContents, {
    headers: {
      "Content-Type": "text/css"
    }
  });
}

function handleClientBuildRequest() {
  return new Response(clientBuildContents, {
    headers: {
      "Content-Type": "application/javascript"
    }
  });
}
