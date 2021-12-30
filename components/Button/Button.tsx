import React from 'react'
import classNames from 'classnames'

const Button = ({
  className,
  ...otherProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => (
  <button
    className={classNames(
      className,
      'text-gray hover:bg-gray-200 active:bg-gray-300 border border-gray-900 rounded-lg m-1 px-2 py-1 transition-colors duration-100'
    )}
    {...otherProps}
  />
)

export default Button
