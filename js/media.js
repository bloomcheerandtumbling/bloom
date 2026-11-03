// Add approved Bloom practice photos here.
window.mediaPosts = [
  ...[
    'Athlete practicing a jump above a round training mat during tumbling class',
    'Athlete jumping with arms raised while classmates wait their turn',
    'Athlete practicing a jump beside classmates on the gym floor',
    'Athlete working on jump technique above a round training mat',
    'Athlete practicing a tuck jump above a round training mat',
    'Athlete practicing a backward roll on an inclined tumbling mat',
    'Athlete stepping onto an inclined tumbling mat during class',
    'Coach assisting an athlete with a skill over a pink tumbling trainer',
    'Athletes practicing tumbling skills beside a pink training block'
  ].map((alt, index) => ({
    title: 'Cheer and tumbling class',
    category: 'practice',
    type: 'photo',
    src: `assets/photos/classes/cheer-tumbling-class-hot-springs-${String(index + 1).padStart(2, '0')}.webp`,
    alt: `${alt} at Bloom Cheer & Tumbling in Hot Springs`
  })),
  {
    title: 'Confidence in motion',
    category: 'practice',
    type: 'photo',
    src: 'assets/photos/hero/beginner-tumbling-practice-hot-springs.webp',
    alt: 'Young athlete building confidence during beginner tumbling practice',
    caption: 'Balance, coordination, and confidence grow with every repetition.'
  },
  {
    title: 'Supportive coaching',
    category: 'practice',
    type: 'photo',
    src: 'assets/photos/about/supportive-youth-tumbling-coach-hot-springs.webp',
    alt: 'Coach encouraging young athletes during beginner tumbling practice',
    caption: 'Patient instruction helps every athlete feel supported as they learn.'
  },
  {
    title: 'Learning together',
    category: 'practice',
    type: 'photo',
    src: 'assets/photos/about/youth-tumbling-class-hot-springs.webp',
    alt: 'Young athletes smiling and encouraging one another during tumbling class',
    caption: 'Practice is even better when athletes encourage and celebrate one another.'
  },
  {
    title: 'Move, learn, and grow',
    category: 'practice',
    type: 'photo',
    src: 'assets/photos/programs/youth-cheer-tumbling-classes-hot-springs.webp',
    alt: 'Young athletes enjoying a group cheer and tumbling class',
    caption: 'Group classes bring together movement, energy, and plenty of fun.'
  },
  {
    title: 'Building skills step by step',
    category: 'practice',
    type: 'photo',
    src: 'assets/photos/programs/youth-tumbling-skill-progression-hot-springs.webp',
    alt: 'Young athletes practicing handstands with a tumbling coach nearby',
    caption: 'Safe progressions help athletes develop strength, control, and confidence.'
  }
];
