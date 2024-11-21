const PrimaryButton = ({ text, link, target = "_blank", className }) => {
  return link ? <a
    href={link}
    target={target}
    className={`px-4 py-2 bg-gradient-to-t from-tertiary bg-clip-text text-transparent brightness-200 font-semibold hover:bg-tertiary transition-all duration-150 ease-linear border-tertiary/50 hover:border-tertiary border-2 rounded  w-fit hover:w-full fullWidthAnimation ${className}`}
  >{text}</a>
    : <button
      className={`px-4 py-2 bg-gradient-to-t from-tertiary bg-clip-text text-transparent brightness-200 font-semibold hover:bg-tertiary transition-all duration-200 ease-linear border-tertiary/50 hover:border-tertiary border-2 rounded w-1/2 hover:w-full overflow-hidden ${className}`}

    >{text}</button>
};

export default PrimaryButton;
