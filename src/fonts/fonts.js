import { createGlobalStyle } from "styled-components";

import EliantoRegularTTF from "./Elianto-Regular.ttf";
import AileronsTypefaceOTF from "./Ailerons-Typeface.otf";
import Exo2TTF from "./exo-20.ttf";
import Exo2BoldTTF from "./exo-20-bold.ttf";
import Exo2BoldItalicTTF from "./exo-20-bold-italic.ttf";
import Exo2ItalicTTF from "./exo-20-italic.ttf";

const GlobalFonts = createGlobalStyle`
{ 
    {  
        @font-face {
        font-family: "Elianto-Regular";
        font-style: normal;
        font-weight: normal;
        src: url(${EliantoRegularTTF}) format("truetype");
        }
    },
    { 
        @font-face {
        font-family: "Ailerons-Typeface";
        font-style: normal;
        font-weight: normal;
        src: url(${AileronsTypefaceOTF}) format("opentype");
        }
    },
    { 
        @font-face {
        font-family: "Exo 2.0";
        font-style: normal;
        font-weight: normal;
        src: url(${Exo2TTF}) format("truetype");
        }
    },
    { 
        @font-face {
        font-family: "Exo 2.0, italic";
        font-style: normal;
        font-weight: normal;
        src: url(${Exo2ItalicTTF}) format("truetype");
        }
    },
        { 
        @font-face {
        font-family: "Exo 2.0, bold";
        font-style: normal;
        font-weight: normal;
        src: url(${Exo2BoldTTF}) format("truetype");
        }
    },
        { 
        @font-face {
        font-family: "Exo 2.0, bold italic";
        font-style: normal;
        font-weight: normal;
        src: url(${Exo2BoldItalicTTF}) format("truetype");
        }
    }
}`;

export default GlobalFonts;
