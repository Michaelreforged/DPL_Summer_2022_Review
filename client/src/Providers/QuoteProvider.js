import React, { useEffect, useState } from "react";
import axios from "axios";

export const QuoteContext = React.createContext();

const QuoteProvider = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    setLoading(true);
    try {
      let res = await axios.get("/api/quotes");
      setQuotes(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const addQuote = (quote) => {
    console.log("added new Quote");
    setQuotes([...quotes, quote]);
  };

  const updateQuote = (update) => {
    console.log("Update Quote");
    let updatedQuotes = quotes.map((quote) =>
      quote.id === update.id ? update : quote
    );
    setQuotes(updatedQuotes);
  };

  const deleteQuote = async (id) => {
    console.log(id);
    try {
      let res = await axios.delete(`/api/quotes/${id}`)
      console.log(res)
      let updatedQuotes = quotes.filter((quote) =>
        quote.id !== res.data.id 
      );
      setQuotes(updatedQuotes);
    } catch (error) {
      return alert('Error')
    }
  };

  const providerItems = {
    getQuotes,
    quotes,
    loading,
    addQuote,
    updateQuote,
    deleteQuote,
    setQuotes,
  };

  return (
    <QuoteContext.Provider value={providerItems}>
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
