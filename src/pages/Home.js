// import React from "react";

// const Home = () => {
//     return {
       
//     };
// };


import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Jayant<font color="yellow">Parashar</font>
      </motion.div>
      <motion.div
        class="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <font>Frontend</font> Developer and <font>Graphic</font> Designer based
        in India
      </motion.div>
    </div>
  );
};

export default Home;