"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Award,
  Briefcase,
  Download,
  Edit,
  ExternalLink,
  FileText,
  GraduationCap,
  Share2,
  Video,
  Eye,
} from "lucide-react"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header - Enhanced with Visual Elements */}
        <div className="mb-8">
          {/* Cover Image */}
          <div className="h-48 rounded-t-xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 relative overflow-hidden mb-[-3rem]">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                {/* Basketball court pattern */}
                <rect x="100" y="20" width="600" height="160" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="400" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="400" y1="20" x2="400" y2="180" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          <div className="flex items-start justify-between mb-6 relative">
            <div className="flex items-start gap-6">
              {/* Profile Picture with Border */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 border-4 border-background shadow-xl relative z-10">
                <span className="text-4xl font-bold text-primary">JD</span>
              </div>
              <div className="pt-8">
                <h1 className="text-4xl font-bold mb-2">Jordan Davis</h1>
                <p className="text-lg text-muted-foreground mb-3">Basketball • Point Guard • Sports Analytics Track</p>
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary">11th Grade</Badge>
                  <Badge variant="secondary">3.8 GPA</Badge>
                  <Badge variant="secondary">
                    <Award className="w-3 h-3 mr-1" />
                    15 Achievements
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-8">
              <Button variant="outline">
                <Edit className="mr-2 w-4 h-4" />
                Edit Profile
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 w-4 h-4" />
                Share
              </Button>
              <Button>
                <Eye className="mr-2 w-4 h-4" />
                Preview
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Modules Complete</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Video className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Video Projects</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Case Studies</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">15</p>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills & Certifications</TabsTrigger>
            <TabsTrigger value="career">Career Path</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Passionate student-athlete with a strong interest in sports analytics and data-driven decision
                      making. Currently pursuing the Sports Analytics career track while playing varsity basketball.
                      Excited to combine my love for the game with technical skills to make an impact in the sports
                      industry.
                    </p>
                  </CardContent>
                </Card>

                {/* Featured Projects */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Featured Projects</CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/portfolio?tab=projects">View All</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Team Performance Analysis Dashboard",
                        description: "Interactive dashboard analyzing our team's season statistics",
                        type: "Analytics",
                        date: "March 2024",
                        gradient: "from-blue-500/20 to-cyan-500/20",
                        icon: "📊",
                      },
                      {
                        title: "Championship Game Breakdown",
                        description: "Video analysis of key plays from our championship victory",
                        type: "Video Analysis",
                        date: "March 2024",
                        gradient: "from-purple-500/20 to-pink-500/20",
                        icon: "🎬",
                      },
                      {
                        title: "Player Efficiency Rating Study",
                        description: "Research project on advanced basketball metrics",
                        type: "Research",
                        date: "February 2024",
                        gradient: "from-green-500/20 to-emerald-500/20",
                        icon: "📈",
                      },
                    ].map((project, i) => (
                      <div
                        key={i}
                        className="group rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
                      >
                        {/* Project Preview Image */}
                        <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform">
                              {project.icon}
                            </div>
                          </div>
                          {/* Mock data visualization overlay */}
                          {i === 0 && (
                            <div className="absolute bottom-2 right-2 flex gap-1">
                              {[40, 60, 45, 80, 55, 70].map((h, idx) => (
                                <div key={idx} className="w-2 bg-white/40 rounded-t" style={{ height: `${h}%` }} />
                              ))}
                            </div>
                          )}
                          <Badge className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm">
                            {project.type}
                          </Badge>
                        </div>

                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">{project.date}</p>
                            <Button variant="ghost" size="sm" className="h-7 text-xs">
                              View Project
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { title: "Analytics Master", description: "Complete 10 analytics modules", icon: "📊" },
                        { title: "Video Pro", description: "Analyze 5 game videos", icon: "🎬" },
                        { title: "Fast Learner", description: "7 day learning streak", icon: "🔥" },
                        { title: "Team Player", description: "Help 5 community members", icon: "🤝" },
                      ].map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="text-3xl">{achievement.icon}</div>
                          <div>
                            <p className="font-semibold text-sm">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Career Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Career Progress</CardTitle>
                    <CardDescription>Sports Analytics Track</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Overall</span>
                        <span className="font-semibold">50%</span>
                      </div>
                      <Progress value={50} />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Award className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Foundations</p>
                          <p className="text-xs text-muted-foreground">Complete</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">2</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Core Skills</p>
                          <p className="text-xs text-muted-foreground">In Progress</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 opacity-50">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs font-bold">3</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Advanced</p>
                          <p className="text-xs text-muted-foreground">Locked</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { skill: "Data Analysis", level: 85 },
                      { skill: "Video Analysis", level: 75 },
                      { skill: "Statistics", level: 70 },
                      { skill: "Excel/Spreadsheets", level: 80 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <Progress value={item.level} />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full bg-transparent" variant="outline">
                      <Download className="mr-2 w-4 h-4" />
                      Download PDF
                    </Button>
                    <Button className="w-full bg-transparent" variant="outline">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Public Link
                    </Button>
                    <Button className="w-full bg-transparent" variant="outline">
                      <Share2 className="mr-2 w-4 h-4" />
                      Share with Recruiter
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">My Projects</h2>
                <p className="text-muted-foreground">Showcase your best work</p>
              </div>
              <Button>
                <FileText className="mr-2 w-4 h-4" />
                Add Project
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Team Performance Analysis Dashboard",
                  description:
                    "Built an interactive dashboard to track and visualize our team's performance metrics throughout the season",
                  type: "Analytics",
                  skills: ["Data Analysis", "Visualization", "Excel"],
                  date: "March 2024",
                },
                {
                  title: "Championship Game Breakdown",
                  description: "Comprehensive video analysis identifying key plays and strategic decisions",
                  type: "Video Analysis",
                  skills: ["Video Analysis", "Strategy", "Communication"],
                  date: "March 2024",
                },
                {
                  title: "Player Efficiency Rating Study",
                  description: "Research project exploring advanced metrics for evaluating player performance",
                  type: "Research",
                  skills: ["Statistics", "Research", "Writing"],
                  date: "February 2024",
                },
                {
                  title: "Opponent Scouting Report",
                  description: "Detailed analysis of opponent tendencies and recommended defensive strategies",
                  type: "Scouting",
                  skills: ["Analysis", "Strategy", "Presentation"],
                  date: "February 2024",
                },
              ].map((project, i) => (
                <Card key={i} className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, j) => (
                          <Badge key={j} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{project.date}</span>
                        <Button size="sm" variant="ghost">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>Skills developed through coursework and projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { skill: "Data Analysis", level: 85, modules: 8 },
                    { skill: "Video Analysis", level: 75, modules: 6 },
                    { skill: "Statistical Analysis", level: 70, modules: 5 },
                    { skill: "Excel/Spreadsheets", level: 80, modules: 7 },
                    { skill: "Data Visualization", level: 65, modules: 4 },
                    { skill: "Sports Strategy", level: 75, modules: 6 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <div>
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-muted-foreground ml-2">({item.modules} modules)</span>
                        </div>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <Progress value={item.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Completed courses and achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      title: "Sports Analytics Fundamentals",
                      issuer: "GameSense",
                      date: "March 2024",
                      verified: true,
                    },
                    {
                      title: "Video Analysis Certification",
                      issuer: "GameSense",
                      date: "February 2024",
                      verified: true,
                    },
                    { title: "Data Visualization", issuer: "GameSense", date: "January 2024", verified: true },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <Award className="w-8 h-8 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{cert.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </p>
                        {cert.verified && (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="career" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sports Analytics Career Path</CardTitle>
                <CardDescription>Your journey to becoming a sports analytics professional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      phase: "Phase 1: Foundations",
                      status: "complete",
                      progress: 100,
                      modules: [
                        "Introduction to Sports Analytics",
                        "Data Collection Methods",
                        "Basic Statistics",
                        "Excel Fundamentals",
                      ],
                    },
                    {
                      phase: "Phase 2: Core Skills",
                      status: "in-progress",
                      progress: 50,
                      modules: ["Advanced Metrics", "Data Visualization", "Video Analysis", "Statistical Modeling"],
                    },
                    {
                      phase: "Phase 3: Advanced Topics",
                      status: "locked",
                      progress: 0,
                      modules: [
                        "Machine Learning Basics",
                        "Predictive Analytics",
                        "Advanced Visualization",
                        "Research Methods",
                      ],
                    },
                    {
                      phase: "Phase 4: Specialization",
                      status: "locked",
                      progress: 0,
                      modules: [
                        "Player Evaluation",
                        "Game Strategy Analysis",
                        "Capstone Project",
                        "Industry Internship",
                      ],
                    },
                  ].map((phase, i) => (
                    <div key={i} className="relative">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            phase.status === "complete"
                              ? "bg-primary text-primary-foreground"
                              : phase.status === "in-progress"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {phase.status === "complete" ? (
                            <Award className="w-6 h-6" />
                          ) : (
                            <span className="font-bold">{i + 1}</span>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{phase.phase}</h3>
                            <Badge
                              variant={
                                phase.status === "complete"
                                  ? "default"
                                  : phase.status === "in-progress"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {phase.status === "complete"
                                ? "Complete"
                                : phase.status === "in-progress"
                                  ? "In Progress"
                                  : "Locked"}
                            </Badge>
                          </div>

                          {phase.progress > 0 && (
                            <div className="mb-3">
                              <Progress value={phase.progress} />
                            </div>
                          )}

                          <div className="grid sm:grid-cols-2 gap-2">
                            {phase.modules.map((module, j) => (
                              <div
                                key={j}
                                className={`text-sm p-2 rounded border ${
                                  phase.status === "locked"
                                    ? "border-border text-muted-foreground opacity-50"
                                    : "border-border"
                                }`}
                              >
                                {module}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {i < 3 && (
                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" style={{ height: "2rem" }} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Opportunities</CardTitle>
                <CardDescription>Potential roles in sports analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Junior Analyst",
                      company: "Professional Sports Team",
                      description: "Entry-level position analyzing player and team performance data",
                      requirements: ["Bachelor's Degree", "Data Analysis Skills", "Sports Knowledge"],
                    },
                    {
                      title: "Analytics Intern",
                      company: "Sports Technology Company",
                      description: "Summer internship working on sports data products",
                      requirements: ["Currently Enrolled", "Programming Skills", "Statistics"],
                    },
                    {
                      title: "Video Coordinator",
                      company: "College Athletic Program",
                      description: "Manage video analysis and scouting reports",
                      requirements: ["Video Analysis", "Communication", "Sports Strategy"],
                    },
                    {
                      title: "Data Analyst",
                      company: "Sports Media Company",
                      description: "Create data-driven content and visualizations",
                      requirements: ["Data Visualization", "Writing", "Creativity"],
                    },
                  ].map((job, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
