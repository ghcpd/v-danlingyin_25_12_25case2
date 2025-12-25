import { Podcast, Episode, Category } from '../types';

// ============================================
// Mock Podcasts Data
// ============================================

export const mockPodcasts: Podcast[] = [
  {
    id: 'podcast-1',
    title: 'Tech Talk Daily',
    author: 'Sarah Johnson',
    description: 'Your daily dose of technology news, trends, and insights. Join Sarah as she breaks down the most important tech stories and interviews industry leaders. From AI breakthroughs to startup success stories, we cover it all.',
    coverImage: 'https://picsum.photos/seed/tech1/400/400',
    category: [Category.Technology, Category.Business],
    episodeCount: 245,
    subscribers: 125000,
    rating: 4.8,
    createdAt: '2021-03-15T00:00:00Z',
    updatedAt: '2024-12-20T00:00:00Z',
  },
  {
    id: 'podcast-2',
    title: 'Crime Chronicles',
    author: 'Michael Chen',
    description: 'Dive deep into the world of true crime with detailed investigations, expert interviews, and gripping storytelling. Each episode explores a different case, from cold cases to notorious criminals.',
    coverImage: 'https://picsum.photos/seed/crime2/400/400',
    category: [Category.TrueCrime],
    episodeCount: 156,
    subscribers: 890000,
    rating: 4.9,
    createdAt: '2020-06-01T00:00:00Z',
    updatedAt: '2024-12-18T00:00:00Z',
  },
  {
    id: 'podcast-3',
    title: 'The Comedy Hour',
    author: 'Dave Williams & Lisa Park',
    description: 'A hilarious weekly podcast where comedians Dave and Lisa discuss the funniest moments in pop culture, share embarrassing stories, and interview fellow comedians. Warning: may cause uncontrollable laughter.',
    coverImage: 'https://picsum.photos/seed/comedy3/400/400',
    category: [Category.Comedy],
    episodeCount: 312,
    subscribers: 450000,
    rating: 4.7,
    createdAt: '2019-01-10T00:00:00Z',
    updatedAt: '2024-12-22T00:00:00Z',
  },
  {
    id: 'podcast-4',
    title: 'Business Insights',
    author: 'Amanda Rodriguez',
    description: 'Learn from the best in business. Amanda interviews successful entrepreneurs, CEOs, and thought leaders to bring you actionable insights for growing your career and business.',
    coverImage: 'https://picsum.photos/seed/business4/400/400',
    category: [Category.Business, Category.Education],
    episodeCount: 189,
    subscribers: 320000,
    rating: 4.6,
    createdAt: '2020-09-05T00:00:00Z',
    updatedAt: '2024-12-21T00:00:00Z',
  },
  {
    id: 'podcast-5',
    title: 'Science Explained',
    author: 'Dr. Robert Kim',
    description: 'Complex scientific concepts made simple. Dr. Kim breaks down everything from quantum physics to evolutionary biology in an accessible and entertaining way. Perfect for curious minds of all ages.',
    coverImage: 'https://picsum.photos/seed/science5/400/400',
    category: [Category.Science, Category.Education],
    episodeCount: 178,
    subscribers: 275000,
    rating: 4.8,
    createdAt: '2021-01-20T00:00:00Z',
    updatedAt: '2024-12-19T00:00:00Z',
  },
  {
    id: 'podcast-6',
    title: 'History Uncovered',
    author: 'Prof. Emily Watson',
    description: 'Journey through time with Professor Watson as she uncovers forgotten stories, debunks historical myths, and brings the past to life. From ancient civilizations to modern history.',
    coverImage: 'https://picsum.photos/seed/history6/400/400',
    category: [Category.History, Category.Education],
    episodeCount: 234,
    subscribers: 410000,
    rating: 4.9,
    createdAt: '2019-06-15T00:00:00Z',
    updatedAt: '2024-12-20T00:00:00Z',
  },
  {
    id: 'podcast-7',
    title: 'Fitness First',
    author: 'Jake Thompson',
    description: 'Transform your body and mind with expert fitness advice, workout tips, nutrition guidance, and motivation. Jake, a certified personal trainer, helps you achieve your health goals.',
    coverImage: 'https://picsum.photos/seed/fitness7/400/400',
    category: [Category.HealthFitness],
    episodeCount: 267,
    subscribers: 380000,
    rating: 4.5,
    createdAt: '2020-02-01T00:00:00Z',
    updatedAt: '2024-12-22T00:00:00Z',
  },
  {
    id: 'podcast-8',
    title: 'Sports Center Live',
    author: 'Chris Martinez',
    description: 'Your go-to source for sports news, analysis, and commentary. Chris covers all major sports leagues, provides game breakdowns, and interviews athletes and coaches.',
    coverImage: 'https://picsum.photos/seed/sports8/400/400',
    category: [Category.Sports, Category.News],
    episodeCount: 445,
    subscribers: 520000,
    rating: 4.6,
    createdAt: '2018-09-01T00:00:00Z',
    updatedAt: '2024-12-23T00:00:00Z',
  },
  {
    id: 'podcast-9',
    title: 'The Daily Briefing',
    author: 'News Network Team',
    description: 'Stay informed with our comprehensive daily news podcast. We break down the top stories from around the world in under 30 minutes. Your morning essential.',
    coverImage: 'https://picsum.photos/seed/news9/400/400',
    category: [Category.News],
    episodeCount: 890,
    subscribers: 1200000,
    rating: 4.7,
    createdAt: '2017-01-01T00:00:00Z',
    updatedAt: '2024-12-23T00:00:00Z',
  },
  {
    id: 'podcast-10',
    title: 'Mind & Body Wellness',
    author: 'Dr. Jennifer Lee',
    description: 'Explore the connection between mental and physical health. Dr. Lee discusses mindfulness, meditation, stress management, and holistic wellness approaches.',
    coverImage: 'https://picsum.photos/seed/wellness10/400/400',
    category: [Category.HealthFitness, Category.Education],
    episodeCount: 198,
    subscribers: 290000,
    rating: 4.8,
    createdAt: '2021-04-10T00:00:00Z',
    updatedAt: '2024-12-21T00:00:00Z',
  },
  {
    id: 'podcast-11',
    title: 'Startup Stories',
    author: 'Tom Anderson',
    description: 'Behind-the-scenes stories of successful startups. Tom interviews founders about their journey, challenges, failures, and ultimate success. Inspiration for aspiring entrepreneurs.',
    coverImage: 'https://picsum.photos/seed/startup11/400/400',
    category: [Category.Business, Category.Technology],
    episodeCount: 145,
    subscribers: 210000,
    rating: 4.6,
    createdAt: '2021-08-20T00:00:00Z',
    updatedAt: '2024-12-19T00:00:00Z',
  },
  {
    id: 'podcast-12',
    title: 'Laugh Out Loud',
    author: 'Comedy Collective',
    description: 'A rotating cast of comedians bring you fresh jokes, improv sessions, and comedic commentary on current events. New voices, endless laughs.',
    coverImage: 'https://picsum.photos/seed/laugh12/400/400',
    category: [Category.Comedy],
    episodeCount: 278,
    subscribers: 340000,
    rating: 4.5,
    createdAt: '2020-03-15T00:00:00Z',
    updatedAt: '2024-12-22T00:00:00Z',
  },
];

// ============================================
// Mock Episodes Data
// ============================================

export const mockEpisodes: Episode[] = [
  // Tech Talk Daily Episodes
  {
    id: 'episode-1-1',
    podcastId: 'podcast-1',
    title: 'The Future of AI: What 2025 Holds',
    description: 'We explore the latest AI developments and predict what the next year will bring for artificial intelligence in consumer products and enterprise solutions.',
    duration: 2340, // 39 minutes
    releaseDate: '2024-12-20T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    episodeNumber: 245,
    thumbnail: 'https://picsum.photos/seed/ep1-1/200/200',
  },
  {
    id: 'episode-1-2',
    podcastId: 'podcast-1',
    title: 'Apple Vision Pro: 6 Months Later',
    description: 'A comprehensive review of Apple Vision Pro after six months in the market. Has it lived up to the hype?',
    duration: 2580, // 43 minutes
    releaseDate: '2024-12-18T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    episodeNumber: 244,
    thumbnail: 'https://picsum.photos/seed/ep1-2/200/200',
  },
  {
    id: 'episode-1-3',
    podcastId: 'podcast-1',
    title: 'Quantum Computing Breakthrough Explained',
    description: 'Google claims quantum supremacy 2.0. We break down what this means for the future of computing.',
    duration: 1980, // 33 minutes
    releaseDate: '2024-12-15T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    episodeNumber: 243,
    thumbnail: 'https://picsum.photos/seed/ep1-3/200/200',
  },
  {
    id: 'episode-1-4',
    podcastId: 'podcast-1',
    title: 'The Rise of Electric Vehicles',
    description: 'How Tesla, Rivian, and traditional automakers are shaping the EV landscape in 2024.',
    duration: 2760, // 46 minutes
    releaseDate: '2024-12-13T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    episodeNumber: 242,
  },
  {
    id: 'episode-1-5',
    podcastId: 'podcast-1',
    title: 'Cybersecurity in the Age of AI',
    description: 'How artificial intelligence is both a threat and a defense mechanism in modern cybersecurity.',
    duration: 2100, // 35 minutes
    releaseDate: '2024-12-10T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    episodeNumber: 241,
  },
  {
    id: 'episode-1-6',
    podcastId: 'podcast-1',
    title: 'Interview: The CEO of OpenAI',
    description: 'An exclusive interview discussing the future of generative AI and responsible development.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-08T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    episodeNumber: 240,
  },
  {
    id: 'episode-1-7',
    podcastId: 'podcast-1',
    title: 'Smart Home Tech Worth Buying',
    description: 'Our curated list of smart home devices that actually make life easier.',
    duration: 1800, // 30 minutes
    releaseDate: '2024-12-05T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    episodeNumber: 239,
  },
  {
    id: 'episode-1-8',
    podcastId: 'podcast-1',
    title: '5G vs WiFi 7: The Ultimate Showdown',
    description: 'Comparing the latest wireless technologies and which one you should invest in.',
    duration: 2220, // 37 minutes
    releaseDate: '2024-12-03T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    episodeNumber: 238,
  },

  // Crime Chronicles Episodes
  {
    id: 'episode-2-1',
    podcastId: 'podcast-2',
    title: 'The Vanishing of Flight 2501',
    description: 'Investigating the mysterious 1950 disappearance of Northwest Airlines Flight 2501 over Lake Michigan.',
    duration: 3240, // 54 minutes
    releaseDate: '2024-12-18T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    episodeNumber: 156,
    thumbnail: 'https://picsum.photos/seed/ep2-1/200/200',
  },
  {
    id: 'episode-2-2',
    podcastId: 'podcast-2',
    title: 'The DB Cooper Mystery',
    description: 'The only unsolved hijacking in American aviation history. Who was DB Cooper?',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-11T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    episodeNumber: 155,
    thumbnail: 'https://picsum.photos/seed/ep2-2/200/200',
  },
  {
    id: 'episode-2-3',
    podcastId: 'podcast-2',
    title: 'Cold Case: The Zodiac Killer',
    description: 'New evidence and theories about the infamous Zodiac Killer case.',
    duration: 4200, // 70 minutes
    releaseDate: '2024-12-04T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    episodeNumber: 154,
  },
  {
    id: 'episode-2-4',
    podcastId: 'podcast-2',
    title: 'The Art of Criminal Profiling',
    description: 'How FBI profilers build psychological portraits of unknown criminals.',
    duration: 2880, // 48 minutes
    releaseDate: '2024-11-27T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    episodeNumber: 153,
  },
  {
    id: 'episode-2-5',
    podcastId: 'podcast-2',
    title: 'Forensic Science Breakthroughs',
    description: 'How modern DNA technology is solving decades-old cold cases.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-11-20T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    episodeNumber: 152,
  },

  // The Comedy Hour Episodes
  {
    id: 'episode-3-1',
    podcastId: 'podcast-3',
    title: 'Holiday Party Disasters',
    description: 'Dave and Lisa share their most embarrassing holiday party stories and read listener submissions.',
    duration: 3900, // 65 minutes
    releaseDate: '2024-12-22T14:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    episodeNumber: 312,
    thumbnail: 'https://picsum.photos/seed/ep3-1/200/200',
  },
  {
    id: 'episode-3-2',
    podcastId: 'podcast-3',
    title: 'Guest: Kevin Hart',
    description: 'Kevin Hart joins us to discuss his new tour, being a dad, and his most awkward moments.',
    duration: 4500, // 75 minutes
    releaseDate: '2024-12-15T14:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    episodeNumber: 311,
    thumbnail: 'https://picsum.photos/seed/ep3-2/200/200',
  },
  {
    id: 'episode-3-3',
    podcastId: 'podcast-3',
    title: 'Dating App Horror Stories',
    description: 'The wildest dating app experiences you will ever hear. Trust us.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-08T14:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    episodeNumber: 310,
  },
  {
    id: 'episode-3-4',
    podcastId: 'podcast-3',
    title: 'Improv Games Special',
    description: 'Live improv session with audience suggestions. Pure chaos ensues.',
    duration: 4200, // 70 minutes
    releaseDate: '2024-12-01T14:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    episodeNumber: 309,
  },
  {
    id: 'episode-3-5',
    podcastId: 'podcast-3',
    title: 'Roasting Each Other',
    description: 'Dave and Lisa roast each other for a full hour. No filters, no mercy.',
    duration: 3300, // 55 minutes
    releaseDate: '2024-11-24T14:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    episodeNumber: 308,
  },

  // Business Insights Episodes
  {
    id: 'episode-4-1',
    podcastId: 'podcast-4',
    title: 'Building a Billion-Dollar Brand',
    description: 'How to create a brand that stands the test of time with marketing expert Seth Godin.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-12-21T09:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    episodeNumber: 189,
    thumbnail: 'https://picsum.photos/seed/ep4-1/200/200',
  },
  {
    id: 'episode-4-2',
    podcastId: 'podcast-4',
    title: 'Remote Work Revolution',
    description: 'How companies are adapting to permanent remote work and what it means for careers.',
    duration: 2400, // 40 minutes
    releaseDate: '2024-12-14T09:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    episodeNumber: 188,
  },
  {
    id: 'episode-4-3',
    podcastId: 'podcast-4',
    title: 'Investment Strategies for 2025',
    description: 'Financial experts share their top investment picks for the coming year.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-12-07T09:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    episodeNumber: 187,
  },
  {
    id: 'episode-4-4',
    podcastId: 'podcast-4',
    title: 'Leadership in Crisis',
    description: 'How great leaders navigate uncertainty and inspire teams during difficult times.',
    duration: 2580, // 43 minutes
    releaseDate: '2024-11-30T09:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    episodeNumber: 186,
  },
  {
    id: 'episode-4-5',
    podcastId: 'podcast-4',
    title: 'The Gig Economy: Opportunity or Trap?',
    description: 'Examining the pros and cons of the gig economy for workers and businesses.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-11-23T09:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    episodeNumber: 185,
  },

  // Science Explained Episodes
  {
    id: 'episode-5-1',
    podcastId: 'podcast-5',
    title: 'Black Holes: The Final Frontier',
    description: 'Everything you need to know about black holes, from formation to the information paradox.',
    duration: 2880, // 48 minutes
    releaseDate: '2024-12-19T11:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    episodeNumber: 178,
    thumbnail: 'https://picsum.photos/seed/ep5-1/200/200',
  },
  {
    id: 'episode-5-2',
    podcastId: 'podcast-5',
    title: 'CRISPR and the Future of Medicine',
    description: 'How gene editing technology is revolutionizing treatment for genetic diseases.',
    duration: 3120, // 52 minutes
    releaseDate: '2024-12-12T11:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    episodeNumber: 177,
  },
  {
    id: 'episode-5-3',
    podcastId: 'podcast-5',
    title: 'Climate Change: The Hard Facts',
    description: 'A data-driven look at climate change impacts and potential solutions.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-05T11:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    episodeNumber: 176,
  },
  {
    id: 'episode-5-4',
    podcastId: 'podcast-5',
    title: 'The Science of Sleep',
    description: 'Why we sleep, what happens when we dont, and how to optimize your rest.',
    duration: 2400, // 40 minutes
    releaseDate: '2024-11-28T11:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    episodeNumber: 175,
  },
  {
    id: 'episode-5-5',
    podcastId: 'podcast-5',
    title: 'Extraterrestrial Life: Are We Alone?',
    description: 'The search for life beyond Earth and what recent discoveries tell us.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-11-21T11:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    episodeNumber: 174,
  },

  // History Uncovered Episodes
  {
    id: 'episode-6-1',
    podcastId: 'podcast-6',
    title: 'The Real Cleopatra',
    description: 'Separating myth from reality about one of historys most fascinating figures.',
    duration: 3300, // 55 minutes
    releaseDate: '2024-12-20T12:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    episodeNumber: 234,
    thumbnail: 'https://picsum.photos/seed/ep6-1/200/200',
  },
  {
    id: 'episode-6-2',
    podcastId: 'podcast-6',
    title: 'The Silk Road: Ancient Internet',
    description: 'How the Silk Road connected civilizations and spread ideas across continents.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-13T12:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    episodeNumber: 233,
  },
  {
    id: 'episode-6-3',
    podcastId: 'podcast-6',
    title: 'The Fall of the Roman Empire',
    description: 'What really caused the collapse of one of historys greatest empires?',
    duration: 4200, // 70 minutes
    releaseDate: '2024-12-06T12:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    episodeNumber: 232,
  },
  {
    id: 'episode-6-4',
    podcastId: 'podcast-6',
    title: 'Women Who Changed History',
    description: 'Unsung heroines whose contributions shaped the world we live in.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-11-29T12:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    episodeNumber: 231,
  },
  {
    id: 'episode-6-5',
    podcastId: 'podcast-6',
    title: 'The Age of Exploration',
    description: 'The brave (and sometimes brutal) voyages that mapped our world.',
    duration: 3420, // 57 minutes
    releaseDate: '2024-11-22T12:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    episodeNumber: 230,
  },

  // Fitness First Episodes
  {
    id: 'episode-7-1',
    podcastId: 'podcast-7',
    title: '30-Day Transformation Challenge',
    description: 'A complete guide to transforming your body in just 30 days with our proven program.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-12-22T06:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    episodeNumber: 267,
    thumbnail: 'https://picsum.photos/seed/ep7-1/200/200',
  },
  {
    id: 'episode-7-2',
    podcastId: 'podcast-7',
    title: 'Nutrition Myths Debunked',
    description: 'Common nutrition myths that might be sabotaging your fitness goals.',
    duration: 2400, // 40 minutes
    releaseDate: '2024-12-15T06:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    episodeNumber: 266,
  },
  {
    id: 'episode-7-3',
    podcastId: 'podcast-7',
    title: 'Home Workout Masterclass',
    description: 'Build muscle and burn fat with zero equipment. Yes, its possible.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-12-08T06:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    episodeNumber: 265,
  },
  {
    id: 'episode-7-4',
    podcastId: 'podcast-7',
    title: 'Recovery: The Missing Piece',
    description: 'Why recovery is just as important as training, and how to optimize it.',
    duration: 2100, // 35 minutes
    releaseDate: '2024-12-01T06:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    episodeNumber: 264,
  },
  {
    id: 'episode-7-5',
    podcastId: 'podcast-7',
    title: 'Supplements: What Actually Works',
    description: 'Evidence-based guide to supplements that deliver real results.',
    duration: 2580, // 43 minutes
    releaseDate: '2024-11-24T06:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    episodeNumber: 263,
  },

  // Sports Center Live Episodes
  {
    id: 'episode-8-1',
    podcastId: 'podcast-8',
    title: 'NFL Playoff Preview',
    description: 'Breaking down every playoff matchup and our predictions for the championship.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-23T07:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    episodeNumber: 445,
    thumbnail: 'https://picsum.photos/seed/ep8-1/200/200',
  },
  {
    id: 'episode-8-2',
    podcastId: 'podcast-8',
    title: 'NBA Season Analysis',
    description: 'Mid-season review: surprises, disappointments, and MVP candidates.',
    duration: 3300, // 55 minutes
    releaseDate: '2024-12-20T07:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    episodeNumber: 444,
  },
  {
    id: 'episode-8-3',
    podcastId: 'podcast-8',
    title: 'World Cup 2026 Preview',
    description: 'Everything you need to know about the upcoming World Cup in North America.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-12-17T07:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    episodeNumber: 443,
  },
  {
    id: 'episode-8-4',
    podcastId: 'podcast-8',
    title: 'Interview: LeBron James',
    description: 'Exclusive interview with the King about his career, legacy, and playing with his son.',
    duration: 4200, // 70 minutes
    releaseDate: '2024-12-14T07:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    episodeNumber: 442,
  },
  {
    id: 'episode-8-5',
    podcastId: 'podcast-8',
    title: 'College Football Championship Recap',
    description: 'Analysis of the championship game and whats next for college football.',
    duration: 2400, // 40 minutes
    releaseDate: '2024-12-11T07:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    episodeNumber: 441,
  },

  // The Daily Briefing Episodes
  {
    id: 'episode-9-1',
    podcastId: 'podcast-9',
    title: 'December 23 Briefing',
    description: 'Top stories: Market updates, international diplomacy, and holiday travel chaos.',
    duration: 1500, // 25 minutes
    releaseDate: '2024-12-23T05:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    episodeNumber: 890,
    thumbnail: 'https://picsum.photos/seed/ep9-1/200/200',
  },
  {
    id: 'episode-9-2',
    podcastId: 'podcast-9',
    title: 'December 22 Briefing',
    description: 'Top stories: Tech regulation updates, climate summit results, economic forecast.',
    duration: 1620, // 27 minutes
    releaseDate: '2024-12-22T05:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    episodeNumber: 889,
  },
  {
    id: 'episode-9-3',
    podcastId: 'podcast-9',
    title: 'December 21 Briefing',
    description: 'Top stories: Healthcare policy changes, infrastructure bill progress, sports updates.',
    duration: 1440, // 24 minutes
    releaseDate: '2024-12-21T05:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    episodeNumber: 888,
  },
  {
    id: 'episode-9-4',
    podcastId: 'podcast-9',
    title: 'December 20 Briefing',
    description: 'Top stories: Federal Reserve decision, international trade deals, cultural highlights.',
    duration: 1680, // 28 minutes
    releaseDate: '2024-12-20T05:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    episodeNumber: 887,
  },
  {
    id: 'episode-9-5',
    podcastId: 'podcast-9',
    title: 'December 19 Briefing',
    description: 'Top stories: Election updates, corporate earnings, weather emergencies.',
    duration: 1560, // 26 minutes
    releaseDate: '2024-12-19T05:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    episodeNumber: 886,
  },

  // Mind & Body Wellness Episodes
  {
    id: 'episode-10-1',
    podcastId: 'podcast-10',
    title: 'Meditation for Beginners',
    description: 'A complete guide to starting a meditation practice, even if youve never done it before.',
    duration: 2400, // 40 minutes
    releaseDate: '2024-12-21T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    episodeNumber: 198,
    thumbnail: 'https://picsum.photos/seed/ep10-1/200/200',
  },
  {
    id: 'episode-10-2',
    podcastId: 'podcast-10',
    title: 'Managing Anxiety Naturally',
    description: 'Evidence-based techniques for reducing anxiety without medication.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-12-14T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    episodeNumber: 197,
  },
  {
    id: 'episode-10-3',
    podcastId: 'podcast-10',
    title: 'The Gut-Brain Connection',
    description: 'How your digestive health affects your mental wellbeing.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-12-07T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    episodeNumber: 196,
  },
  {
    id: 'episode-10-4',
    podcastId: 'podcast-10',
    title: 'Breathing Exercises for Stress',
    description: 'Simple breathing techniques that can instantly reduce stress and improve focus.',
    duration: 1800, // 30 minutes
    releaseDate: '2024-11-30T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    episodeNumber: 195,
  },
  {
    id: 'episode-10-5',
    podcastId: 'podcast-10',
    title: 'Building Healthy Habits',
    description: 'The science of habit formation and how to make wellness a lifestyle.',
    duration: 2580, // 43 minutes
    releaseDate: '2024-11-23T08:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    episodeNumber: 194,
  },

  // Startup Stories Episodes
  {
    id: 'episode-11-1',
    podcastId: 'podcast-11',
    title: 'From Garage to Unicorn: Stripe',
    description: 'The incredible story of how two brothers built a $95 billion payments company.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-19T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    episodeNumber: 145,
    thumbnail: 'https://picsum.photos/seed/ep11-1/200/200',
  },
  {
    id: 'episode-11-2',
    podcastId: 'podcast-11',
    title: 'Airbnb: Surviving Near-Death',
    description: 'How Airbnb went from selling cereal boxes to becoming a travel giant.',
    duration: 3300, // 55 minutes
    releaseDate: '2024-12-12T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    episodeNumber: 144,
  },
  {
    id: 'episode-11-3',
    podcastId: 'podcast-11',
    title: 'The SpaceX Journey',
    description: 'From multiple failed launches to revolutionizing space travel.',
    duration: 4200, // 70 minutes
    releaseDate: '2024-12-05T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    episodeNumber: 143,
  },
  {
    id: 'episode-11-4',
    podcastId: 'podcast-11',
    title: 'Notion: Building in Public',
    description: 'How Notion rebuilt their product from scratch and won the productivity wars.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-11-28T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    episodeNumber: 142,
  },
  {
    id: 'episode-11-5',
    podcastId: 'podcast-11',
    title: 'Figma: Designer by Design',
    description: 'The story of the design tool that Adobe paid $20 billion for.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-11-21T10:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    episodeNumber: 141,
  },

  // Laugh Out Loud Episodes
  {
    id: 'episode-12-1',
    podcastId: 'podcast-12',
    title: 'Stand-Up Spotlight: New Faces',
    description: 'Three up-and-coming comedians perform their best material.',
    duration: 3600, // 60 minutes
    releaseDate: '2024-12-22T15:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    episodeNumber: 278,
    thumbnail: 'https://picsum.photos/seed/ep12-1/200/200',
  },
  {
    id: 'episode-12-2',
    podcastId: 'podcast-12',
    title: 'Improv Night: Audience Edition',
    description: 'Our comedians improvise scenes based on your ridiculous suggestions.',
    duration: 4500, // 75 minutes
    releaseDate: '2024-12-15T15:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    episodeNumber: 277,
  },
  {
    id: 'episode-12-3',
    podcastId: 'podcast-12',
    title: 'Weird News Roundup',
    description: 'The strangest news stories of the week, with comedic commentary.',
    duration: 2700, // 45 minutes
    releaseDate: '2024-12-08T15:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    episodeNumber: 276,
  },
  {
    id: 'episode-12-4',
    podcastId: 'podcast-12',
    title: 'Bad Advice Column',
    description: 'Our comedians give hilariously bad advice to real listener questions.',
    duration: 3300, // 55 minutes
    releaseDate: '2024-12-01T15:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    episodeNumber: 275,
  },
  {
    id: 'episode-12-5',
    podcastId: 'podcast-12',
    title: 'Comedy Roast: Internet Trends',
    description: 'We roast the most cringe-worthy internet trends of 2024.',
    duration: 3000, // 50 minutes
    releaseDate: '2024-11-24T15:00:00Z',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    episodeNumber: 274,
  },
];

// ============================================
// Helper Functions
// ============================================

export const getPodcastById = (id: string): Podcast | undefined => {
  return mockPodcasts.find((podcast) => podcast.id === id);
};

export const getEpisodeById = (id: string): Episode | undefined => {
  return mockEpisodes.find((episode) => episode.id === id);
};

export const getEpisodesByPodcastId = (podcastId: string): Episode[] => {
  return mockEpisodes
    .filter((episode) => episode.podcastId === podcastId)
    .sort((a, b) => b.episodeNumber - a.episodeNumber);
};

export const getPodcastsByCategory = (category: Category): Podcast[] => {
  return mockPodcasts.filter((podcast) => podcast.category.includes(category));
};

export const getTrendingPodcasts = (limit: number = 8): Podcast[] => {
  return [...mockPodcasts]
    .sort((a, b) => b.subscribers - a.subscribers)
    .slice(0, limit);
};

export const getRecentlyAddedPodcasts = (limit: number = 6): Podcast[] => {
  return [...mockPodcasts]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
};

export const getFeaturedPodcast = (): Podcast => {
  // Return the podcast with highest rating and subscriber count
  return mockPodcasts.reduce((featured, current) => {
    const featuredScore = featured.rating * featured.subscribers;
    const currentScore = current.rating * current.subscribers;
    return currentScore > featuredScore ? current : featured;
  });
};

export const searchPodcasts = (query: string): Podcast[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockPodcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(lowercaseQuery) ||
      podcast.author.toLowerCase().includes(lowercaseQuery) ||
      podcast.description.toLowerCase().includes(lowercaseQuery) ||
      podcast.category.some((cat) => cat.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchEpisodes = (query: string): Episode[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockEpisodes.filter(
    (episode) =>
      episode.title.toLowerCase().includes(lowercaseQuery) ||
      episode.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getAllCategories = (): Category[] => {
  return Object.values(Category);
};
