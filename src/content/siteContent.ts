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
    description: string
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
    description: string
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
    description: string
}

export type Testimonial = {
    quote: string
    name: string
    role: string
}

export const heroContent = {
    eyebrow: 'International Production Executive',
    name: 'Umang Agarwal',
    title: 'Executive Producer and Line Producer for cross-border film, streaming and commercial production',
    summary: '21+ years delivering production leadership across India, the UK and international shoots, with a focus on permits, logistics, crews and execution under pressure.',
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
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
    watchUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    poster: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
    title: video.title,
    description: video.description,
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
        { youtubeId: 'KRYPrddC5sc', title: 'Kit Kat', description: 'International television commercial delivered with local production support, crew coordination and on-ground execution in India.' },
        { youtubeId: 'WprvSREv5aU', title: 'Nike', description: 'International brand commercial supported through production planning, field logistics and delivery management.' },
        { youtubeId: '0InxNLoJm60', title: 'Amul Kool', description: 'Commercial production handled with practical scheduling, location coordination and local crew support.' },
    ]),
    createGroup('india-tv', 'TV Commercials (India)', 'Indian Work', 'TV Commercials', [
        { youtubeId: 'E06FaTcZpDY', title: 'MS Dhonis Funniest Challenge', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Bh9OzwUKlgA', title: 'Meril Saksham Bharat', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'NKHvt1ACtm0', title: 'Robin Fabric Whitener', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Uqv1o4Y5JFE', title: 'Harpic Loocator', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'pRpUQinGigc', title: 'Kamasutra Spark Deo', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'RRPoBeR5eic', title: 'Seven Seas Cod Liver Oil', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '8IwMFy81Q_I', title: 'SBI Life Happy Mothers Day', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'w87ukAI1Jso', title: 'Ultraviolette F77', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'ZugL49JrRUc', title: 'Battlegrounds Mobile India Kidnap', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'DrZufFec_0A', title: 'Battlegrounds Mobile India Cricket', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'B5KKCbK1mY0', title: 'Battlegrounds Mobile India Hostel', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '-uozog73UiY', title: 'Hawkins Raksha bandhan', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '4HP2uOHOSBc', title: 'F77 Mach 2', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'LHbJLsFjFyY', title: 'Lava Mobile', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'bi_v2Kcvjwc', title: 'Full Vasool Hi Vasool', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'OobEEpbqN4g', title: 'Colin Chamak Nayi Soch Ki', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'wCuLV_hgKnU', title: 'Election Commission of India', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'gSUc0flaD4c', title: 'Blinc Hands Free Sneakers', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Yoho Shoes | TVC | India | 2024', title: 'Yoho Shoes', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'ODkYtNWD-80', title: 'Fronx Nexa Experience', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '9irXjJbOS6g', title: 'The Invasion X-Suite Carnival', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'yvIcpUgZdlw', title: 'Impex TV', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'dBTEU0Nb5eA', title: 'ICICI Prudential Mutual Fund', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '8eTcUfxI_w0', title: 'Ibis Hotel', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'LPXXNYplpRo', title: 'Gold Medal Electricals', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'R-aXcGvkZGk', title: 'The Visitors X-Suite Carnival', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'SEdTVTvH04Q', title: 'Radikal Rice', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '-zTNDs7dtAY', title: 'Mastercard', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'MpCziaEgO98', title: 'Hyundai Tucson', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '5MzxqwrXFpc', title: 'JioFiber Broadband', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Ka-udAXSjeY', title: 'JioFiber Broadband', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Vd8E6IW_4YE', title: 'Mfine App', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'KvO6JFVjrcE', title: 'Mfine App', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'fEwx88qpsS0', title: 'JioFiber Broadband', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '1OE_MQdN630', title: 'Mfine App', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'q_lEz-OIBtA', title: 'JioFiber Broadband', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'CaZx33CXgNw', title: 'JioFiber Broadband', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Cb4fH2C1NPI', title: 'Livguard', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'PFGLAA82OoQ', title: 'Aditya Birla Health Insurance', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '10lw-MMxNSI', title: 'SBI General Insurance', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'BcQa6tlV6GA', title: 'JioFiber Broadband', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'w-Qy6H3BUAw', title: 'Honeywell Air Purifier', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'vFmRl8e5QhE', title: 'Fitness Diva Basmati Rice', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Zyv21DXiZ30', title: 'Emami Fair & Handsome', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'EreYfts1mRE', title: 'Jelimals', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'qM4MNXoWLQA', title: 'Masti Ki Paathshaala', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'pEQrN4nuJPo', title: 'Anmol TMT Bars', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'LOIT_jMYgbA', title: 'Roop Mantra Ayurvedic', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'k72Xi0xyHbw', title: 'Sachi Saheli', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'sI9PXITaBHg', title: 'Shoppers Stop', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'b_PV7LlvwzU', title: 'Jolly Sunsex Gold', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'NRdL0FyHMzc', title: 'Multani Pachmeena', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'VtpSKne1b0k', title: 'B Natural Winter Delight', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Mqs7GKH2Uko', title: 'Everyuth Golden Glow', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'NcFsE4t1Ehk', title: 'Reliance Digital', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'th3i3vrpdtE', title: 'Jelimals Punky', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'Z3pW1VHletM', title: 'Reliance Digital Mobile', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'goPqt7PCFgQ', title: 'ICICI Bank Money2India', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'JeEAYS_Ng-4', title: 'Everyuth Naturals', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'uwTtV4dSnF4', title: 'Everyuth Naturals', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'hshFpVE1ZW8', title: 'Everyuth Naturals', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'dM16wLGgA0M', title: 'Aquaguard RO Farak Dikhta Hai', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'ofxWoHA-KZI', title: 'Nasaka Water Purifier', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'AXbPLDJQx7Q', title: 'Reliance Fresh Dil Se Manao Diwali', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'oBWjZKt_WsY', title: 'Fortune Vivo', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: '48AILQh2iMo', title: 'Moser Baer', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'mk5BNVsLCyY', title: 'Moser Baer', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'OlpGusXa7Ro', title: 'Moser Baer', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'mUum1EwZiSY', title: 'Bajaj Pulsar', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'dq9PU6vR59U', title: 'Tata Safari Storm', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 't2aPr5vgiZo', title: 'Royal Challenge Sports Drink', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'QDj9HcdUK9Q', title: 'Tempo Hand Sanitisers', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
        { youtubeId: 'p96NtKitBBQ', title: 'Santoor Shampoo', description: 'Indian television commercial delivered with line production oversight, crew coordination and practical execution support.' },
    ]),
    createGroup('intl-mv', 'Music Videos (International)', 'International Work', 'Music Videos', [
        { youtubeId: 'Wh2nh3stZNY', title: 'Negativity', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'R4PAmlJSE1Y', title: 'Kamaal Kita Aa', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: '4cp0GAos6Iw', title: 'You Are Mine', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'aNfnqY-97HE', title: 'Insist', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'saknD8taxj0', title: 'California Love', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: '3xfM6OsJcI4', title: 'No Worries', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'qIos1X4Ilzs', title: 'Najaare', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'sdNowVrHlOA', title: 'Jordan', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'tYvvKjP25OU', title: 'Dilbarjaaniya', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'ARWXrJwn6jA', title: 'A Broken Heart', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: '9OD6L8H9HUw', title: 'Badaami Rang', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: '3I3sLkyR92Y', title: 'Gabru', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
        { youtubeId: 'Pf4cB_vOdSw', title: 'Miss Karda', description: 'International music video supported through production coordination, crew management and practical on-ground delivery.' },
    ]),
    createGroup('india-mv', 'Music Videos (India)', 'Indian Work', 'Music Videos', [
        { youtubeId: 'WfWbxBO3Vo0', title: 'Gustakhiyaan', description: 'Indian music video managed with practical production support, scheduling, crews and on-ground coordination.' },
        { youtubeId: 'a0Z6BzC7VdE', title: 'Cloudy Day', description: 'Indian music video managed with practical production support, scheduling, crews and on-ground coordination.' },
        { youtubeId: 'z5D5U79t7cA', title: 'Yaaran Da Department', description: 'Indian music video managed with practical production support, scheduling, crews and on-ground coordination.' },
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
