import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const videoUrls = [
    'https://player.vimeo.com/video/932362750?background=1&autoplay=1&loop=1&muted=1',
    'https://player.vimeo.com/video/922797195?background=1&autoplay=1&loop=1&muted=1',
    'https://player.vimeo.com/video/922797412?background=1&autoplay=1&loop=1&muted=1',
]

// Generate 15 boxes with random properties - increased spacing
const generateBoxes = () => {
    const boxes = []
    const sizes = [80, 120, 160] // Smaller sizes for better separation
    const colors = ['#ec4899', '#06b6d4', '#eab308'] // magenta, cyan, yellow

    for (let i = 0; i < 15; i++) {
        const size = sizes[Math.floor(Math.random() * sizes.length)]
        const color = colors[Math.floor(Math.random() * colors.length)]
        const x = (Math.random() - 0.5) * 1200 // -400 to 400 (increased spacing)
        const y = (Math.random() - 0.5) * 1200 // -400 to 400 (increased spacing)
        const z = (Math.random() - 0.5) * 600 // -200 to 200 (increased spacing)

        boxes.push({
            id: i,
            size,
            color,
            position: { x, y, z },
            // Random animation delays and durations
            animationDelay: Math.random() * 2,
            animationDuration: 3 + Math.random() * 4,
            // Random rotation axes
            rotateX: Math.random() * 360,
            rotateY: Math.random() * 360,
            rotateZ: Math.random() * 360,
        })
    }
    return boxes
}

const boxes = generateBoxes()

// Lazy-loaded video component
const LazyVideo = ({ src, title, className, style }: { src: string; title: string; className: string; style: React.CSSProperties }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById(`video-${title.replace(/\s+/g, '-')}`)
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [title])

    return (
        <div
            id={`video-${title.replace(/\s+/g, '-')}`}
            className={className}
            style={style}
        >
            {!isLoaded && (
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin opacity-50"></div>
                </div>
            )}
            {isInView && (
                <iframe
                    className={`h-full w-full pointer-events-none transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src={src}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    )
}

export default function CinematicCluster() {
    return (
        <section className="relative overflow-hidden py-20" style={{
            background: 'linear-gradient(to bottom right, #fbcfe8, #e9d5ff, #bfdbfe)',
            backgroundImage: 'url(/assets/Fiamma-Photoroom.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Overlay para mejor visibilidad de los videos */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center relative z-10">
                <div className="mb-10 max-w-3xl text-slate-900">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-700">Cinematic Experience</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Fragmented Tech-Structure</h2>
                    <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                        A complex cluster of interconnected video screens floating in 3D space, creating a high-tech sculpture of moving images.
                    </p>
                </div>

                <div className="relative flex items-center justify-center rounded-[2.5rem] border border-white/40 bg-white/10 px-6 py-6 shadow-2xl shadow-slate-900/10 backdrop-blur-lg">
                    <div className="relative h-[min(90vw,500px)] w-[min(90vw,500px)] scale-[0.8] sm:scale-90 md:scale-100" style={{ perspective: '1400px' }}>
                        <motion.div
                            className="absolute inset-0"
                            style={{ transformStyle: 'preserve-3d' }}
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
                        >
                            {boxes.map((box) => (
                                <motion.div
                                    key={box.id}
                                    className="absolute"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transform: `translate3d(${box.position.x}px, ${box.position.y}px, ${box.position.z}px)`,
                                        transformStyle: 'preserve-3d',
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        rotateX: [box.rotateX, box.rotateX + 10
                                            , box.rotateX],
                                        rotateY: [box.rotateY, box.rotateY + 15, box.rotateY],
                                        rotateZ: [box.rotateZ, box.rotateZ + 5, box.rotateZ],
                                    }}
                                    transition={{
                                        duration: box.animationDuration,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                        delay: box.animationDelay,
                                    }}
                                >
                                    {/* Front face */}
                                    <LazyVideo
                                        src={videoUrls[box.id % videoUrls.length]}
                                        title={`Video screen ${box.id + 1}`}
                                        className="absolute overflow-hidden rounded-lg bg-slate-950"
                                        style={{
                                            width: `${box.size}px`,
                                            height: `${box.size}px`,
                                            transform: `translateZ(${box.size / 2}px)`,
                                            boxShadow: `0 0 20px ${box.color}, 0 0 40px ${box.color}40, inset 0 0 20px rgba(255,255,255,0.1)`,
                                            border: `1px solid ${box.color}60`,
                                        }}
                                    />

                                    {/* Back face */}
                                    <LazyVideo
                                        src={videoUrls[(box.id + 1) % videoUrls.length]}
                                        title={`Video screen ${box.id + 1} back`}
                                        className="absolute overflow-hidden rounded-lg bg-slate-950"
                                        style={{
                                            width: `${box.size}px`,
                                            height: `${box.size}px`,
                                            transform: `rotateY(180deg) translateZ(${box.size / 2}px)`,
                                            boxShadow: `0 0 20px ${box.color}, 0 0 40px ${box.color}40, inset 0 0 20px rgba(255,255,255,0.1)`,
                                            border: `1px solid ${box.color}60`,
                                        }}
                                    />

                                    {/* Optional: Add more faces if needed */}
                                    {box.size >= 150 && (
                                        <>
                                            {/* Right face */}
                                            <LazyVideo
                                                src={videoUrls[(box.id + 2) % videoUrls.length]}
                                                title={`Video screen ${box.id + 1} right`}
                                                className="absolute overflow-hidden rounded-lg bg-slate-950"
                                                style={{
                                                    width: `${box.size}px`,
                                                    height: `${box.size}px`,
                                                    transform: `rotateY(90deg) translateZ(${box.size / 2}px)`,
                                                    boxShadow: `0 0 20px ${box.color}, 0 0 40px ${box.color}40, inset 0 0 20px rgba(255,255,255,0.1)`,
                                                    border: `1px solid ${box.color}60`,
                                                }}
                                            />

                                            {/* Left face */}
                                            <LazyVideo
                                                src={videoUrls[box.id % videoUrls.length]}
                                                title={`Video screen ${box.id + 1} left`}
                                                className="absolute overflow-hidden rounded-lg bg-slate-950"
                                                style={{
                                                    width: `${box.size}px`,
                                                    height: `${box.size}px`,
                                                    transform: `rotateY(-90deg) translateZ(${box.size / 2}px)`,
                                                    boxShadow: `0 0 20px ${box.color}, 0 0 40px ${box.color}40, inset 0 0 20px rgba(255,255,255,0.1)`,
                                                    border: `1px solid ${box.color}60`,
                                                }}
                                            />
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}