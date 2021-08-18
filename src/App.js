import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import QuoteCard from './Components/QuoteCard'
import getRandomColor from './helpers'
import { v4 as uuid } from 'uuid'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [quoteInfo, setQuoteInfo] = useState({
    content: '',
    author: '',
    color: '',
    id: ''
  })
  const getQuote = async () => {
    const info = await axios.get('https://api.quotable.io/random')
    setQuoteInfo({
      content: info.data.content,
      author: info.data.author,
      color: getRandomColor(),
      id: uuid()
    })
    setLoaded(true)
  }
  useEffect(() => {
    getQuote()
  }, [])

  /* animate background and font color change */
  const asdf = useRef(null)
  const currentColor = useRef(quoteInfo.color)
  useEffect(() => {
    asdf.current.animate(
      [
        {
          backgroundColor: `${currentColor.current}`,
          color: `${currentColor.current}`
        },
        { backgroundColor: `${quoteInfo.color}`, color: `${quoteInfo.color}` }
      ],
      1000
    )
    currentColor.current = quoteInfo.color
  }, [quoteInfo.color])
  /* END animate background and font color change */

  return (
    <Wrapper ref={asdf} color={quoteInfo.color}>
      {loaded && <QuoteCard quoteInfo={quoteInfo} getQuote={getQuote} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
`
