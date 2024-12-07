import React from 'react'
import colors from "../colors";
import formats from "../formats";
import styled, { keyframes } from 'styled-components';

// secondary: active/hover & subtle: active --> change background color back to colors.brand100
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Subtle = 'subtle',
  Transparent = 'transparent',
}

type ButtonTypes = {
 svg?: React.ReactNode,
 text: string,
 variant: ButtonVariant,
 onClick: () => void;
 [key: string]: any;
}

interface StyledButtonProps {
 variant: ButtonVariant;
}

const Button = (props: ButtonTypes) => {

 const ButtonContainer = styled.div`
   display: flex;
 `;

 const Svg = styled.div`
   display: flex;
   & > svg {
     width: 20px;
     height: 20px;
     display: flex;
     margin: auto 4px auto 0;
   }
 `;

 const StyledButton = styled.div<StyledButtonProps>`
   border-radius: ${formats.roundmd};
   font-size: ${formats.textMD};
   font-weight: 600;
   padding: 8px 16px;
   display: flex;
   cursor: pointer;

   ${({ variant }) => {
     switch (variant) {
       case ButtonVariant.Primary:
         return `
           background-color: ${colors.brand500};
           color: ${colors.neutral};
           box-shadow: inset 0px 8px 20px 0px ${colors.brand200};


           &:hover {
             box-shadow: none;
           }


           &:active {
             background-color: ${colors.brand800};
           }


           &:focus-visible {
             background-color: ${colors.brand500};
             border: 2px solid ${colors.neutral1000};
             box-shadow: inset 0 0 0 2px ${colors.neutral};
           }


           &:disabled {
             background-color: ${colors.neutral200};
             color: ${colors.neutral300};
           }
       `;
       case ButtonVariant.Secondary:
         return `
             background-color: ${colors.neutral};
             border: 1px solid ${colors.brand500};
             color: ${colors.brand500};


             &:hover {
               background-color: ${colors.brand};
             }


             &:active {
               background-color: ${colors.brand};
               border-color: ${colors.brand800};
               color: ${colors.brand800};
             }


             &:focus-visible {
               border: 2px solid ${colors.neutral1000};
             }


             &:disabled {
               background-color: ${colors.neutral50};
               border-color: ${colors.neutral300};
               color: ${colors.neutral300};
             }
         `;
       case ButtonVariant.Outline:
         return`
           background-color: ${colors.neutral};
           border: 1px solid ${colors.neutral200};
           color: ${colors.brand1000};


           &:hover {
             border-color: ${colors.neutral700};
           }


           &:active {
             border-color: ${colors.brand1000};
           }


           &:focus-visible {
             border: 2px solid ${colors.neutral1000};
           }


           &:disabled {
             border-color: ${colors.neutral200};
             color: ${colors.neutral300};
           }
         `;
       case ButtonVariant.Subtle:
         return`
           background-color: ${colors.neutral50};
           color: ${colors.brand800};


           &:hover {
             background-color: ${colors.brand};
             color: ${colors.brand500};
           }


           &:active {
             background-color: ${colors.brand};
             color: ${colors.brand800};
           }


           &:focus-visible {
             background-color: ${colors.brand};
             border: 2px solid ${colors.neutral1000};
           }


           &:disabled {
             border-color: ${colors.neutral50};
             color: ${colors.neutral300};
           }
         `;
       case ButtonVariant.Transparent:
         return`
           background-color: ${colors.neutral};
           color: ${colors.brand800};


           &:hover {
             text-decoration: underline;
           }


           &:active {
             color: ${colors.brand1000};
             text-decoration: underline;
           }


           &:focus-visible {
             border: 2px solid ${colors.neutral1000};
             text-decoration: underline;
           }


           &:disabled {
             color: ${colors.neutral300};
           }
         `;
     }
   }}
 `;

 return (
   <ButtonContainer>
     <StyledButton onClick={() => props.onClick?.()} variant={props.variant}>
       {props.svg && <Svg>{props.svg}</Svg>}
       {props.text ?? "This button has no text"}
     </StyledButton>
   </ButtonContainer>
 )
}

export default Button