

const BookMark = ({bookMarks}) => {
    const{title}=bookMarks
    console.log(title)
    return ( 
        <div className="border-2 m-4 rounded-2xl p-4 ">
            <h2 className="text-3xl font-bold"> Title: {title}</h2>
        </div>
    );
};

export default BookMark;