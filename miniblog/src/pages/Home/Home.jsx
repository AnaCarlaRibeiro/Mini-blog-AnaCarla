import { useState } from "react";
import { DivHome } from "./styled";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { PostDetail } from "../../components/postDetail/PostDetail";



export const Home = () => {
  const [query, setquery] = useState("");
  const {documents:posts, loading}= useFetchDocuments("posts")
  
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`)
      
    }
  };

  return (
    <DivHome>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark"> Pesquisar</button>
      </form>
      <div>
        {loading && <p> Carregando... </p>}
       
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}

        {posts && posts.length === 0 && (
          <div className="noposts">
            <p> Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              {" "}
              Criar primeiro post{" "}
            </Link>
          </div>
        )}
      </div>
    </DivHome>
  );
};
