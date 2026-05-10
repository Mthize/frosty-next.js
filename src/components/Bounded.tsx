import type { JSX } from "react";
import clsx from "clsx";

type BoundedProps<T extends keyof JSX.IntrinsicElements = "section"> =
  JSX.IntrinsicElements[T] & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
  };

export const Bounded = <T extends keyof JSX.IntrinsicElements = "section">({
  as: Comp,
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  const Tag = (Comp ?? "section") as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Tag>
  );
};
