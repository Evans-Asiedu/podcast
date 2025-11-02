import { Loader } from "lucide-react";
import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="w-full h-screen flex-center">
      <Loader className="animate-spin" size={30} />
    </div>
  );
};

export default LoaderSpinner;
