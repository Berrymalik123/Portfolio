import { motion } from "framer-motion";
export default function Home() {
  return (
    <>   <div className="flex max-sm:flex-col gap-10 items-center justify-center h-full">
      {/* <img
      className="w-64 h-64object-contain ..." 
        src="/src/1.jpg"
        alt="react logo"
       
      /> */}
      <div className="w-2/3">
      
 <div >
  <br /><br />
  <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
  <div className="text-white">
 📧Email: <a className="text-red-400" target="_blank"> berrymalik7210@gmail.com </a><br />
 
 
 
 💼 LinkedIn: <a href=" https://www.linkedin.com/in/ameer-hamza-5334192a0" target="_blank" className="text-blue-400"> 
 Ameer Hamza</a> 
 </div>
 <br /><br /> <br />
 <div  className="text-center">
 </div>
 <br />

        {/* Title Section */}
        <motion.h1
          className="text-5xl font-bold text-gray-300 mb-4 text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Hi there, I'm Ameer Hamza 👋
        </motion.h1>
        <p className="text-lg text-gray-50 text-center">
          🔥 AI Chatbot & Front-End Developer & UI/UX Designer
        </p>
        <p className="text-md text-gray-50 mt-3 text-center">
          Passionate about crafting intuitive user experiences and developing AI-driven chatbots.  
          Skilled in Dialogflow CX & ES, React.js, JavaScript, Node.js, Figma, and more.
        </p>

        </motion.div>
       

     <br />
     <div className="flex justify-center items-center "  >
     <img  src="https://readme-typing-svg.herokuapp.com/?lines=AI+Chatbot+and+Web+Developer;Front+End+Developer+/+UI+UX+Designer+&font=Roboto&size=26&duration=3500&pause=500&center=true&width=500&height=50&color=eab676" />
</div>
   </div>
   <br /><br /><br />
<p className="text-white">

 
 
 
 🔥 AI Chatbot & Front-End Developer & UI/UX Designer<br /><br />
 
 ✨ Favorite Tech: Dialogflow CX and ES, React JS, JavaScript, Node JS, Figma, Flowise, Pinecone, Adobe Xd,  Voice Flow,  
 <br /><br />
 
 📓 I’m currently Teaching UI/UX Designing Front-end Development...!
 <br /><br />
 
 <br />
  
 <h2 className="text-center font-bold text-white text-4xl">Tech Stack</h2>
 <br /><br />
 <table className="w-full max-w-4xl mx-auto border border-gray-300 rounded-lg shadow-lg bg-gray-400">
  <tbody>
    {/* First Row */}
    <tr className="border-b border-gray-300">
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="https://www.svgrepo.com/show/353648/dialogflow.svg" alt="Dialogflow" />
      </td>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="https://www.datanami.com/wp-content/uploads/2022/03/pinecone_logo.png" alt="Pinecone" />
      </td>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="/src/Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
      </td>
      <td className="p-4">
        <img className="w-24 hover:scale-110 transition-transform" src="/src/css3-logo-png_seeklogo-186678-removebg-preview.png" alt="CSS3" />
      </td>
      <td className="p-4">
        <img className="w-24 hover:scale-110 transition-transform" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="ReactJS" />
      </td>
    </tr>

    {/* Second Row */}
    <tr>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="HTML5" />
      </td>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="https://res.cloudinary.com/apideck/image/upload/v1683273293/icons/flowiseai.png" alt="Flowise AI" />
      </td>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="https://miro.medium.com/v2/resize:fit:600/0*2E9-J5WPFbVI_d32" alt="NodeJS" />
      </td>
      <td className="p-4">
        <img className="w-24 hover:scale-110 transition-transform" src="/src/download-removebg-preview.png" alt="Figma" />
      </td>
      <td className="p-4">
        <img className="w-24 hover:scale-110 transition-transform" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0G-WyJpBs1ucUkPZLYvJRI61ZWl4v1zjCcBXemTHzNkfWmOmoB75KOQn_eiBtLoyNhw&usqp=CAU" alt="Other Tech" />
      </td>
      
    </tr>
    
    <tr>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="/src/Adobe Xd.png" alt="Adobe Xd" />
      </td>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="/src/Photoshop.png" alt="Photoshop" />
      </td>
      <td className="p-4">
        <img className="w-20 hover:scale-110 transition-transform" src="/src/Tailwind css.png" alt="Tailwind CSS" />
      </td>
      </tr>
  </tbody>
</table>

 </p>
 
 <br />
 
 
      </div>
    </div>
    <div className="w-full shadow-lg ">
    <footer className="footer items-center px-6 py-4 text-white">
      <aside className="grid-flow-col items-center">
        <p>©2025 <a className="link link-hover font-medium" href="#">Ameer Hamza</a></p>
      </aside>
      <nav className="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white">
        
        <a className="link link-hover" href="#">Help</a>
        <a className="link link-hover" href="#">Contact</a>
        
      </nav>
    </footer>
  </div>
  </>
 
  );
}
