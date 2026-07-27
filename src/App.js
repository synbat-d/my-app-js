import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'АА', body: 'ббб'},
            {id: 2, title: 'ГГ', body: 'ааа'},
            {id: 3, title: 'ББ', body: 'яяя'},
        ]
    )

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        console.log('Отработала Функция Сорртед Постс');
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return posts;
        }
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        if (filter.query) {
            return sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(filter.query.toLowerCase()) || post.body.toLowerCase().includes(filter.query.toLowerCase())
            );
        }
        // Если поиск пустой — возвращаем весь отсортированный массив
        return sortedPosts;
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <hr style={{margin: '15px 0'}}/>
            {sortedAndSearchedPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JavaScript"}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
            }

        </div>
    );
}

export default App;
