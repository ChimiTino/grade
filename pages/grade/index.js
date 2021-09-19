import Head from 'next/head'
import Image from 'next/image'
import {subjectList} from '../../Components/Lists/subjectList';
import styles from '../../styles/Home.module.css'




export const getStaticProps = async (params) =>{
    
  const res = subjectList;
  const data = await res;

  return {
      props: {grade: data }
  }
  

}




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edu.Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{subjectList.map((item)=>{
  return(
  <>
    <a href = {'/grade/'+ item.id} >
    <h1 >{item.subject}</h1></a>
    </>
  )
  
})}
   </div>   
  )
}
