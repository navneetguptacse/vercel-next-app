import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserInfoPage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const id = router.query.id;
    if (!id) return; // wait until `id` is available

    async function getUserById(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUserInfo(await data.json());
    }

    getUserById(id);
  }, [router.query.id]);

  return (
    userInfo && (
      <div>
        <h2>{`This is ${userInfo.firstName}'s info page.`}</h2>
        <p>
          Username: {`@${userInfo.firstName}${userInfo.lastName}`.toLowerCase()}
        </p>
        <p>Email: {userInfo.email}</p>
      </div>
    )
  );
}
