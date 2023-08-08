const token = localStorage.getItem("token");

const Blog = () => {
  return (
    <div>
      <p>{token}</p>
    </div>
  );
};
export default Blog;
