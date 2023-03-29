import { Link } from "react-router-dom";
import { AboutStyled } from "./style";

export const About = () => {
  return (
    <AboutStyled >
      <h2>
        Sobre o Mini <span>Blog</span>{" "}
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase no Back-end
      </p>
      <Link to= "/posts/create" className="btn"  >
        Criar post
      </Link>
    </AboutStyled>
  );
};
