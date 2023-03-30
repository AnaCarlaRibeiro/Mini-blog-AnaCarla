import { Link } from "react-router-dom";
import { DivDetail } from "./styled";

export const PostDetail = ({ post }) => {
  return (
    <DivDetail>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p> {post.createdBy} </p>
      <div className="tags">
        {post.tags.map((tag) => (
          <p key={tag}>
            {" "}
            <span>#</span> {tag}{" "}
          </p>
        ))}
      </div>
      <Link to={`posts/${post.id}`} className="btn btn-outline" > Ler</Link>
    </DivDetail>
  );
};
