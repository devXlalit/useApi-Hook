// You will gonna use this hook in your productions keep it

import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (urlPath) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(urlPath);
        setLoading(false);
        setResponse(result.data);
      } catch (error) {
        setError(true);
        console.error("Error fetching data" + error);
      } finally {
        setLoading(false);
      }
    })();
  }, [urlPath]);

  return [loading, error, response];
};

export default useApi;
