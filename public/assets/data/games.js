var games = []; // Clear the existing games array

// Add your custom games
games.push({
  id: 'eggycar',
  title: 'Eggy Car',
  url: 'https://eggycar-game.com/',
  image: 'https://images.crazygames.com/eggy-car/20230720050147/eggy-car-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop'
});

games.push({
  id: 'rooftopsnipers',
  title: 'Rooftop Snipers',
  url: 'https://rooftop-snipers.github.io/',
  image: 'https://images.crazygames.com/games/rooftop-snipers/cover-1585549826611.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop'
});

games.push({
  id: 'snowrider',
  title: 'Snow Rider',
  url: 'https://1l56df6.github.io/Snow-Rider3D-main/index.html',
  image: 'https://th.bing.com/th/id/OIP.wtAAxPidX8CKaYrD8KtQ1wHaE4?rs=1&pid=ImgDetMain'
});

games.push({
  id: 'soccerrandom',
  title: 'Soccer Random',
  url: 'https://www.twoplayergames.org/game/soccer-random',
  image: 'https://th.bing.com/th/id/OIP.ZeCP4V85T-XXKW_fxg9azwHaD4?rs=1&pid=ImgDetMain'
});

games.push({
  id: 'basketrandom',
  title: 'Basket Random',
  url: 'https://www.twoplayergames.org/game/basket-random',
  image: 'https://th.bing.com/th/id/OIP.5zsBtUGkxD0IDHUPW6TFrQHaFj?rs=1&pid=ImgDetMain'
});

games.push({
  id: 'miniputt',
  title: 'Mini Putt',
  url: 'https://www.twoplayergames.org/game/mini-putt',
  image: 'https://th.bing.com/th/id/OIP.rD56_Hn_ws4CeUiCwWMOkgHaEF?rs=1&pid=ImgDetMain'
});

// Optionally, sort the games alphabetically by title
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});

console.log("Loaded " + games.length + " custom games");
