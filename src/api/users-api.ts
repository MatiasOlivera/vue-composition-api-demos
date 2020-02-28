export function getUsers(): Promise<Users> {
  return fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5")
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

interface User {
  id: number;
  name: string;
}

export type Users = Array<User>;
