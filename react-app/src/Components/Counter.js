import { useCallback, useMemo, useRef, useState } from 'react'

function Counter() {
  const [number, setNumber] = useState(10)

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

  const fibFx = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1
    }

    return fib(n - 1) + fib(n - 2)
  }, [])

  const fibMemo = useMemo(() => fibFx(number), [number, fibFx])

  return (
    <>
      <h1 style={{ color: 'white' }}>
        {number} | {fibMemo}
      </h1>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Counter
