import { useState } from 'react'
import { Link } from "react-router-dom";
import "./MainPage.css"
import Head from '../../components/Head/Head';
import ThemeForStudent from '../../components/ThemeForStudent/ThemeForStudent';

export default function MainPage(){
  return(
    <div className='container'>
      <Head/>
      <Link to={"/createdocument"}>
        <button className='create-document-btn'>Create Document</button>
      </Link>
      <div className='all-themes'>
        <ThemeForStudent></ThemeForStudent>
      </div>
    </div>
    
  )
}