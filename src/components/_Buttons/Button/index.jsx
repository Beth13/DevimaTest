/* eslint-disable react/prop-types */

const Button = ({
  onClick,
  children,
  theme = 'viridianContained',
  size = 'sm',
  isDisabled,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn_wrapper ${theme && theme} ${size && size}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
