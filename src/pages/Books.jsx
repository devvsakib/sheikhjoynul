import React from "react";
import BookCard from "../components/BookCard";
import Title from "../components/Title";

export const books = [
    {
        id: "narider_proti_upodesh",
        title: "নারীদের প্রতি বিশেষ উপদেশ",
        description: "নারীদের জন্য উপদেশ এবং দ্বীনের উপর চলার নির্দেশনা।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "jubokder_proti",
        title: "যুবকদের জন্য সালাফদের নসিহা",
        description: "যুবকদের জন্য সালাফদের গুরুত্বপূর্ণ উপদেশ।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "esho_prosnottore_deen_shikhi",
        title: "এসো প্রশ্নোত্তরে দ্বীন শিখি",
        description: "দ্বীন সম্পর্কে সাধারণ প্রশ্নের উত্তর।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "ashurar_fofilot",
        title: "আশুরার ফযীলত",
        description: "আশুরার দিনের ফযীলত এবং তাৎপর্য।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "attoshuddhi_dosh",
        title: "আত্মশুদ্ধির দশ উপায়",
        description: "আত্মশুদ্ধির জন্য দশটি সহজ এবং কার্যকর উপায়।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "sot_sontan_protipalon",
        title: "সৎ সন্তান প্রতিপালনের ৪৮ টি প্রতিফলন",
        description: "সৎ সন্তান প্রতিপালনের উপকারিতা এবং নির্দেশনা।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "sot_sontan_gorte_hole",
        title: "সৎ সন্তান গড়তে হলে",
        description: "সৎ সন্তান গড়ার জন্য করণীয়।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "sohih_salat_dua",
        title: "সহীহ স্বলাত দু'আ-যিকর",
        description: "স্বলাতের সময় পড়ার জন্য সহীহ দু'আ এবং যিকর।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    },
    {
        id: "romjan_mas_ese_geche",
        title: "রমযান মাস এসে গেছে",
        description: "রমযানের ফযীলত এবং করণীয়।",
        purchaseLink: "https://www.facebook.com/wahidiyaislamialibrary"
    }
];
const Books = () => {


    return (
        <div className="max-w-5xl mx-auto p-4 mt-28">

            <Title
                heading="বইসমূহ"
                description="আমাদের প্রয়োজনীয় বইসমূহ এখানে পাওয়া যায়।"
                customHeadingClass={"py-2 pb-3"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {books.map(book => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
