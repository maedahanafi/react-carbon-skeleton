'use client';

import React, { useState } from 'react';
import { Content, Button, Stack } from '@carbon/react';
//import { Provider, useSelector, useDispatch } from "react-redux";
//import { Store } from "@/store/Store";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux';

function Main() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <div>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </Button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <Button
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </Button>
        <Button onClick={() => dispatch(incrementAsync(incrementAmount))}>
          Add Async
        </Button>
        <Button onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}>
          Add If Odd
        </Button>
      </div>
    </div>
  );
}

export default Main;
