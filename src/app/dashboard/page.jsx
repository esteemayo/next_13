'use client';

import useSWR from 'swr'
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://jsonplaceholder.typicode.com/posts');

  //     if (!res.ok) {
  //       setIsError(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   })();
  // }, []);

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
