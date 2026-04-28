const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

const flattenPlaylists = (playlistsArr) => {
  const flatArr = [];

  if (!Array.isArray(playlistsArr)) return flatArr;

  for (let i = 0; i < playlistsArr.length; i++) {
    for (let j = 0; j < playlistsArr[i].length; j++) {
      flatArr.push({ ...playlistsArr[i][j], source: [i, j] });
    }
  }

  return flatArr;
};

const scoreTracks = (tracksArr) => {
  return tracksArr.map((track) => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120),
  }));
};

const dedupeTracks = (tracksArr) => {
  const noDupesArr = [];

  for (const track of tracksArr) {
    //if some track with this trackID doesn't already exist
    //in noDupesArr, push this track
    if (!noDupesArr.some(({ trackId }) => trackId === track.trackId)) {
      noDupesArr.push(track);
    }
  }

  return noDupesArr;
};

const enforceArtistQuota = (tracksArr, maxAllowedOccurance) => {
  const newArr = [];
  const occurances = {};

  for (const track of tracksArr) {
    const { artist } = track;

    //initialize artist occurance count for new artist
    if (occurances[artist] === undefined) {
      occurances[artist] = 0;
    }

    //if maxOccurances is not reached for current artist
    //increase count and push track in newArr
    if (occurances[artist] < maxAllowedOccurance) {
      occurances[artist]++;
      newArr.push(track);
    }
  }

  return newArr;
};

const buildSchedule = (tracksArr) => {
  return tracksArr.map(({ trackId }, index) => ({ slot: index + 1, trackId }));
};

const remixPlaylist = (playlistsArr, maxAllowedOccurance) => {
  let tracks = flattenPlaylists(playlistsArr);
  tracks = scoreTracks(tracks);
  tracks = dedupeTracks(tracks);
  tracks = enforceArtistQuota(tracks, maxAllowedOccurance);

  return buildSchedule(tracks);
};
