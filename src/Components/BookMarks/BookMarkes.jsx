
import BookMark from "../BookMark/BookMark";

const BookMarkes = ({bookMarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
           
            <div className="border-2 border-amber-300 rounded m-5 bg-slate-200">
                <div>
                    <h2>Reading Time: {readingTime}</h2>
                </div>

                <div className="p-4 border-2 border-pink-600 bg-white ">
                    <h2 className="text-3xl">Book Marked Blogs: {bookMarks.length}</h2>
                </div>
                {
                    bookMarks.map(bookMarks=> <BookMark bookMarks={bookMarks} readingTime={readingTime}></BookMark>)
                }
            </div>
        </div>
    );
};

export default BookMarkes;