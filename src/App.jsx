import Quiz from "./componets/Quiz"
import Nav from "./componets/Nav"
import { Footer, Contest } from "./sections"

function App() {


  return (
   <main className="flex  flex-col relative m-auto min-h-[100vh]">
    <Nav/>
    <section>
      <Contest/>
    </section>
    <section>
      <Footer/>
    </section>
   </main>
)
}

export default App
