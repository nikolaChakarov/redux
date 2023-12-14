import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
} from '../state/counter/counter-slice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(incrementAsync(15))}>
                    Async
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount({ val: 10 }))}
                >
                    By Amount 10
                </button>
            </div>
        </div>
    );
};

export default Counter;
