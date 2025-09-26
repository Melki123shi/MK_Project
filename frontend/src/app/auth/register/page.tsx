"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Visible from "@/components/ui/visible";

const Register = () => {
  const [obsecure, setObsecure] = useState(true);

  const toggleObscure = () => {
    setObsecure((prev) => !prev);
  };

  const inputs = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "username",
    },
    {
      id: "first",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
    },
    {
      id: "last",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
    },
    { id: "email", label: "Email", type: "email", placeholder: "Email" },
    {
      id: "password",
      label: "Password",
      type: obsecure ? "password" : "text",
      placeholder: "Password",
    }
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Handle form submission logic here
      }}
      className="mx-32 my-12"
    >
      {inputs.map((input) => (
        <div key={input.id} className="mb-4">
          <label
            htmlFor={input.id}
            className="block text-sm font-medium text-gray-100"
          >
            {input.label}
          </label>
          <div className="relative">
            <Input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              className="h-11 mb-3"
              aria-hidden={
                input.id === "password"
                  ? obsecure
                    ? "true"
                    : "false"
                  : undefined
              }
            />
            {input.id === "password"  && (
                <button
                  type="button"
                  onClick={toggleObscure}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 focus:outline-none"
                  tabIndex={-1}
                  aria-label={obsecure ? "Show password" : "Hide password"}
                >
                  <Visible obsecure={obsecure} />
                </button>
              )}
          </div>
        </div>
      ))}
      <Button
        type="submit"
        className="rounded-2xl py-6 text-lg font-medium text-white w-full mt-7"
      >
        Signup
      </Button>
      <p className="mt-4 text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="login" className="text-blue-500">
          Login
        </Link>
      </p>
      <div className="flex items-center gap-4 w-full mt-3 justify-center">
        <div className="w-1/4 h-0.25 bg-gray-600"></div> OR{" "}
        <div className="w-1/4 h-0.25 bg-gray-600"></div>
      </div>
      <div className="flex items-center mt-3 justify-center ">
        <Button variant="outline" className="hover:cursor-pointer">
          <FcGoogle /> Continue with Google
        </Button>
      </div>
    </form>
  );
};

export default Register;
