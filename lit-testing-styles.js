import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.header {
  display: flex;
}

.body {
  display: flex;
  flex-direction: column;
}

paper-input {
  width: 200px;
}
`;
