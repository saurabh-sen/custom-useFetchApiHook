import { useEffect, useState } from "react";

export default (url: string) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    setLoading(true);
    try{
      fetch(url).then((res) => res.json()).then((data) => setData(data));
    }catch(error){
      setError(error)
    }finally{
      setLoading(false);
    }
    
  }, []);

  return { loading, error, data };
}