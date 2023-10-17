import { useEffect, useRef, useState } from "react";


const useFetch = <T>(url: RequestInfo | URL , options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState<string | null>(null);
  
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const abortController = new AbortController();
    const {signal} = abortController;
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);

        const response = await fetch(url, { signal, ...optionsRef.current});

        if(!response.ok) throw new Error(`Error: ${response.status}`);

        const json = (await response.json()) as T;
        
        if(!signal.aborted) setData(json);
      } catch (error) {
        if(!signal.aborted && error instanceof Error) {
          setError(error.message);
        }
      } finally {
        if(!signal.aborted) setLoading(false);
      }
    }
    fetchData();
    return () => {
      abortController.abort();
    }
  }, [url])

  return {data, loading, error};
}

export default useFetch;