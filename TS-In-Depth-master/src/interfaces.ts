import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
    // markDamaged?: (reason: string) => void; // functional type
    // markDamaged?(reason: string): void; //method signature
}

interface DamageLogger {
    (p: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (error: Error, titles: string[]): void;
}

interface Callback<T> {
    (error: Error, titles: T): void;
}

export { Book, LibMgrCallback, Callback, ShelfItem, Magazine, DamageLogger as Logger, Person, Author, Librarian };
