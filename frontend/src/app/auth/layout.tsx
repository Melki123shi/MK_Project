"use client";

import Image from "next/image";
import LogoImage from "@/../public/logo.png";
import React from "react";

const Auth = ({children}: React.PropsWithChildren<{}>) => {

  return (
    <div className="flex flex-col gap-2 lg:min-w-[740px] sm:mx-auto sm:w-full sm:max-w-sm bg-white/30 dark:bg-gray-800/45 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-xl shadow-lg my-21">
      <div className="flex flex-col gap-2 mx-auto items-center text-center mt-12">
        <Image src={LogoImage} alt="Logo image" height={64}></Image>
        <p className="text-3xl font-bold">ASK</p>
      </div>
      {children}
    </div>
  );
};

export default Auth;
