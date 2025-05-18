import "./App.css";
import { useEffect, useState } from "react";
import fetchPhotoCard from "./API/unsplashApi";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchImg = async () => {
      if (!query.trim()) return;

      try {
        setLoading(true);
        const res = await fetchPhotoCard(query, page);
        setImages((prev) => [...prev, ...res.results]);
        setLoading(false);
        setLoadMore(res.total_pages > page);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImg();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container>
      <SearchBar query={query} onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn onClick={handleClick} />}
    </Container>
  );
}

export default App;
