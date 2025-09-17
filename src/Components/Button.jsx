const Button = ({ content }) => {
  return (
    <div className="bg-green-200 px-4 py-2 my-2 rounded hover:bg-green-300">
      <h3 className="flex items-center justify-center font-semibold">
        {content}
      </h3>
    </div>
  );
};

export default Button;
