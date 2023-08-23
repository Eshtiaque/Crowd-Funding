

const SharedBanner = (props) => {
    const { title, titleHead, titleDes, background } = props
    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${background})` }}>
                <div className="max-w-7xl mx-auto py-7 md:py-[60px] ps-6">
                    <h3 className="text-[#F99F24] text-xl font-semibold mt-10">{title}</h3>
                    <h3 className="text-white text-3xl font-bold mt-4">{titleHead}</h3>
                    <p className="text-white mt-4">{titleDes}</p>
                </div>
            </div>
        </div>
    );
};

export default SharedBanner;
