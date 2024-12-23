import React from "react";
import colors from "../colors";
import formats from "../formats";
import styled from "styled-components";
import Quotation from "../asset/quotation.svg";


type QuoteTypes = {
   quote: string,
   source: string,
   svg?: React.ReactNode,
   img?: string;
   [key: string]: any;
}


const QuoteComponent = (props: QuoteTypes) => {
   const QuoteContainer = styled.div`
       background-color: ${colors.neutral50};
       padding: 32px;
       border-radius: ${formats.roundlg};
       display: flex;
       flex-direction: column;
   `;


   const QuoteText = styled.p`
       color: ${colors.neutral1000};
       font-size: 24px;
       line-height: 32px;
       font-weight: bold;
       text-align: left;
       margin: 20px 0 40px 0;
   `;


   const BottomRow = styled.div`
       margin-top: auto;
   `;


   const SourceText = styled.p`
       color: ${colors.brand500};
       font-size: 16px;
       line-height: 24px;
       font-weight: bold;
       text-align: left;
       margin-bottom: 8px;
   `;


   const LogoContainer = styled.div`
       width: 100px;
   `;


 return (
   <QuoteContainer>
       <Quotation style={{width: "52px", height: "52px"}}/>
       <QuoteText>
           {props.quote}
       </QuoteText>
       <BottomRow>
           <SourceText>
               {props.source}
           </SourceText>
           <LogoContainer>
               {props.svg}
           </LogoContainer>
       </BottomRow>
   </QuoteContainer>
 );
};


export default QuoteComponent;