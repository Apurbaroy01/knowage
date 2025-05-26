
import { IoBookmark } from "react-icons/io5";
const Blog = ({blog,handler,handelReadingTime}) => {
    const{title,cover,author,img,date,reading_time,hashtag}=blog
    return (
        <div>
            <img src={cover} alt="" />
            <div className="flex justify-between items-center p-3">
                <div className="flex gap-5 ">
                    <img className="w-15" src={img} alt="" />
                    <div >
                        <h3>{author}</h3>
                        <p>{date}</p>
                    </div>
                    
                </div>
                <div className="flex ml-2">
                    <p>{reading_time}</p>
                    <button onClick={() => handler(blog)}><IoBookmark /></button>
                </div>

            </div>
            <h2 className="text-3xl font-bold p-5">{title}</h2>
            <div className="p-3 text-red-500">
                <p>{hashtag}</p>
            </div>
            <div>
                <button onClick={()=> handelReadingTime(reading_time)}>Mark As Read</button>
            </div>
        </div>
    );
};

export default Blog;