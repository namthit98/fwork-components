import { useState, useEffect } from 'react'
import { ArrayHelper } from '../../helper'

function calcPrev(current, pageCount) {
  if (current < 5) {
    return []
  }

  if (pageCount < 5) {
    return []
  }

  return [1]
}

function calcMiddle(current, pageCount) {
  if (pageCount < 5) return ArrayHelper.range(1, pageCount)

  if (current < 5) return ArrayHelper.range(1, 5)

  if (current > pageCount - 4) return ArrayHelper.range(pageCount - 4, pageCount)

  return ArrayHelper.range(current - 2, current + 2)
}

function calcNext(current, pageCount) {
  if (current > pageCount - 4) {
    return []
  }

  return [pageCount]
}

export default function useFWPagination(current, pageCount) {
  const [prev, setPrev] = useState(calcPrev(current, pageCount))
  const [middle, setMidle] = useState(calcMiddle(current, pageCount))
  const [next, setNext] = useState(calcNext(current, pageCount))

  useEffect(() => {
    setPrev(calcPrev(current, pageCount))
    setMidle(calcMiddle(current, pageCount))
    setNext(calcNext(current, pageCount))
  }, [current, pageCount])

  return { prev, middle, next }
}
