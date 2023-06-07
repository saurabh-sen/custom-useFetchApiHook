"use client";
import useFetchApi from "@/components/useFetchApi";
import React from "react";
import Card from "@/components/Card";

export default function Home() {

  const { loading, error, data } = useFetchApi("https://jsonplaceholder.typicode.com/users");

  if (loading) return <span>Loading...</span>

  if (error) return <span>Something broke, server responded with {error}</span>

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By SAURABH
          </a>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center space-y-5">
        <div className="">
          <p className="text-xl text-center sm:text-3xl font-semibold">
            Create a custom hook :- useFetchApi(url)
          </p>
        </div>

        <pre className="code text-xs text-left sm:text-sm">
          {`
          import { useEffect, useState } from "react";

          export default (url: string) => {

            const [loading, setLoading] = useState(false);
            const [error, setError] = useState(null);
            const [data, setData] = useState([]);
            
            useEffect(() => {
              setLoading(true);
              try{
                fetch(url).then((res) => res.json())
                .then((data) => setData(data));
              }catch(error){
                setError(error)
              }finally{
                setLoading(false);
              }
              
            }, []);

            return { loading, error, data };
          }
          `}
        </pre>

        <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            data.map((it: any, ind: number) => <Card key={ind} />)
          }
        </div>
      </div>
    </main>
  );
}
