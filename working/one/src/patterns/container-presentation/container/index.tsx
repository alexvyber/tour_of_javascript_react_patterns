import { useEffect, useState } from "react";
import { Listings } from "../presentation/Listings";
import withLoader from "../../hoc/withLoader";

function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

export function ListingsContainerComponent() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  console.log("🚀 ~ ListingsContainerComponent ~ data", data);
  // fib(43);

  return <Listings listings={data.listings} />;
}

export default withLoader(
  Listings,
  "https://house-lydiahallie.vercel.app/api/listings"
);
