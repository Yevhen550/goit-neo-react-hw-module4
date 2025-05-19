import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import "./App.css";
import fetchPhotoCard from "./API/unsplashApi";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImg = async () => {
      if (!query.trim()) return;

      try {
        setLoading(true);
        setLoadMore(false);
        const res = await fetchPhotoCard(query, page);
        setImages((prev) => [...prev, ...res.results]);
        setLoadMore(res.total_pages > page);
      } catch (err) {
        setError("Error loading images", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImg();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Enter a query...");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleClick = () => {
    setPage((page) => page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(null);
    setSelectedImage(null);
  };

  return (
    <Container>
      <Toaster />
      <SearchBar query={query} onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn onClick={handleClick} />}
      {modalIsOpen && selectedImage && (
        <ImageModal data={selectedImage} onClose={closeModal} />
      )}
    </Container>
  );
}

export default App;
