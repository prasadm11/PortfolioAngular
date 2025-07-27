import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);


//configured for netlify deployment

// server.ts

// import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
// import { getContext } from '@netlify/angular-runtime/context.mjs';

// const angularAppEngine = new AngularAppEngine();

// export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
//   const context = getContext();

//   // Optional: Define API endpoints
//   // const pathname = new URL(request.url).pathname;
//   // if (pathname === '/api/hello') {
//   //   return Response.json({ message: 'Hello from the API' });
//   // }

//   const result = await angularAppEngine.handle(request, context);
//   return result || new Response('Not found', { status: 404 });
// }

// // Entry point used by Angular CLI or Netlify Edge
// export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
