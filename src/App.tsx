import { Header} from "./components";
import { HomePage, AboutPage, ProjectPage, ContactPage } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
};

export default App;
