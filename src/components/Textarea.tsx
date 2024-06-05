import React from 'react';

interface OutlinedTextareaProps {
  placeholder: string;
}

const OutlinedTextarea: React.FC<OutlinedTextareaProps> = ({ placeholder }) => {
  return (
    <div className="md:w-1/2 w-full mx-auto mt-8">
      <textarea
        placeholder={placeholder}
        className="w-full md:px-8 px-4 text-left py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        rows={5}
      ></textarea>
    </div>
  );
};

export default OutlinedTextarea;
