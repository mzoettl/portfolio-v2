export interface Photo {
  src: string;
  thumb: string;
  alt: string;
  caption?: string;
}

export const photos: Photo[] = [
  { src: '/images/lissabon-city.jpg',               thumb: '/images/lissabon-city_thumb.jpg',               alt: 'Lisbon',                  caption: 'Lisbon, Portugal' },
  { src: '/images/madrid.jpg',                       thumb: '/images/madrid_thumb.jpg',                       alt: 'Madrid',                  caption: 'Madrid, Spain' },
  { src: '/images/venice.jpg',                       thumb: '/images/venice_thumb.jpg',                       alt: 'Venice',                  caption: 'Venice, Italy' },
  { src: '/images/empty-naschmarkt.jpg',             thumb: '/images/empty-naschmarkt_thumb.jpg',             alt: 'Naschmarkt Vienna',       caption: 'Naschmarkt, Vienna' },
  { src: '/images/metro-vienna.jpg',                 thumb: '/images/metro-vienna_thumb.jpg',                 alt: 'Vienna Metro',            caption: 'Metro, Vienna' },
  { src: '/images/metro-cinemagraph.gif',            thumb: '/images/metro-cinemagraph_thumb.gif',            alt: 'Vienna Cinemagraph',      caption: 'Cinemagraph, Vienna' },
  { src: '/images/millenium-tower-vienna.jpg',       thumb: '/images/millenium-tower-vienna_thumb.jpg',       alt: 'Millennium Tower Vienna', caption: 'Millennium Tower, Vienna' },
  { src: '/images/wiener-prater-ferris-wheel.jpg',   thumb: '/images/wiener-prater-ferris-wheel_thumb.jpg',   alt: 'Wiener Prater',           caption: 'Prater, Vienna' },
  { src: '/images/vietnam-street.jpg',               thumb: '/images/vietnam-street_thumb.jpg',               alt: 'Vietnam Street',          caption: 'Vietnam' },
  { src: '/images/sunny-mountain.jpg',               thumb: '/images/sunny-mountain_thumb.jpg',               alt: 'Mountains',               caption: 'Mountains' },
  { src: '/images/misty-palms.jpg',                  thumb: '/images/misty-palms_thumb.jpg',                  alt: 'Misty Palms',             caption: 'Misty Palms' },
  { src: '/images/stargaze.jpg',                     thumb: '/images/stargaze_thumb.jpg',                     alt: 'Stargazing',              caption: 'Stargazing' },
  { src: '/images/tennis-court.jpg',                 thumb: '/images/tennis-court_thumb.jpg',                 alt: 'Tennis Court',            caption: 'Tennis Court' },
  { src: '/images/portrait-tram.jpg',                thumb: '/images/portrait-tram_thumb.jpg',                alt: 'Portrait on Tram',        caption: 'Portrait, Vienna' },
  { src: '/images/lonely-runner.jpg',                thumb: '/images/lonely-runner_thumb.jpg',                alt: 'Lonely Runner',           caption: 'Runner' },
  { src: '/images/sunset-surfers.jpg',               thumb: '/images/sunset-surfers_thumb.jpg',               alt: 'Sunset Surfers',          caption: 'Surfers at Sunset' },
  { src: '/images/train.jpg',                        thumb: '/images/train_thumb.jpg',                        alt: 'Train',                   caption: 'Train' },
  { src: '/images/sunset.jpg',                       thumb: '/images/sunset_thumb.jpg',                       alt: 'Sunset',                  caption: 'Sunset' },
];
