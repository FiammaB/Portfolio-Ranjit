import { motion } from 'framer-motion'

type ScreenVideo = {
    id: string
    src: string
    title: string
    position: { top: number; left: number; width: number; height: number }
    transform: string
    outerPoints: string
    innerPoints: string
    shadow?: string
    className?: string
    scale?: number
}

const polygonMask = (points: string) =>
    `url("data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><polygon points='${points}' fill='white'/></svg>`
    )}")`

const screenVideos: ScreenVideo[] = [
    {
        id: 'screen-left-top',
        src: 'https://player.vimeo.com/video/922797060?background=1&autoplay=1&loop=1&muted=1',
        title: 'Top left feature',
        position: { top: 16.2, left: 6.2, width: 13.3, height: 20.4 },
        transform: 'perspective(1500px) rotateZ(-8deg) rotateY(12deg) rotateX(4deg)',
        outerPoints: '18,10 76,7 88,10 93,20 91,36 89,70 84,84 72,93 24,95 13,88 10,76 10,27 15,14',
        innerPoints: '20,11 75,9 86,12 90,20 88,36 86,69 82,82 71,90 25,92 15,86 12,75 12,28 16,16',

        shadow: '0 18px 30px rgba(15, 23, 42, 0.24)',
    },
    {
        id: 'screen-top-center',
        src: 'https://player.vimeo.com/video/891367685?background=1&autoplay=1&loop=1&muted=1',
        title: 'Top center ribbon',
        position: { top: 8.8, left: 41.6, width: 18.6, height: 11.8 },
        transform: 'perspective(1500px) rotateZ(-1deg) rotateX(20deg) rotateY(0deg)',
        outerPoints: '7,28 45,8 92,18 88,76 16,88 4,48',
        innerPoints: '13,33 45,16 84,24 80,68 20,78 10,47',
        shadow: '0 16px 28px rgba(15, 23, 42, 0.22)',
    },
    {
        id: 'screen-right-top',
        src: 'https://player.vimeo.com/video/932360535?background=1&autoplay=1&loop=1&muted=1',
        title: 'Top right feature',
        position: { top: 16.8, left: 79.0, width: 11.8, height: 17.4 },
        transform: 'perspective(1500px) rotateZ(4deg) rotateY(-16deg) rotateX(3deg)',
        outerPoints: '12,6 90,10 96,22 94,82 84,94 14,90 6,76 5,18',
        innerPoints: '18,12 84,16 89,25 88,77 80,86 20,82 13,72 12,24',
        shadow: '0 18px 30px rgba(15, 23, 42, 0.24)',
    },
    {
        id: 'screen-left-middle',
        src: 'https://player.vimeo.com/video/915668812?background=1&autoplay=1&loop=1&muted=1',
        title: 'Left middle stack',
        position: { top: 52.2, left: 6.4, width: 12.8, height: 14.8 },
        transform: 'perspective(1500px) rotateZ(-2deg) rotateY(16deg) rotateX(2deg)',
        outerPoints: '10,4 88,6 94,18 94,86 84,96 12,93 5,78 4,16',
        innerPoints: '16,10 82,12 88,22 88,80 79,88 17,86 11,72 10,20',
        shadow: '0 18px 34px rgba(15, 23, 42, 0.26)',
    },
    {
        id: 'screen-center-main',
        src: 'https://player.vimeo.com/video/956701021?background=1&autoplay=1&loop=1&muted=1',
        title: 'Center hero',
        position: { top: 30.0, left: 40.0, width: 20.4, height: 22.4 },
        transform: 'perspective(1500px) rotateZ(1deg) rotateY(-4deg) rotateX(2deg)',
        outerPoints: '14,4 86,6 95,18 95,84 84,96 16,94 6,82 5,18',
        innerPoints: '20,10 80,12 88,22 88,78 78,88 20,86 12,75 12,22',
        shadow: '0 18px 34px rgba(15, 23, 42, 0.26)',
    },
    {
        id: 'screen-right-middle',
        src: 'https://player.vimeo.com/video/946888130?background=1&autoplay=1&loop=1&muted=1',
        title: 'Right middle panel',
        position: { top: 52.8, left: 80.0, width: 10.6, height: 15.6 },
        transform: 'perspective(1500px) rotateZ(4deg) rotateY(-15deg) rotateX(2deg)',
        outerPoints: '12,6 90,10 96,22 94,82 84,94 14,90 6,76 5,18',
        innerPoints: '18,12 84,16 89,25 88,77 80,86 20,82 13,72 12,24',
        shadow: '0 18px 30px rgba(15, 23, 42, 0.24)',
    },
    {
        id: 'screen-bottom-left',
        src: 'https://player.vimeo.com/video/922797412?background=1&autoplay=1&loop=1&muted=1',
        title: 'Bottom left feature',
        position: { top: 58.8, left: 34.2, width: 12.8, height: 22.4 },
        transform: 'perspective(1500px) rotateZ(-1deg) rotateY(4deg) rotateX(2deg)',
        outerPoints: '14,4 86,6 95,18 95,84 84,96 16,94 6,82 5,18',
        innerPoints: '20,10 80,12 88,22 88,78 78,88 20,86 12,75 12,22',
        shadow: '0 16px 26px rgba(15, 23, 42, 0.22)',
    },
    {
        id: 'screen-bottom-right',
        src: 'https://player.vimeo.com/video/932362750?background=1&autoplay=1&loop=1&muted=1',
        title: 'Bottom right tower',
        position: { top: 60.6, left: 64.2, width: 10.8, height: 21.8 },
        transform: 'perspective(1500px) rotateZ(1deg) rotateY(-14deg) rotateX(2deg)',
        outerPoints: '6,4 88,6 94,18 94,86 84,96 12,93 5,78 4,16',
        innerPoints: '16,10 82,12 88,22 88,80 79,88 17,86 11,72 10,20',
        shadow: '0 16px 26px rgba(15, 23, 42, 0.22)',
    },
]

export default function PerspectiveVideoOverlay() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-4 py-10 shadow-[0_30px_120px_rgba(15,23,42,0.35)] sm:px-6 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.16),_transparent_28%)]" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="mx-auto w-full max-w-5xl">
                    <div
                        className="relative aspect-square w-full"
                        style={{
                            perspective: '1800px',
                            perspectiveOrigin: 'center center',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <img
                            src="/assets/Fiamma-Photoroom.png"
                            alt="3D cluster illustration with embedded display screens"
                            className="relative z-10 h-full w-full object-contain"
                        />

                        <div className="absolute inset-0 z-20" style={{ transformStyle: 'preserve-3d' }}>
                            {screenVideos.map((video, index) => {
                                const outerMask = polygonMask(video.outerPoints)
                                const innerMask = polygonMask(video.innerPoints)

                                return (
                                    <motion.div
                                        key={video.id}
                                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
                                        className={`absolute ${video.className ?? ''}`}
                                        style={{
                                            top: `${video.position.top}%`,
                                            left: `${video.position.left}%`,
                                            width: `${video.position.width}%`,
                                            height: `${video.position.height}%`,
                                            transform: video.transform,
                                            transformOrigin: 'center',
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <div
                                            className="relative h-full w-full bg-black/95"
                                            style={{
                                                boxShadow: video.shadow,
                                                WebkitMaskImage: outerMask,
                                                maskImage: outerMask,
                                                WebkitMaskSize: '100% 100%',
                                                maskSize: '100% 100%',
                                                WebkitMaskRepeat: 'no-repeat',
                                                maskRepeat: 'no-repeat',
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02)_22%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.55))]" />
                                            <div className="absolute inset-[2%] bg-white/[0.06]" />

                                            <div
                                                className="absolute inset-0 overflow-hidden bg-black"
                                                style={{
                                                    WebkitMaskImage: innerMask,
                                                    maskImage: innerMask,
                                                    WebkitMaskSize: '100% 100%',
                                                    maskSize: '100% 100%',
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskRepeat: 'no-repeat',
                                                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                                                }}
                                            >
                                                <iframe
                                                    className="h-full w-full"
                                                    src={video.src}
                                                    title={video.title}
                                                    frameBorder="0"
                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                    allowFullScreen
                                                    loading="lazy"
                                                    style={{
                                                        transform: `scale(${video.scale ?? 1.08})`,
                                                        transformOrigin: 'center',
                                                    }}
                                                />
                                            </div>

                                            <div
                                                className="pointer-events-none absolute inset-0"
                                                style={{
                                                    WebkitMaskImage: innerMask,
                                                    maskImage: innerMask,
                                                    WebkitMaskSize: '100% 100%',
                                                    maskSize: '100% 100%',
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskRepeat: 'no-repeat',
                                                    boxShadow:
                                                        'inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 18px 20px rgba(255,255,255,0.06), inset 0 -24px 28px rgba(0,0,0,0.35)',
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
