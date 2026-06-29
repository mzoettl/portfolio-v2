export interface Film {
  youtubeId: string;
  title: string;
  description?: string;
}

// Replace youtubeId with the actual YouTube video IDs from your channel
// e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ → youtubeId: 'dQw4w9WgXcQ'
export const films: Film[] = [
  { youtubeId: 'REPLACE_ME_1', title: 'Film Title 1', description: 'Short description' },
  { youtubeId: 'REPLACE_ME_2', title: 'Film Title 2', description: 'Short description' },
  { youtubeId: 'REPLACE_ME_3', title: 'Film Title 3', description: 'Short description' },
  { youtubeId: 'REPLACE_ME_4', title: 'Film Title 4', description: 'Short description' },
  { youtubeId: 'REPLACE_ME_5', title: 'Film Title 5', description: 'Short description' },
];
