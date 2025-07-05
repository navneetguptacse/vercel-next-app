import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch("https://dummyjson.com/users");
      setUsers(await data.json());
    };
    fetchUsers();
  }, []);
  
  return (
    <div>
      <h2>Users</h2>
      {users &&
        users.users?.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
}
