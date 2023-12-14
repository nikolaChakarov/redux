import Counter from './components/counter';
//https://www.youtube.com/watch?v=5yEG6GhoJBs

// Redux allows you to have Global State in the Context of React. It means you can have state that is accessible from any component nomather where they are in the tree. Redux have three different concepts. Store. Actions. Reducers.
// 1. Store is essentially the State. Global State. The Store will usually be made up of multiple slices of the State. Each responsible for a certain domain in the application.
// 2. Acctions is essentially what you use to tell Redux what it shoul do to the State. Acctions in Redux have two properties: Type and Payload. Type is the name of the acction. Type is required. Payload is any data that we want to pass to the acction. Payload is not required.
// 3. Reducers are responsible of taking an action, and then depending on the type of the action will actiually go out and make the update in the Redux Store. They will use the Type of the action to know what updates to do, and optionally they will use the payload to do those specific actions to make those specific updates to the Redux Store. Reducers will never directly make an update to the Redux Store. We have this concept of immutability, which means that we're never allowed to directly mutate the State. Reducers will take the State, will make the copy of the State and then make those changes to that copy of the State, and then replace the State with that copy of the State.

const App = () => {
    // // Store
    // interface CounterState {
    // 	value: Number;
    // }

    // interface UserState {
    // 	isSignedIn: Boolean;
    // }

    // // Actions
    // const increment = { type: 'INCREMENT', payload: 1 };
    // const decrement = { type: 'DECREMENT', payload: 1 };

    return (
        <div>
            <h2>Redux Complete Tutorial</h2>
            <Counter />
        </div>
    );
};

export default App;
