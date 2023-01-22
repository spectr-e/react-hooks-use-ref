import React, { useEffect, useRef, useState } from "react"
import { makeRandomNumber } from "../utils"

function Ticker() {
  const [price, setPrice] = useState(0)
  const [color, setColor] = useState("black")

  // create the ref and set the initial value
  const prevPriceRef = useRef(price)

  useEffect(() => {
    // use the current value of the ref
    const prevPrice = prevPriceRef.current
    if (price > prevPrice) {
      setColor("green")
    } else if (price < prevPrice) {
      setColor("red")
    } else {
      setColor("black")
    }
    // set the ref to the new value (doesnt trigger re-render)
    prevPriceRef.current = price
  }, [price])

  useEffect(() => {
    // Effect
    const id = setInterval(() => setPrice(makeRandomNumber), 1000)
    // Cleanup
    return function cleanup() {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  )
}

export default Ticker
