# Issue estimator

A simple Svelte app to make estimating tasks easy

## Calculations
`(best_case + 4 * likely_case + worst_case) / 6`

## QA time calcluation
### Why 15%?
This assumes that for every 10 hours of development time there will be an initial round of code review and QA that takes ~1 hour and a second, post-feedback-fixes round that takes ~0.5 hours. 

## Working with the code
To run locally:
- Clone the repo
- Run `npm install`
- Run `npm run dev` to start the local svelte server

## Deploying to Github Pages
The app is available at [estimator.ten7.com](http://estimator.ten7.com) which is a static Github Pages site powered by the `gh-pages` branch. To deploy your app run:
- Run `npm run build` to build the app locally, assets will be in `dist`
- Run `npm run deploy` to deploy the app to the `gh-pages` branch visible at [estimator.ten7.com](http://estimator.ten7.com)
