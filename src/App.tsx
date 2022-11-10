import styled from "@emotion/styled"
import React from "react"
import { keyframes } from "@emotion/react"

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const Header = styled.div`
  background-color: #000;
  color: #fff;
  font-family: baskerville-poster-pt;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -3.5px;
  font-size: 85px;
  height: 100vh;
  padding: 20px;
  -webkit-font-smoothing: antialiased;
  animation: ${fadein} 2s;
  animation-timing-function: ease;
`

const App: React.FC<{}> = () => {
  return (
    <>
      <Header>Sarah Otley</Header>
    </>
  )
}

export default App
