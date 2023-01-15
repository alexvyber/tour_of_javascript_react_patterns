export function Component({
  children,
}:
  | React.PropsWithChildren
  | {
      children: ({
        value,
        func,
      }: {
        value: string;
        func: (arg: any) => void;
      }) => JSX.Element;
    }) {
  console.log("🚀 ~ Component ~ typeof children", typeof children);
  if (typeof children === "function") {
    const As = children;
    return (
      <As
        value={"VALUE: " + Math.random()}
        func={(val) => console.log("SSS: " + val)}
      />
    );
  }

  return <>{children}</>;
}
