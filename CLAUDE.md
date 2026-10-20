# libs/onyx-tokens — @pingux/onyx-tokens

Rules specific to the design-token library. See the root `CLAUDE.md` for repo-wide conventions.

## No internal-only references in consumer-visible files

`@pingux/onyx-tokens` is a public package; its README, CHANGELOG, and everything the
build generates under `build/` (token JSON, SCSS, `TOKENS.md`) ship to consumers.
Never add links or references to resources only Ping employees can access — internal
Confluence/Jira pages, intranet hosts, or internal tooling URLs. State the needed
content inline instead. Public URLs are fine: `pingidentity.design`,
`storybook.pingidentity.design`, styledictionary.com, etc. When unsure whether a URL
is public, check it resolves without authentication or leave it out.

This applies to generated content too: any URL added to token metadata (e.g. a
`description` field) ends up in the shipped JSON — keep metadata free of internal
references.

## Build notes

- The formatters in `src/formats/` run under raw Node ESM (`node build.js`), so
  subpath imports need explicit extensions: `import setWith from 'lodash/setWith.js'`.
  Jest and bundlers accept the same form.
- `build/` is generated — edit `src/` and the style-dictionary configs
  (`config.json`, `config-dark.json`), then run `node build.js` from this directory.
