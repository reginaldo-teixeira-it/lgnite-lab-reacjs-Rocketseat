import { gql,useQuery } from "@apollo/client"
import { useEffect } from "react";
import { Header } from "./components/Header";
import { client } from "./lib/apollo";
import lessons_qgl from "./models/gqlQuery/lessons";
import { Event } from "./pages/Event";


interface Lesson{
  id:string;
  title:string;
}
function App() {
  const { data } = useQuery<{lessons:Lesson[]}>(lessons_qgl)
  console.log(data)
  return (

   <Event/>

    /// Sessão AULA 01 
    //    <>
    //    <h1 className="font-bold text-violet-500 text-centered">Hello Vite + React!</h1>
    //    <div className="container">
    //     <table className="table table-bordered table-striped table-hover">
    //       <thead>
    //         <tr>
    //           <th>Id</th>
    //           <th>Title</th>
    //           </tr>
    //         </thead>
    //         <tbody>              
    //         {data?.lessons.map(lesson => {
    //             return (
    //               <tr key={lesson.id}>
    //               <td>{lesson.id}</td>
    //               <td>{lesson.title}</td>
    //               </tr>
    //             )
    //           })} 
    //         </tbody>
    //     </table>
    //   </div>
    // </>

  )
}

export default App
