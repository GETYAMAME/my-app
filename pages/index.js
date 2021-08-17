import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/header.js'

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
    <Container>
      <Header></Header>
      <h2>テスト</h2>
      {
        item.map((str,index) => {
          return <MessageItem key={index}>{str[0]}：{str[1]}</MessageItem>
        })
      }
    </Container>    
  )
}
