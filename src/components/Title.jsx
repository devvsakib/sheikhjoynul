const Title = ({ heading, description, customClass, customHeadingClass }) => {
  return <div className={'mb-5 md:mb-10 ' + customClass}>
    <h2 className={"text-3xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-primary via-tertiary to-tertiary brightness-150 " + customHeadingClass}>{heading}</h2>
    <p className='text-center'>{description}</p>
  </div>;
};

export default Title;
