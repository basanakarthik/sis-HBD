"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake } from "lucide-react"

// Define animation variants for clarity
const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 },
  exit: { opacity: 0, rotateY: 90 },
}

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    // This main container stacks everything vertically.
    <div className="flex flex-col items-center p-4">

      {/* --- Top Title Section --- */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
        className="relative mb-4 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-2">Happy Birthday!</h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mt-2">To U Keerthi</h3>
      </motion.div>

      {/* --- Card Container --- */}
      {/* This container will now have its height respected by the elements below it. */}
      <motion.div
        className="w-full max-w-md mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        // This makes the container maintain its layout dimensions during animations
        style={{ perspective: 1000 }}
      >
        {/* AnimatePresence now swaps between the two card states */}
        <AnimatePresence mode="wait">
          {!isCardOpen ? (
            // --- The "Closed" Card State ---
            <motion.div
              key="closed"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-10 shadow-lg cursor-pointer"
              onClick={() => setIsCardOpen(true)}
            >
              <div className="text-center text-white">
                <p className="text-lg font-medium mb-4">Tap to open your card</p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Gift className="w-14 h-14 text-white mx-auto" />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // --- The "Open" Card State ---
            <motion.div
              key="open"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              // This is now a normal block element, NOT absolutely positioned.
              className="bg-white rounded-3xl p-6 shadow-xl shadow-rose-100 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsCardOpen(false)}
            >
              <div className="text-center">
                <p className="text-purple-700 mb-2">
                  Just wanted to remind you—I'm so incredibly grateful to have you in my life. Wishing you the happiest of birthdays!. My days are better, smiles are wider, and life is sweeter because of you.
                </p>
                <p className="text-pink-600 font-medium">I hope your birthday is full of love, magic, and everything that makes you smile 💖</p>
                
                {/* Image is now correctly spaced */}
                <img src="https://i.postimg.cc/bNdCnm2t/1631633644708.jpg" alt="Birthday Gift" className="mx-auto my-4 rounded-xl shadow-lg max-w-xs w-full" />
                
                <p className="text-sm text-gray-500">(Tap to close)</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- Final Text Section (This will no longer be overlapped) --- */}
      <motion.div
        className="w-full max-w-md mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-lg text-purple-700 mb-4">
          May every wish you make today come true. You deserve the world, and I’ll always be here to remind you of that.
        </p>
        <div className="flex justify-center items-center gap-2">
          <p className="text-pink-600 font-medium">Let’s always stay like this... together, forever 🫶</p>
        </div>
      </motion.div>
      
    </div>
  )
}