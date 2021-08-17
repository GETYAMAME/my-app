import Link from 'next/link'
import styled from 'styled-components'
import {useState} from 'react'

const AInner = styled.a`
    display: block;
    background:#ddd;
    margin:0 2px;
    padding:10px 20px;
    ${props => props.focused ? 'background:#fff;' : 'background:#ddd;'};
`
const Tab = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Header = () => {
    const [tab, setTab] = useState('top');
    return (
        <Tab>
            <Link href="/">
            <AInner focused={tab === 'top'} onClick={() => setTab('top')}>Top</AInner>
            </Link>
            <Link href="/regist">
            <AInner focused={tab === 'regist'} onClick={() => setTab('regist')}>メッセージ登録</AInner>
            </Link>
        </Tab>
    )
}