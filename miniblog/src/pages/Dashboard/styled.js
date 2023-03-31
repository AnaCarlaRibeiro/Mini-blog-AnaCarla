import styled from "styled-components"

export const DivDashboard=styled.div`
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
h2{
    font-size: 2.2em;
    margin-bottom: .5em;
}
p{
    color: #aaa;
    margin-bottom: 1em;
}
.noposts{
    text-align: center;
    p{
      margin-bottom: 1.5em;
    }
    a{
      padding: 10px 25px;
    }
  }
.post_header{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border-bottom: 2px solid #ccc; //borda do em baixo no span
    width: 80%;
    padding: 10px;
}
.post_row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid  #eee;
    width: 80%;
    padding: 10px;
   
p{
    color:black;

}
button, a { 
    margin: 5px;
    height: 30px;
    width: 100px;
    font-size: 0.7em;
}



}

.btn-danger:hover{
  background-color: red;
}

`