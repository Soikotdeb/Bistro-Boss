
const getCurrentDate = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString(undefined, options);
  };
const SectionTitle = ({heading , subHeading}) => {
    
    const currentDate = getCurrentDate();
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-700 font-bold mb-2">-|-{currentDate}-|-</p>
        <p className="text-yellow-600 font-bold mb-2">--- {subHeading} ---</p>
        <h3 className="text-3xl uppercase font-bold border-y-4 py-4">{heading}</h3>
    </div>
    );
};

export default SectionTitle;