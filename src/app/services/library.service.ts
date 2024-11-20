import { Injectable } from '@angular/core';
import { Book } from '../models/library.mode';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private bookList: Book[] = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      publicationYear: '2008',
      genre: 'Agile Software Craftsmanship',
      star: '★★★☆☆',
      image:
        'https://cdn.kobo.com/book-images/eb3afab7-f376-4bdd-8442-33f6d0b89432/353/569/90/False/clean-code-a-handbook-of-agile-software-craftsmanship-1.jpg',
    },
    {
      title: 'Clean Architecture',
      author: 'Robert Martin',
      publicationYear: '2012',
      genre: ' Guide to Software Structure and Design',
      star: '★★★★☆',
      image:
        'https://cdn.kobo.com/book-images/fe47ce5b-fdc5-4e59-bb6f-57b8093a69a2/353/569/90/False/clean-architecture-7.jpg',
    },
    {
      title: 'The Clean Coder',
      author: 'Robert C. Martin',
      publicationYear: '2011',
      genre: 'Code of Conduct for Professional Programmers',
      star: '★☆☆☆☆',
      image:
        'https://cdn.kobo.com/book-images/116094a9-99a0-4d79-be9f-8e24c2edb7f7/353/569/90/False/the-clean-coder-a-code-of-conduct-for-professional-programmers-1.jpg',
    },
    {
      title: 'Agile Principles, Patterns, and Practices in C#',
      author: ' Micah Martin, Robert C. Martin',
      publicationYear: '2006.',
      genre: 'illustrating the fundamentals of Agile development and Agile design',
      star: '★★☆☆☆',
      image:
        'https://cdn.kobo.com/book-images/cdc48c0d-8629-4040-bf5e-90a8f7ca99fb/353/569/90/False/agile-principles-patterns-and-practices-in-c-1.jpg',
    },
    {
      title: 'Clean Agile',
      author: 'Robert Martin',
      publicationYear: '2019',
      genre: 'Back to Basics',
      star: '★★★☆☆',
      image:
        'https://cdn.kobo.com/book-images/12b617c0-b8fb-4ffa-8a25-573369a0e4df/353/569/90/False/clean-agile-3.jpg',
    },
    {
      title: 'Head First Design Patterns',
      author: 'Eric Freeman, Elisabeth Robson',
      publicationYear: '1951',
      genre: 'building extesible & maintanable object-oriented software',
      star: '☆☆☆☆☆',
      image:
        'https://cdn.kobo.com/book-images/46f43220-bb88-432a-bfd3-e4e55b8f78f1/353/569/90/False/head-first-design-patterns-1.jpg',
    },
    {
      title: 'Pragmatic Programmer',
      author: 'David Thomas, Andrew Hunt',
      publicationYear: '1999',
      genre: 'journey to mastery, 20th Anniversary Edition',
      star: '★☆☆☆☆',
      image:
        'https://cdn.kobo.com/book-images/997041ab-7268-4a62-8ab0-f268a996f8ff/353/569/90/False/pragmatic-programmer-the-3.jpg',
    },
    {
      title: 'Test Driven Development',
      author: 'Aldous Huxley',
      publicationYear: 'Kent Beck',
      genre: 'Example',
      star: '★★☆☆☆',
      image:
        'https://cdn.kobo.com/book-images/8c64c57d-cd6d-4e27-8b0d-89bda93c6408/353/569/90/False/test-driven-development-8.jpg',
    },
    {
      title: 'Extreme Programming Explained',
      author: 'Kent Beck, Cynthia Andres',
      publicationYear: '1996',
      genre: 'Embrace Change',
      star: '★★★★★',
      image:
        'https://cdn.kobo.com/book-images/32dd6a29-b4aa-4ab0-baf7-a3000bb64fb3/353/569/90/False/extreme-programming-explained.jpg',
    },
    {
      title: 'Fundamentals of Software Architecture',
      author: 'Mark Richards, Neal Ford',
      publicationYear: '2020',
      genre: 'Engineering Approach',
      star: '★★★★☆',
      image:
        'https://cdn.kobo.com/book-images/eff38e39-a565-41aa-b50a-cccc7b227634/353/569/90/False/fundamentals-of-software-architecture.jpg',
    },
  ];

  getBookList() {
    return this.bookList;
  }
}
