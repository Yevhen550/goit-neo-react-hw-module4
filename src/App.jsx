import { useEffect, useState } from "react";
import fetchPhotoCard from "./API/unsplashApi";
import "./App.css";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      async(fetchPhotoCard(query));

      const res = await();
    } catch (error) {
      console.log(error);
    }
  }, [query, page]);

  return (
    <>
      <Container>
        <SearchBar />
        {/* <ImageGallery /> */}
        {/* {loading && <Loader />} */}
        {/* <LoadMoreBtn /> */}
      </Container>
    </>
  );
}

export default App;
