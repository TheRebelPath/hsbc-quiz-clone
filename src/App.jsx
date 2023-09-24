import Quiz from "./componets/Quiz"
import Nav from "./componets/Nav"
import { Footer, Contest } from "./sections"

function App() {


  return (
   <main>
    <Nav/>
    <section className="m-auto  max-w-[700px] min-h-[100vh]">
      <Contest/>
    </section>
    <section>
      <Footer/>
    </section>
   </main>
)
}

export default App
