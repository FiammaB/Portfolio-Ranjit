import { useState } from 'react'

const videoData = [
    {
        id: 'comp-m2075otg',
        src: 'https://video.wixstatic.com/video/250c22_c184ffb1e0ab438c9706d52c73876d5f/144p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_c184ffb1e0ab438c9706d52c73876d5ff000.jpg/v1/fill/w_168,h_157,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_c184ffb1e0ab438c9706d52c73876d5ff000.jpg',
        title: 'Dropset31MB.mp4',
        position: { top: '8%', left: '14%', width: '20%', height: '18%' }
    },
    {
        id: 'comp-m208f06d',
        src: 'https://video.wixstatic.com/video/250c22_b62db6da9e2e435db7f0777486717636/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_b62db6da9e2e435db7f0777486717636f000.jpg/v1/fill/w_144,h_145,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_b62db6da9e2e435db7f0777486717636f000.jpg',
        title: 'Inglisi+_+Trailer+-+(less-than1MB).mp4',
        position: { top: '6%', left: '45%', width: '21%', height: '18%' }
    },
    {
        id: 'comp-m1ztf363',
        src: 'https://video.wixstatic.com/video/250c22_57fe5ebdf1a345209b6fc48e50cde970/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_57fe5ebdf1a345209b6fc48e50cde970f000.jpg/v1/fill/w_180,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_57fe5ebdf1a345209b6fc48e50cde970f000.jpg',
        title: 'STRONGFINAL.mp4',
        position: { top: '10%', left: '72%', width: '18%', height: '17%' }
    },
    {
        id: 'comp-m1zx6oun',
        src: 'https://video.wixstatic.com/video/250c22_117dd5234b9f4b0196c29b65c3c64512/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_117dd5234b9f4b0196c29b65c3c64512f000.jpg/v1/fill/w_120,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_117dd5234b9f4b0196c29b65c3c64512f000.jpg',
        title: 'PepsiwebvidFinal.mp4',
        position: { top: '43%', left: '13%', width: '21%', height: '20%' }
    },
    {
        id: 'comp-m1zy2c80',
        src: 'https://video.wixstatic.com/video/250c22_5ae40d7abc0a44d69583cb45e9c06367/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_5ae40d7abc0a44d69583cb45e9c06367f000.jpg/v1/fill/w_189,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_5ae40d7abc0a44d69583cb45e9c06367f000.jpg',
        title: 'LEGOwebvid (1MB-FINAL).mp4',
        position: { top: '47%', left: '46%', width: '21%', height: '19%' }
    },
    {
        id: 'comp-m1zztupb',
        src: 'https://video.wixstatic.com/video/250c22_a8a04252bb8445ae936837eefac62b38/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_a8a04252bb8445ae936837eefac62b38f000.jpg/v1/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_a8a04252bb8445ae936837eefac62b38f000.jpg',
        title: 'HPTrailerwebvid-1.3MB.mp4',
        position: { top: '42%', left: '71%', width: '18%', height: '18%' }
    },
    {
        id: 'comp-m1zsokln',
        src: 'https://video.wixstatic.com/video/250c22_a3948b7d97d041b59c9dbfaeafe18776/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_a3948b7d97d041b59c9dbfaeafe18776f000.jpg/v1/fill/w_120,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_a3948b7d97d041b59c9dbfaeafe18776f000.jpg',
        title: 'SoftWebVidFINAL (1.3MB).mp4',
        position: { top: '75%', left: '30%', width: '15%', height: '15%' }
    },
    {
        id: 'comp-m1zu116h',
        src: 'https://video.wixstatic.com/video/250c22_3f641bc4c9c5440ca6540de528260d11/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_3f641bc4c9c5440ca6540de528260d11f000.jpg/v1/fill/w_231,h_219,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_3f641bc4c9c5440ca6540de528260d11f000.jpg',
        title: 'CHILLFINALFINALFINAL.mp4',
        position: { top: '75%', left: '55%', width: '15%', height: '15%' }
    }
]

export default function WixVideoLayout() {
    const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
    const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set())

    const togglePlay = (id: string) => {
        setPlayingVideos(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

    const toggleMute = (id: string) => {
        setMutedVideos(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

    return (
        <section className="relative overflow-hidden py-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(/assets/Fiamma-Photoroom.png)`
                }}
            ></div>

            {/* Overlay for better visibility */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
                <div className="mb-10 max-w-3xl text-slate-900">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-700">Wix Video Layout</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Replicated Video Grid</h2>
                    <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                        Multiple videos overlaid on background image, adapted from Wix HTML.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl aspect-square">
                    {videoData.map((video) => (
                        <div
                            key={video.id}
                            className="absolute overflow-hidden rounded-lg bg-slate-950 border border-white/20"
                            style={{
                                top: video.position.top,
                                left: video.position.left,
                                width: video.position.width,
                                height: video.position.height,
                                boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                            }}
                        >
                            <video
                                id={`${video.id}_video`}
                                className="w-full h-full object-cover"
                                poster={video.poster}
                                preload="auto"
                                muted={mutedVideos.has(video.id)}
                                loop
                                playsInline
                                autoPlay={playingVideos.has(video.id)}
                                src={video.src}
                            />

                            {/* Play/Pause Button */}
                            <button
                                className="absolute bottom-2 left-2 bg-black/50 text-white p-1 rounded"
                                onClick={() => togglePlay(video.id)}
                                aria-label={`${playingVideos.has(video.id) ? 'Pause' : 'Play'} ${video.title}`}
                            >
                                {playingVideos.has(video.id) ? '⏸️' : '▶️'}
                            </button>

                            {/* Mute Button */}
                            <button
                                className="absolute bottom-2 right-2 bg-black/50 text-white p-1 rounded"
                                onClick={() => toggleMute(video.id)}
                                aria-label={`${mutedVideos.has(video.id) ? 'Unmute' : 'Mute'} ${video.title}`}
                            >
                                {mutedVideos.has(video.id) ? '🔇' : '🔊'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}