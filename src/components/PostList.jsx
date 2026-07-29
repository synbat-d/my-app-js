import React from 'react';
import PostItem from "./PostItem";
import { motion, AnimatePresence } from "framer-motion";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <AnimatePresence>
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: -350 }}  /* Появление: слева */
                        animate={{ opacity: 1, x: 0 }}     /* Финальная позиция */
                        exit={{ opacity: 0, x: 350 }}      /* Удаление: вправо */
                        transition={{ duration: 0.5 }}     /* Длительность 500мс */
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default PostList;