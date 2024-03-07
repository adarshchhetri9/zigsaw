import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center text-white ">
      {children}
    </div>
  );
};

export default layout;
