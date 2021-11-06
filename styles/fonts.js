import { createGlobalStyle } from 'styled-components'

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "Comfortaa Light";
        src: local('Comfortaa Light'),
        url('/fonts/Comfortaa-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "Comfortaa Regular";
        src: local('Comfortaa Regular'),
        url('/fonts/Comfortaa-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Comfortaa Medium";
        src: local('Comfortaa Medium'),
        url('/fonts/Comfortaa-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Comfortaa SemiBold";
        src: local('Comfortaa SemiBold'),
        url('/fonts/Comfortaa-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Comfortaa Bold";
        src: local('Comfortaa Bold'),
        url('/fonts/Comfortaa-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }
`;

const fonts = {
  fontFamilyLight: 'Comfortaa Light',
  fontFamilyRegular: 'Comfortaa Regular',
  fontFamilyMedium: 'Comfortaa Medium',
  fontFamilySemiBold: 'Comfortaa SemiBold',
  fontFamilyBold: 'Comfortaa Bold',
}

export default fonts