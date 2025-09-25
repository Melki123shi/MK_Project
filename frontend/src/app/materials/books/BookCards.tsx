import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Book } from "@/lib/types/book-types";
import Image from "next/image";

const BookCards = ({
  book
}: {
  book: Book
}) => {
  return (
    <Card>
      <CardHeader>
        <Image src={book.imageUrl} alt="BookImage" />
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default BookCards;
