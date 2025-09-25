import SearchBar from "@/components/SearchBar";
import QuestionCard from "@/components/ui/QuestionCard";
import { dummyQuestions } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuestionListPage = () => {
  return (
    <div className="min-h-screen w-[60%] mt-12 items-center mx-auto">
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex justify-between items-center">
          <SearchBar placeholder="Search for questions..."/>
          <Link href="/ask-question">
            <Button variant="default" size="lg" className="text-gray-100 hover:pointer-cursor">
              Ask Question
            </Button>
          </Link>
        </div>
        <div className="grid grid-col-1 gap-12">
          {dummyQuestions.map((question) => (
            <QuestionCard question={question} key={question.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionListPage;
