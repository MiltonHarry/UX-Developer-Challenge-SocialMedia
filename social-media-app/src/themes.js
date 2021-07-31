import { createGlobalStyle } from "styled-components"

//Light Theme Colors
export const lightTheme = {
    body: 'linear-gradient(to top,  hsl(0, 0%, 100%) 70%, hsl(225, 100%, 98%) 30%)',
    fontColor: 'hsl(230, 17%, 14%)',
    cardBg: 'hsl(227, 47%, 96%)',
    fontColor2: 'hsl(228, 12%, 44%)',
    hoverColor: 'hsl(228, 12%, 92%)',
    modalTop: 'hsl(225, 100%, 98%)',
    modalBottom:'hsl(0, 0%, 100%)'
}

//Dark Theme Colors
export const darkTheme = {
    body: 'linear-gradient(to top,  hsl(230, 17%, 14%) 70%, hsl(232, 19%, 15%) 30%)',
    fontColor: 'hsl(0, 0%, 100%)',
    cardBg: 'hsl(228, 28%, 20%)',
    fontColor2: 'hsl(228, 34%, 66%)',
    hoverColor: 'hsl(229, 28%, 24%)',
    modalTop: 'hsl(232, 19%, 15%)',
    modalBottom:'hsl(230, 17%, 14%)'
    
}

//Colors for: Body, h2 and h3, Cards, Header/Nav text, SocialMedia Total and Labels, SocialMedia UserName, Hover, Modal, Added and Removed followers 
export const GlobalStyles = createGlobalStyle`

    body{
        background: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }

    h2{
        color: ${(props) => props.theme.fontColor};
    }

    .label-grey{
        color: ${(props) => props.theme.fontColor2};
    }

    .cardfacebook{
        background-color: ${(props) => props.theme.cardBg};
    }

    .cardfacebook:hover{
        background-color: ${(props) => props.theme.hoverColor};
    }

    .cardtwitter{
        background-color: ${(props) => props.theme.cardBg};
    }

    .cardtwitter:hover{
        background-color: ${(props) => props.theme.hoverColor};
    }

    .cardinstagram{
        background-color: ${(props) => props.theme.cardBg};
    }

    .cardinstagram:hover{
        background-color: ${(props) => props.theme.hoverColor};
    }

    .cardyoutube{
        background-color: ${(props) => props.theme.cardBg};
    }
    
    .cardyoutube:hover{
        background-color: ${(props) => props.theme.hoverColor};
    }

    .cardoverview-items{
        background-color: ${(props) => props.theme.cardBg};
    }


    .nav-text{
        color: ${(props) => props.theme.fontColor2};
    }

    .total-number{
        color: ${(props) => props.theme.fontColor};
    }

    .total-user {
        color: ${(props) => props.theme.fontColor2};
    }

    .total-label{
        color: ${(props) => props.theme.fontColor2};
    }

    .modal-content{
        background-color: ${(props) => props.theme.modalBottom};
    }

    .modal-header{
        background-color: ${(props) => props.theme.modalTop};
    }

    .top-modal{
        background-color: ${(props) => props.theme.modalTop};
    }

    .btn-close{
        color: ${(props) => props.theme.fontColor};
    }

    .added {
        color: hsl(163, 72%, 41%);
    }
    
    .removed {
        color: hsl(356, 69%, 56%);
    }

`