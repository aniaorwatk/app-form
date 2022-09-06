import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import './Footer.scss'

interface IquoteType{
text: string,
author: string,
}

const Footer =()=>{
const URL ='https://type.fit/api/quotes';

const [quote, setQuote] = useState<IquoteType>()
const [author, setAuthor] =useState <IquoteType>()

// const apiQuote = async ()=>{
//     const res = await fetch(URL)
//     const json = await res.json()

//     if (!(res.status === 200)) {
//         const msg = `Shiba not found: ${res.status}`
//         throw alert(msg)
//     }
//     setQuote(json)
//     // setAuthor(json.author)
//     console.log(json.data)
// }

const apiQuote = ()=>{
    fetch(URL)
        .then(res => res.json())
        .then(data => setQuote(data))
}

useEffect(() => {
    apiQuote()
}, []);

const getQuote =()=>{
    apiQuote()
}
console.log(quote?.author)

return(
<footer>
    <h2>{quote?.text}</h2>
    <p>{quote?.author}</p>
    {/* <pre>{JSON.stringify(quote, null, 2)}</pre> */}
    <ButtonPrimary
     buttonLabel='kkjkhjk'
     customClassName='primary'
     type= 'button'
     onClick={getQuote}
     />
</footer>
)
}

export default Footer