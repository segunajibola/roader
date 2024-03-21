import { useState, useEffect } from "react";
import { getVans } from "../api"

const useFetchVehicles = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVans = async () => {
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadVans();
  }, []);

  return { vans, loading, error };
};

export default useFetchVehicles;
