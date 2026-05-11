export type WorkCategoryGroup = {
    title: string
    items: string[]
}

export type ScreenVideo = {
    id: string
    src: string
    poster: string
    title: string
    accent: string
    region: 'International Work' | 'Indian Work'
}

export type Testimonial = {
    quote: string
    name: string
    role: string
}

export const heroContent = {
    eyebrow: 'International Production Executive',
    name: 'Umang Agarwal',
    title: 'Executive Producer | Line Producer | Cross-Border Production Specialist for Feature Films, HETV, Commercials & Documentaries',
    summary: '21+ years delivering Feature Films, HETV, Commercials, Documentaries and international productions across India, the UK and overseas.',
    badges: ['Production Systems', 'Permits + Logistics'],
}

export const workCategoryGroups: WorkCategoryGroup[] = [
    {
        title: 'International Work',
        items: ['TV Commercials', 'Music Videos', 'Feature Films', 'Documentaries', 'Streaming Series'],
    },
    {
        title: 'Indian Work',
        items: ['TV Commercials', 'Music Videos', 'Feature Films', 'Documentaries'],
    },
]

export const screenVideos: ScreenVideo[] = [
    {
        id: 'screen-center-main',
        src: 'https://video.wixstatic.com/video/250c22_5ae40d7abc0a44d69583cb45e9c06367/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_5ae40d7abc0a44d69583cb45e9c06367f000.jpg/v1/fill/w_189,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_5ae40d7abc0a44d69583cb45e9c06367f000.jpg',
        title: 'Main Reel',
        accent: 'International Work',
        region: 'International Work',
    },
    {
        id: 'screen-left-top',
        src: 'https://video.wixstatic.com/video/250c22_c184ffb1e0ab438c9706d52c73876d5f/144p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_c184ffb1e0ab438c9706d52c73876d5ff000.jpg/v1/fill/w_168,h_157,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_c184ffb1e0ab438c9706d52c73876d5ff000.jpg',
        title: 'Feature Systems',
        accent: 'Feature Films',
        region: 'International Work',
    },
    {
        id: 'screen-top-center',
        src: 'https://video.wixstatic.com/video/250c22_b62db6da9e2e435db7f0777486717636/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_b62db6da9e2e435db7f0777486717636f000.jpg/v1/fill/w_144,h_145,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_b62db6da9e2e435db7f0777486717636f000.jpg',
        title: 'Commercial Momentum',
        accent: 'TV Commercials',
        region: 'International Work',
    },
    {
        id: 'screen-right-top',
        src: 'https://video.wixstatic.com/video/250c22_57fe5ebdf1a345209b6fc48e50cde970/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_57fe5ebdf1a345209b6fc48e50cde970f000.jpg/v1/fill/w_180,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_57fe5ebdf1a345209b6fc48e50cde970f000.jpg',
        title: 'Documentary Work',
        accent: 'Documentaries',
        region: 'International Work',
    },
    {
        id: 'screen-left-middle',
        src: 'https://video.wixstatic.com/video/250c22_117dd5234b9f4b0196c29b65c3c64512/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_117dd5234b9f4b0196c29b65c3c64512f000.jpg/v1/fill/w_120,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_117dd5234b9f4b0196c29b65c3c64512f000.jpg',
        title: 'International Prep',
        accent: 'Music Videos',
        region: 'International Work',
    },
    {
        id: 'screen-right-middle',
        src: 'https://video.wixstatic.com/video/250c22_a8a04252bb8445ae936837eefac62b38/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_a8a04252bb8445ae936837eefac62b38f000.jpg/v1/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_a8a04252bb8445ae936837eefac62b38f000.jpg',
        title: 'Premium Execution',
        accent: 'Streaming Series',
        region: 'International Work',
    },
    {
        id: 'screen-bottom-left',
        src: 'https://video.wixstatic.com/video/250c22_a3948b7d97d041b59c9dbfaeafe18776/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_a3948b7d97d041b59c9dbfaeafe18776f000.jpg/v1/fill/w_120,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_a3948b7d97d041b59c9dbfaeafe18776f000.jpg',
        title: 'On-Set Energy',
        accent: 'TV Commercials',
        region: 'Indian Work',
    },
    {
        id: 'screen-bottom-right',
        src: 'https://video.wixstatic.com/video/250c22_3f641bc4c9c5440ca6540de528260d11/360p/mp4/file.mp4',
        poster: 'https://static.wixstatic.com/media/250c22_3f641bc4c9c5440ca6540de528260d11f000.jpg/v1/fill/w_231,h_219,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/250c22_3f641bc4c9c5440ca6540de528260d11f000.jpg',
        title: 'Indian Crews',
        accent: 'Feature Films',
        region: 'Indian Work',
    },
]

export const testimonials: Testimonial[] = [
    {
        quote: 'With Umang on the ground, we did not have to worry about our crew getting stuck in customs or our shoot being shut down by local authorities.',
        name: 'International Production Team',
        role: 'Comment on Customs and Permits',
    },
    {
        quote: 'Umang does not just manage the budget; he actively finds ways to save us money and leverage international tax incentives, making global shoots far more viable for our company.',
        name: 'Global Production Partner',
        role: 'Comment on Budget and Incentives',
    },
    {
        quote: 'He understands exactly what British crews expect and delivers that standard seamlessly, no matter where in the world we are filming.',
        name: 'British Production Team',
        role: 'Comment on International Operations',
    },
]
