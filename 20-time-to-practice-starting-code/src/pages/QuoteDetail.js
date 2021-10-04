import { Fragment } from "react";
import { Route, useParams } from "react-router";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q1", author: "Maxmilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
