import Link from "next/link";
// import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserPage() {
  // const [users, setUsers] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const data = await fetch("https://dummyjson.com/users");
  //     setUsers(await data.json());
  //   };
  //   fetchUsers();
  // }, []);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h2>Users</h2>
      {data.users &&
        data.users?.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
}
