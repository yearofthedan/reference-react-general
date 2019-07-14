# React Base 

## Overview
Base app for React which aims for minimal dependencies, except for styling, and has a couple of opinions on linting.

## Opinions

| opinion                 | why |
| ------------------------| --- |
| styled-components       | There are many approaches to styling out there. <br> I like the simplicity of writing css in js, scoping to components, and that you don't need additional build-tooling.|
| prop-types              | They're a good guard against dumb mistakes when passing props, good unit tests are often better for this though. |
| jest                    | Jest is the defacto testing framework at the moment. Its mocking is great. |
| jest-when               | Jest doesn't have this yet, but jest-when improves mocking by letting you mock responses based upon different props |
| react-testing-library   | I've used Enzyme a lot in the past, but they tend to be slow to adapt to support new features and I'm really enjoying the smaller api offered by RTL and how it makes me write better tests and code.
| eslint (airbnb)         | I'm not actually that attached to a particular rule set (especially if autofixing is in play), but these defaults are decent to me
| eslint-plugin-jsx-a11y  | Seems crazy not to have a11y included from the get-go |
| dot-env                 | Usually I'm working with env vars at build time, so this approach is a nice one. This setup is ripped from create-react-app |
| webpack-bundle-analyser | I feel like you should be analysing your bundle from day one. So I add this in to have the option available |


## Other possibilities
- Service workers. This should be here.
- Storybook or similar. Not sure. I like this as a pattern, but not sure it's good for all cases. 
