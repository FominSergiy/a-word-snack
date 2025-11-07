// Mock book summaries for demo purposes
// In production, these would come from an API

export const MOCK_BOOKS = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    summary: `**Key Takeaways:**

1. **The Power of Tiny Changes**: Small habits compound over time. A 1% improvement each day leads to 37x better results in a year.

2. **The Four Laws of Behavior Change**:
   - Make it Obvious (cue)
   - Make it Attractive (craving)
   - Make it Easy (response)
   - Make it Satisfying (reward)

3. **Identity-Based Habits**: Focus on who you wish to become, not what you want to achieve. Every action is a vote for the type of person you want to be.

4. **The Plateau of Latent Potential**: Results often don't appear until you cross a critical threshold. Be patient and trust the process.

5. **Environment Design**: Your environment shapes your behavior more than willpower. Design your space to make good habits obvious and bad habits invisible.`,
    thumbnail: '📚'
  },
  {
    id: '2',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    summary: `**Key Takeaways:**

1. **Three Major Revolutions**: Human history shaped by Cognitive Revolution (70,000 years ago), Agricultural Revolution (12,000 years ago), and Scientific Revolution (500 years ago).

2. **Shared Myths**: Humans dominate because we can cooperate flexibly in large numbers through shared beliefs in things that exist only in our imagination (nations, money, religions).

3. **Agricultural Revolution**: May have been history's biggest fraud - it increased total food production but made life harder for individual humans with longer work hours and worse diets.

4. **Imagined Orders**: Most human cooperation networks are based on imagined realities like money, corporations, and human rights.

5. **The Future**: Biotechnology and artificial intelligence may soon replace natural selection with intelligent design.`,
    thumbnail: '🌍'
  },
  {
    id: '3',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Psychology',
    summary: `**Key Takeaways:**

1. **Two Systems**: System 1 (fast, automatic, emotional) and System 2 (slow, deliberate, logical). Most of our thinking happens in System 1.

2. **Cognitive Biases**: We're prone to systematic errors like anchoring, availability bias, and loss aversion. We overestimate rare events and underestimate common ones.

3. **Loss Aversion**: Losses loom larger than gains. The pain of losing $100 is more intense than the pleasure of gaining $100.

4. **The Illusion of Understanding**: We construct coherent stories about the past but can't predict the future. We underestimate the role of chance.

5. **Experiencing Self vs. Remembering Self**: Our memory doesn't accurately reflect our experiences. Peak moments and endings matter more than duration.`,
    thumbnail: '🧠'
  },
  {
    id: '4',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    category: 'Business',
    summary: `**Key Takeaways:**

1. **Build-Measure-Learn Loop**: Create a minimum viable product (MVP), measure how customers respond, and learn whether to pivot or persevere.

2. **Validated Learning**: Startups exist to learn how to build a sustainable business. Use scientific experimentation to discover truth about your business.

3. **Innovation Accounting**: Track actionable metrics, not vanity metrics. Focus on what causes growth, not just growth itself.

4. **Pivot or Persevere**: Regularly evaluate whether to make a fundamental change to the product or strategy based on validated learning.

5. **Continuous Deployment**: Release early and often. Small batch sizes reduce waste and accelerate learning cycles.`,
    thumbnail: '🚀'
  },
  {
    id: '5',
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Memoir',
    summary: `**Key Takeaways:**

1. **The Power of Education**: Born to survivalists in Idaho, Tara never attended school but eventually earned a PhD from Cambridge. Education transformed her worldview and life.

2. **Family vs. Self**: The tension between family loyalty and self-discovery. Sometimes growth requires distance from those who shaped you.

3. **Truth is Subjective**: Different family members remember the same events completely differently, showing how perception shapes reality.

4. **Breaking Cycles**: Education can break cycles of abuse and isolation, but at a cost - the loss of one's original community and identity.

5. **Resilience**: Despite physical and psychological abuse, lack of formal education, and extreme isolation, the human spirit can overcome and thrive.`,
    thumbnail: '📖'
  },
  {
    id: '6',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    summary: `**Key Takeaways:**

1. **Deep Work Defined**: Professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit.

2. **Shallow Work is Dangerous**: Non-cognitively demanding tasks done while distracted. In a world of shallow work, deep work becomes rare and valuable.

3. **Four Philosophies**: Monastic (eliminate all distractions), Bimodal (alternate between deep and shallow periods), Rhythmic (daily habit), Journalistic (fit it in whenever possible).

4. **Attention Residue**: When switching tasks, attention doesn't immediately follow. Minimize context switching to maximize productivity.

5. **Embrace Boredom**: Train your ability to concentrate by embracing boredom and avoiding constant stimulation from phones and internet.`,
    thumbnail: '⚡'
  },
  {
    id: '7',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    category: 'Self-Help',
    summary: `**Key Takeaways:**

1. **Choose Your Struggles**: You have limited f*cks to give. Choose what matters to you and stop caring about everything else.

2. **Problems Never End**: Life is essentially an endless series of problems. The solution is choosing problems you enjoy solving.

3. **You're Not Special**: Accepting that you're not exceptional is liberating. It frees you from unrealistic expectations.

4. **Values Matter**: What you value determines your problems. Choose values based on reality, socially constructive, immediate and controllable.

5. **Certainty is the Enemy**: The more you admit you don't know, the more you learn. Certainty breeds dogmatism and closes your mind.`,
    thumbnail: '🎯'
  },
  {
    id: '8',
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    summary: `**Key Takeaways:**

1. **Totalitarian Control**: The Party controls every aspect of life through surveillance ("Big Brother is watching"), propaganda, and manipulation of language and history.

2. **Doublethink**: The ability to hold two contradictory beliefs simultaneously and accept both. Essential for party members to function.

3. **Newspeak**: Language designed to limit thought. If there's no word for freedom, you can't think about being free.

4. **Psychological Manipulation**: Room 101 contains your worst fear. The Party breaks you by making you betray yourself.

5. **War is Peace**: Perpetual war keeps society focused on external enemies rather than internal oppression. The ultimate warning about political power and propaganda.`,
    thumbnail: '👁️'
  }
];

// Mock function to generate random snippets
export const getRandomSnippets = (count = 2, exclude = []) => {
  const available = MOCK_BOOKS.filter(book => !exclude.includes(book.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Mock function to get a random "liked" snippet (for demo)
export const getRandomLikedSnippet = () => {
  const mockUsers = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan'];
  const book = MOCK_BOOKS[Math.floor(Math.random() * MOCK_BOOKS.length)];
  return {
    ...book,
    likedBy: mockUsers[Math.floor(Math.random() * mockUsers.length)]
  };
};
