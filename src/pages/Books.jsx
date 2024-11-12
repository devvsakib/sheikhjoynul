import React from "react";

const Books = () => {
    const books = [
        {
            id: 1,
            title: "The Path to Spiritual Success",
            description: "Guidance on achieving spiritual growth and faith.",
            coverImage: "/path/to/cover1.jpg",
            purchaseLink: "https://example.com/book1"
        },
        {
            id: 2,
            title: "Understanding Tawheed",
            description: "A deep dive into the concept of Tawheed in Islam.",
            coverImage: "/path/to/cover2.jpg",
            purchaseLink: "https://example.com/book2"
        },
        // Add more book details here
    ];

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Books by Dr. Joynul Abadin Noman</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {books.map(book => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
