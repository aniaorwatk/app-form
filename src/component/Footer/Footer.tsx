import React, { useEffect, useState } from "react";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { button } from "../Form/FormHandler";
import "./Footer.scss";

interface IQuotesType{
  text: string,
  author: string | null,
}

const Footer = () => {
  const URL = "https://type.fit/api/quotes";

  const [quotes, setQuotes] = useState<IQuotesType[]>([]);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setQuotes(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const changeQuote = () => {
    const newQuote = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(newQuote);
  };

  console.log(quotes);
  return (
    <footer>
      <h3>{labels.footer.text}</h3>
      {
        quotes.length > 0 && (
          <>
            <p>{quotes[currentQuote].text}</p>
            {quotes[currentQuote].author && <p>{quotes[currentQuote].author}</p>}
          </>
        )
      }
      <ButtonPrimary
    
        type="button"
       
        customClassName={button.buttonClass}
        buttonLabel="nowy cytat"
        onClick={changeQuote}
       
      />
    </footer>
  );
};

export default Footer;
