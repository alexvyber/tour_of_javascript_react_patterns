import React from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { fib } from "../../lib/badFib";

export default function withLoader(Component: React.FC<any>, url: string) {
  return (props: any) => {
    const [data, setData] = React.useState<any>(null);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          fib(43);
          setData(res);
        });
    }, []);

    if (!data) return <LoadingSpinner />;

    return <Component listings={data.listings} />;
  };
}
