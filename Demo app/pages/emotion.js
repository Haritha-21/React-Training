import React from 'react'
import styled from '@emotion/styled'

const Button = styled.span`
  background-color: ${props => props.variantColor ?  props.variantColor: "grey"};
   color: ${props => props.color ? props.color : "#fff"});
   padding:10px;
   border-radius:3px;
   margin:10px;
`;


const PrimaryButton =styled(Button)`
background-color: green;
   color:orange;
 
`;

const style = () =>{
    return(
        <>
        <h1> Welcome to Next.js</h1>
        <Button>Submit</Button>
        <PrimaryButton>default</PrimaryButton>
        <Button variantColor="green">green</Button>
        <Button variantColor="hotpink">hotpink</Button>
        <Button variantColor="cyan" color="#444">cyan</Button>
    
        </>
    );
    
};

export default style;
