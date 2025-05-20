function Button({ children, disabled, onClick, type }) {
  const styles = {
    base:
      "inline-block cursor-pointer rounded-full font-semibold tracking-wide" +
      " uppercase duration-200 disabled:cursor-not-allowed",
    primary:
      "px-4 py-3 sm:px-6 sm:py-4 bg-yellow-400 hover:bg-yellow-300 text-stone-800" +
      " text-sm focus:bg-yellow-300 focus:outline-none focus:ring-3" +
      " focus:ring-yellow-300 focus:ring-offset-2",
    small:
      "px-4 py-2 md:px-5 md:py-2.5 text-xs bg-yellow-400 hover:bg-yellow-300" +
      " text-stone-800 focus:bg-yellow-300 focus:outline-none focus:ring-3" +
      " focus:ring-yellow-300 focus:ring-offset-2",
    xsmall:
      "px-3 py-2 md:px-3.5 md:py-2.5 text-xs bg-yellow-400 hover:bg-yellow-300" +
      " text-stone-800 focus:bg-yellow-300 focus:outline-none focus:ring-3 focus:ring-yellow-300 focus:ring-offset-2",
    secondary:
      "px-4 py-2.5 sm:px-6 sm:py-3.5 text-sm border-2 border-stone-300 bg-transparent" +
      " hover:bg-stone-300 hover:text-stone-800 text-stone-400 focus:outline-none" +
      " focus:ring-3 focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800" +
      " focus:ring-offset-2",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.base} ${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
