import "./App.css";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Container>
        <SearchBar />
        <ImageGallery />
        {/* <Loader /> */}
        {/* <LoadMoreBtn /> */}
      </Container>
    </>
  );
}

export default App;
