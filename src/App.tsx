import { Toaster } from "react-hot-toast";
import { Header } from "./components";
import { HomePage, AboutPage, ProjectPage, ContactPage } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Toaster />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
};

export default App;
