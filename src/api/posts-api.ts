export function getPosts(): Promise<Posts> {
  return fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

interface Post {
  id: number;
  title: string;
}

export type Posts = Array<Post>;
