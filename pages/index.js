import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>テスト</h2>
      <Link href={`/regist`}><a>登録へ</a></Link>
    </div>    
  )
}
