'use client'
import {Title, Main} from './page.ts';
import React, { MouseEventHandler, useState} from 'react'
import {LazyImage} from './components/RandomImage/RandomImage.tsx';
import {ImageContainer, ButtonContainer, Button} from './components/RandomImage/RandomImage.ts';
import {random} from 'lodash'
import {IDuckImageItem} from '../types/IDuckImageItem.ts'
import '../app/Styles/styles.css'
import { GlobalStyles } from "./Styles/globalstyles"
import Footer from './components/Footer/Footer.tsx'


const myRandom = () => random(1, 250)
const generateId = () => Math.random().toString(36).substr(2,9);

export default function Home() {

  const [images, setImages] = useState<Array<IDuckImageItem>>([]);

  const addNewDuck: MouseEventHandler<HTMLButtonElement> = () => {

    const newImageItem: IDuckImageItem = {
      id: generateId (), 
      url:`https://random-d.uk/api/v2/${myRandom()}.jpg`
    };

    setImages([...images, newImageItem])
  }

  /*const axios = require('axios');
  axios.get({
    url: 'https://api.api-ninjas.com/v1/quotes?category=happines',
    headers: {
      'X-Api-Key': '8oFMNe116xWU0MftsWFTpQ==qlI5L4PrrTrtXMiY'
    }
  })
  
    async function getUser() {
    try {
      const response = await axios.get({
        url: 'https://api.api-ninjas.com/v1/quotes?category=happines',
        headers: {
          'X-Api-Key': '8oFMNe116xWU0MftsWFTpQ==qlI5L4PrrTrtXMiY'
        }
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }*/
  /*const axios = require('request');
  let category = 'happiness';
  axios.get({
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: {
      'X-Api-Key': '8oFMNe116xWU0MftsWFTpQ==qlI5L4PrrTrtXMiY'
    },
  }, function(error, response, body) {
    if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else console.log(body)
    });

    useEffect(() => {
      axios()
    })*/

    /*const axios = async () =>{
      const axiosRequest = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness')
      console.log(axiosRequest)
    }*/

  //const categories = [happiness, faith, friendship, hope, inspirational]

  /*const [quote, setQuote] = useState<string>('Hola');

    useEffect(() => {
      fetch (`https://api.api-ninjas.com/v1/quotes?category=happiness'`)
      .then (res => res.json())
      .then(
        (quote) => {
          console.log(quote)
        }
      )
    },[])*/

  return (
    <Main >
      <GlobalStyles/>
     <Title>
          <h1>Welcome to <span>Random</span> Quack.</h1>
          <h2>Click and found out our fellas!</h2>
      </Title>

      <ImageContainer>

        <ButtonContainer>
          <Button onClick={addNewDuck}>Agregar pato</Button>
        </ButtonContainer>

          {images.map (({id, url}) =>
            <div key={id}>
              <LazyImage src={url}/>
            </div> 
          )}

        </ImageContainer>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#318CE7" fillOpacity="1" d="M0,192L60,170.7C120,149,240,107,360,122.7C480,139,600,213,720,245.3C840,277,960,267,1080,256C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        <Footer/>

    </Main>
  );
}
