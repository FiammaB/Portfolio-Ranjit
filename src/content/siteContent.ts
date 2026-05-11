export type WorkCategoryGroup = {
    title: string
    items: string[]
}

export type ScreenVideo = {
    id: string
    embedUrl: string
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
        id: 'intl-tv-1',
        embedUrl: 'https://www.youtube-nocookie.com/embed/KRYPrddC5sc?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/KRYPrddC5sc/hqdefault.jpg',
        title: 'TV Commercials 01',
        accent: 'TV Commercials',
        region: 'International Work',
    },
    {
        id: 'intl-tv-2',
        embedUrl: 'https://www.youtube-nocookie.com/embed/uKNE02c_EOI?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/uKNE02c_EOI/hqdefault.jpg',
        title: 'TV Commercials 02',
        accent: 'TV Commercials',
        region: 'International Work',
    },
    {
        id: 'intl-mv-1',
        embedUrl: 'https://www.youtube-nocookie.com/embed/ARWXrJwn6jA?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/ARWXrJwn6jA/hqdefault.jpg',
        title: 'Music Videos 01',
        accent: 'Music Videos',
        region: 'International Work',
    },
    {
        id: 'intl-mv-2',
        embedUrl: 'https://www.youtube-nocookie.com/embed/sdNowVrHlOA?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/sdNowVrHlOA/hqdefault.jpg',
        title: 'Music Videos 02',
        accent: 'Music Videos',
        region: 'International Work',
    },
    {
        id: 'india-tv-1',
        embedUrl: 'https://www.youtube-nocookie.com/embed/q_lEz-OIBtA?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/q_lEz-OIBtA/hqdefault.jpg',
        title: 'TV Commercials 01',
        accent: 'TV Commercials',
        region: 'Indian Work',
    },
    {
        id: 'india-tv-2',
        embedUrl: 'https://www.youtube-nocookie.com/embed/NRdL0FyHMzc?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/NRdL0FyHMzc/hqdefault.jpg',
        title: 'TV Commercials 02',
        accent: 'TV Commercials',
        region: 'Indian Work',
    },
    {
        id: 'india-mv-1',
        embedUrl: 'https://www.youtube-nocookie.com/embed/z5D5U79t7cA?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/z5D5U79t7cA/hqdefault.jpg',
        title: 'Music Videos 01',
        accent: 'Music Videos',
        region: 'Indian Work',
    },
    {
        id: 'india-mv-2',
        embedUrl: 'https://www.youtube-nocookie.com/embed/WfWbxBO3Vo0?rel=0&modestbranding=1&playsinline=1',
        poster: 'https://i.ytimg.com/vi/WfWbxBO3Vo0/hqdefault.jpg',
        title: 'Music Videos 02',
        accent: 'Music Videos',
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
