# @webstir-io/vite-frontend

Vite-based frontend module provider for Webstir workspaces. The package implements the `@webstir-io/module-contract` interface so it can be selected via `WEBSTIR_FRONTEND_PROVIDER=@webstir-io/vite-frontend`.

## Usage

```bash
npm install --save-dev @webstir-io/vite-frontend
WEBSTIR_FRONTEND_PROVIDER=@webstir-io/vite-frontend webstir build
```

## Development

```bash
npm install
npm run build
```

Point `WEBSTIR_FRONTEND_PROVIDER_SPEC` at your local checkout to test unpublished builds with the Webstir CLI.

Compiled output is emitted to `dist/` alongside generated type declarations.
