const Button = ({ content, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-b from-orange-300 to-orange-500 text-white px-4 py-2 my-2 rounded hover:bg-green-300 ${className}`}
    >
      <h3 className="flex items-center justify-center font-semibold">
        {content}
      </h3>
    </button>
  );
};

export default Button;
