import Link from "next/link";

export default function UserPage(props) {
  return (
    <div>
      <h2>Users (SSG)</h2>
      {props.data.users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div>{user.firstName}</div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};
