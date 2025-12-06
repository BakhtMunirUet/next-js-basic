;
import { Post } from "../models/posts";
import { apiGet } from "./apiHelper";


export async function getPostData() {
  return await apiGet<Post[]>('https://jsonplaceholder.typicode.com/posts')
}

