import { useState, useEffect } from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const lastShownDate = localStorage.getItem("modalLastShownDate");
    const today = new Date().toDateString();

    if (lastShownDate !== today) {
      setIsModalVisible(true);
      localStorage.setItem("modalLastShownDate", today);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header />
      <Steps />
      <Footer />
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
