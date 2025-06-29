import { ReactNode } from "react";
import UI from "../../assets/ui-img.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 ">
        <div className="auth-header">
          <h1>taskAr</h1>
        </div>
        {children}
      </div>
      <div className="hidden md:flex w-[40vw] h-screen items-center bg-blue-50 bg-[url('/bgimg.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
        <img src={UI} alt="ui-img" className="" />
      </div>
    </div>
  );
};

export default AuthLayout;
