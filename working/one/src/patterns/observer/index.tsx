import Observer from "./observer.js";
import { useAnalytics } from "./useAnalytics.js";

export const ObserverPattern = () => {
  useAnalytics();
  const click = (arg: any) => {
    const data = "Some Shit " + arg;
    Observer.notify(data);
  };

  return (
    <>
      <button onClick={() => click(111111)}>111</button>
      <button onClick={() => click(333333)}>333</button>
      <button onClick={() => click("asdfasdfasdf asdf asdf asdf")}>more</button>
    </>
  );
};
