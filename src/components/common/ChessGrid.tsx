import { motion } from "motion/react";

const ChessGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-3 grid-rows-3 w-64 h-64 border-4 border-black"
    >
      {/* Row 1 */}
      <div className="flex items-center justify-center bg-black text-white border border-gray-700">
        1
      </div>
      <div className="border border-gray-700 bg-white"></div>
      <div className="border border-gray-700 bg-black"></div>

      {/* Row 2 */}
      <div className="border border-gray-700 bg-white"></div>
      <div className="flex items-center justify-center bg-black text-white border border-gray-700">
        2
      </div>
      <div className="border border-gray-700 bg-white"></div>

      {/* Row 3 */}
      <div className="border border-gray-700 bg-black"></div>
      <div className="border border-gray-700 bg-white"></div>
      <div className="flex items-center justify-center bg-black text-white border border-gray-700">
        3
      </div>
    </motion.div>
  );
};

export default ChessGrid;
