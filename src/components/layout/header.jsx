// Importando react
import React from "react";

// Importando components
import { Link } from "react-router-dom";
import Modal from "react-modal";
import About from "@/components/layout/components/about";
import Navigation from "@/components/layout/components/navigation";
import TopSKill from "@/components/layout/components/topSkill";

// Recursos de acessibilidade do Modal
Modal.setAppElement("#root");

export default function Header() {
  // Hook que demonstra se a modal está aberta ou não
  let [modalIsOpen, setIsOpen] = React.useState(false);

  // Função que abre o modal
  function openModal() {
    setIsOpen(true);
  }
  // Função que fechar o modal
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <Link to="/">
        <h3>RafaelNovais</h3>
      </Link>

      <button onClick={openModal} className="modal-btn">
        <span /> <span /> <span />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal De Exemplo"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            border: "1px solid black",
            background: "rgba(0, 0 ,0, 1)",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
      >
        <button onClick={closeModal} className="modal-btn-close">
          <span/> <span/>
        </button>
        <div>
          <Navigation />
          <TopSKill />
          <About />
        </div>
      </Modal>
    </header>
  );
}
