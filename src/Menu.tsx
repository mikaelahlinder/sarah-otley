import styled from "@emotion/styled"

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
  transform: scale(0.3) translateX(-100%);
  span {
    background: #fff;
    border-radius: 10px;
    height: 7px;
    margin: 7px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  span:nth-of-type(1) {
    width: 50%;
  }
  span:nth-of-type(2) {
    width: 100%;
  }
  span:nth-of-type(3) {
    width: 75%;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(30px, -11px) rotatez(45deg);
  }
`

export const Menu = () => (
  <Label htmlFor="check">
    <input type="checkbox" id="check" />
    <span></span>
    <span></span>
    <span></span>
  </Label>
)