const BigWord = ({ children }) => {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-7xl text-gray-200 font-extrabold font-sans">
          {children}
        </h1>
      </div>
    );
  };
  
  export default BigWord;