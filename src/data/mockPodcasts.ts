import { Category, Episode, Podcast } from '../types';

const audioSamples = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
];

const makeEpisodes = (
  podcastId: string,
  titles: string[],
  startNumber = 1
): Episode[] =>
  titles.map((title, index) => ({
    id: `${podcastId}-ep-${index + startNumber}`,
    podcastId,
    title,
    description: `${title} dives deep into the topic with expert commentary and actionable takeaways.`,
    duration: 900 + index * 180,
    releaseDate: new Date(2024, 10 - index, 15 - index).toISOString(),
    audioUrl: audioSamples[index % audioSamples.length],
    episodeNumber: index + startNumber,
    thumbnail: `https://picsum.photos/seed/${podcastId}-${index}/300/300`
  }));

const podcasts: Podcast[] = [
  {
    id: 'tech-frontiers',
    title: 'Tech Frontiers',
    author: 'Lena Park',
    description: 'Exploring emerging technologies, product strategy, and the people building the future.',
    coverImage: 'https://picsum.photos/seed/tech-frontiers/640/640',
    category: [Category.Technology, Category.Science],
    episodeCount: 6,
    subscribers: 12400,
    rating: 4.8,
    episodes: makeEpisodes('tech-frontiers', [
      'AI at the Edge',
      'Designing for Privacy',
      'Quantum Hype vs Reality',
      'Sustainable Computing',
      'Building with WebAssembly',
      'Voice Interfaces Reborn'
    ])
  },
  {
    id: 'boardroom-briefs',
    title: 'Boardroom Briefs',
    author: 'Elliot Shaw',
    description: 'Weekly breakdowns of market moves, leadership lessons, and founder stories.',
    coverImage: 'https://picsum.photos/seed/boardroom-briefs/640/640',
    category: [Category.Business],
    episodeCount: 5,
    subscribers: 9800,
    rating: 4.6,
    episodes: makeEpisodes('boardroom-briefs', [
      'The Return of Small Brands',
      'Pricing Experiments that Work',
      'Managing Remote Boards',
      'Fundraising without the Burnout',
      'Succession in Modern Startups'
    ])
  },
  {
    id: 'laugh-lab',
    title: 'Laugh Lab',
    author: 'Mara & Dev',
    description: 'Improv-driven comedy about tech mishaps, dating, and everything awkward.',
    coverImage: 'https://picsum.photos/seed/laugh-lab/640/640',
    category: [Category.Comedy],
    episodeCount: 6,
    subscribers: 14300,
    rating: 4.5,
    episodes: makeEpisodes('laugh-lab', [
      'Roasting Our First Jobs',
      'Tech Support Gone Wild',
      'Roommate Red Flags',
      'Dating App Dilemmas',
      'Worst Demo Day Stories',
      'Who Ate My Lunch?'
    ])
  },
  {
    id: 'learn-fast',
    title: 'Learn Fast',
    author: 'Dr. Irene Soto',
    description: 'Bite-sized lessons on learning science, productivity, and cognitive tools.',
    coverImage: 'https://picsum.photos/seed/learn-fast/640/640',
    category: [Category.Education, Category.Science],
    episodeCount: 5,
    subscribers: 8700,
    rating: 4.7,
    episodes: makeEpisodes('learn-fast', [
      'Memory Techniques that Stick',
      'Note-taking for Builders',
      'The Case for Spaced Repetition',
      'Learning in Public',
      'Teaching with Story'
    ])
  },
  {
    id: 'wellness-wire',
    title: 'Wellness Wire',
    author: 'Nora Kim',
    description: 'Evidence-based health discussions, from sleep to strength and mental fitness.',
    coverImage: 'https://picsum.photos/seed/wellness-wire/640/640',
    category: [Category.Health],
    episodeCount: 6,
    subscribers: 15600,
    rating: 4.9,
    episodes: makeEpisodes('wellness-wire', [
      'The Sleep Reset',
      'Metabolic Myths',
      'Strength After 30',
      'Office Ergonomics 101',
      'Food as Feedback',
      'Breathwork without the Hype'
    ])
  },
  {
    id: 'crime-threads',
    title: 'Crime Threads',
    author: 'Avery Quinn',
    description: 'Narrative true crime with meticulous research and immersive sound design.',
    coverImage: 'https://picsum.photos/seed/crime-threads/640/640',
    category: [Category.TrueCrime],
    episodeCount: 5,
    subscribers: 20400,
    rating: 4.4,
    episodes: makeEpisodes('crime-threads', [
      'The Vanishing Train',
      'Cold Case Letters',
      'The Coded Journal',
      'Evidence in Plain Sight',
      'The Voice on the Tape'
    ])
  },
  {
    id: 'global-brief',
    title: 'Global Brief',
    author: 'Amir Saleh',
    description: 'Daily briefing on geopolitics, markets, and technology shaping the world.',
    coverImage: 'https://picsum.photos/seed/global-brief/640/640',
    category: [Category.News],
    episodeCount: 5,
    subscribers: 18200,
    rating: 4.3,
    episodes: makeEpisodes('global-brief', [
      'AI and Elections',
      'Semiconductor Alliances',
      'Energy Transition Update',
      'South Asia Spotlight',
      'Private Space Race'
    ])
  },
  {
    id: 'sideline-stories',
    title: 'Sideline Stories',
    author: 'Chris and Jo',
    description: 'Sports storytelling beyond the scores: culture, tactics, and the athletes.',
    coverImage: 'https://picsum.photos/seed/sideline-stories/640/640',
    category: [Category.Sports],
    episodeCount: 5,
    subscribers: 7400,
    rating: 4.2,
    episodes: makeEpisodes('sideline-stories', [
      'Underdog Game Plans',
      'Data in the Dugout',
      'Recovery Rituals',
      'Rivalry Week',
      'Inside the Locker Room'
    ])
  },
  {
    id: 'science-signals',
    title: 'Science Signals',
    author: 'Prof. Malik Rao',
    description: 'Signals from labs worldwide: biology, physics, climate, and beyond.',
    coverImage: 'https://picsum.photos/seed/science-signals/640/640',
    category: [Category.Science],
    episodeCount: 5,
    subscribers: 9100,
    rating: 4.8,
    episodes: makeEpisodes('science-signals', [
      'CRISPR at Scale',
      'Fusion Milestones',
      'Microbiome Mysteries',
      'Climate Models Explained',
      'Materials that Heal'
    ])
  },
  {
    id: 'histories-hidden',
    title: 'Histories Hidden',
    author: 'Leah Ortega',
    description: 'Revealing untold histories, overlooked movements, and voices long ignored.',
    coverImage: 'https://picsum.photos/seed/histories-hidden/640/640',
    category: [Category.History],
    episodeCount: 5,
    subscribers: 6500,
    rating: 4.6,
    episodes: makeEpisodes('histories-hidden', [
      'The Lost City',
      'Letters from the Front',
      'Inventors in Shadows',
      'The Map that Changed Trade',
      'Hidden Matriarchies'
    ])
  },
  {
    id: 'founders-radio',
    title: 'Founders Radio',
    author: 'Samir Patel',
    description: 'Operator-first interviews on building products, teams, and sustainable companies.',
    coverImage: 'https://picsum.photos/seed/founders-radio/640/640',
    category: [Category.Business, Category.Technology],
    episodeCount: 6,
    subscribers: 22000,
    rating: 4.9,
    episodes: makeEpisodes('founders-radio', [
      'Zero to One Hundred Users',
      'Hiring Your First PM',
      'Selling in a Downturn',
      'Design Debt and How to Pay It',
      'Async Companies',
      'The Last Mile of Onboarding'
    ])
  },
  {
    id: 'mindful-minute',
    title: 'Mindful Minute',
    author: 'Chloe Rivers',
    description: 'Short guided sessions and reflections for calmer, intentional workdays.',
    coverImage: 'https://picsum.photos/seed/mindful-minute/640/640',
    category: [Category.Health],
    episodeCount: 5,
    subscribers: 11200,
    rating: 4.7,
    episodes: makeEpisodes('mindful-minute', [
      'Morning Reset',
      'Midday Focus',
      'Evening Unwind',
      'Breathing before Feedback',
      'Weekend Reflection'
    ])
  }
];

export default podcasts;
