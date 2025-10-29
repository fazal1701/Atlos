"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize,
  Download,
  Share2,
  Scissors,
  BarChart3,
  Clock,
  Target,
} from "lucide-react"

const videoData: Record<string, any> = {
  "game-1": {
    title: "Championship Game - Q4 Highlights",
    date: "2024-03-15",
    duration: "12:34",
    sport: "Basketball",
    type: "game",
    clips: [
      { id: 1, title: "Game-Winning Three Pointer", time: "2:15", duration: "0:08", type: "highlight" },
      { id: 2, title: "Defensive Stop", time: "5:42", duration: "0:12", type: "defense" },
      { id: 3, title: "Fast Break Assist", time: "7:20", duration: "0:10", type: "assist" },
      { id: 4, title: "Rebound & Putback", time: "9:05", duration: "0:06", type: "rebound" },
      { id: 5, title: "Steal & Score", time: "10:30", duration: "0:09", type: "highlight" },
    ],
    stats: {
      points: 18,
      assists: 5,
      rebounds: 7,
      steals: 3,
      blocks: 1,
      turnovers: 2,
    },
    insights: [
      "Strong performance in clutch moments",
      "Improved defensive positioning in Q4",
      "Effective ball movement leading to assists",
    ],
  },
}

export default function VideoDetailPage() {
  const params = useParams()
  const videoId = params.videoId as string
  const video = videoData[videoId]
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState("clips")

  if (!video) {
    return <div>Video not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-2xl font-bold text-primary">
              Atlos Platform
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/videos">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Videos
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="w-16 h-16 rounded-full" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </Button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="space-y-2">
                    {/* Progress Bar */}
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer">
                      <div className="h-full bg-primary" style={{ width: "35%" }} />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-white hover:text-white">
                          <SkipBack className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:text-white">
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:text-white">
                          <SkipForward className="w-4 h-4" />
                        </Button>
                        <span className="text-sm ml-2">4:25 / {video.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-white hover:text-white">
                          <Volume2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:text-white">
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{new Date(video.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <Badge variant="secondary">{video.sport}</Badge>
                    <span>•</span>
                    <span>{video.clips.length} clips</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="clips">Clips ({video.clips.length})</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
              </TabsList>

              <TabsContent value="clips" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Generated Clips</CardTitle>
                        <CardDescription>AI-identified key moments from your video</CardDescription>
                      </div>
                      <Button size="sm">
                        <Scissors className="mr-2 w-4 h-4" />
                        Create Clip
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {video.clips.map((clip: any) => (
                      <div
                        key={clip.id}
                        className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        <div className="w-24 h-16 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                          <Play className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{clip.title}</h3>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {clip.time}
                            </span>
                            <span>Duration: {clip.duration}</span>
                            <Badge variant="secondary" className="text-xs">
                              {clip.type}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          Play
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(video.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground capitalize">{key}</span>
                          <span className="text-2xl font-bold">{value as number}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Shot Chart</CardTitle>
                      <CardDescription>Field goal attempts by location</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-16 h-16 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Insights</CardTitle>
                    <CardDescription>Analysis of your performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {video.insights.map((insight: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{insight}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full bg-transparent" variant="outline">
                  <Scissors className="mr-2 w-4 h-4" />
                  Create Highlight Reel
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Share2 className="mr-2 w-4 h-4" />
                  Share with Coach
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Download className="mr-2 w-4 h-4" />
                  Download Video
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Videos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/videos/practice-1"
                  className="block p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-primary/10 rounded mb-2 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm">Shooting Drill Analysis</p>
                  <p className="text-xs text-muted-foreground">8:45 • 5 clips</p>
                </Link>

                <Link
                  href="/videos/game-3"
                  className="block p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-primary/10 rounded mb-2 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm">Home Game vs. Rivals</p>
                  <p className="text-xs text-muted-foreground">38:15 • 12 clips</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
