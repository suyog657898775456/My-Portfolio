import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5 border-top border-secondary">
      <Container className="text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} <strong>Suyog Dhepe</strong> | All Rights
          Reserved
        </p>
        <small className="text-muted">
          Built with ❤️ using React & Bootstrap
        </small>
      </Container>
    </footer>
  );
}
