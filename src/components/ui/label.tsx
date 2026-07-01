import * as React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={`mb-1 block text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}