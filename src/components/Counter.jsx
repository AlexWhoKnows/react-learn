import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Counter(props) {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
  
    function decrement() {
        setCount(count - 1)
    }
    

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>            
        </div>
    )
}

Counter.propTypes = {

}

export default Counter

