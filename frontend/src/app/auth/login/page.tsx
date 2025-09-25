"use client";

import { ChangeEvent, EventHandler, FormEvent, InputEventHandler, useState } from "react";
import Auth from "../layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Visible from "@/components/ui/visible";

const Login = () => {
  const [obsecure, setObsecure] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)
  }

  const toggleObscure = () => {
    setObsecure((prev) => !prev);
  };

  const inputs = [
    { id: "email", label: "Email", type: "email", placeholder: "Email" },
    {
      id: "password",
      label: "Password",
      type: obsecure ? "password" : "text",
      placeholder: "Password",
    },
  ];
  
  return (
    <form
      onSubmit={handleSubmit}
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
              onChange={handleChange}
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
        Login
      </Button>
      <p className="mt-4 text-sm text-gray-400">
        Don't have an account?{" "}
        <Link href="signup" className="text-blue-500">
          Signup
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

export default Login;
