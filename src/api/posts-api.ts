export function getPosts(params: Params): Promise<Posts> {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${params.start}&_limit=${params.limit}`
  )
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

interface Params {
  start: number;
  limit: number;
}

interface Post {
  id: number;
  title: string;
}

export type Posts = Array<Post>;
