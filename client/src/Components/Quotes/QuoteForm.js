import axios from "axios";
import { useContext, useState } from "react";
import { QuoteContext } from "../../Providers/QuoteProvider";

const QuoteForm = ({ props }) => {
  const [show, setShow] = useState(false);
  const [phrase, setPhrase] = useState(props ? props.phrase : "");
  const context = useContext(QuoteContext)

  const newQuoteCheck = typeof props !== "object";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newQuoteCheck) {
      let res = await axios.post('/api/quotes',{phrase})
      context.addQuote(res.data)
    }
    else{
      let res = await axios.put(`/api/quotes/${props.id}`,{phrase})
      context.updateQuote(res.data)
    }
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <p>{newQuoteCheck ? "New Quote" : "Edit Quote"}</p>
        <input value={phrase} onChange={(e) => setPhrase(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>
      <h1>{newQuoteCheck && "Add Quote"}</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Form" : "Show Form"}
      </button>
      {show && renderForm()}
    </div>
  );
};

export default QuoteForm;
