"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const photos = [
  "/images/ghibli 1.png",
  "/images/ghibli 2.png",
  "/images/ghibli 3.png",
  "/images/ghibli 4.jpg",
]

export default function PhotoBookScreen({ onNext }) {
  const [index, setIndex] = useState(0)

  const nextPhoto = () => {
    if (index < photos.length - 1) {
      setIndex((prev) => prev + 1)
    } else {
      onNext()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Our Memories 📸</h1>

      <div className="w-full h-[80vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={photos[index]}
            src={photos[index]}
            alt={`Memory ${index + 1}`}
            className="max-h-full max-w-full object-contain rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={nextPhoto}
        className="mt-8 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
      >
        {index === photos.length - 1 ? "See Final Message 💌" : "Next Photo →"}
      </button>
    </div>
  )
}
   