export interface Lesson {
  id: string
  title: string
  duration: number // minutes
  type: "video" | "reading" | "quiz" | "interactive"
  completed: boolean
  content?: string
}

export interface Module {
  id: string
  title: string
  description: string
  category: "analytics" | "coaching" | "business" | "media" | "medicine" | "tech"
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: number // total hours
  lessons: Lesson[]
  prerequisites: string[]
  skills: string[]
  progress: number
  status: "locked" | "available" | "in-progress" | "completed"
}

export interface CareerPath {
  id: string
  name: string
  description: string
  modules: string[] // module IDs
  skills: string[]
  careers: string[]
}

export const careerPaths: Record<string, CareerPath> = {
  analytics: {
    id: "analytics",
    name: "Sports Analytics",
    description: "Master data analysis, statistics, and performance metrics to become a sports analyst",
    modules: ["analytics-101", "data-viz", "player-metrics", "advanced-stats", "predictive-modeling"],
    skills: ["Data Analysis", "Statistics", "Python", "SQL", "Data Visualization", "Machine Learning"],
    careers: ["Sports Analyst", "Performance Analyst", "Data Scientist", "Research Analyst"],
  },
  coaching: {
    id: "coaching",
    name: "Coaching & Training",
    description: "Develop coaching skills, game strategy, and player development expertise",
    modules: ["coaching-fundamentals", "game-strategy", "player-development", "sports-psychology"],
    skills: ["Leadership", "Communication", "Strategy", "Player Development", "Game Planning"],
    careers: ["Head Coach", "Assistant Coach", "Skills Trainer", "Strength Coach"],
  },
  business: {
    id: "business",
    name: "Sports Business",
    description: "Learn sports marketing, management, and business operations",
    modules: ["sports-marketing", "sports-management", "sponsorship", "event-management"],
    skills: ["Marketing", "Management", "Finance", "Negotiation", "Business Strategy"],
    careers: ["Sports Marketer", "Team Manager", "Sports Agent", "Business Operations"],
  },
  media: {
    id: "media",
    name: "Sports Media",
    description: "Master broadcasting, journalism, and content creation in sports",
    modules: ["sports-journalism", "broadcasting", "content-creation", "social-media"],
    skills: ["Writing", "Broadcasting", "Video Production", "Social Media", "Storytelling"],
    careers: ["Sports Journalist", "Broadcaster", "Content Creator", "Social Media Manager"],
  },
}

export const modules: Module[] = [
  {
    id: "analytics-101",
    title: "Introduction to Sports Analytics",
    description: "Learn the fundamentals of data analysis in sports, from basic statistics to performance metrics",
    category: "analytics",
    level: "Beginner",
    duration: 4,
    prerequisites: [],
    skills: ["Data Analysis", "Statistics", "Excel"],
    progress: 65,
    status: "in-progress",
    lessons: [
      {
        id: "a101-1",
        title: "What is Sports Analytics?",
        duration: 15,
        type: "video",
        completed: true,
        content: "Introduction to the field of sports analytics and its applications",
      },
      {
        id: "a101-2",
        title: "Basic Statistical Concepts",
        duration: 20,
        type: "video",
        completed: true,
        content: "Understanding mean, median, mode, and standard deviation",
      },
      {
        id: "a101-3",
        title: "Reading Box Scores",
        duration: 25,
        type: "interactive",
        completed: true,
        content: "Learn to interpret game statistics and box scores",
      },
      {
        id: "a101-4",
        title: "Introduction to Excel for Sports",
        duration: 30,
        type: "video",
        completed: false,
        content: "Using spreadsheets to organize and analyze sports data",
      },
      {
        id: "a101-5",
        title: "Quiz: Analytics Fundamentals",
        duration: 15,
        type: "quiz",
        completed: false,
        content: "Test your knowledge of basic analytics concepts",
      },
    ],
  },
  {
    id: "data-viz",
    title: "Data Visualization Basics",
    description: "Create compelling charts and graphs to tell stories with data",
    category: "analytics",
    level: "Beginner",
    duration: 3,
    prerequisites: ["analytics-101"],
    skills: ["Data Visualization", "Charts", "Storytelling"],
    progress: 0,
    status: "available",
    lessons: [
      {
        id: "dv-1",
        title: "Principles of Data Visualization",
        duration: 20,
        type: "video",
        completed: false,
      },
      {
        id: "dv-2",
        title: "Creating Charts in Excel",
        duration: 25,
        type: "interactive",
        completed: false,
      },
      {
        id: "dv-3",
        title: "Advanced Visualization Tools",
        duration: 30,
        type: "video",
        completed: false,
      },
    ],
  },
  {
    id: "player-metrics",
    title: "Player Performance Metrics",
    description: "Understanding key performance indicators for athletes across different sports",
    category: "analytics",
    level: "Intermediate",
    duration: 5,
    prerequisites: ["analytics-101"],
    skills: ["Performance Analysis", "KPIs", "Metrics"],
    progress: 0,
    status: "available",
    lessons: [
      {
        id: "pm-1",
        title: "Traditional vs Advanced Metrics",
        duration: 25,
        type: "video",
        completed: false,
      },
      {
        id: "pm-2",
        title: "Basketball Analytics",
        duration: 30,
        type: "video",
        completed: false,
      },
      {
        id: "pm-3",
        title: "Football Analytics",
        duration: 30,
        type: "video",
        completed: false,
      },
    ],
  },
  {
    id: "coaching-fundamentals",
    title: "Coaching Fundamentals",
    description: "Essential skills for effective coaching and player development",
    category: "coaching",
    level: "Beginner",
    duration: 6,
    prerequisites: [],
    skills: ["Leadership", "Communication", "Teaching"],
    progress: 0,
    status: "available",
    lessons: [
      {
        id: "cf-1",
        title: "Philosophy of Coaching",
        duration: 20,
        type: "video",
        completed: false,
      },
      {
        id: "cf-2",
        title: "Effective Communication",
        duration: 25,
        type: "video",
        completed: false,
      },
      {
        id: "cf-3",
        title: "Practice Planning",
        duration: 30,
        type: "interactive",
        completed: false,
      },
    ],
  },
  {
    id: "game-strategy",
    title: "Game Strategy & Tactics",
    description: "Learn to analyze and develop winning game strategies",
    category: "coaching",
    level: "Intermediate",
    duration: 4,
    prerequisites: ["coaching-fundamentals"],
    skills: ["Strategy", "Game Planning", "Analysis"],
    progress: 0,
    status: "locked",
    lessons: [
      {
        id: "gs-1",
        title: "Reading the Game",
        duration: 25,
        type: "video",
        completed: false,
      },
      {
        id: "gs-2",
        title: "Offensive Strategies",
        duration: 30,
        type: "video",
        completed: false,
      },
    ],
  },
  {
    id: "sports-marketing",
    title: "Sports Marketing Essentials",
    description: "Marketing strategies for sports organizations and athletes",
    category: "business",
    level: "Beginner",
    duration: 4,
    prerequisites: [],
    skills: ["Marketing", "Branding", "Social Media"],
    progress: 0,
    status: "available",
    lessons: [
      {
        id: "sm-1",
        title: "Introduction to Sports Marketing",
        duration: 20,
        type: "video",
        completed: false,
      },
      {
        id: "sm-2",
        title: "Building a Personal Brand",
        duration: 25,
        type: "video",
        completed: false,
      },
    ],
  },
]

export function getModuleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id)
}

export function getModulesByCategory(category: string): Module[] {
  if (category === "all") return modules
  return modules.filter((m) => m.category === category)
}

export function getModulesForCareerPath(pathId: string): Module[] {
  const path = careerPaths[pathId]
  if (!path) return []
  return modules.filter((m) => path.modules.includes(m.id))
}

export function calculateOverallProgress(pathId: string): number {
  const pathModules = getModulesForCareerPath(pathId)
  if (pathModules.length === 0) return 0
  const totalProgress = pathModules.reduce((sum, m) => sum + m.progress, 0)
  return Math.round(totalProgress / pathModules.length)
}
