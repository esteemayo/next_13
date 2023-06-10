'use client';

import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

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

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR('http://jsonplaceholder.typicode.com/posts', fetcher);
  console.log(session);

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
