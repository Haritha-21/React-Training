import Head from 'next/head'
import Link from 'next/link'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/react'




export default function Home() {

  const Button = styled.button`
  color: orange;
`

const Button1 = styled.button`
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

const Section = styled.section`
  background: #333;
  color: #fff;
  width: 150px
`
const Aside = Section.withComponent('aside')
const H1 = styled.h1(
  {
    fontSize: 30
  },
  props => ({ color: props.color })
)

const dynamicStyle = props =>
  css`
    color: ${props.color};
  `

const Container = styled.div`
  ${dynamicStyle};
`

const Example = styled('span')`
  color: red;
  & > a {
    color: hotpink;
  }
`

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" ></link>
      </Head>

     
              <br/>
             <div>
               <div>
    <Button>hloo</Button>
    <br/>
    <Button1>Welcome to next.js</Button1>
    <br/>  
    <br/>
    <br/>
    <Section>This is a section</Section>
    <br />
    <Aside>This is an aside</Aside>

    <br />
    <br /><br />
    <H1 color="orange">Styled Components </H1>
    
    <Container color="blue">
      Style of a component
  </Container>
  <Example>
    Welcome <a>to Next.js</a>.
  </Example>

    </div>
             </div>
              
    </div>
  )
}