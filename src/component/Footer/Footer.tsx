import React, { useEffect, useState } from "react";
import labels from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { button } from "../Form/FormHandler";
import "./Footer.scss";

interface IQuotesType {
  text: string;
  author: string | null;
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

  return (
    <footer>
      {quotes.length > 0 && (
        <>
          <p className="footer__text">„
            {quotes[currentQuote].text}
            ”</p>
          {quotes[currentQuote].author && <p className="footer__author">{quotes[currentQuote].author}</p>}
        </>
      )}
      <ButtonPrimary
        type="button"
        customClassName={button.buttonClass}
        buttonLabel={labels.footer.labelButtom}
        onClick={changeQuote}
      />
    </footer>
  );
};

export default Footer;
