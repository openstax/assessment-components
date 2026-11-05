# Assessment Component Library

UI components for OpenStax assessments.

## Development

- `npm run dev` watch files and recompile them when they change
- `npm run test` run tests and get coverage results
- `npm run lint` run eslint
- `npx ladle serve` run Ladle server at http://localhost:61000 to view component stories

Note: exercises.json needs to be created at the top level for ladle
See src/components/Print.stories.tsx

## Releasing

There is no automated release. Versions are cut as needed, by hand, and published to GitHub Packages.

1. Set `version` in `package.json`. Releases are a one-line commit titled with the version number
   (for example `1.9.3`), either as a small PR or as the last change of a feature branch.
   `package-lock.json` is not updated by these bumps.
2. Once the change is on `main`, pull it, run `npm run build` and `npm test`, then `npm publish`.
   Publishing needs a GitHub token with `write:packages` in `~/.npmrc` for `https://npm.pkg.github.com`.
   A version that already exists in the registry cannot be published again.
3. Tag the release commit and push the tag (`git tag v1.9.3 && git push origin v1.9.3`).
4. In `assessments`, bump `@openstax/assessment-components` in every package that uses it, update the
   lockfile, and merge that through a PR. Until then the change does not reach the product.

To try a change in `assessments` before releasing, publish a pre-release version from your branch
(earlier ones were tagged like `v1.2.0-dev6`) and point `assessments` at it.
