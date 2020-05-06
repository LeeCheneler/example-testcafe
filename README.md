# TestCafe Example

This is an example repo showing TestCafe e2e tests. TestCafe is a modern e2e testing framework written by DevExpress.

## Getting started

```
yarn
yarn test:chrome
```

## CLI examples

Running against chrome.

```sh
testcafe chrome src/__tests__/*.ts
```

Running against all major browsers.

```sh
testcafe chrome,firfox,ie,safari src/__tests__/*.ts
```

Running concurrently (4 instances in this case).

```sh
testcafe chrome -c 4 src/__tests__/*.ts
```

## Pros

- Supports TypeScript out the box for a very well typed experience
- Tests run quickly
- Supports all major browsers including ie11. (chrome, chrome:headless, firefox, safari, ie11) with a simple CLI parameter
- Has an officially listed @testing-library/testcafe package, this API mirrors the @testing-library/react API and provides selectors that help you interact with the web page as a user would, this massively helps ensuring your website is accessible too with selectors like `getByLabelText`
- Supports browserstack
- Console output to help debug test issues is stellar
- Supports concurrency with a simple CLI parameter
- Only requires a single package to get up and running with all browsers
  - An additional package for the @testing-library selectors
  - An additional package for browserstack support
  - An additional package for reporting website generation
- Supports chrome mobile emulation by specifying the mobile browser for chrome to emulate
- Tests run in node unlike Cypress (which runs in the browser) so you can leverage node and external files easily without having to dispatch code to execute in a seperate process like you do with Cypress which is cumbersom

## Cons

- Console output can get a little muddled if running test concurrently
