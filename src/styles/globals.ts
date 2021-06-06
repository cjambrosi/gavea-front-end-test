import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #FFFFFF;
  --gray-100: #D2E3EF;
  --gray-400: #B1BEC2;
  --gray-600: #748C94;
  --gray-700: #47595F;
  --blue-300: #5998C5;
  --red-400: #ED0000;
  --green-400: #06A75C;
  --orangey-600: #FF6900;
  --navy-blue-700: #01426A;
  --navy-blue-800: #092A34;

  --main-font-family: 'Karla', sans-serif;
  --second-font-family: 'Inter', sans-serif;
}

html {
  font-size: 100%;
}

body {
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: var(--main-font-family);
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`