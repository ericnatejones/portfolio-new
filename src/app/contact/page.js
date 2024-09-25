
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Linkedin, Github, Twitter, Mail, Facebook, Youtube } from 'lucide-react'

const socialPlatforms = [
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/', urlEnd: '' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/', urlEnd: '' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/', urlEnd: '' },
  { name: 'X (Twitter)', icon: Twitter, url: 'https://x.com/', urlEnd: '' },
  { name: 'Gmail', icon: Mail, url: '', urlEnd: '@gmail.com' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/', urlEnd: '' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/', urlEnd: '' },
]

export default function DynamicSocialHandles() {
  const [activeHandle, setActiveHandle] = useState('')
  const handle = 'ericnatejones'

  return (
    <div className="bg-gray-500 flex items-center justify-center p-4">
      <div className="rounded-lg shadow-xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        
        <p className='mb-8'> Phone:<a href="tel:+18019970379">801-997-0379</a></p>  
        
        <div className="mb-8 relative">
          <div className="flex items-center justify-center">
            <AnimatePresence>
              {activeHandle && (
                <motion.span
                key="prefix"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-xl text-gray-900 mr-2"
                >
                  {socialPlatforms.find(p => p.name === activeHandle)?.url}
                </motion.span>
              )}
            </AnimatePresence>
            <motion.div
              className="text-3xl font-bold bg-gray-800 text-white py-3 px-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {handle}
            </motion.div>
            <AnimatePresence>
              {activeHandle && (
                  <motion.span
                  key="suffix"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-xl text-gray-900 ml-2"
                  >
                  {socialPlatforms.find(p => p.name === activeHandle)?.urlEnd}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {socialPlatforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={`${platform.url}${handle}${platform.urlEnd}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-300 ${
                activeHandle === platform.name ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setActiveHandle(platform.name)}
              onMouseLeave={() => setActiveHandle('')}
              aria-label={`Visit ${platform.name} profile`}
            >
              <platform.icon className="w-8 h-8 mb-2" />
              <span className="text-xs text-center">{platform.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Feel free to reach out through any of these platforms!</p>
        </div>
      </div>
    </div>
  )
}