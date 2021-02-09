## To deploy

0) Make a new project using `npx create-react-app my-project-name` (comes with `.git`)
1) Make an empty github repo with NO README.
2) Follow hardmode instructions ("push existing repo from command line") on github. Paste these in the command line.
3) Now that the repo is on github, make a netlify account
4) Connect netlify to our github account
5) Make a new netlify deployment by pointing netlify to the correct github repo.
6) As long as linting passes, your site should build every time you merge to `main`! (Continuous delivery!)

## To run your react project locally

`npm run start`
