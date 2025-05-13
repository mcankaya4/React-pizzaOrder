function Button({ children, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase duration-200 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
