import React, { useEffect, useState } from "react";
import myContext from "./myContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function MyState(props) {

    const [user, setUser] = useState([]);
    const [allUser, setAllUser] = useState([]);

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [region, setRegion] = useState('');


    const [allNotes, setAllNotes] = useState([]);
    const [searchNotes, setSearchNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false); // Added loading state
    const [comment, setComment] = useState([]);
    const [userscomment, setUsersComment] = useState([]);
    const [cId, setCId] = useState('');
    const [text, setText] = useState('');

    const [gangrape, setGangrape] = useState([]);
    const [targetkilling, setTargetkilling] = useState([]);
    const [murderrobbery, setMurderRobbery] = useState([]);
    const [murder, setMurder] = useState([]);
    const [bombblast, setBombblast] = useState([]);
    const [highway, setHighway] = useState([]);
    const [bank, setBank] = useState([]);
    const [carsnatch, setCarsnatch] = useState([]);

    const [north, setNorth] = useState([]);
    const [west, setWest] = useState([]);
    const [south, setSouth] = useState([]);
    const [east, setEast] = useState([]);
    const [central, setCentral] = useState([]);

    const [latestPost, setLatestPost] = useState([]);

    const addPostHandle = async (e) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('image', image);
        formData.append('category', category);
        formData.append('region', region);

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
                setCategory('');
                setRegion('');
                setImage(null);
                toast.success("Your report has been noted.We will be taking a closer look at your report and take strict action. In case of emergency please contact the police helpline 15 immediately.", {
                    position: "top-right",
                    autoClose: 3000,
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
            // console.log(notesData); // Check the response here
            setAllNotes(notesData);
            setSearchNotes(notesData);

            let rape = searchNotes.filter((data) => data.category === "GANG RAPE")
            setGangrape(rape);

            let murder = searchNotes.filter((data) => data.category === "MURDER")
            setMurder(murder);

            let targetkilling = searchNotes.filter((data) => data.category === "TARGETED KILLING")
            setTargetkilling(targetkilling);

            let murderrobbery = searchNotes.filter((data) => data.category === "MURDER DURING ROBBERY")
            setMurderRobbery(murderrobbery);

            let bombblast = searchNotes.filter((data) => data.category === "BOMB BLAST")
            setBombblast(bombblast);

            let high = searchNotes.filter((data) => data.category === "HIGH WAY ROBBERY")
            setHighway(high);

            let bankrob = searchNotes.filter((data) => data.category === "BANK ROBBERY")
            setBank(bankrob);

            let carsn = searchNotes.filter((data) => data.category === "CAR SNATCHING")
            setCarsnatch(carsn);

            let n = searchNotes.filter((data) => data.region === "North")
            setNorth(n);

            let e = searchNotes.filter((data) => data.region === "East")
            setEast(e);

            let s = searchNotes.filter((data) => data.region === "South")
            setSouth(s);

            let w = searchNotes.filter((data) => data.region === "West")
            setWest(w);

            let c = searchNotes.filter((data) => data.region === "Central")
            setCentral(c);

            let today = new Date().setHours(0, 0, 0, 0); // Get the start of today's date in milliseconds
            let lts = searchNotes
                .filter((data) => new Date(data.date).setHours(0, 0, 0, 0) === today) // Filter by today's date
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
                .slice(0, 2); // Take the first 2 elements
                setLatestPost(lts);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const userData = async () => {
        if(localStorage.getItem('token')){
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

    const showCommentModal = (id) => {
        if (document.getElementById('modal').classList.contains('hidden')) {
            document.getElementById('modal').classList.remove('hidden');
            getAllComments(id);
            setCId(id)
        } else {
            document.getElementById('modal').classList.add('hidden')
        }
    }

    const getAllComments = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/posts/getallcomments/${id}`, {
                method: `GET`,
                headers: {
                    'Content-Type': "application/json",
                }
            });
            const commentData = await res.json();
            console.log(commentData); // Check the response here
            setComment(commentData);
        } catch (error) {
            console.log(error);
        }
    }

    const AddComment = async (id) => {
        const res = await fetch(`http://localhost:5000/api/posts/${id}/comment`, {
            'method': "POST",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({ text })
        })
        const comm = await res.json();
        setText('');
        getAllComments(id);

    }

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/getalluser", {
                method: `GET`,
                headers: {
                    'Content-Type': "application/json", // Corrected typo here
                }
            });
            const userData = await res.json();
            // console.log(notesData); // Check the response here
            setAllUser(userData);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllUserComments = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/posts//getallusercomments`, {
                method: `GET`,
                headers: {
                    'Content-Type': "application/json",
                }
            });
            const commentData = await res.json();
            //console.log(commentData); // Check the response here
            setUsersComment(commentData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <myContext.Provider value={ { title, setTitle, desc, setDesc, image, setImage, allNotes, setAllNotes, searchNotes, setSearchNotes, search, setSearch, addPostHandle, getAllPosts, user, setUser, userData, likeHandler, disLikeHandler, showCommentModal, comment, getAllComments, cId, AddComment, text, setText, category, setCategory, region, setRegion, getAllUsers, allUser, setAllUser, gangrape, setGangrape, murder, setMurder, targetkilling, murderrobbery, bombblast, highway, carsnatch, bank, getAllUserComments, userscomment, north, east, west, south, central, latestPost } }>
            { props.children }
        </myContext.Provider>
    )
}

export default MyState;
