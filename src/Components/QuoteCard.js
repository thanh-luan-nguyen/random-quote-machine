import { useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styled, { css } from 'styled-components'

import './QuoteCard.css'

export default function QuoteCard({ quoteInfo, getQuote }) {
  const { content, author, color, id } = quoteInfo
  const nodeRef = useRef(null) /* findDOMNode deprecated Error */
  return (
    <SwitchTransition>
      <CSSTransition
        nodeRef={nodeRef} /* findDOMNode deprecated Error */
        key={id}
        timeout={100}
        classNames="item"
      >
        <Wrapper ref={nodeRef} /* findDOMNode deprecated Error */ color={color}>
          <div className="quote">
            <i className="fas fa-quote-left"></i>
            {content}
          </div>
          <div className="author">{author}</div>
          <div className="buttons">
            <div className="social">
              <div>
                <i className="fab fa-facebook-square"></i>
              </div>
              <div>
                <i className="fab fa-twitter-square"></i>
              </div>
            </div>
            <button onClick={getQuote}>New Quote</button>
          </div>
        </Wrapper>
      </CSSTransition>
    </SwitchTransition>
  )
}

const hoverEffect = css`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    &::before {
      width: 100%;
    }
  }
`
const Wrapper = styled.div`
  font-size: 1.5em;
  width: 500px;
  padding: 30px;
  background-color: white;
  border-radius: 3px;
  .quote {
    text-align: center;
    line-height: 1.3;
    i {
      margin-right: 10px;
    }
  }
  .author {
    margin-top: 5px;
    padding-right: 30px;
    text-align: right;
    font-size: 0.7em;
    &::before {
      content: '-';
      margin-right: 3px;
    }
  }
  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .social {
      display: flex;
      justify-content: space-between;
      width: 85px;
      div {
        font-size: 1.7em;
        ${hoverEffect}
      }
    }
    button {
      padding: 8px 16px;
      border-radius: 3px;
      border: none;
      color: white;
      background-color: ${(props) => props.color};
      ${hoverEffect}
    }
  }
`
