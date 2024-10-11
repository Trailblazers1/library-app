
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";





const List = () => {
    //1. declare state to store the todos
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get(`${BASE_URL}/books`);
        setBooks(response.data)
    };

    useEffect(() => {
        fetchBooks()

    }, []);

    return (
        <div>
          
            <h1 className="font-extrabold text-2xl flex justify-center mb-10 mt-10">LIST OF BOOKS</h1>
            <div className="  grid grid-row-5 grid-cols-4 gap-10 ">
                {books.map((book) => (
                    <div>
                        <div onClick={() => { }}>
                            {/* key = {book._id} */}

                            <Link to={`/books/${book._id}`}>
                           
                                <h1>{book?.author?.name}</h1>
                                <div className="w-[20vw]  mb-15"> <img src={book.cover} alt="" /></div>
                                <h1 className="font-extrabold" >{book.title}</h1>
                                {/* <h1> Year:{book.year}</h1>
                                <div className=""> <h1> Genre: {book.genre}</h1>
                                    <h1>Content:{book.content}</h1>
                                    <h1>Summary:{book.summary}</h1>
                                </div> */}
                            </Link>
                        </div >
                    </div>
                ))}


            </div>
         
        </div>
    )

}

export default List;