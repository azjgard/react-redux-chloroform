# React Redux Chloroform

### Put your react-redux form problems to sleep!

Can you even think of a cheesier catchphrase?

After coming across a need to implement simple form controls in a react-redux application, I was extremely
disappointed when I discovered that all of the solutions on the market were either needlessly complex,
or wanted to trigger all of my reducers every time I pressed a key.

I came up with my own little implementation that was really simple, and I figured I might want to use it
in the future. Hence, react-redux-chloroform was born.

```javascript
import React from 'react';
import {Form, Field} from '@jordin/react-redux-chloroform';

// This action creator will be called and dispatched
// when the form is submitted. The argument passed to it
// will be a JSON object representing the values of the
// form fields at the time of submission.
//
// In the data object, the keys are determined according
// to the "name" prop passed to each field.
const actionCreator = data => {
  type: 'LOGIN_ATTEMPT', formData: {
    username: data.Username,
    password: data.Password
  };
};

class App extends React.Component {
  render() {
    return (
      <Form action={actionCreator}>
        <Field type="text" name="Username" />
        <Field type="password" name="Password" />
      </Form>
    );
  }
}

export default App;
```

## Components

### Form

The root component that is required to generate the form itself.

#### Props

* Required
  > * **action** - an action creator - will be passed the data from the form
  >   submission as its only argument. form will still function without it,
  >   but nothing will ever be dispatched to your redux store.
* Optional
  > * **submitButtonText** - text to show on the form's submit button. Default
  >   is "Submit" (surprise)

### Field

#### Props

* Required
  > * **name** - a name for the field that is unique from the names of any other Fields that are being used for the same Form.
* Optional
  > * **type** - currently only supports "text" or "password". obviously, "text" is the default.

#### Ideas TODO

* Add Field validation
* Add Form validation
* Add support for other types
* Add support for select boxes
* Remove styling by default, but maybe toss in some enable-able themes?

There are probably about a million and one things that I could add to this to make it more flexible, so we'll see what my time permits. Feel free to open up a PR.
