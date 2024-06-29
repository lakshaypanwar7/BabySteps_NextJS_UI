import { useState, useEffect } from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("modalLastShown");
    const now = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown, 10) > twentyFourHours) {
      setIsModalVisible(true);
      localStorage.setItem("modalLastShown", now.toString());
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
