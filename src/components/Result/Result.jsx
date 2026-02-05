import { useSelector } from "react-redux";

function Result() {
  const { isSubmitted, result } = useSelector(state => state.questions);

  if (!isSubmitted) return null;

  return <h2>{result}</h2>;
}

export default Result;