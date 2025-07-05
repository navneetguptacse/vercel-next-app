import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserInfoPage() {
  const router = useRouter();
  const { id } = router.query;
  // const [userInfo, setUserInfo] = useState();

  const { data, error, isLoading } = useSWR(
    id ? `https://dummyjson.com/users/${id}` : null,
    fetcher
  );

  // useEffect(() => {
  //   const id = router.query.id;
  //   if (!id) return; // wait until `id` is available

  //   async function getUserById(id) {
  //     const data = await fetch(`https://dummyjson.com/users/${id}`);
  //     setUserInfo(await data.json());
  //   }

  //   getUserById(id);
  // }, [router.query.id]);

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    data && (
      <div>
        <h2>{`This is ${data.firstName}'s info page.`}</h2>
        <p>Username: {`@${data.firstName}${data.lastName}`.toLowerCase()}</p>
        <p>Email: {data.email}</p>
      </div>
    )
  );
}
