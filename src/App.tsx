import styled from "@emotion/styled"
import React from "react"
import { keyframes } from "@emotion/react"

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`
const Logo = styled.div`
  font-family: elza, sans-serif;
  font-weight: 200;
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 18px;
  }
`
const HiThere = styled.h1`
  font-family: baskerville-poster-pt;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -3.5px;
  font-size: 125px;
  line-height: 110px;
  animation: ${fadein} 2s;
  animation-timing-function: ease;
  @media (max-width: 480px) {
    font-size: 90px;
    line-height: 90px;
    padding: 0 2rem;
  }
`
const KiaOra = styled.h3`
  font-family: elza, sans-serif;
  font-weight: 200;
  font-size: 16px;
  animation: ${fadein} 2s;
  animation-timing-function: ease;
  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`
const Portrait = styled.div`
  background-image: url("sarah.jpg");
  height: 1500px;
  width: 100vw;
  max-width: 600px;
  max-height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  margin: 2rem auto;
  @media (max-width: 480px) {
    max-width: 1000px;
    font-size: 35px;
    max-width: 100%;
    max-height: 70vh;
  }
`
const Description = styled.div`
  font-family: baskerville-poster-pt;
  font-weight: 400;
  font-size: 65px;
  letter-spacing: -3px;
  margin: 6rem auto;
  @media (max-width: 480px) {
    font-size: 35px;
    padding: 2rem;
    margin: 0rem auto;
    letter-spacing: 0px;
  }
`
const Information = styled.div`
  font-family: baskerville-display-pt;
  font-size: 25px;
  animation: ${fadein} 2s;
  animation-timing-function: ease;
  -webkit-font-smoothing: smooth;
  @media (max-width: 480px) {
    margin-top: 0rem;
    font-size: 18px;
    padding: 2rem;
  }
`
const Italic = styled.span`
  font-style: italic;
`
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 5rem;

  a {
    color: #000;
    text-decoration: none;
  }
`

const App: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Logo>SARAH OTLEY</Logo>
      <KiaOra>kia ora</KiaOra>
      <HiThere>hi there!</HiThere>
      <Portrait />
      <Description>
        <div>
          STOCKHOLM <Italic>based</Italic>.
        </div>
        <div>
          CREATIVE <Italic>leader</Italic>.
        </div>
        <div>
          INTERIOR <Italic>architect</Italic>.
        </div>
        <div>
          ARTIST & <Italic>illustrator</Italic>.
        </div>
      </Description>
      <Information>
        <div>
          Currently: H&M Group Design Studio. Design Operations Manager.
        </div>
        <div style={{ marginTop: "20px" }}>sarah.otley@gmail.com</div>
        <div>+46 (0)70 2739512</div>
        <div>
          <a
            href="https://instagram.com/sarahotleystudio"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sarahotley"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </div>
      </Information>
    </Wrapper>
  )
}

export default App
