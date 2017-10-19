import Controller from '@ember/controller';

export default Controller.extend({
  messages: [
    {
      author: {
        nick: 'mikoszcz',
        avatarUrl: '/images/people/mikoszcz.png'
      },
      time: '12:28 PM',
      content: '@ledom bedziemy budowac kopie FlappyBirda przy uzyciu JS’a :wink: mniej wiecej jak na filmiku'
    },
    {
      author: {
        nick: 'ledom',
        avatarUrl: '/images/people/ledom.png'
      },
      time: '12:34 PM',
      content: ' ok, dzięki za informacje'
    },
    {
      author: {
        nick: 'mikoszcz',
        avatarUrl: '/images/people/mikoszcz.png'
      },
      time: '4:06 PM',
      content: ' https://github.com/miksturait/tutorial-gra-w-javascript link do repo'
    },
    {
      author: {
        nick: 'alanpieczonka00',
        avatarUrl: '/images/people/alanpieczonka00.jpg'
      },
      time: '7:57 PM',
      content: ' @mikoscz Dzięki za fajne warsztaty :wink:'
    },
    {
      author: {
        nick: 'mikoszcz',
        avatarUrl: '/images/people/mikoszcz.png'
      },
      time: '3:55 PM',
      content: ' @channel Dzięki wszystkim za warsztaty wczoraj, w weekend postaram sie uzupelnic readme na repo aby kazdy mogl zrobić coś podobnego step by step :wink: '
    },
    {
      author: {
        nick: 'cs3b',
        avatarUrl: '/images/people/cs3b.png'
      },
      time: '4:32 PM',
      content: '@channel naszego coder dojo jest na crossweb :slightly_smiling_face: \
      @alanpieczonka00 podał ten pomysł, wieć próbujemy :slightly_smiling_face: Dziś dodałem pozostałe 9 wydarzeń które będą miały miejsce jeszcze w tym roku. \
      Jeśli ty, twój kolega, mana, babcia, ciocia, wujek, brat cioteczny, ... ma konto na crossweb i chciałbym pomóc wypromować nasze coder dojo, można kliknąć gwiazdkę na cyklu wydarzeń :slightly_smiling_face: \
      https://crossweb.pl/cykle-wydarzen/coder-dojo-bielsko-biala/'
    },
  ]
});
