# Example To-Do List app

Let's take a look at a To-Do List app.

This app has 1 container, `App`, and 3 components: `List`, `Input`, and `Title`. Generally, each container and component should live in a separate file, and should be the `default` export of that file. We give the file the same name as the component, e.g. a component called `Input` should live in `Input.js`. In React Native, component names must be capitalized, so the file name will usually be capitalized too.

## Files

`App.js`
App is a "smart" container component, containing the To-Do list data and logic for adding/removing items. `App` renders the `List`,`Input`, and `Title` components, passing To-Do list data and callbacks for modifying the list.

`List.js`
This component renders a list of strings. It fires an `onPressItem` callback when an item is pressed.

`Input.js`
This component renders an input field. It maintains the current input in its state, and then fires a callback, `onSubmitEditing` when the user presses Submit.

`Title.js`
A simple title component. Purely presentational.
