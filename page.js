// app/users/[id]/page.js

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store", // ensures fresh data
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch user ${id}`);
  }

  return res.json();
}

export default async function UserPage({ params }) {
  // unwrap params since it's a Promise
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id) {
    return <p>User ID missing</p>;
  }

  const user = await getUser(id);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
}
