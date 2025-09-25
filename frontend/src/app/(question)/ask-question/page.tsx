"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenuRadioGroupDemo } from "./DropDownUser";

const AskQuestionPage = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen w-[50%]  items-center m-auto">
      <h1 className="text-4xl font-bold my-12 text-center ">Ask a Question</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input placeholder="Title" />
        <Textarea
          className=" p-2 rounded-md"
          placeholder="Ask your question..."
        />
        <DropdownMenuRadioGroupDemo />
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="text-gray-100 py-2 text-lg hover:cursor-pointer"
        >
          Submit Question
        </Button>
      </form>
    </div>
  );
};

export default AskQuestionPage;
