# @webstir-io/vite-frontend

Vite-based frontend module provider for Webstir workspaces. The package implements the `@webstir-io/module-contract` interface so it can be selected via `WEBSTIR_FRONTEND_PROVIDER=@webstir-io/vite-frontend`.

## Status

- Experimental alternative frontend provider — APIs, defaults, and behavior are likely to change and may lag the primary frontend provider.
- Best used for experimentation with Vite-based pipelines rather than production workloads.

## Usage

```bash
npm install --save-dev @webstir-io/vite-frontend
WEBSTIR_FRONTEND_PROVIDER=@webstir-io/vite-frontend webstir build
```

## Development

```bash
npm install
npm run clean          # remove dist artifacts
npm run build
npm run test
npm run smoke
# Release helper (bumps version, pushes tags to trigger release workflow)
npm run release -- patch
```

Point `WEBSTIR_FRONTEND_PROVIDER_SPEC` at your local checkout to test unpublished builds with the Webstir CLI.

Compiled output is emitted to `dist/` alongside generated type declarations.

Maintainer notes
- CI runs `npm ci`, `npm run clean`, `npm run build`, `npm run test`, and `npm run smoke` prior to publishing.
- The release workflow publishes to npm using trusted publishing (`id-token: write` + provenance).

## Community & Support

- Code of Conduct: https://github.com/webstir-io/.github/blob/main/CODE_OF_CONDUCT.md
- Contributing guidelines: https://github.com/webstir-io/.github/blob/main/CONTRIBUTING.md
- Security policy and disclosure process: https://github.com/webstir-io/.github/blob/main/SECURITY.md
- Support expectations and contact channels: https://github.com/webstir-io/.github/blob/main/SUPPORT.md
