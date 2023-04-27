import React, { FC } from 'react'
import clsx from 'clsx';

interface Variants {
  primary: string,
  secondary: string,
  squircle: string,
  circle:string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children: React.ReactNode | string,
  variant: keyof Variants
}

const variants:Variants = {
    primary:"bg-gray-300 text-gray-950 dark:bg-gray-900 dark:text-gray-200 p-2 lg:px-6 lg:py-3 rounded-md hover:bg-gray-400 dark:hover:text-gray-50 cursor-pointer text-lg font-medium",
    secondary:"bg-gray-900 text-gray-200 hover:bg-gray-700 rounded-full p-2 lg:px-6 lg:py-3 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-300 cursor-pointer text-lg font-medium",
    squircle:"text-lg p-6 min-w-[5rem] min-h-[5rem] rounded-md text-center flex justify-center items-center transition-all duration-100 scale-100 active:scale-90",
    circle:"text-lg p-6 min-w-[5rem] min-h-[5rem] rounded-full text-center flex justify-center items-center transition-all duration-100 scale-100 active:scale-90"
}

const Button: FC<ButtonProps> = ({ className, children, variant, ...rest }) => {
  const buttonClass = clsx(variants[variant], className);

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
