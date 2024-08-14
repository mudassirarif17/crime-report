import React, { useEffect, useState } from "react";
import myContext from "./myContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function MyState(props) {
    // const name = "Mudassir";
    
    const [user, setUser] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [allNotes, setAllNotes] = useState([]);
    const [searchNotes, setSearchNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false); // Added loading state
    // const [islike , setIslike] = useState(false);

    const addPostHandle = async (e) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('image', image);

        try {
            e.preventDefault();
            const res = await axios.post(`http://localhost:5000/api/posts/add_post`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'auth-token': localStorage.getItem("token")
                }
            });
            if (res.error) {
                toast.error(res.error, {
                    position: "top-right",
                    autoClose: 1000,  
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                setTitle('');
                setDesc('');
                setImage(null);
                toast.success("Report Added", {
                    position: "top-right",
                    autoClose: 1000,  
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.log("Error", error);
        }
    }

    const getAllPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/posts/getallposts", {
                method: `GET`,
                headers: {
                    'Content-Type': "application/json", // Corrected typo here
                    'auth-token': localStorage.getItem('token')
                }
            });
            const notesData = await res.json();
            console.log(notesData); // Check the response here
            setAllNotes(notesData);
            setSearchNotes(notesData);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const userData = async () => {
        const res = await fetch(`http://localhost:5000/api/auth/getuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
    
        let userData = await res.json();
        // console.log(userData);
        setUser(userData);
      }

      const likeHandler = async (id) => {
        const res = await fetch(`http://localhost:5000/api/posts/like/${id}`, {
            'method': "PUT",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            }
        })

        const postData = await res.json();
        getAllPosts();
      }

      const disLikeHandler = async (id) => {
        const res = await fetch(`http://localhost:5000/api/posts/dislike/${id}`, {
            'method': "PUT",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            }
        })

        const postData = await res.json();
        getAllPosts();
      }

    return (
        <myContext.Provider value={{title , setTitle , desc , setDesc , image , setImage , allNotes , setAllNotes , searchNotes , setSearchNotes , search , setSearch  , addPostHandle , getAllPosts , user , setUser , userData , likeHandler , disLikeHandler}}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState;