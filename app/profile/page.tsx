"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  MapPin,
  Calendar,
  Trophy,
  Target,
  BarChart3,
  Video,
  Award,
  Edit,
  Share2,
} from "lucide-react"

export default function ProfilePage() {
  const achievements = [
    { id: 1, title: "First Module Complete", icon: "🎯", date: "Jan 2024" },
    { id: 2, title: "7 Day Streak", icon: "🔥", date: "Jan 2024" },
    { id: 3, title: "Video Analysis Pro", icon: "🎬", date: "Dec 2023" },
    { id: 4, title: "Community Helper", icon: "🤝", date: "Dec 2023" },
    { id: 5, title: "Analytics Expert", icon: "📊", date: "Nov 2023" },
    { id: 6, title: "Portfolio Builder", icon: "💼", date: "Nov 2023" },
  ]

  const skills = [
    { name: "Data Analysis", level: 85 },
    { name: "Video Analysis", level: 70 },
    { name: "Statistics", level: 65 },
    { name: "Communication", level: 80 },
    { name: "Leadership", level: 75 },
  ]

  const recentActivity = [
    { id: 1, type: "module", title: "Completed Advanced Analytics", date: "2 days ago" },
    { id: 2, type: "video", title: "Uploaded game footage", date: "3 days ago" },
    { id: 3, type: "discussion", title: "Posted in Analytics forum", date: "5 days ago" },
    { id: 4, type: "achievement", title: "Earned 7 Day Streak badge", date: "1 week ago" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Los Angeles, CA
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined January 2024
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  Basketball player passionate about sports analytics and data science. Currently exploring career
                  pathways in sports performance analysis.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge>Basketball</Badge>
                  <Badge>Point Guard</Badge>
                  <Badge>11th Grade</Badge>
                  <Badge variant="secondary">Sports Analytics</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Modules</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Videos</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <Video className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-3xl font-bold">15</p>
                </div>
                <Trophy className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Streak</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <Award className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Your developed competencies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Career Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Career Progress</CardTitle>
                  <CardDescription>Sports Analytics pathway</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>

                  <div className="space-y-3 pt-4">
                    {[
                      { title: "Introduction to Analytics", status: "completed" },
                      { title: "Advanced Statistics", status: "in-progress" },
                      { title: "Machine Learning Basics", status: "locked" },
                      { title: "Sports Data Science", status: "locked" },
                    ].map((module, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            module.status === "completed"
                              ? "bg-primary text-primary-foreground"
                              : module.status === "in-progress"
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <span className="text-xs font-bold">{i + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{module.title}</p>
                          <p className="text-xs text-muted-foreground capitalize">{module.status}</p>
                        </div>
                        {module.status === "completed" && <Award className="w-5 h-5 text-primary" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your earned badges and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest actions on Atlos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {activity.type === "module" && <Target className="w-5 h-5 text-primary" />}
                        {activity.type === "video" && <Video className="w-5 h-5 text-primary" />}
                        {activity.type === "discussion" && <BarChart3 className="w-5 h-5 text-primary" />}
                        {activity.type === "achievement" && <Trophy className="w-5 h-5 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
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

