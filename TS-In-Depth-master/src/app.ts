import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { Librarian, Logger, Book, Magazine } from './interfaces';
import {
    createCustomer,
    getAllBooks,
    getBooksByCategory,
    getBooksByCategoryPromise,
    getProperty,
    LogCategorySearch,
    logSearchResults,
    printRefBook,
    purge,
} from './functions';
import type { Library } from './classes/library'; // works, if "import type" not works
import { BookProperties, BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ------------------------------------

// =========
// task 02.01
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));

// console.log(calcTotalPages());

// const o = {
//     f1: 1,
//     f2() {
//         return this.f1;
//     }
// };

// type newObject = {
//     f1: number;
//     f2: () => number;
// };

// =========
// task 03.01

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id2: number) =>  `${id2}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));

// =========
// task 03.02
// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'city');
// console.log(getBookTitlesByCategory());
// console.log(getBookByID(1));

// const myBooks = checkoutBooks('Vasya', ...[1, 2, 3, 4]);
// console.log(myBooks);

// // only rest not working ?
// t1(...[1, 'dsa', true] as [number, string, boolean]); // as required

// =========
// task 03.03
// getTitles(1, true);
// getTitles('true');

// console.log(getTitles('Lea Verou'));
// console.log(getTitles(false));
// console.log(getTitles(1, true));

// =========
// task 03.04
// console.log(bookTitleTransform('Typescript'));
// console.log(bookTitleTransform(123));

// =========
// task 04.01
// const myBook: Book = { // not exact book interface
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     // year: 2015,   // can comment out not required props
//     // copies: 3
// };

// printBook(myBook);
// myBook.markDamaged('missing book cover');

// =========
// task 04.02
// const logDamage: Logger = (p: string) => console.log(`Damaged: ${p}`);
// logDamage('missing book cover');

// =========
// task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 2,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     department: 'Classical Literature',
//     assistCustomer: (name: string) => console.log(name)
// };

// =========
// task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential Typescript'
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle()); // error
// console.log(offer.book.getTitle?.()); // error
// console.log(offer.book.authors?.[0]); // error

// =========
// task 04.05

// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn')); // error BookProperty

// =========
// task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Learn TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());
// ref.m1("dsa");

// =========
// task 05.02, 05.03, 06.03
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// const refBook = new RefBook(1, 'Learn TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);
// printRefBook(1); // not instance of refBook
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian); // not instance of refBook

// =========
// task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Vasya';
// favoriteLibrarian.assistCustomer('cus');
// console.log(favoriteLibrarian);
// favoriteLibrarian.prop no additional prop because of interface
// favLib: Person => email and name only

// =========
// task 05.05
// const pBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     email: 'email',
//     available: false,
//     category: Category.Angular,
//     name: 'Anna',
//     title: 'LEarn typescript and react'
// };
// console.log(pBook);

// =========
// task 06.05

// const flag = true;

// let module;
// if (flag) {
//     // module = await import('./classes');
//     import('./classes')
//         .then (mod => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         });

// }
// console.log(module);

// =========
// task 06.05
// const lib: Library = new Library(); // cannot be used like vlue because of export type
// const lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'Kyiv'
// };
// console.log(lib);

// =========
// task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// const books = purge(inventory); // if number then error, <Book> then ok
// console.log(books);
// const ns = purge([1, 2, 3, 4]);
// console.log(ns);

// =========
// task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// =========
// task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// =========
// task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// const result = getProperty(getAllBooks()[0], 'title'); // <Book, 'title'>
// console.log(result);

// =========
// task 07.04
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknown',
// };

// const book2: UpdatedBook = {
//     id: 1,
//     title: 'Learn TypeScript',
// };

// // const args: Parameters<CreateCustomerFunctionType> = ['Anna'];
// const args: Parameters<typeof createCustomer> = ['Anna'];
// createCustomer(...args);

// =========
// task 07.05

// =========
// task 08.01
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// UL.UniversityLibrarian['a'] = 1; // cannot add property a object not extensible
// UL.UniversityLibrarian.prototype['a'] = 1; // cannot add property a object not extensible

// =========
// task 08.02
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Boris';
// obj.assistCustomer('Anna');
// obj['printLibrarian']();

// =========
// task 08.03
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistFaculty = null; // works
// obj.teachCommunity = null; // cannot assign to readonly property

// =========
// task 08.04
// const refBook = new RefBook(1, 'dsa', 2021, 3);
// refBook.printItem();

// =========
// task 08.05
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'asd';
// obj.assistCustomer('dsa');

// =========
// task 08.06
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'asd';
// obj.assistCustomer('dsa');
// console.log(obj.name);

// // =========
// // task 08.07
// const refBook = new RefBook(1, 'dsa', 2021, 3);
// refBook.copies = -10; // 4.5 invalid, -10 invalid, 10 valid
// console.log(refBook);

// =========
// task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, LogCategorySearch);
// getBooksByCategory(Category.Software, LogCategorySearch);
// console.log('End');

// =========
// task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOfBooks => {
//         console.log(numberOfBooks);
//     })
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('complete'));
// console.log('End');

// =========
// task 09.02
console.log('Begin');
const p = logSearchResults(Category.JavaScript).catch(console.log);
console.log('End');
p.then(console.log).catch(console.log);
