import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/fotter/Footer";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/hookAuthentication";
import  CreatePost  from "./pages/CreatePost/CreatePoste"
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Search } from "./pages/Search/Search";
import { Post } from "./pages/Post/Post";
import EditPost from "./pages/EditPost /EditPoste";


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined; // era pra ser undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })

  },[auth])


  if(loadingUser){
return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />


              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={!user ? <Register /> : <Navigate to = '/'/>} />

              <Route path="/posts/edit/:id" element={user ? <EditPost /> : <Navigate to = '/login'/>} />

              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to = '/login'/>} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to = '/login'/>} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
