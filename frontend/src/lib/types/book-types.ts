enum BookCategories {
    'Dogma',
    'Kenona',
    'Tewfit'
}

interface Author {
    id: string;
    name: string;
    imageUrl: string;
}

export interface Review {
    id: string;
    userId: string;
    description: string;
}

export interface Book {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    rating: number;
    reviews: Review[];
    author: Author;
    categories: BookCategories;
}


