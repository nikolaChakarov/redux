import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
    value: Number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // createSlice takes care not to mutate the State directly
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value = state.value + action.payload.val;
        },
    },
    extraReducers: (builder) => {
        // builder it allows us to add cases to these reducers
        builder
            .addCase(incrementAsync.pending, (state) => {
                console.log('incrementAsync.pending');
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.value += action.payload;
            });
    },
});

// in the case of a synchronous actions, we always define the Action first, using createAsyncThunk, and then we define the Reducers. Whit the synchronous actions, we make the reducers first, and then we do the actions. The way we define the reducer for a asyncronous function is different because it doesn't go in the reducers object, it goes in extraReducers.

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync', // with async action, we have to specify the name.
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // for simulation only
        return amount;
    }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
