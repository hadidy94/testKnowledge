import { useQuery } from 'react-query'
import ApiClient from "../http-common";


const fetchPosts = async (limit = 10) => {

  const result =  await ApiClient.get("/posts");
  return result.data;
  // const parsed = await axios.get('https://jsonplaceholder.typicode.com/posts')
  // return parsed.json();
}

const usePosts = (limit) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
  })
}

export { usePosts, fetchPosts }