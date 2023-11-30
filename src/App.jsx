import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Footer />
    </>
  );
}
export default App;
