import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ListOfStudents from './component/ListOfStudents';
import FavouriteStudents from './component/FavouriteStudents';
import StudentsContext from './component/StudentsContext' 

function App() {

  return (
    <div id='container'>
    <StudentsContext>
    <BrowserRouter>

    <h1 className='p-2 bg-pink-500 flex align-middle justify-center font-extrabold text-3xl border rounded-md shadow-xl' id='header'>Students Lists</h1>
    
    <nav id='navbar' className='h-16'>
      <Link to={"/"} className='underline font-semibold hover:text-white bg-pink-400 p-2 border rounded-md shadow-xl'>List of students</Link>
      <Link to={"/favourite"} className='underline font-semibold hover:text-white bg-pink-400 p-2 border rounded-md shadow-xl'>Favourite Students List</Link>
    </nav>

    <section id='listitems'> 
    <Routes>

      <Route path='/' element={<ListOfStudents />}></Route>
      <Route path='/favourite' element={<FavouriteStudents />}></Route>
    
    </Routes>
    </section>

    </BrowserRouter>
    </StudentsContext>
    </div>
  );
}

export default App;
