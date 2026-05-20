function Button({
  children,
  variant = "primary",
}) {

  const baseStyles =
    "px-8 py-4 rounded-2xl transition duration-300 font-semibold text-lg";

  const variants = {

    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-300",

    secondary:
      "border border-gray-300 bg-white hover:bg-gray-100 text-slate-800 shadow-sm",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;