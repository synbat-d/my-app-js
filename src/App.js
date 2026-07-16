import React, {useState} from 'react';
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Javascript 1', body: 'Description 1'},
            {id: 2, title: 'Javascript 2', body: 'Description 2'},
            {id: 3, title: 'Javascript 3', body: 'Description 3'},
        ]
    )
    return (
        <div className="App">
            {
                posts.map(post => <PostItem post={post}/>)
            }
        </div>
    );
}

export default App;
