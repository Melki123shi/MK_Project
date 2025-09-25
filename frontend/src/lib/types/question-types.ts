
/**
 * Represents the data structure for a user's question before it is submitted.
*/
export interface UserQuestion {
  question: Question;
  assignedTo?: string;
}

/**
 * Defines the expected response from the AI screening service.
*/
export interface AIScreeningResult {
  isAppropriate: boolean;
  
  /** A message providing details if the question was deemed inappropriate. */
  message?: string;
}

export interface Tag {
  id: string;
    name: 'Dogma' | 'Kenona' | 'Other';
}
/**
 * Represents the full question object stored in the database and displayed on the frontend.
 */
export interface Question {
  id: string;
  questionTitle: string;
  questionText: string;
  userId: string;
  userAvatarUrl?: string;
  status: 'pending' | 'answered' | 'under_review';
  assignedTo?: string;
  createdAt: string;
  answers: Answer[];
  tags: Tag[];
}

export interface Answer {
    id: string;
    userId: string;
    userAvatarUrl?: string;
    questionId: string;
    answerText: string;
}

export interface Comment {
    id: string;
    userId: string;
    userAvatarUrl?: string;
    questionId: string;
    content: string;
    createdAt: string;
}

