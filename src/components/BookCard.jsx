function BookCard({ title, description, coverImage, purchaseLink }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          <a 
            href={purchaseLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 mt-4 inline-block"
          >
            Buy/Download
          </a>
        </div>
      </div>
    );
  }
  
  export default BookCard;
  