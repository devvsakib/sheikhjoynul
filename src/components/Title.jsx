const Title = ({heading, description}) => {
  return <div className='mb-5 md:mb-10'>
  <h2 className="text-3xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-primary via-tertiary to-tertiary brightness-150">{heading}</h2>
  <p className='text-center'>{description}</p>
</div>;
};

export default Title;
