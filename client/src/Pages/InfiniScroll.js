import { useEffect, useState } from "react";
import axios from "axios";
import "./../StlyedSheets/Quote.css";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniScroll = () => {
  const [quotes, setQuotes] = useState([]);
  const [per, setPer] = useState(30);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(2);

  const getQuotes = async () => {
    try {
      let res = await axios.get("api/pagequotes");
      console.log(res.data);
      setQuotes(res.data.quote);
      setPer(res.data.per);
      setCount(res.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const render = () => {
    return quotes.map((q) => (
      <div className="card">
        <h1>{q.phrase}</h1>
      </div>
    ));
  };

  const getMore = async () => {
    try {
      let res = await axios.get(`/api/pagequotes?page=${page}`);
      setQuotes((prevState) => [...prevState, ...res.data.quote]);
      setPage((prevState) => prevState + 1);
    } catch (err) {}
  };

  return (
    <div>
      <h1>InfiniScroll</h1>
      <div style={{display:'flex', flexDirection:"row"}}>

      <InfiniteScroll
        dataLength={quotes.length}
        next={() => {
          getMore();
        }}
        hasMore={quotes.length === count ? false : true}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No More Quotes</b>
          </p>
        }
        height={400}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>{render()}</div>
      </InfiniteScroll>
      <InfiniteScroll
        dataLength={quotes.length}
        next={() => {
          getMore();
        }}
        hasMore={quotes.length === count ? false : true}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No More Quotes</b>
          </p>
        }
        height={400}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>{render()}</div>
      </InfiniteScroll>
      </div>

    </div>
  );
};

export default InfiniScroll;
