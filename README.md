## Main takeaways

1) State should live in the parentmost component
2) Communication between components: Props are passed from parents to children. Callbacks let us talk from children to parents.
3) Whenever props or state change, that component's render method is (usually) called again. This automagically updates the DOM.
4) If you want something to change on the screen, update state. That will trigger the DOM update. Stop thinking in terms of mutating textContent. State change is where the action happens.
5) React is a plinko board. The data starts and the top and flows to the bottom, triggering rerenders along the way.

## To deploy

0) Make a new project using `npx create-react-app my-project-name` (comes with `.git`)
1) Make an empty github repo with NO README.
2) Follow hardmode instructions (`push existing repo from command line`) on github. Paste these in the command line.
3) Now that the repo is on github, make a netlify account
4) Connect netlify to our github account
5) Make a new netlify deployment by pointing netlify to the correct github repo.
6) As long as linting passes, your site should build every time you merge to `main`! (Continuous delivery!)

## To run your react project locally

`npm run start`

## Algorithm for refactoring into a new component

1) Make a fake component below the things we're refactoring:

```js
          {
            typesArray.map(type => <label>
            {type}
            <input 
              type="radio" 
              onChange={this.handleRadio}
              name="type" 
              value={type} 
              checked={this.state.radio === type} />
              </label>)
          }
          
          <RadioList />
```

RadioList doesn't exist yet. It's just a placeholder.

2) Now I ask, what does this fake component NEED to function?

Imagine the empty component. What would break this?

Whatever it's missing becomes the PROPS that we pass to this component.

(We could go make the component now, and go see what get red squiggles. Those red squiggles mark the things that need to be passed as props)

```js
    <RadioList 
    // it needs a selected value
    radio={this.state.radio} 
    // it needs a callback to change state (debit card)
    handleRadio={this.handleRadio} 
    // it needs some options to render out
    options={typesArray} />
```

3) Import the nonexistent component, then go write that component

`Parent.js`
```js
import RadioList from './RadioList.js'
```

`RadioList.js`
```js
import React, { Component } from 'react'

export default class RadioList extends Component {
    render() {
        return (
            <div>
            {
                // notice that we are now passing things as props
                this.props.options.map(type => <label>
                {type}
                <input 
                type="radio" 
                // notice that we are now passing things as props
                onChange={this.props.handleRadio}
                name="type" 
                value={type} 
                // notice that we are now passing things as props
                checked={this.props.radio === type} />
                </label>)
          }
            </div>
        )
    }
}
```