import React from 'react'
import classNames from 'classnames'

const Button = ({
  className,
  disabled,
  ...otherProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => (
  <button
    className={classNames(
      className,
      'text-slate-900 border border-slate-900 rounded-lg',
      { 'hover:bg-slate-200 active:bg-slate-300': !disabled },
      'disabled:text-gray-500 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed',
      'm-1 px-2 py-1',
      'transition-colors duration-100'
    )}
    disabled={disabled}
    {...otherProps}
  />
)

export default Button
