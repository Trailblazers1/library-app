
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";




const List = () => {
    //1. declare state to store the todos
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(`${BASE_URL}/books`);
            setBooks(response.data)


        };
        fetchBooks();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>LIST OF BOOKS</h1>
            <div className="  grid grid-row-5 grid-cols-3 gap-10">
                {books.map((book) => (
                    <div>
                        <div onClick={() => { }}>
                            {/* key = {book._id} */}

                            < img src={book.cover} alt="image" />
                            <h1 className="font-extrabold" >{book.title}</h1>
                            <h1>{book?.author?.name}</h1>
                            <h1>{book.cover}</h1>
                            <h1>{book.genre}</h1>
                            <h1>{book.content}</h1>
                            <h1>{book.summary}</h1>
                        </div >
                    </div>
                ))}


            </div>
            <Footer />
        </div>
    )

}

export default List;