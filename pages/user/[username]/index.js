import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => ({ user: { name: "navneet" }, loading: false }); // but most of the cases, it come from backend

export default function () {
  const router = useRouter();
  console.log(router);

  const { query, pathname } = router;
  const { user, loading } = useUser();

  useEffect(() => {
    if (loading || !query.username) return; // wait until username is available
    if (user?.name !== query.username) {
      router.replace("/");
    }
  }, [user, query]);

  if (loading || !query.username) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>This is {query.username}'s page.</h2>
      <p>Path: {pathname}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        {/* Way #1 --using `router.push(/path)`, --also create a history of visted route `/path` */}
        <button
          onClick={(e) => router.push(`/user/${query.username}/settings`)}
        >
          Settings 1
        </button>
        {/* Or, */}
        <button
          onClick={(e) =>
            router.push({
              pathname: "/user/[username]/settings",
              query: { username: query.username },
            })
          }
        >
          Settings 2
        </button>

        {/* Way #2 --using `router.replace(/path)`, --preventing from creating `/path` history on browser */}
        <button onClick={(e) => router.replace("/")}>Back to Home Page</button>
        <button onClick={(e) => router.reload()}>Reload</button>
      </div>
    </div>
  );
}
