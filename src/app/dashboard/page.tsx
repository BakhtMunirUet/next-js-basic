"use client";

import { useEffect, useState } from "react";
import { getPostData } from "../api/post";
import { Post } from "../models/posts";

export default function DashboardPage() {

    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        // Redirect to login if not authenticated
        async function loadPosts() {
            const response = await getPostData();
            setPosts(response);
        }

        loadPosts();

    }, [])


    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}



