import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/header.js'
import gql from "graphql-tag";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider } from "react-apollo";

const Container = styled.div`
  padding:10px 20px;
`
const MessageItem = styled.div`
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #5d627b;
  background: white;
  border-top: solid 3px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
`
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://quotations-td8.herokuapp.com/v1/graphql",
  }),
});

const MY_QUERY_QUERY = gql`
  query MyQuery {
    Quotations {
      id
      message
      speaker
      url
    }
  }
`;

export default function Home() {
  const ITEMS = [
    ['名言1','森'],
    ['名言2','海'],
    ['名言3','山'],
  ]
  const [item,setItem] = useState(ITEMS);
  useEffect(()=> {
    //setItem(ITEMS);
  },[])
  return (
    <ApolloProvider client={apolloClient}>
    <Container>
      <Header tab={'top'}></Header>
      <h3>怪しいスタートアップ名言集</h3>
      <Query query={MY_QUERY_QUERY} >
        {({ loading, error, data }) => {
          if (loading) return <pre>Loading</pre>
          if (data) {
            return data['Quotations'].map((quotation,index) => {
                  return (
                    <MessageItem key={index}>{quotation['id']}：{quotation['message']}
                    （By <a target='_blank' href={quotation['url']}>{quotation['speaker']}</a>）
                    </MessageItem>
                  )
                })
          }
        }}
      </Query>
    </Container>
   </ApolloProvider> 
  )
}
