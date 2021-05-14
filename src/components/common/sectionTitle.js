const SectionTitle = ({ children }) => {
  return (
    <>
      <div className="dark-text mb-8 sm:mb-16 md:mb-20">
        <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          {children}
        </h3>
      </div>
    </>
  );
}

export default SectionTitle;