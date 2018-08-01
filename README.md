# React Redux Chloroform
### Put your react-redux form problems to sleep!

Can you even think of a cheesier catchphrase?

After coming across a need to implement simple form controls in a react-redux application, I was extremely
disappointed when I discovered that all of the solutions on the market were either needlessly complex,
or wanted to trigger all of my reducers every time I pressed a key.

I came up with my own little implementation that was really simple, and I figured I might want to use it
in the future. Hence, react-redux-chloroform was born.

Current only supports **type**s of "text".

```javascript
import React from 'react';
import Form from '@jordin/react-redux-chloroform';

const fieldData = [
  {
    type: 'text',
    name: 'Username'
  },
  {
    type: 'text',
    name: 'Password'
  }
]

// This action creator will be called and dispatched when the form is submitted.
// formData will be a JSON object representing the values of the form fields at
// the time of submission:
// {
//   Username: 'admin',
//   Password: '123' 
// }
const actionCreator = formData => { type: 'LOGIN_ATTEMPT', formData }

class App extends React.Component {
  render() {
    return (
      <Form fields={fieldData} action={actionCreator} />
    )
  }
}

export default App;
```

There are probably about a million and one things that I could add to this to make it more flexible, so we'll see what my time permits. Feel free to open up a PR.