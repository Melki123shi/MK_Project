import SearchBar from "@/components/SearchBar"
import BooksHeroSection from "./BooksHeroSection"

const MyBooks = () => {
  return (
    <div className="min-h-screen">
      <BooksHeroSection />
      <div className="flex justify-end">

      <SearchBar placeholder="Search for books..."/>
      </div>
      Books
    </div>
  )
}

export default MyBooks