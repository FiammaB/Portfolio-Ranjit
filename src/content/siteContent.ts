export type WorkCategoryGroup = {
    title: string
    items: string[]
}

export type ScreenVideo = {
    id: string
    embedUrl: string
    watchUrl: string
    poster: string
    title: string
    accent: string
    region: 'International Work' | 'Indian Work'
}

export type WorkVideo = {
    id: string
    youtubeId: string
    embedUrl: string
    watchUrl: string
    poster: string
    title: string
    accent: string
    region: 'International Work' | 'Indian Work'
    section: 'TV Commercials' | 'Music Videos'
}

export type WorkVideoGroup = {
    id: string
    title: string
    region: 'International Work' | 'Indian Work'
    section: 'TV Commercials' | 'Music Videos'
    videos: WorkVideo[]
}

type WorkVideoSeed = {
    youtubeId: string
    title: string
}

export type Testimonial = {
    quote: string
    name: string
    role: string
}

export const heroContent = {
    eyebrow: 'International Production Executive',
    name: 'Umang Agarwal',
    title: 'Executive Producer | Line Producer | Cross-Border Production Specialist for feature films, high-end television, commercials and documentaries',
    summary: '21+ years delivering feature films, high-end television, commercials, documentaries and international productions across India, the UK and overseas.',
    badges: ['Production Systems', 'Permits and Logistics'],
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

const createVideo = (
    region: 'International Work' | 'Indian Work',
    section: 'TV Commercials' | 'Music Videos',
    video: WorkVideoSeed,
    index: number,
): WorkVideo => ({
    id: `${region.toLowerCase().replace(/[^a-z]+/g, '-')}-${section.toLowerCase().replace(/[^a-z]+/g, '-')}-${index + 1}`,
    youtubeId: video.youtubeId,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1`,
    watchUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    poster: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
    title: video.title,
    accent: section,
    region,
    section,
})

const createGroup = (
    id: string,
    title: string,
    region: 'International Work' | 'Indian Work',
    section: 'TV Commercials' | 'Music Videos',
    videos: WorkVideoSeed[],
): WorkVideoGroup => ({
    id,
    title,
    region,
    section,
    videos: videos.map((video, index) => createVideo(region, section, video, index)),
})

export const workVideoGroups: WorkVideoGroup[] = [
    createGroup('intl-tv', 'TV Commercials (International)', 'International Work', 'TV Commercials', [
        { youtubeId: 'KRYPrddC5sc', title: 'Kit Kat' },
        { youtubeId: 'WprvSREv5aU', title: 'Nike' },
        { youtubeId: '0InxNLoJm60', title: 'Amul Kool' },
    ]),
    createGroup('india-tv', 'TV Commercials (India)', 'Indian Work', 'TV Commercials', [
        { youtubeId: 'E06FaTcZpDY', title: 'MS Dhonis Funniest Challenge' },
        { youtubeId: 'Uqv1o4Y5JFE', title: 'Harpic Loocator' },
        { youtubeId: 'pRpUQinGigc', title: 'Kamasutra Spark Deo' },
        { youtubeId: 'RRPoBeR5eic', title: 'Seven Seas Cod Liver Oil' },
        { youtubeId: '8IwMFy81Q_I', title: 'SBI Life Happy Mothers Day' },
        { youtubeId: 'w87ukAI1Jso', title: 'Ultraviolette F77' },
        { youtubeId: 'ZugL49JrRUc', title: 'Battlegrounds Mobile India Kidnap' },
        { youtubeId: 'DrZufFec_0A', title: 'Battlegrounds Mobile India Cricket' },
        { youtubeId: 'B5KKCbK1mY0', title: 'Battlegrounds Mobile India Hostel' },
        { youtubeId: '4HP2uOHOSBc', title: 'F77 Mach 2' },
        { youtubeId: 'OobEEpbqN4g', title: 'Colin Chamak Nayi Soch Ki' },
        { youtubeId: 'gSUc0flaD4c', title: 'Blinc Hands Free Sneakers' },
        { youtubeId: '9irXjJbOS6g', title: 'The Invasion X-Suite Carnival' },
        { youtubeId: 'yvIcpUgZdlw', title: 'Impex TV' },
        { youtubeId: 'LPXXNYplpRo', title: 'Gold Medal Electricals' },
        { youtubeId: 'SEdTVTvH04Q', title: 'Radikal Rice' },
        { youtubeId: 'MpCziaEgO98', title: 'Hyundai Tucson' },
        { youtubeId: '5MzxqwrXFpc', title: 'JioFiber Broadband' },
        { youtubeId: 'KvO6JFVjrcE', title: 'Mfine App' },
        { youtubeId: 'fEwx88qpsS0', title: 'JioFiber Broadband' },
        { youtubeId: 'q_lEz-OIBtA', title: 'JioFiber Broadband' },
        { youtubeId: 'CaZx33CXgNw', title: 'JioFiber Broadband' },
        { youtubeId: 'Cb4fH2C1NPI', title: 'Livguard' },
        { youtubeId: 'PFGLAA82OoQ', title: 'Aditya Birla Health Insurance' },
        { youtubeId: 'BcQa6tlV6GA', title: 'JioFiber Broadband' },
        { youtubeId: 'Zyv21DXiZ30', title: 'Emami Fair & Handsome' },
        { youtubeId: 'qM4MNXoWLQA', title: 'Masti Ki Paathshaala' },
        { youtubeId: 'k72Xi0xyHbw', title: 'Sachi Saheli' },
        { youtubeId: 'sI9PXITaBHg', title: 'Shoppers Stop' },
        { youtubeId: 'NRdL0FyHMzc', title: 'Multani Pachmeena' },
        { youtubeId: 'VtpSKne1b0k', title: 'B Natural Winter Delight' },
        { youtubeId: 'Mqs7GKH2Uko', title: 'Everyuth Golden Glow' },
        { youtubeId: 'NcFsE4t1Ehk', title: 'Reliance Digital' },
        { youtubeId: 'th3i3vrpdtE', title: 'Jelimals Punky' },
        { youtubeId: 'Z3pW1VHletM', title: 'Reliance Digital Mobile' },
        { youtubeId: 'goPqt7PCFgQ', title: 'ICICI Bank Money2India' },
        { youtubeId: 'hshFpVE1ZW8', title: 'Everyuth Naturals' },
        { youtubeId: 'dM16wLGgA0M', title: 'Aquaguard RO Farak Dikhta Hai' },
        { youtubeId: 'AXbPLDJQx7Q', title: 'Reliance Fresh Dil Se Manao Diwali' },
        { youtubeId: '48AILQh2iMo', title: 'Moser Baer' },
        { youtubeId: 'mk5BNVsLCyY', title: 'Moser Baer' },
        { youtubeId: 'mUum1EwZiSY', title: 'Bajaj Pulsar' },
        { youtubeId: 'dq9PU6vR59U', title: 'Tata Safari Storm' },
        { youtubeId: 't2aPr5vgiZo', title: 'Royal Challenge Sports Drink' },
        { youtubeId: 'QDj9HcdUK9Q', title: 'Tempo Hand Sanitisers' },
        { youtubeId: 'p96NtKitBBQ', title: 'Santoor Shampoo' },
    ]),
    createGroup('intl-mv', 'Music Videos (International)', 'International Work', 'Music Videos', [
        { youtubeId: 'Wh2nh3stZNY', title: 'Negativity' },
        { youtubeId: 'R4PAmlJSE1Y', title: 'Kamaal Kita Aa' },
        { youtubeId: '4cp0GAos6Iw', title: 'You Are Mine' },
        { youtubeId: '3xfM6OsJcI4', title: 'No Worries' },
        { youtubeId: 'sdNowVrHlOA', title: 'Jordan' },
        { youtubeId: 'tYvvKjP25OU', title: 'Dilbarjaaniya' },
        { youtubeId: 'ARWXrJwn6jA', title: 'A Broken Heart' },
        { youtubeId: '9OD6L8H9Huw', title: 'Badaami Rang' },
        { youtubeId: '3I3sLkyR92Y', title: 'Gabru' },
    ]),
    createGroup('india-mv', 'Music Videos (India)', 'Indian Work', 'Music Videos', [
        { youtubeId: 'WfWbxBO3Vo0', title: 'Gustakhiyaan' },
        { youtubeId: 'a0Z6BzC7VdE', title: 'Cloudy Day' },
        { youtubeId: 'z5D5U79t7cA', title: 'Yaaran Da Department' },
    ]),
]

export const screenVideos: ScreenVideo[] = [
    workVideoGroups[0].videos[0],
    workVideoGroups[0].videos[1],
    workVideoGroups[2].videos[6],
    workVideoGroups[2].videos[4],
    workVideoGroups[1].videos[20],
    workVideoGroups[1].videos[29],
    workVideoGroups[3].videos[2],
    workVideoGroups[3].videos[0],
]

export const testimonials: Testimonial[] = [
    {
        quote: 'With Umang on the ground, we did not have to worry about our crew getting stuck in customs or our shoot being shut down by local authorities.',
        name: 'International Production Team',
        role: 'On customs and permits',
    },
    {
        quote: 'Umang does not just manage the budget; he actively finds ways to save us money and leverage international tax incentives, making global shoots far more viable for our company.',
        name: 'Global Production Partner',
        role: 'On budget control and incentives',
    },
    {
        quote: 'He understands exactly what British crews expect and delivers that standard seamlessly, no matter where in the world we are filming.',
        name: 'British Production Team',
        role: 'On international production standards',
    },
]
