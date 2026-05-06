import { useState } from 'react'

const videoUrls = [
    'https://player.vimeo.com/video/932362750?background=1&autoplay=1&loop=1&muted=1',
    'https://player.vimeo.com/video/922797195?background=1&autoplay=1&loop=1&muted=1',
    'https://player.vimeo.com/video/922797412?background=1&autoplay=1&loop=1&muted=1',
]

const videoScreens = [
    {
        id: 0,
        top: '8%',
        left: '14%',
        width: '20%',
        height: '18%',
        transform: 'rotateX(10deg) rotateY(-16deg) skewX(-4deg)',
        clipPath: 'polygon(0% 5%, 97% 0%, 100% 96%, 5% 100%)',
        videoIndex: 0,
    },
    {
        id: 1,
        top: '6%',
        left: '45%',
        width: '21%',
        height: '18%',
        transform: 'rotateX(12deg) rotateY(-2deg) skewX(-2deg)',
        clipPath: 'polygon(3% 0%, 100% 4%, 97% 98%, 0% 95%)',
        videoIndex: 1,
    },
    {
        id: 2,
        top: '10%',
        left: '72%',
        width: '18%',
        height: '17%',
        transform: 'rotateX(8deg) rotateY(14deg) skewX(4deg)',
        clipPath: 'polygon(5% 0%, 100% 5%, 100% 100%, 0% 95%)',
        videoIndex: 2,
    },
    {
        id: 3,
        top: '43%',
        left: '13%',
        width: '21%',
        height: '20%',
        transform: 'rotateX(8deg) rotateY(-18deg) skewX(-5deg)',
        clipPath: 'polygon(0% 3%, 100% 0%, 100% 95%, 5% 100%)',
        videoIndex: 0,
    },
    {
        id: 4,
        top: '47%',
        left: '46%',
        width: '21%',
        height: '19%',
        transform: 'rotateX(-4deg) rotateY(2deg) skewX(0deg)',
        clipPath: 'polygon(0% 5%, 98% 0%, 100% 96%, 0% 100%)',
        videoIndex: 1,
    },
    {
        id: 5,
        top: '42%',
        left: '71%',
        width: '18%',
        height: '18%',
        transform: 'rotateX(6deg) rotateY(12deg) skewX(3deg)',
        clipPath: 'polygon(5% 2%, 100% 0%, 100% 98%, 0% 95%)',
        videoIndex: 2,
    },
]

export default function CinematicOverlay() {
    const [hoveredScreen, setHoveredScreen] = useState<number | null>(null)

    return (
        <section className="relative overflow-hidden py-20 bg-slate-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl text-slate-100">
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Cinematic Experience</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">3D Cube Video Overlay</h2>
                    <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                        Live Vimeo video faces mapped over the Fiamma-Photoroom background image.
                    </p>
                </div>

                <div
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl shadow-black/30"
                    style={{
                        width: 'min(90vw, 720px)',
                        aspectRatio: '1 / 1',
                        backgroundImage: 'url(/assets/Fiamma-Photoroom.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="absolute inset-0 bg-black/25"></div>
                    {videoScreens.map((screen) => (
                        <div
                            key={screen.id}
                            className="absolute overflow-hidden rounded-xl border border-white/10 bg-slate-950/85 transition-all duration-300 ease-out"
                            style={{
                                top: screen.top,
                                left: screen.left,
                                width: screen.width,
                                height: screen.height,
                                transform: hoveredScreen === screen.id
                                    ? `${screen.transform} scale(1.05)`
                                    : screen.transform,
                                transformStyle: 'preserve-3d',
                                opacity: hoveredScreen === screen.id ? 1 : 0.98,
                                clipPath: screen.clipPath,
                                boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
                            }}
                            onMouseEnter={() => setHoveredScreen(screen.id)}
                            onMouseLeave={() => setHoveredScreen(null)}
                        >
                            <iframe
                                className="w-full h-full pointer-events-none"
                                src={videoUrls[screen.videoIndex]}
                                title={`3D Cube Face ${screen.id + 1}`}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
