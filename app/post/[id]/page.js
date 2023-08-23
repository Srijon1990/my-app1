async function postData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new error("Data fatching fails for one posts");
  }
  return res.json();
}

const Page = async ({ params }) => {
  const id = params.id;
  const post = await postData(id);
  return (
    <div className="w-[90%] m-auto">
      <h1 className="font-bold mb-5">POST Page .........</h1>
      <h1 className="font-bold mb-5">
        <span className="font-bold">Title</span> : {post.title}
      </h1>
      <p>
        <span className="font-bold">Description</span> : {post.body}
      </p>
    </div>
  );
};

export default Page;
