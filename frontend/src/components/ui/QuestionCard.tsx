import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Question } from "@/lib/types/question-types";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div>
      <Card key={question.id} className="dark:bg-black/10 shadow-md">
        <CardHeader className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {/* Avatar for user who asked the question */}
            <Avatar>
              <AvatarImage src={question.userAvatarUrl} alt={question.userId} />
              <AvatarFallback>{question.userId[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{question.userId}</span>
          </div>
          <CardTitle>
            <div className="flex flex-col gap-3 mt-4">
              <div className="ml-0 flex gap-3">
                {question.tags.map((tag) => (
                  <Badge className="text-xs text-muted-foreground bg-transparent border border-gray-700" key={tag.id}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
              {question.questionTitle}
              <p className="text-md font-medium text-gray-900 dark:text-gray-200">{question.questionText}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {question.answers && question.answers.length > 0 ? (
              question.answers.map((answer) => (
                <div key={answer.id} className="flex items-start gap-3 p-2 rounded">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={answer.userAvatarUrl} alt={answer.userId} />
                    <AvatarFallback>{answer.userId[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-semibold text-sm">{answer.userId}</span>
                    <p className="text-sm mt-1">{answer.answerText}</p>
                  </div>
                </div>
              ))
            ) : (
              <span className="text-muted-foreground text-sm">No answers yet.</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionCard;
