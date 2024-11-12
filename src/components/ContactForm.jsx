function ContactForm() {
    return (
      <form className="bg-white shadow-lg p-4 rounded">
        <label className="block mb-2">Name:</label>
        <input type="text" className="w-full mb-4 p-2 border border-gray-300 rounded" />
        
        <label className="block mb-2">Email:</label>
        <input type="email" className="w-full mb-4 p-2 border border-gray-300 rounded" />
        
        <label className="block mb-2">Message:</label>
        <textarea className="w-full mb-4 p-2 border border-gray-300 rounded" rows="4"></textarea>
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    );
  }
  
  export default ContactForm;
  