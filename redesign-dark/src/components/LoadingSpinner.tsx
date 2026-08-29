const LoadingSpinner = ({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) => {
  let dimensions;
  switch (size) {
    case 'small':
      dimensions = 'w-5 h-5 border-2';
      break;
    case 'large':
      dimensions = 'w-12 h-12 border-4';
      break;
    default:
      dimensions = 'w-8 h-8 border-3';
  }

  return (
    <div className="flex justify-center items-center">
      <div className={`${dimensions} border-t-indigo-600 border-gray-200 rounded-full animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner;