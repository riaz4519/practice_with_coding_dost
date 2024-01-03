import { useRef, useState } from 'react'

function Counter() {
  const [number, setNumber] = useState(0)

  let num = useRef(0)

  function handleClick(e) {
    e.stopPropagation()

    setNumber((number) => number + 1)
    setNumber((number) => number + 1)
    setNumber((number) => number + 1)

    // update ref
    num.current++

    console.log(number)

    console.log('ref', num.current)
  }
  return (
    <>
      <h1 style={{ color: 'white' }}>
        {number} {num.current}
      </h1>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Counter
