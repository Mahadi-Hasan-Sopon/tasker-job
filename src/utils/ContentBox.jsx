// eslint-disable-next-line react/prop-types
const ContentBox = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}}`}
    >
      {children}
    </div>
  );
};

export default ContentBox;
