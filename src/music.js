import { v4 as uuidv4 } from 'uuid'
function music() {
  return [
    {
      name: 'Cloud Zone',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
      artist: 'Evil Needle, Misha',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=51078',
      colors: ['#C6A669', '#B7A498'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Summer Vibe',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
      artist: 'Evil Needle, Misha',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=51088',
      colors: ['#C6A669', '#B7A498'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Cloud Zone',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
      artist: 'Evil Needle, Misha',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=51078',
      colors: ['#C6A669', '#B7A498'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'In the Night',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
      artist: 'Evil Needle, Misha',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=51086',
      colors: ['#C6A669', '#B7A498'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Twilight',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
      artist: 'Evil Needle, Misha',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=51084',
      colors: ['#C6A669', '#B7A498'],
      id: uuidv4(),
      active: false,
    },
  ]
}

export default music
