import MyProjects from "../components/MyProjects";
import { motion } from "framer-motion";


 

export default function Projects() {
  console.log("MyProjects component loaded!");
  const mockups = [
    
    "/ABC Player/Welcome page.png",
    "/ABC Player/Login page.png",
    "/ABC Player/Movies.png",
    "/ABC Player/Movies 2.png",
    "/ABC Player/Movies 3.png",
    
    "/Custom App/Splash Page.png",
    "/Custom App/Sign In.png",
    "/Custom App/Get Started.png",
    "/Custom App/Home.png",
    "/Custom App/View more.png",
    "/Custom App/Details.png",
    "/iPhone 16 - 1.png",
    
   
  ];
  return (
    <>
    <br />
    <div> <motion.h1
    className="text-5xl font-bold text-gray-300 mb-4 text-center"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    My App UI/UX Designs "📱"
  </motion.h1>
  <br />
  <br />
  <h3 className="text-white px-16">ABC App Prototype Link: <a  href="https://www.figma.com/proto/cFrYHxT1AZNUk0SZpqpj0H/ABC-Player?node-id=1-160&p=f&t=SUxYZcQPrl2gkkZQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A160" className="text-primary" target="_blank">ABC APP</a></h3>
  <br />
  <h3 className="text-white px-16">Custom App Prototype Link: <a href="https://www.figma.com/proto/AZYvTc0a4FQciwNYZ8YRXa/Custom-App?node-id=4-79&t=nC1Ktl3itBZyvEsI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=57%3A10" className="text-primary " target="_blank">hi APP</a></h3>
  <br />
  
  <h3 className="text-white px-16">Pinterest Login page Link: <a href="https://www.figma.com/proto/zUybyo5Qhp6tpFgiN9RH2R/Pinterest?t=fhss0szCg3obMZvv-1" className="text-primary" target="_blank">Login page</a></h3>
  <br />
  <br />
      <div className="glass rounded-box" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", minHeight: "100vh", padding: "20px" }}>
      {mockups.map((image, index) => (
        <MyProjects key={index} image={image} />
      ))}
    </div>  
      
      
    </div>
    <br /><br />
    <footer className="footer items-center px-6 py-4 text-white">
      <aside className="grid-flow-col items-center">
        <p>©2025 <a className="link link-hover font-medium" href="#">Ameer Hamza</a></p>
      </aside>
      <nav className="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white">
        
        <a className="link link-hover" href="#">Help</a>
        <a className="link link-hover" href="#">Contact</a>
        
      </nav>
    </footer>
    </>
  );
}
