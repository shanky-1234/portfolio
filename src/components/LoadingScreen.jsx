import { useEffect, useState } from 'react'

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [showSmile, setShowSmile] = useState(false)
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    const showSmileTimer = window.setTimeout(() => {
      setShowSmile(true)
    }, 900)

    const dotInterval = window.setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4)
    }, 400)

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false)
      // notify other components that loading finished
      try {
        window.__appLoaded = true
        window.dispatchEvent(new Event('loading:complete'))
      } catch (e) {
        // ignore in non-browser environments
      }
    }, 2200)

    return () => {
      window.clearTimeout(showSmileTimer)
      window.clearInterval(dotInterval)
      window.clearTimeout(hideTimer)
    }
  }, [])

  const dots = '.'.repeat(dotCount)

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-main text-white transition-transform duration-700 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-[220px] w-[220px] items-center justify-center">
          <div
            className={`absolute inset-0 h-full w-full -rotate-8 transition-all duration-700 ease-out ${
              showSmile ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <img src="/profile/profile.png" alt="profile" className="h-full w-full object-contain" />
          </div>

          <div
            className={`absolute inset-0 h-full w-full -rotate-8 transition-all duration-700 ease-out ${
              showSmile ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            <img src="/profile/profile-smile.png" alt="profile smile" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold tracking-[0.3em] sm:text-4xl">
            LOADING{dots}
          </h2>
          <p className="mt-3 text-sm tracking-[6px] sm:text-base">
            CRAFTING BEAUTIFUL <span className="font-bold">EXPERIENCES</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
