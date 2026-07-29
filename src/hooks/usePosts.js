import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('Отработала Функция Сорртед Постс');
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts;
        }
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        if (query) {
            return sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())
            );
        }
        // Если поиск пустой — возвращаем весь отсортированный массив
        return sortedPosts;
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;

}