
const MainButton = (props) => {
    const { text } = props
    return (
        <div>
            <button className='text-base text-white bg-gradient-to-br from-blue-600 to-purple-600 border-tl-15 border-tr-15 rounded-3xl px-4 py-1 hover:from-purple-600 hover:to-blue-600'>{text}</button>
        </div>
    );
};

export default MainButton;