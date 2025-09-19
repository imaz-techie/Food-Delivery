const Button = ({ content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-b from-green-300 to-green-600 text-white px-4 py-2 my-2 rounded hover:bg-green-300"
    >
      <h3 className="flex items-center justify-center font-semibold">
        {content}
      </h3>
    </button>
  );
};

export default Button;
