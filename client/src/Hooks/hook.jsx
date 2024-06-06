import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
export const useFetch = (callback, depArr = []) => {
  const process = useSelector((state) => state.process.value);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await callback();
        setData(response);
      } catch (error) {
        setError({ message: error.message });
      }
      setLoading(false);
    };
    fetchData();
  }, [process, searchParams, ...depArr]);

  return {
    data,
    loading,
    error,
  };
};