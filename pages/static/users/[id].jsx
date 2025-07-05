export default function UserPage(props) {
  console.log(props.data);

  return (
    <div>
      <h2>{`${props?.data?.firstName}'s profile page.`}</h2>
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  const allUsersIds = data.users.map((user) => user.id);
  console.log(allUsersIds);

  return {
    paths: allUsersIds.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: {
      data,
    },
  };
};
