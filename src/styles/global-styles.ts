import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
  font-family: 'Poppins', sans-serif;
}

  html{
    width: 100%;
    height: 100%;
  }
 
  body {
    font-family: 'Poppins', Arial, sans-serif;
    box-sizing: border-box;
    width: 100%;
    margin:0;
    padding:0;
  }

	a {
		text-decoration: none;
	}

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  label {
    font-family: poppins;
    line-height: 1.5em;
  }

  input{
    font-family: 'Nunito', sans-serif;
  }

  input, textarea{
    :focus {
      outline: none;
    
    }
  }

  select {
    font-family: inherit;
    font-size: inherit;
  }
 @font-face {
	font-family: "Poppins";
	font-weight: 300;
	src: local("Poppins"), url('../assets//fonts/Poppins/Poppins-Regular.ttf') format("truetype");
}
@font-face {
	font-family: "Inter";
	font-weight: 400;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Regular.ttf') format("truetype");
}

@font-face {
	font-family: "Inter";
	font-weight: 500;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Medium.ttf');
}

@font-face {
	font-family: "Inter";
	font-weight: 600;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-SemiBold.ttf') format("truetype");
}

@font-face {
	font-family: "Inter";
	font-weight: 700;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Bold.ttf') format("truetype");
}


`;
