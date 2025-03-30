import { motion } from "framer-motion";


function MyProjects({ image }: { image: string }) {
  return (
<>    



<motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    className="max-w-4xl mx-auto text-center "
  >
    
    <div style={styles.mockupContainer}>
    {/* Camera Notch */}
    <div style={styles.cameraNotch}></div>

    {/* Screen Area */}
    <div style={styles.screen} >
      <img src={image} alt="iPhone Screen" style={styles.screenImage} />
    </div>
  </div>
  </motion.div>
  
  </>

  );
}
const styles = {
  mockupContainer: {
    width: "280px",
    height: "650px",
    borderRadius: "40px",
    border: "6px solid #2C2C2C",
    backgroundColor: "#000",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
    margin: "10px",
  },
  cameraNotch: {
    width: "100px",
    height: "25px",
    backgroundColor: "#1C1C1C",
    borderRadius: "20px",
    position: "absolute",
    top: "5px",
    left: "50%",
    transform: "translateX(-50%)",
    
    
  },
  screen: {
    width: "100%",
    height: "100%",
    paddingTop: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screenImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};


export default MyProjects;
