import { useContext } from "react";
import QuoteForm from "../../Components/Quotes/QuoteForm";
import { QuoteContext } from "../../Providers/QuoteProvider";

const QuotesHome = () => {
  const { quotes, deleteQuote } = useContext(QuoteContext);

  const renderQuotes = () => {
    return quotes.map((q) => (
      <div key={q.id}>
        <h1>{q.phrase}</h1>
        <button onClick={()=>{deleteQuote(q.id)}}>Delete</button>
        <QuoteForm props={q}/>
      </div>
    ));
  };

  return (
    <div>
      <h1>Quotes Home</h1>
      <QuoteForm/>
      {renderQuotes()}
    </div>
  );
};

export default QuotesHome;
