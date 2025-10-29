"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { BookOpen, Video, Trophy, Users, Target, Play, Clock, Award, ArrowRight, BarChart3 } from "lucide-react"
import { careerPaths, modules, calculateOverallProgress } from "@/lib/education-framework"

interface UserProfile {
  name: string
  sport: string
  position: string
  gradeLevel: string
  careerPath: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("userProfile")
    if (stored) {
      setProfile(JSON.parse(stored))
    } else {
      router.push("/onboarding")
    }
  }, [router])

  if (!profile) {
    return null
  }

  const careerPath = careerPaths[profile.careerPath]
  const careerPathName = careerPath?.name || "Exploring Careers"

  const inProgressModule = modules.find((m) => m.status === "in-progress")

  const recommendedModules = modules
    .filter((m) => m.status === "available" && careerPath?.modules.includes(m.id))
    .slice(0, 3)

  const overallProgress = calculateOverallProgress(profile.careerPath)
  const completedModules = modules.filter((m) => m.status === "completed").length
  const totalModules = careerPath?.modules.length || modules.length

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section - Enhanced Hero */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 border border-primary/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Welcome back, {profile.name.split(" ")[0]}! 👋</h1>
              <p className="text-muted-foreground text-lg mb-4">
                {profile.sport} • {profile.position} • {careerPathName}
              </p>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-yellow-500/20 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Level</p>
                    <p className="font-bold text-yellow-700 dark:text-yellow-400">Analyst</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Points</p>
                    <p className="font-bold text-primary">2,450</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-blue-500/20 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Badges</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/20 shadow-lg">
                <div className="text-6xl">🏀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview - Colorful Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full -mr-12 -mt-12"></div>
            <CardContent className="pt-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Learning Streak</p>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">7 days</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12"></div>
            <CardContent className="pt-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Modules Complete</p>
                  <p className="text-3xl font-bold text-primary">
                    {completedModules}/{totalModules}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12"></div>
            <CardContent className="pt-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Videos Analyzed</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">8</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Video className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-900 bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-12 -mt-12"></div>
            <CardContent className="pt-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">15</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            {inProgressModule && (
              <Card>
                <CardHeader>
                  <CardTitle>Continue Learning</CardTitle>
                  <CardDescription>Pick up where you left off</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href={`/learn/${inProgressModule.id}`}
                    className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-12 h-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{inProgressModule.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {inProgressModule.lessons.filter((l) => l.completed).length} of{" "}
                            {inProgressModule.lessons.length} lessons complete
                          </p>
                        </div>
                        <Badge>In Progress</Badge>
                      </div>
                      <Progress value={inProgressModule.progress} className="mb-2" />
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {Math.round((inProgressModule.duration * (100 - inProgressModule.progress)) / 100)} hrs left
                        </span>
                        <span>{inProgressModule.progress}% complete</span>
                      </div>
                    </div>
                    <Button size="sm" className="self-center">
                      <Play className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Jump into your favorite activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/videos/upload"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Upload Game Film</h3>
                      <p className="text-sm text-muted-foreground">Analyze your performance</p>
                    </div>
                  </Link>

                  <Link
                    href="/learn"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Browse Modules</h3>
                      <p className="text-sm text-muted-foreground">Explore new topics</p>
                    </div>
                  </Link>

                  <Link
                    href="/portfolio"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Update Portfolio</h3>
                      <p className="text-sm text-muted-foreground">Showcase your work</p>
                    </div>
                  </Link>

                  <Link
                    href="/community"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Join Discussion</h3>
                      <p className="text-sm text-muted-foreground">Connect with peers</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Modules */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>Based on your career path</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/learn">
                      View All <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendedModules.map((module, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{module.title}</h4>
                      <p className="text-xs text-muted-foreground">{module.description}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {module.level}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {module.duration}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Start
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Career Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Career Progress</CardTitle>
                <CardDescription>{careerPathName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Overall Progress</span>
                    <span className="font-semibold">{overallProgress}%</span>
                  </div>
                  <Progress value={overallProgress} />
                </div>

                <div className="space-y-3">
                  {careerPath?.modules.map((moduleId, index) => {
                    const module = modules.find((m) => m.id === moduleId)
                    if (!module) return null

                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{module.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {module.status === "completed"
                              ? "Complete"
                              : module.status === "in-progress"
                                ? "In Progress"
                                : "Locked"}
                          </p>
                        </div>
                        {module.status === "completed" && <Award className="w-5 h-5 text-primary" />}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Journey</CardTitle>
                <CardDescription>Weekly progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/charts/progress-chart.svg"
                  alt="Learning Progress Chart"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Level 3 Master", badge: "/badges/level-3.svg", date: "2 days ago" },
                  { title: "Level 2 Achiever", badge: "/badges/level-2.svg", date: "1 week ago" },
                  { title: "Level 1 Starter", badge: "/badges/level-1.svg", date: "2 weeks ago" },
                ].map((achievement, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors">
                    <img src={achievement.badge} alt={achievement.title} className="w-12 h-12" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-sm font-medium">Live Q&A: Analytics Career</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Tomorrow at 3:00 PM</p>
                </div>

                <div className="p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <p className="text-sm font-medium">Workshop: Video Analysis</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Friday at 5:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
