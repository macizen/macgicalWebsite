const Webamp = window.Webamp;

// Check if Winamp is supported in this browser
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("media player doesnt work :c")
};

const webamp = new Webamp({
  initialTracks: [
    {
      url: "/winampSongs/5dollarsDemo.mp3"
    },
    {
      url: "/winampSongs/cutebeat.mp3"
    },
    {
      url: "/winampSongs/tamblaross.mp3"
    },
    {
      url: "/winampSongs/bbtb.mp3"
    },
    {
      url: "/winampSongs/theGoodPartFIXED.mp3"
    },
    {
      url: "/winampSongs/nyanFIXED.mp3"
    },
    {
      url: "/winampSongs/need_you_now.mp3"
    },
    {
      url: "/winampSongs/speak_no_evil_lead.mp3"
    },
    {
      url: "/winampSongs/coconutTree.mp3"
    },
    {
      url: "/winampSongs/marioTypeBeat.mp3"
    },
    {
      url: "/winampSongs/FilmDemo2.mp3"
    },
    {
      url: "/winampSongs/wtaf.mp3"
    },
  ],
  initialSkin: {
    url: "/winampSkins/midnight.zip"
  },
  __butterchurnOptions: {
    importButterchurn: () => Promise.resolve(window.butterchurn),
    getPresets: () => {
      const presets = window.butterchurnPresets.getPresets();
      return Object.keys(presets).map((name) => {
        return {
          name,
          butterchurnPresetObject: presets[name],
        };
      });
    },
    butterchurnOpen: true,
  },
  windowLayout: {
    main: { position: { top: 0, left: 0 } },
    equalizer: { position: { top: 116, left: 0 } },
    playlist: {
      position: { top: 232, left: 0 },
      size: { extraWidth: 0, extraHeight: 4 },
    },
    milkdrop: {
      position: { top: 0, left: 275 },
      size: { extraHeight: 12, extraWidth: 7 },
    },
  },
});

// Returns a promise indicating when it's done loading.
webamp.renderWhenReady(document.getElementById("winamp-container"));