import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  // console.log(router);

  const { query, pathname } = router;

  return (
    <div>
      <h2>This is {query.username}'s page.</h2>
      <p>Path: {pathname}</p>
    </div>
  );
}
