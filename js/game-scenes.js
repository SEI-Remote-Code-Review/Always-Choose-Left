const gameScenes  = [
  {
    id: 1,
    text: 'As you walk down the overgrown path you can’t believe you let your friends talk you into this. You think to yourself, this place looks like it’s falling down, you don’t care if it’s haunted you don’t really want to go in there, but you’re a teenager and you can’t have your friends thinking you’re scared. As you step onto the porch you hear a noise behind you. You turn slightly. The entrance is now to your left the way back to your right.',
    options: [
      {
        text: 'Go in.',
        nextText: 2
      },
      {
        text: 'Turn around and run away (screaming like crazy if applicable).',
        nextText: 1.1
      }
    ]
  },
  {
    id: 1.1,
    text: 'A freakish horse-headed monster that reminds you of the Minotaur from Greek mythology is running down the path neighing and screaming in your general direction.', 
    options: [
      {
        text: 'Go in.',
        nextText: 2
      },
      {
        text: 'Turn around and run away (screaming like crazy if applicable).',
        nextText: 1.2
      }
    ]
  },
  {
    id: 1.2,
    text: 'Game Over! You’ve died a freakish horsey death!',
    options: [
      {
        text: 'Restart Game',
        nextText: -1
      }
    ]
  },
  {
    id: 2,
    text:'You walk through the door and it close all by itself behind you. You check the doorknob and it appears to be locked with no way to open it. It’s a musty room with coat hooks in front of you and a small desk to the left to your right and in front of you by the coat hooks you can see the darkened entrances to other rooms.',
    options:[
      {

      }
    ]
  }
]