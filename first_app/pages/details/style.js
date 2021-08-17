import React from 'react'
import styled from '@emotion/styled';

const Badge = styled.span`
  background-color: yellow;
   color:green;
   padding:10px;
   border-radius:3px;
`;


const style = () =>{
    return(
        <>
        <h1> Welcome to Next.js</h1>
        <Badge>Submit</Badge>
        </>
    );
    
};
export default style;