import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p className='number'>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
          <button onClick={() => dispatch(resetAll)}>Reset</button>
        </div>
      </div>
    </section>
  )
}

export default Counter
