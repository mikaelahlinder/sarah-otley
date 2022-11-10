import styled from "@emotion/styled"
import React from "react"

const Header = styled.div`
  background-color: #000;
  color: #fff;
  font-family: "baskerville-poster-pt";
  font-weight: 400;
  font-style: normal;
  letter-spacing: -3.5px;
  font-size: 115px;
  height: 100vh;
  padding: 20px;
`

const App: React.FC<{}> = () => {
  return (
    <>
      <Header>Hi there!</Header>
    </>
  )
}

export default App
