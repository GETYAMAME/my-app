import {Header} from '../../components/header.js'
import styled from 'styled-components'

const Container = styled.div`
  padding:10px 20px;
`

export default function Regist() {
    return (
      <Container>
      <Header tab={'regist'}/>
      <h2>メッセージ登録</h2>
      </Container>
    )
}