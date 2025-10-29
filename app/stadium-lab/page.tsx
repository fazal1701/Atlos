"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, Plus, FileText, Layout, Clock, CheckCircle2, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function StadiumLabPage() {
  const recentReports = [
    {
      id: 1,
      title: "Lakers vs Warriors - Defensive Rotations",
      date: "2024-01-15",
      sport: "Basketball",
      status: "completed",
      observations: 47,
    },
    {
      id: 2,
      title: "High School Championship - Offensive Plays",
      date: "2024-01-12",
      sport: "Basketball",
      status: "in-progress",
      observations: 23,
    },
    {
      id: 3,
      title: "Soccer Match - Passing Patterns",
      date: "2024-01-10",
      sport: "Soccer",
      status: "completed",
      observations: 65,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Basketball Defensive Rotations",
      sport: "Basketball",
      tags: 12,
    },
    {
      id: 2,
      name: "Baseball Pitch Sequences",
      sport: "Baseball",
      tags: 8,
    },
    {
      id: 3,
      name: "Soccer Tactical Analysis",
      sport: "Soccer",
      tags: 15,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Stadium Lab</h1>
              <p className="text-muted-foreground">Capture and analyze live game observations</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">New Observation</h3>
                  <p className="text-sm text-muted-foreground">Start capturing live game data</p>
                </div>
                <Button className="w-full">Start Session</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">My Reports</h3>
                  <p className="text-sm text-muted-foreground">View all observation reports</p>
                </div>
                <Button variant="outline" className="w-full">View Reports</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layout className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Templates</h3>
                  <p className="text-sm text-muted-foreground">Browse tagging templates</p>
                </div>
                <Button variant="outline" className="w-full">Browse</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Reports */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your latest observation sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReports.map((report, index) => (
                  <div
                    key={report.id}
                    className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer"
                  >
                    {/* Mock mini chart visualization */}
                    <div className="absolute top-0 right-0 w-32 h-full opacity-5 group-hover:opacity-10 transition-opacity">
                      <div className="flex items-end justify-around h-full p-2">
                        {[60, 80, 45, 90, 70, 55, 85, 65].map((height, i) => (
                          <div
                            key={i}
                            className="w-2 bg-primary rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {report.status === "completed" ? (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        ) : (
                          <PlayCircle className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold">{report.title}</h3>
                          <Badge variant={report.status === "completed" ? "default" : "secondary"}>
                            {report.status === "completed" ? "Complete" : "In Progress"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span>{report.sport}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {report.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            {report.observations} observations
                          </span>
                        </div>
                        {/* Mock finding */}
                        {report.status === "completed" && (
                          <div className="text-xs bg-primary/5 px-2 py-1 rounded inline-block">
                            <span className="font-medium">Key Finding:</span> {
                              index === 0 ? "Zone defense 68% effective in Q4" :
                              index === 1 ? "3PT attempts up 40% in final quarter" :
                              "Switch coverage 76% success rate"
                            }
                          </div>
                        )}
                      </div>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Templates Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Popular Templates</CardTitle>
                <CardDescription>Pre-built tagging schemas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <h4 className="font-semibold text-sm mb-1">{template.name}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{template.sport}</span>
                      <span>{template.tags} tags</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Templates
                </Button>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>About Stadium Lab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Stadium Lab allows you to capture real-time observations during live games using your mobile device.
                </p>
                <p>
                  Tag events, record notes, and validate your analytical models in real-world scenarios.
                </p>
                <Button className="w-full mt-4">Download Mobile App</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

