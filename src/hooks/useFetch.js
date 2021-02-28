import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setErrorFetch(null);
      })
      .catch(err => {
        if (err.message === 'AbortError') {
          // 
        } else {
          setErrorFetch(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, errorFetch };
}

export default useFetch;