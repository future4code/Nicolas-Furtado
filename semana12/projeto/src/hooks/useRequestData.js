import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setData(res.data);
      })
  }, [url]);

  return data;
};

export default useRequestData;
