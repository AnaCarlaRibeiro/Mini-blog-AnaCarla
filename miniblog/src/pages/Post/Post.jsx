import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { DivContainer } from "./styled";

export const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <DivContainer>
      {loading && <p> Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.bory}</p>
          <h3>Este post trata sobre:</h3>
          <div className="tags">
          {post.tags.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}

          </div>
        </>
      )}
    </DivContainer>
  );
};
