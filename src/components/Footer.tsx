import { Github, Linkedin } from "lucide-react";
import Container from "./ui/Container";

const Footer = () => {
  return (
    <footer className="border-t py-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex flex-col items-center justify-center gap-2">
          <p className="font-thin">Desenvolvido por Matheus Ferreira </p>
          <div className="flex gap-2">
            <a
              className="hover:text-primary transition-colors duration-200"
              href="https://github.com/matheus-ferreira1"
              target="_blank"
            >
              <Github strokeWidth={1.25} />
            </a>
            <a
              className="hover:text-primary transition-colors duration-200"
              href="https://www.linkedin.com/in/matheus-ferreira33/"
              target="_blank"
            >
              <Linkedin strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
