import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const PASSWORD = "Password@123";

const HASHED_PASSWORD = bcrypt.hashSync(
  PASSWORD,
  10
);

function randomItem<T>(
  array: T[]
): T {
  return array[
    Math.floor(Math.random() * array.length)
  ];
}

function randomInt(
  min: number,
  max: number
) {
  return (
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min
  );
}

function randomDate(
  lastDays: number
) {
  const now = new Date();

  const past = new Date();

  past.setDate(
    now.getDate() - lastDays
  );

  return new Date(
    past.getTime() +
      Math.random() *
        (now.getTime() -
          past.getTime())
  );
}

type SeedUser = {
  name: string;
  username: string;
  email: string;
  country: string;
  city: string;
  bio: string;
  website: string;
};

const USERS: SeedUser[] = [
    {
    name: "Tanu Sharma",
    username: "tanusharma",
    email: "tanu@example.com",
    country: "India",
    city: "Delhi",
    bio: "BTech student • Full Stack Developer • AI Enthusiast",
    website: "https://tanusharma.dev",
  },
  {
    name: "Rahul Verma",
    username: "rahulverma",
    email: "rahul@example.com",
    country: "India",
    city: "Mumbai",
    bio: "Software Engineer | React | Node.js",
    website: "https://rahul.dev",
  },
  {
    name: "Priya Singh",
    username: "priyasingh",
    email: "priya@example.com",
    country: "India",
    city: "Lucknow",
    bio: "UI/UX Designer | Coffee Lover",
    website: "https://priya.design",
  },
  {
    name: "Aman Gupta",
    username: "amangupta",
    email: "aman@example.com",
    country: "India",
    city: "Jaipur",
    bio: "Cybersecurity Student",
    website: "https://aman.dev",
  },
  {
    name: "Neha Kapoor",
    username: "nehakapoor",
    email: "neha@example.com",
    country: "India",
    city: "Chandigarh",
    bio: "Frontend Developer",
    website: "https://neha.dev",
  },
  {
    name: "Rohan Mehta",
    username: "rohanmehta",
    email: "rohan@example.com",
    country: "India",
    city: "Pune",
    bio: "Backend Developer | Docker | AWS",
    website: "https://rohan.dev",
  },
  {
    name: "Ananya Iyer",
    username: "ananyaiyer",
    email: "ananya@example.com",
    country: "India",
    city: "Chennai",
    bio: "AI Research Student",
    website: "https://ananya.ai",
  },
  {
    name: "Karan Malhotra",
    username: "karanmalhotra",
    email: "karan@example.com",
    country: "India",
    city: "Noida",
    bio: "Open Source Contributor",
    website: "https://karan.dev",
  },
  {
    name: "Meera Nair",
    username: "meeranair",
    email: "meera@example.com",
    country: "India",
    city: "Kochi",
    bio: "Travel Blogger & Photographer",
    website: "https://meera.blog",
  },
  {
    name: "Aditya Joshi",
    username: "adityajoshi",
    email: "aditya@example.com",
    country: "India",
    city: "Indore",
    bio: "Competitive Programmer",
    website: "https://aditya.dev",
  },

    {
    name: "Vivek Kumar",
    username: "vivekkumar",
    email: "vivek@example.com",
    country: "India",
    city: "Bengaluru",
    bio: "Cloud Engineer • DevOps • AWS",
    website: "https://vivek.dev",
  },
  {
    name: "Simran Kaur",
    username: "simrankaur",
    email: "simran@example.com",
    country: "India",
    city: "Amritsar",
    bio: "Content Creator & UI Designer",
    website: "https://simran.design",
  },
  {
    name: "Arjun Rao",
    username: "arjunrao",
    email: "arjun@example.com",
    country: "India",
    city: "Hyderabad",
    bio: "Full Stack Developer • React • Next.js",
    website: "https://arjun.dev",
  },
  {
    name: "Ishita Roy",
    username: "ishitaroy",
    email: "ishita@example.com",
    country: "India",
    city: "Kolkata",
    bio: "Frontend Developer • Coffee Lover",
    website: "https://ishita.dev",
  },
  {
    name: "Yash Agarwal",
    username: "yashagarwal",
    email: "yash@example.com",
    country: "India",
    city: "Kanpur",
    bio: "Cybersecurity & AI Enthusiast",
    website: "https://yash.dev",
  },
  {
    name: "Emily Johnson",
    username: "emilyjohnson",
    email: "emily@example.com",
    country: "United States",
    city: "New York",
    bio: "Lifestyle Blogger ✈️",
    website: "https://emilyjohnson.me",
  },
  {
    name: "Ethan Walker",
    username: "ethanwalker",
    email: "ethan@example.com",
    country: "United States",
    city: "Seattle",
    bio: "Software Engineer • Startups",
    website: "https://ethan.dev",
  },
  {
    name: "Sophia Miller",
    username: "sophiamiller",
    email: "sophia@example.com",
    country: "United States",
    city: "Los Angeles",
    bio: "Photographer 📷",
    website: "https://sophiapics.com",
  },
  {
    name: "Noah Wilson",
    username: "noahwilson",
    email: "noah@example.com",
    country: "United States",
    city: "Boston",
    bio: "Building SaaS Products",
    website: "https://noah.dev",
  },
  {
    name: "Olivia Brown",
    username: "oliviabrown",
    email: "olivia@example.com",
    country: "United States",
    city: "Chicago",
    bio: "Marketing • Design • AI",
    website: "https://olivia.design",
  },

    {
    name: "Charlotte Green",
    username: "charlottegreen",
    email: "charlotte@example.com",
    country: "United Kingdom",
    city: "London",
    bio: "UX Researcher • Accessibility Advocate",
    website: "https://charlotte.uk",
  },
  {
    name: "Harry Collins",
    username: "harrycollins",
    email: "harry@example.com",
    country: "United Kingdom",
    city: "Manchester",
    bio: "Football Fan • Full Stack Developer",
    website: "https://harry.dev",
  },
  {
    name: "Amelia Scott",
    username: "ameliascott",
    email: "amelia@example.com",
    country: "United Kingdom",
    city: "Liverpool",
    bio: "Creative Designer • Branding Specialist",
    website: "https://amelia.design",
  },

  {
    name: "Liam Parker",
    username: "liamparker",
    email: "liam@example.com",
    country: "Canada",
    city: "Toronto",
    bio: "Cloud Engineer • AI Builder",
    website: "https://liam.ai",
  },
  {
    name: "Ava Thompson",
    username: "avathompson",
    email: "ava@example.com",
    country: "Canada",
    city: "Vancouver",
    bio: "Nature Photographer",
    website: "https://ava.photos",
  },

  {
    name: "Lukas Schneider",
    username: "lukasschneider",
    email: "lukas@example.com",
    country: "Germany",
    city: "Berlin",
    bio: "Backend Engineer • Distributed Systems",
    website: "https://lukas.dev",
  },
  {
    name: "Mia Fischer",
    username: "miafischer",
    email: "mia@example.com",
    country: "Germany",
    city: "Munich",
    bio: "Travel Blogger • Photographer",
    website: "https://miafischer.com",
  },
  {
    name: "Leon Weber",
    username: "leonweber",
    email: "leon@example.com",
    country: "Germany",
    city: "Hamburg",
    bio: "Cybersecurity Researcher",
    website: "https://leon.dev",
  },

  {
    name: "Emma Laurent",
    username: "emmalaurent",
    email: "emma@example.com",
    country: "France",
    city: "Paris",
    bio: "UI Designer • Minimalist",
    website: "https://emma.design",
  },
  {
    name: "Hugo Bernard",
    username: "hugobernard",
    email: "hugo@example.com",
    country: "France",
    city: "Lyon",
    bio: "Software Engineer • Cyclist",
    website: "https://hugo.dev",
  },

    {
    name: "Haruto Tanaka",
    username: "harutotanaka",
    email: "haruto@example.com",
    country: "Japan",
    city: "Tokyo",
    bio: "Building robotics and AI projects.",
    website: "https://haruto.jp",
  },
  {
    name: "Yui Sato",
    username: "yuisato",
    email: "yui@example.com",
    country: "Japan",
    city: "Osaka",
    bio: "Illustrator and digital artist.",
    website: "https://yui.art",
  },
  {
    name: "Ren Nakamura",
    username: "rennakamura",
    email: "ren@example.com",
    country: "Japan",
    city: "Kyoto",
    bio: "Game developer and anime fan.",
    website: "https://ren.dev",
  },

  {
    name: "Minho Kim",
    username: "minhokim",
    email: "minho@example.com",
    country: "South Korea",
    city: "Seoul",
    bio: "Mobile app developer.",
    website: "https://minho.dev",
  },
  {
    name: "Jiwoo Park",
    username: "jiwoopark",
    email: "jiwoo@example.com",
    country: "South Korea",
    city: "Busan",
    bio: "Fashion creator and photographer.",
    website: "https://jiwoo.kr",
  },

  {
    name: "Lucas Silva",
    username: "lucassilva",
    email: "lucas@example.com",
    country: "Brazil",
    city: "São Paulo",
    bio: "Football, coding and startups.",
    website: "https://lucas.dev",
  },
  {
    name: "Sofia Costa",
    username: "sofiacosta",
    email: "sofia@example.com",
    country: "Brazil",
    city: "Rio de Janeiro",
    bio: "Food blogger and traveler.",
    website: "https://sofia.blog",
  },

  {
    name: "Jack Anderson",
    username: "jackanderson",
    email: "jack@example.com",
    country: "Australia",
    city: "Sydney",
    bio: "Cloud architect and surfer.",
    website: "https://jack.dev",
  },
  {
    name: "Chloe Martin",
    username: "chloemartin",
    email: "chloe@example.com",
    country: "Australia",
    city: "Melbourne",
    bio: "Product designer and illustrator.",
    website: "https://chloe.design",
  },

  {
    name: "David Okoro",
    username: "davidokoro",
    email: "david@example.com",
    country: "Nigeria",
    city: "Lagos",
    bio: "Entrepreneur building fintech products.",
    website: "https://david.tech",
  },
  {
    name: "Grace Adeyemi",
    username: "graceadeyemi",
    email: "grace@example.com",
    country: "Nigeria",
    city: "Abuja",
    bio: "Community manager and tech enthusiast.",
    website: "https://grace.tech",
  },

  {
    name: "Mason White",
    username: "masonwhite",
    email: "mason@example.com",
    country: "Canada",
    city: "Montreal",
    bio: "Full-stack developer and coffee enthusiast.",
    website: "https://mason.dev",
  },
];

const POSTS = [

  // AI
  "AI isn't replacing developers. Developers using AI are replacing developers who don't.",
  "Spent the weekend building an AI agent instead of another CRUD project.",
  "Prompt engineering alone isn't enough anymore. Agent orchestration is becoming the real skill.",
  "Context engineering might become one of the most valuable AI skills over the next few years.",
  "Learning to verify AI output is now as important as learning to write code.",
  "The newest generation of coding agents can now handle much larger development workflows than simple autocomplete.",
  "Figma's latest AI-powered design workflow is changing how designers prototype interfaces.",
  "Agentic AI is changing how software gets built.",

  // Software Development
  "Finished deploying my Next.js project today 🚀",
  "Docker finally clicked today.",
  "Git commits tell better stories than resumes.",
  "Clean code saves more time than fast code.",
  "Finally understood authentication with JWT.",
  "Backend development deserves more appreciation.",
  "Building full-stack apps is becoming easier with AI.",
  "Nothing beats solving a production bug after hours.",
  "System Design interviews are challenging but fun.",
  "Today's goal: ship features, not excuses.",

  // AI Tools
  "Testing multiple AI coding assistants on the same project is eye-opening.",
  "The newest generation of coding agents can now handle much larger development workflows than simple autocomplete. :contentReference[oaicite:2]{index=2}",
  "Figma's latest AI-powered design workflow is changing how designers prototype interfaces. :contentReference[oaicite:3]{index=3}",
  "AI is moving beyond chatbots into full workflow automation.",
  "Experimenting with multimodal AI models today.",

  // Placements
  "Placement season has officially started. Good luck everyone!",
  "Mock interviews matter more than most students realize.",
  "Building projects consistently beats collecting certificates.",
  "A strong GitHub profile is becoming a huge advantage.",
  "Every rejection teaches something useful.",

  // Workshops
  "Attending an AI workshop this weekend.",
  "Just completed a cloud computing bootcamp.",
  "Campus hackathons are the best place to learn teamwork.",
  "Workshops are valuable only if you build something afterward.",
  "Networking often starts with one conversation.",

  // Competitions
  "Preparing for the Smart India Hackathon.",
  "Joining another 24-hour hackathon this weekend.",
  "Coding competitions improve thinking speed.",
  "Looking for teammates for an upcoming AI challenge.",
  "Won second place in today's coding contest 🎉",

  // Technology
  "Edge AI is becoming more practical every month.",
  "Cybersecurity skills are more valuable than ever.",
  "Quantum computing research is moving fast.",
  "Agentic AI is changing how software gets built. :contentReference[oaicite:4]{index=4}",
  "Cloud-native development continues to dominate hiring.",

  // Career
  "Learning never stops in tech.",
  "Consistency beats motivation.",
  "The best investment is upgrading your skills.",
  "Reading technical documentation every day compounds over time.",
  "Trying to become 1% better every day.",

  // Student Life
  "Another late-night debugging session before submission 😅",
  "Assignment completed five minutes before the deadline.",
  "College Wi-Fi failed again.",
  "Coffee has officially become my programming language.",
  "Who else studies better after midnight?",

  // Travel
  "Exploring Tokyo after finishing a client project.",
  "Weekend trip to the mountains.",
  "Watching the sunset from Marine Drive.",
  "Paris looks even better in person.",
  "Travel always brings fresh ideas.",

  // Photography
  "Golden hour never disappoints.",
  "Street photography teaches patience.",
  "Captured some amazing night shots today.",
  "Trying a new camera lens this weekend.",
  "Photography helps me slow down.",

  // Food
  "Nothing beats homemade pizza 🍕",
  "Trying Korean food for the first time.",
  "Best coffee in town ☕",
  "Weekend brunch with friends.",
  "Late-night ramen after coding.",

  // Fitness
  "Morning workout before coding.",
  "Health is the real long-term investment.",
  "Small daily habits create big results.",
  "10,000 steps completed today.",
  "Back to the gym after two weeks.",

  // Startups
  "Every startup begins with one crazy idea.",
  "Building in public keeps me accountable.",
  "MVP first. Perfection later.",
  "Talking to users is better than making assumptions.",
  "Shipping products beats endlessly planning.",

    // ===== AI & AGENTS =====
  "AI agents are becoming teammates rather than just assistants.",
  "Building autonomous AI workflows is the next big engineering skill.",
  "Every company seems to be launching an AI feature this year.",
  "Multi-agent systems are making complex automation much easier.",
  "The best developers know when NOT to trust AI-generated code.",
  "Fine-tuning isn't always the answer. Better prompting often wins.",
  "AI is helping startups launch products faster than ever.",
  "Retrieval-Augmented Generation is becoming a standard architecture.",
  "AI is reducing repetitive work and increasing creative work.",
  "Experimenting with local LLMs today instead of cloud APIs.",
  "Open-source AI models keep getting stronger every month.",
  "AI-powered code reviews save hours every week.",
  "Voice AI is improving faster than I expected.",
  "Computer vision projects are finally becoming beginner-friendly.",
  "Learning AI fundamentals before chasing every new tool.",

  // ===== PROGRAMMING =====
  "Finally understood recursion after practicing for hours.",
  "Writing tests before coding actually makes development easier.",
  "Small commits make debugging much simpler.",
  "The terminal feels like a superpower once you master it.",
  "Next.js keeps getting better with every release.",
  "Refactoring old code is strangely satisfying.",
  "Today's challenge: zero TypeScript errors.",
  "Learning Rust just for fun.",
  "Building APIs is easier when the database is well designed.",
  "Debugging teaches more than tutorials.",

  // ===== CYBERSECURITY =====
  "Learning ethical hacking one lab at a time.",
  "Cybersecurity is no longer optional for developers.",
  "Password managers should be used by everyone.",
  "Every project deserves proper authentication.",
  "Secure code is better than clever code.",
  "Bug bounty reports are fascinating to read.",
  "OWASP Top 10 should be mandatory reading.",
  "Always validate user input.",
  "SQL injection is still surprisingly common.",
  "Security starts with good coding habits.",

  // ===== CLOUD & DEVOPS =====
  "Docker makes deployments so much smoother.",
  "Finally deployed using Kubernetes today.",
  "CI/CD pipelines save countless hours.",
  "Infrastructure as Code feels magical.",
  "Monitoring production systems is just as important as building them.",
  "Cloud costs matter as much as performance.",
  "Learning Terraform this week.",
  "GitHub Actions simplified my workflow.",
  "Containers make projects portable.",
  "Automating deployments feels incredibly rewarding.",

  // ===== COLLEGE LIFE =====
  "Library + headphones = productivity mode.",
  "Group projects always teach unexpected lessons.",
  "Another semester, another mountain of assignments.",
  "Attendance somehow still matters 😅",
  "Late-night coding with classmates is unforgettable.",
  "Preparing for practical exams today.",
  "Campus life goes by faster than expected.",
  "Learning outside the classroom matters the most.",
  "College friendships often become lifelong connections.",
  "Balancing coding and academics isn't easy.",

  // ===== PLACEMENTS =====
  "Preparing for technical interviews every evening.",
  "Consistency matters more than last-minute preparation.",
  "Building projects instead of memorizing answers.",
  "Every interview improves confidence.",
  "One offer letter can change everything.",
  "Learning DSA every single day.",
  "Interview preparation is a marathon, not a sprint.",
  "Strong communication skills matter too.",
  "Building a portfolio before graduation.",
  "Excited for placement season.",

  // ===== HACKATHONS & CODING COMPETITIONS =====
  "Hackathons teach more practical skills than months of theory.",
  "Our team finally finalized an idea after three hours of brainstorming.",
  "Nothing beats the excitement of demo day.",
  "Preparing for ICPC regional qualifiers this month.",
  "Competitive programming really improves logical thinking.",
  "Building under pressure is a skill every engineer should practice.",
  "Won the Best Innovation award at our college hackathon! 🏆",
  "Looking for teammates interested in AI and cybersecurity.",
  "Sometimes losing a hackathon teaches more than winning one.",

  // ===== TECH CONFERENCES & WORKSHOPS =====
  "Attending an AI Developers Summit this weekend.",
  "Today's workshop on Kubernetes was packed with practical tips.",
  "Met some amazing founders during the startup meetup.",
  "Networking is becoming one of the most valuable career skills.",
  "Listening to experienced engineers always changes my perspective.",
  "Workshops are valuable only when you build something afterward.",
  "Excited to attend a cybersecurity conference next month.",
  "Cloud computing sessions today were incredibly insightful.",
  "The Q&A session was even better than the keynote.",
  "Every conference introduces tools I've never heard about before.",

  // ===== STARTUPS =====
  "Shipping an MVP is better than chasing perfection.",
  "Every successful startup starts by solving one real problem.",
  "User feedback is more valuable than assumptions.",
  "Building products people actually need is the hardest part.",
  "Growth comes from consistency, not viral luck.",
  "Today's goal: improve the product by just 1%.",
  "A failed startup still teaches priceless lessons.",
  "Bootstrap first, scale later.",
  "Good founders spend more time listening than talking.",
  "Execution always beats ideas.",

  // ===== PHOTOGRAPHY =====
  "Captured the city skyline just before sunrise.",
  "Portrait photography is all about lighting.",
  "Experimenting with long-exposure shots tonight.",
  "Found an amazing hidden street full of murals.",
  "Photography helps me notice details I'd otherwise miss.",
  "Every picture tells a different story.",
  "Golden hour never disappoints.",
  "Learning color grading for my travel photos.",
  "Minimal editing often produces the best results.",
  "Trying black-and-white street photography this week.",

  // ===== TRAVEL =====
  "Exploring a new city always sparks fresh ideas.",
  "Weekend road trips are the perfect productivity reset.",
  "Nothing beats watching sunrise from the mountains.",
  "Local food makes every trip memorable.",
  "Collected another passport stamp today.",
  "The best journeys are usually unplanned.",
  "Travel reminds me how diverse the world really is.",
  "Found a peaceful café while exploring downtown.",
  "Walking through historic streets never gets old.",
  "Already planning my next adventure.",

  // ===== FOOD =====
  "Homemade pasta turned out better than expected.",
  "Trying authentic Japanese ramen today.",
  "Weekend barbecue with friends was worth every minute.",
  "Nothing beats fresh coffee before coding.",
  "Street food often has the best flavors.",
  "Finally learned how to make sushi.",
  "Healthy meals make long coding sessions easier.",
  "Dessert is always a good idea.",
  "Testing a new café recommended by friends.",
  "Food is one of the best ways to experience culture.",

  // ===== FITNESS =====
  "Morning runs help me think more clearly.",
  "Consistency in fitness is just like consistency in coding.",
  "Strength training before work feels amazing.",
  "Trying to maintain a healthy work-life balance.",
  "Health is an investment, not an expense.",
  "Small daily improvements lead to huge results.",
  "Completed my weekly fitness goal today.",
  "Stretching should never be skipped.",
  "A healthy body supports a productive mind.",
  "Progress takes patience.",

  // ===== SOCIAL CAUSES =====
  "Technology should be accessible to everyone.",
  "Digital literacy can change lives.",
  "Supporting local environmental cleanup this weekend.",
  "Open-source projects thrive because people choose to contribute.",
  "Education remains the strongest investment for society.",
  "Accessibility should never be an afterthought.",
  "Small acts of kindness create meaningful change.",
  "Volunteering always gives more than it takes.",
  "Building technology responsibly matters.",
  "Communities grow stronger when people help each other.",

  // ===== GAMING =====
  "Relaxing with a few matches after a long coding session.",
  "Game development combines creativity and engineering beautifully.",
  "Trying a new indie game recommended by a friend.",
  "Gaming is surprisingly good at teaching teamwork.",
  "Story-driven games leave a lasting impression.",
  "Exploring open-world games this weekend.",
  "Sometimes games inspire software ideas.",
  "Gaming nights with friends never get boring.",
  "The graphics in modern games are incredible.",
  "Balance work, study, and fun.",

  // ===== BOOKS =====
  "Reading one technical book every month.",
  "Books still provide depth that short videos can't.",
  "Started another book on software architecture.",
  "Biographies of founders are incredibly motivating.",
  "Today's reading: distributed systems.",
  "Reading before bed instead of scrolling.",
  "Knowledge compounds over time.",
  "Great books often answer questions you didn't know you had.",
  "Always keep learning.",
  "A good book can completely change your perspective.",

  // ===== CAREER GROWTH =====
  "Your portfolio speaks before your résumé does.",
  "Building skills creates long-term career security.",
  "Learning never stops in technology.",
  "Strong communication makes great engineers even better.",
  "One meaningful project is worth more than ten unfinished ones.",
  "Feedback accelerates growth.",
  "Curiosity is becoming the most valuable professional skill.",
  "Keep documenting your learning journey.",
  "Every difficult project expands your abilities.",
  "Future opportunities belong to continuous learners.",

  // ===== WORLD TECHNOLOGY (2026) =====
  "AI-powered robotics is moving from research labs into everyday businesses.",
  "Edge AI is making real-time applications much faster.",
  "Digital twins are transforming manufacturing workflows.",
  "Quantum computing research continues to accelerate globally.",
  "Battery technology keeps improving electric mobility.",
  "Autonomous delivery robots are becoming more common in cities.",
  "Satellite internet is connecting more remote communities.",
  "Privacy-preserving AI is becoming an important research area.",
  "Companies are investing heavily in AI infrastructure worldwide.",
  "The pace of technological innovation has never felt faster.",

    // ===== OPEN SOURCE & GITHUB =====
  "Merged my first pull request into an open-source project today.",
  "Open source is one of the fastest ways to grow as a developer.",
  "Maintaining documentation is just as important as writing code.",
  "Code reviews teach more than writing code alone.",
  "Every contribution makes the community stronger.",
  "Fixed a bug that had been open for months.",
  "Finally reached 100 GitHub contributions this month.",
  "Started maintaining my own open-source package.",
  "Helping beginners contribute to open source feels rewarding.",
  "Building in public keeps me accountable.",

  // ===== FREELANCING =====
  "Completed another freelance project successfully.",
  "Happy client, happy developer.",
  "Understanding business problems is as important as writing code.",
  "Freelancing teaches communication better than any course.",
  "Learning how to estimate project timelines.",
  "Every client has a different perspective.",
  "Building long-term relationships with clients matters.",
  "Another website delivered before the deadline.",
  "Negotiating project scope is an underrated skill.",
  "Small freelance projects eventually become a strong portfolio.",

  // ===== REMOTE WORK =====
  "Working remotely today with a cup of coffee beside me.",
  "A clean workspace improves focus.",
  "Time management matters even more while working remotely.",
  "Async communication makes global teams possible.",
  "Working with teammates across different time zones.",
  "Remote work offers flexibility but demands discipline.",
  "Daily standups keep everyone aligned.",
  "Deep work sessions without distractions are incredibly productive.",
  "A second monitor is one of my best productivity investments.",
  "Productivity is about consistency, not working longer hours.",

  // ===== UI / UX =====
  "Great design is almost invisible.",
  "Whitespace makes interfaces easier to understand.",
  "Every animation should have a purpose.",
  "Accessibility improves every user's experience.",
  "Design systems save countless development hours.",
  "Tiny UI improvements create huge usability gains.",
  "Dark mode always deserves extra attention.",
  "Micro-interactions make products feel alive.",
  "Design isn't decoration; it's problem-solving.",
  "Users remember experiences more than features.",

  // ===== DATA SCIENCE =====
  "Cleaning datasets takes longer than building models.",
  "Data visualization tells stories better than spreadsheets.",
  "Learning statistics makes machine learning easier.",
  "Good data beats complicated algorithms.",
  "Exploring real-world datasets today.",
  "Feature engineering is surprisingly creative.",
  "Python continues to dominate data science.",
  "Every prediction starts with quality data.",
  "Building dashboards for better insights.",
  "Understanding data is understanding people.",

  // ===== MACHINE LEARNING =====
  "Training models teaches patience.",
  "Hyperparameter tuning feels like an art.",
  "Every model has limitations.",
  "Model evaluation matters more than impressive accuracy.",
  "Experiment tracking saves countless hours.",
  "Learning reinforcement learning next.",
  "Small improvements compound into better models.",
  "Explainable AI is becoming increasingly important.",
  "ML isn't magic—it's mathematics and engineering.",
  "Production ML is harder than classroom ML.",

  // ===== BLOCKCHAIN =====
  "Learning blockchain fundamentals today.",
  "Smart contracts are fascinating to build.",
  "Decentralized applications keep evolving.",
  "Security audits are essential before deployment.",
  "Exploring real-world blockchain use cases.",
  "Blockchain extends far beyond cryptocurrency.",
  "Understanding consensus algorithms today.",
  "Web3 still has exciting opportunities.",
  "Building my first smart contract.",
  "Technology should solve real problems first.",

  // ===== AR / VR =====
  "Mixed reality has enormous educational potential.",
  "AR experiences are becoming more realistic.",
  "VR development is an exciting field.",
  "Immersive technology is changing learning.",
  "Building my first AR prototype.",
  "Spatial computing feels like the next platform.",
  "Interactive 3D experiences are becoming mainstream.",
  "Hardware improvements are driving innovation.",
  "Developers should explore immersive technologies.",
  "The future of interfaces might be beyond screens.",

  // ===== ENTREPRENEURSHIP =====
  "Entrepreneurship is solving problems consistently.",
  "Every business starts with understanding customers.",
  "Small daily improvements build successful companies.",
  "Execution creates opportunities.",
  "Building products requires resilience.",
  "Listening to users beats making assumptions.",
  "Customer feedback drives innovation.",
  "Learning sales alongside software development.",
  "Every startup journey is unique.",
  "Persistence often matters more than talent.",

  // ===== PRODUCTIVITY =====
  "Today's focus: one important task at a time.",
  "Consistency beats intensity.",
  "Planning tomorrow before ending today.",
  "Deep work creates meaningful progress.",
  "Removing distractions improves quality.",
  "Taking regular breaks improves creativity.",
  "Simple routines outperform complicated systems.",
  "Focus is becoming a competitive advantage.",
  "Small habits shape long-term success.",
  "Done is better than perfect.",

  // ===== DEVELOPER LIFE =====
  "Fixed one bug and discovered three more 😅",
  "The code worked immediately... suspiciously.",
  "My favorite debugging tool is still console.log().",
  "Nothing breaks faster than 'just one small change.'",
  "Finally deleted code instead of adding more.",
  "Today's commit message: 'hopefully fixed everything.'",
  "Stack Overflow remains a trusted companion.",
  "The best feeling is passing every test.",
  "Friday deployments still feel risky.",
  "Coffee and TypeScript make a productive combination.",

  // ===== SMALL BUSINESSES =====

"Handmade with love, packed with extra desi swag ✨",
"Small business. Big dreams. Zero excuses.",
"Support local, wear unique.",
"Every order makes someone's dream a little bigger ❤️",
"Creating happiness one package at a time.",
"Your support means more than you know.",
"Packaging today's orders with grateful hands.",
"Turning passion into a profession.",
"Dreams don't work unless we do.",
"Every handmade piece has its own story.",


// ===== RESIN ART =====

"Resin magic loading... ✨",
"Every resin piece is one of one.",
"Art you can actually wear.",
"Tiny details. Huge obsession.",
"Made by hand, never by machines.",
"Sparkles, resin and a whole lot of patience.",
"Pour. Cure. Shine. Repeat.",
"Every swirl is completely unique.",
"Handcrafted perfection takes time.",
"Resin therapy is real.",


// ===== BANGLES =====

"Adding a little jhumka energy to your outfit 💃",
"Because wrists deserve attention too.",
"Desi drip starts with bangles.",
"Simple outfit? Add bangles.",
"Traditional never goes out of style.",
"Stack them. Flaunt them.",
"Elegance is always in fashion.",
"Your festive look just found its best friend.",
"Classic with a modern twist.",
"A little sparkle never hurt anyone.",


// ===== SCRUNCHIES =====

"Bad hair day? Not anymore.",
"Soft on your hair, strong on style.",
"Messy bun but make it cute.",
"Hair accessories deserve main character energy.",
"Scrunchies > ordinary hair ties.",
"Comfort meets confidence.",
"Cute, comfy and absolutely necessary.",
"Collecting scrunchies like Pokémon.",
"Every hairstyle deserves personality.",
"Life's too short for boring accessories.",


// ===== BEAUTY =====

"Glow differently.",
"Confidence is the best makeup.",
"Healthy skin never goes out of style.",
"Skincare isn't luxury—it's self care.",
"Fresh face. Fresh mindset.",
"Invest in your skin.",
"Because glowing is a lifestyle.",
"Beautiful skin starts with consistency.",
"No filter. Just good skincare.",
"Glow first. Flex later.",


// ===== CANDLES =====

"Light a candle, slow your thoughts.",
"Hand-poured with good vibes.",
"A cozy room changes everything.",
"Your peace deserves a beautiful scent.",
"Weekend mood: candles and calm.",
"Luxury begins with little moments.",
"Every candle tells a story.",
"Scent can change your entire day.",
"Comfort in every flame.",
"Home should feel like therapy.",


// ===== CROCHET =====

"Every stitch is handmade happiness.",
"Crochet never goes out of fashion.",
"Slow fashion is beautiful fashion.",
"Made with patience and love.",
"One stitch closer to perfection.",
"Handcrafted beats factory-made every time.",
"Grandma would approve ❤️",
"Soft, cozy and handmade.",
"Tiny loops. Big creativity.",
"Crochet season is every season.",


// ===== JEWELLERY =====

"Minimal jewellery, maximum impact.",
"Your outfit deserves better accessories.",
"Luxury isn't always expensive.",
"Shine your own way.",
"Jewellery that speaks before you do.",
"Confidence is the best accessory.",
"Small details complete every look.",
"Elegance is timeless.",
"Wear what makes you smile.",
"Pretty things belong to pretty souls.",


// ===== FASHION =====

"Outfit check ✔️",
"Style has no rules.",
"Wear confidence every day.",
"Fashion fades, personality stays.",
"Today's mood is serving looks.",
"Comfort but make it fashionable.",
"Street style with desi energy.",
"Looking expensive without spending crazy.",
"Confidence completes every outfit.",
"Own your vibe.",


// ===== HOME BUSINESS =====

"Built from a small room with big dreams.",
"Every parcel carries hope.",
"Late nights create successful mornings.",
"Running a business isn't easy—but it's worth it.",
"Small beginnings create big futures.",
"Packing orders > scrolling endlessly.",
"CEO of my own dreams.",
"Powered by coffee and determination.",
"Every customer becomes family.",
"Success ships one order at a time.",


// ===== DESI BADDIE =====

"Serving looks with extra tadka 🔥",
"Not everyone's cup of chai ☕",
"Main character? Obviously.",
"Zero attitude... until you underestimate me.",
"Pretty, powerful and unapologetic.",
"Confidence stitched into every order.",
"Built different. Sold different.",
"Desi outside. Boss inside.",
"Cute but running a business.",
"Beauty with business brains.",


// ===== FESTIVE =====

"Festive season means sparkle season.",
"Shaadi shopping officially starts now.",
"Adding festive magic to every order.",
"Because celebrations deserve beautiful details.",
"Festival ready in style.",
"Traditional with a trendy twist.",
"Gift happiness this festive season.",
"Handmade gifts hit differently.",
"Celebrate beautifully.",
"Festivals feel better with handmade products.",


// ===== CUSTOMER LOVE =====

"Your reviews make our day ❤️",
"Another happy customer unlocked.",
"Customer selfies >>> advertisements.",
"Thank you for trusting a small business.",
"Returning customers feel like family.",
"Your support keeps us creating.",
"Nothing beats reading kind reviews.",
"Orders packed with gratitude.",
"Serving smiles one parcel at a time.",
"Small businesses grow because of people like you.",


// ===== FUNNY BUSINESS =====

"My bank balance says small business. My dreams say global brand.",
"POV: Packaging orders while dancing to Bollywood songs.",
"Started with one order. Never looked back.",
"Every order gets a tiny happy dance.",
"Coffee first. Orders next.",
"Running on caffeine and customer love.",
"When the courier arrives exactly on time 😌",
"Tracking parcel updates like it's Netflix.",
"Packing orders is my daily workout.",
"The only drama I enjoy is sale notifications.",


// ===== FOOD BUSINESSES =====

"Freshly baked happiness.",
"Dessert solves most problems.",
"Every bite deserves appreciation.",
"Homemade always tastes better.",
"Good food creates good memories.",
"Love served fresh every day.",
"Sweet enough to make your day.",
"Made fresh with real ingredients.",
"Calories don't count on weekends.",
"Food brings people together.",
];

// ---------------------------------------------
// Helpers
// ---------------------------------------------

const AVATARS = Array.from(
  { length: 100 },
  (_, i) => `https://i.pravatar.cc/300?img=${i + 1}`
);

const COVERS = Array.from(
  { length: 30 },
  (_, i) =>
    `https://picsum.photos/seed/cover-${i + 1}/1200/400`
);

let createdUsers: {
  id: string;
  name: string | null;
  email: string;
}[] = [];

// ---------------------------------------------
// MAIN
// ---------------------------------------------

async function main() {
  console.log("🧹 Cleaning old data...");

  await prisma.$transaction([
    prisma.message.deleteMany(),
    prisma.conversationMember.deleteMany(),
    prisma.conversation.deleteMany(),

    prisma.notification.deleteMany(),

    prisma.like.deleteMany(),
    prisma.comment.deleteMany(),

    prisma.follow.deleteMany(),

    prisma.savedPost.deleteMany(),
    prisma.share.deleteMany(),

    prisma.media.deleteMany(),
    prisma.postHashtag.deleteMany(),

    prisma.post.deleteMany(),

    prisma.story.deleteMany(),
    prisma.report.deleteMany(),
    prisma.refreshToken.deleteMany(),

    prisma.profile.deleteMany(),

    prisma.session.deleteMany(),
    prisma.account.deleteMany(),

    prisma.user.deleteMany(),
  ]);

  console.log("✅ Database cleaned.");

  // ---------------------------------------------
  // USERS
  // ---------------------------------------------

  console.log("👤 Creating users...");

  for (let i = 0; i < USERS.length; i++) {
    const user = USERS[i];

    const created = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: HASHED_PASSWORD,
        image: AVATARS[i % AVATARS.length],
      },
    });

    createdUsers.push(created);

    await prisma.profile.create({
      data: {
        userId: created.id,
        username: user.username,
        bio: user.bio,
        location: `${user.city}, ${user.country}`,
        website: user.website,
        avatar: AVATARS[i % AVATARS.length],
        coverImage: COVERS[i % COVERS.length],
      },
    });
  }

  console.log(`✅ ${createdUsers.length} users created.`);
    // ---------------------------------------------
  // POSTS
  // ---------------------------------------------

  console.log("📝 Creating posts...");

  const IMAGE_URLS = [
    "https://picsum.photos/seed/post1/1200/800",
    "https://picsum.photos/seed/post2/1200/800",
    "https://picsum.photos/seed/post3/1200/800",
    "https://picsum.photos/seed/post4/1200/800",
    "https://picsum.photos/seed/post5/1200/800",
    "https://picsum.photos/seed/post6/1200/800",
    "https://picsum.photos/seed/post7/1200/800",
    "https://picsum.photos/seed/post8/1200/800",
    "https://picsum.photos/seed/post9/1200/800",
    "https://picsum.photos/seed/post10/1200/800",
  ];

  const VIDEO_URLS = [
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
  ];

  const createdPosts: {
    id: string;
    authorId: string;
  }[] = [];

  const totalPosts = randomInt(500, 700);

  for (let i = 0; i < totalPosts; i++) {
    const author = randomItem(createdUsers);

    const useImage = Math.random() < 0.35;
    const useVideo = !useImage && Math.random() < 0.12;

    const imageUrl = useImage
      ? randomItem(IMAGE_URLS)
      : null;

    const videoUrl = useVideo
      ? randomItem(VIDEO_URLS)
      : null;

    const createdPost =
      await prisma.post.create({
        data: {
          authorId: author.id,

          content: randomItem(POSTS),

          imageUrl,

          videoUrl,

          createdAt: randomDate(120),

          updatedAt: new Date(),
        },
      });

    createdPosts.push({
      id: createdPost.id,
      authorId: createdPost.authorId,
    });

    if (imageUrl) {
      await prisma.media.create({
        data: {
          postId: createdPost.id,
          url: imageUrl,
          type: "IMAGE",
        },
      });
    }

    if (videoUrl) {
      await prisma.media.create({
        data: {
          postId: createdPost.id,
          url: videoUrl,
          type: "VIDEO",
        },
      });
    }

    if ((i + 1) % 100 === 0) {
      console.log(
        `   ${i + 1}/${totalPosts} posts created...`
      );
    }
  }

  console.log(
    `✅ ${createdPosts.length} posts created.`
  );
    // ---------------------------------------------
  // LIKES
  // ---------------------------------------------

  console.log("❤️ Creating likes...");

  const likeNotifications: {
    userId: string;
    type: "LIKE";
    message: string;
    createdAt: Date;
  }[] = [];

  const usedLikes = new Set<string>();

  for (const post of createdPosts) {
    const totalLikes = randomInt(0, 40);

    let count = 0;

    while (count < totalLikes) {
      const user = randomItem(createdUsers);

      if (user.id === post.authorId) continue;

      const key = `${user.id}_${post.id}`;

      if (usedLikes.has(key)) continue;

      usedLikes.add(key);

      const createdAt = randomDate(120);

      await prisma.like.create({
        data: {
          userId: user.id,
          postId: post.id,
          createdAt,
        },
      });

      likeNotifications.push({
        userId: post.authorId,
        type: "LIKE",
        message: `${user.name ?? "Someone"} liked your post.`,
        createdAt,
      });

      count++;
    }
  }

  console.log(`✅ ${usedLikes.size} likes created.`);

  // ---------------------------------------------
  // COMMENTS
  // ---------------------------------------------

  console.log("💬 Creating comments...");

  const COMMENTS = [
    "Amazing work!",
    "Love this 👏",
    "Completely agree.",
    "Very insightful.",
    "This is inspiring.",
    "Well done!",
    "Looks great 🔥",
    "Nice perspective.",
    "Thanks for sharing.",
    "Keep it up!",
    "Interesting idea.",
    "This helped me a lot.",
    "Beautiful shot!",
    "Awesome project!",
    "Great explanation.",
    "Couldn't agree more.",
    "Exactly my thoughts.",
    "Fantastic!",
    "Impressive 👏",
    "Looking forward to more posts.",
  ];

  let totalComments = 0;

  const commentNotifications: {
    userId: string;
    type: "COMMENT";
    message: string;
    createdAt: Date;
  }[] = [];

  for (const post of createdPosts) {
    const commentCount = randomInt(0, 10);

    for (let i = 0; i < commentCount; i++) {
      const author = randomItem(createdUsers);

      const createdAt = randomDate(120);

      await prisma.comment.create({
        data: {
          authorId: author.id,
          postId: post.id,
          content: randomItem(COMMENTS),
          createdAt,
        },
      });

      totalComments++;

      if (author.id !== post.authorId) {
        commentNotifications.push({
          userId: post.authorId,
          type: "COMMENT",
          message: `${author.name ?? "Someone"} commented on your post.`,
          createdAt,
        });
      }
    }
  }

  console.log(`✅ ${totalComments} comments created.`);
    // ---------------------------------------------
  // FOLLOWS
  // ---------------------------------------------

  console.log("👥 Creating follows...");

  const followNotifications: {
    userId: string;
    type: "FOLLOW";
    message: string;
    createdAt: Date;
  }[] = [];

  const followSet = new Set<string>();

  for (const user of createdUsers) {
    const followCount = randomInt(5, 20);

    let created = 0;

    while (created < followCount) {
      const target = randomItem(createdUsers);

      if (target.id === user.id) continue;

      const key = `${user.id}_${target.id}`;

      if (followSet.has(key)) continue;

      followSet.add(key);

      const createdAt = randomDate(120);

      await prisma.follow.create({
        data: {
          followerId: user.id,
          followingId: target.id,
          createdAt,
        },
      });

      followNotifications.push({
        userId: target.id,
        type: "FOLLOW",
        message: `${user.name ?? "Someone"} started following you.`,
        createdAt,
      });

      created++;
    }
  }

  console.log(`✅ ${followSet.size} follows created.`);

  // ---------------------------------------------
  // NOTIFICATIONS
  // ---------------------------------------------

  console.log("🔔 Creating notifications...");

  const notifications = [
    ...likeNotifications,
    ...commentNotifications,
    ...followNotifications,
  ];

  for (const notification of notifications) {
    await prisma.notification.create({
      data: notification,
    });
  }

  console.log(
    `✅ ${notifications.length} notifications created.`
  );

  // ---------------------------------------------
  // CONVERSATIONS
  // ---------------------------------------------

  console.log("💬 Creating conversations...");

  const conversationSet = new Set<string>();
  const conversations: {
    id: string;
    userOneId: string;
    userTwoId: string;
  }[] = [];

  for (let i = 0; i < 80; i++) {
    const userOne = randomItem(createdUsers);

    let userTwo = randomItem(createdUsers);

    while (userOne.id === userTwo.id) {
      userTwo = randomItem(createdUsers);
    }

    const ids = [userOne.id, userTwo.id].sort();

    const key = ids.join("_");

    if (conversationSet.has(key)) {
      continue;
    }

    conversationSet.add(key);

    const conversation =
      await prisma.conversation.create({
        data: {
          userOneId: ids[0],
          userTwoId: ids[1],
          createdAt: randomDate(120),
        },
      });

    conversations.push(conversation);

    await prisma.conversationMember.createMany({
      data: [
        {
          conversationId: conversation.id,
          userId: ids[0],
        },
        {
          conversationId: conversation.id,
          userId: ids[1],
        },
      ],
    });
  }

  console.log(
    `✅ ${conversations.length} conversations created.`
  );

  // ---------------------------------------------
  // MESSAGES
  // ---------------------------------------------

  console.log("📨 Creating messages...");

  const MESSAGE_TEXTS = [
    "Hey!",
    "How are you?",
    "Nice post 👏",
    "Let's catch up.",
    "Working on anything interesting?",
    "Good morning!",
    "Thanks!",
    "Can you help me with this?",
    "Looks awesome 🔥",
    "See you tomorrow.",
    "Congratulations!",
    "Great job!",
    "I'm almost done with the project.",
    "Let's schedule a meeting.",
    "Have a nice day!",
  ];

  let totalMessages = 0;

  for (const conversation of conversations) {
    const total = randomInt(5, 30);

    for (let i = 0; i < total; i++) {
      const senderId =
        Math.random() > 0.5
          ? conversation.userOneId
          : conversation.userTwoId;

      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          senderId,
          content: randomItem(MESSAGE_TEXTS),
          isSeen: Math.random() > 0.3,
          createdAt: randomDate(120),
        },
      });

      totalMessages++;
    }
  }

  console.log(
    `✅ ${totalMessages} messages created.`
  );

  console.log("🎉 Seed completed successfully.");
}
main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });