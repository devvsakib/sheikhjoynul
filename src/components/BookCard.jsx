import { images } from "../config/images.js";
import PrimaryButton from "./PrimaryButton.jsx";

function BookCard({ title, description, id, purchaseLink }) {
  return (
    <div className="shadow-tertiary/50 shadow-2xl rounded-lg overflow-hidden border-2 border-x-tertiary border-y-tertiary/50">
      <img src={images[id]} alt={title} className="w-full h-[300px] object-cover object-top" />
      <div className="p-4 bg-tertiary/30 backdrop-blur-sm grid gap-4">
        <h3 className="text-xl font-semibold text-tertiary font-nakkhatraFont">{title}</h3>
        {/* <p className="mt-2 text-xs">{description}</p> */}
        <PrimaryButton text="Buy Now"  className={"rounded-e-full "} />
      </div>
    </div>
  );
}

export default BookCard;
