import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DummyData } from "../Data/DummyData";

//bootstrap
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//import img
import logo from "../image/logo.png";

const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar__component">
      {/* navbar mobile */}
      <div className="navbar__mobile"></div>
      {/* navbar mobile */}

      {/* naavbar pc */}
      <div className="navbar__pc">
        <div className="navbar__logo">
          <Image src={logo} fluid />
        </div>
        <div className="navbar__links">
          {DummyData.navbarLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </div>

        <div className="navbar__user">
          <button className="button__navbar" onClick={handleShow}>
            {DummyData.navLogButton.title}
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1 className="text-center">Log in</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* naavbar pc */}
    </div>
  );
};

export default Navbar;
