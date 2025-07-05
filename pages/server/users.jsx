import Link from "next/link";

export default function UserPage(props) {
  console.log("Props", props);
  return (
    <div>
      <h2>Users (SSR)</h2>
      {props.data.users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div>{user.firstName}</div>
        </Link>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // console.log("A task is ongoing on server.");
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};
