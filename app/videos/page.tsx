"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Upload, Video, Play, Clock, Calendar, Filter, BarChart3 } from "lucide-react"

const videos = [
  {
    id: "game-1",
    title: "Championship Game - Q4 Highlights",
    date: "2024-03-15",
    duration: "12:34",
    sport: "Basketball",
    type: "game",
    analyzed: true,
    clips: 8,
    thumbnail: "basketball",
  },
  {
    id: "practice-1",
    title: "Shooting Drill Analysis",
    date: "2024-03-12",
    duration: "8:45",
    sport: "Basketball",
    type: "practice",
    analyzed: true,
    clips: 5,
    thumbnail: "target",
  },
  {
    id: "game-2",
    title: "Regional Semi-Final",
    date: "2024-03-08",
    duration: "45:20",
    sport: "Basketball",
    type: "game",
    analyzed: false,
    clips: 0,
    thumbnail: "trophy",
  },
  {
    id: "game-3",
    title: "Home Game vs. Rivals",
    date: "2024-03-01",
    duration: "38:15",
    sport: "Basketball",
    type: "game",
    analyzed: true,
    clips: 12,
    thumbnail: "users",
  },
  {
    id: "practice-2",
    title: "Defensive Positioning Drills",
    date: "2024-02-28",
    duration: "15:30",
    sport: "Basketball",
    type: "practice",
    analyzed: true,
    clips: 6,
    thumbnail: "shield",
  },
]

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || video.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-purple-600 to-purple-700 bg-clip-text text-transparent">Video Library</h1>
            <p className="text-foreground/70 text-lg mb-3">Upload and analyze your game footage</p>
            <div className="flex items-center gap-2 text-sm">
              <Badge className="bg-blue-600 text-white">AI-Powered Analysis</Badge>
              <Badge variant="outline">Frame-by-Frame</Badge>
              <Badge variant="outline">Performance Metrics</Badge>
            </div>
          </div>
          <Button size="lg" className="shadow-lg" asChild>
            <Link href="/videos/upload">
              <Upload className="mr-2 w-5 h-5" />
              Upload Video
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-purple-200 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-background dark:from-purple-950/20 dark:to-background hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 font-medium mb-1">Total Videos</p>
                  <p className="text-3xl font-bold text-purple-600">{videos.length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-md">
                  <Video className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 font-medium mb-1">Analyzed</p>
                  <p className="text-3xl font-bold text-primary">{videos.filter((v) => v.analyzed).length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center shadow-md">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-900 bg-gradient-to-br from-green-50 to-background dark:from-green-950/20 dark:to-background hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 font-medium mb-1">Total Clips</p>
                  <p className="text-3xl font-bold text-green-600">{videos.reduce((acc, v) => acc + v.clips, 0)}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 dark:to-background hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 font-medium mb-1">Watch Time</p>
                  <p className="text-3xl font-bold text-blue-600">8.2h</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-md">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 w-4 h-4" />
              Filters
            </Button>
          </div>

          <Tabs value={selectedType} onValueChange={setSelectedType}>
            <TabsList>
              <TabsTrigger value="all">All Videos</TabsTrigger>
              <TabsTrigger value="game">Games</TabsTrigger>
              <TabsTrigger value="practice">Practice</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
            >
              <Link href={`/videos/${video.id}`}>
                {/* Thumbnail - Enhanced with actual thumbnail images */}
                <div className="aspect-video relative overflow-hidden bg-slate-900">
                  {/* Thumbnail image based on video type */}
                  <img
                    src={video.type === "game" ? "/videos/game-thumbnail.svg" : "/videos/practice-thumbnail.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                      <Play className="w-10 h-10 text-white group-hover:text-primary ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {video.duration}
                  </div>

                  {/* Analysis badge */}
                  {video.analyzed && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary shadow-lg">
                        <BarChart3 className="w-3 h-3 mr-1" />
                        Analyzed
                      </Badge>
                    </div>
                  )}

                  {/* Clips count */}
                  {video.clips > 0 && (
                    <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                      {video.clips} clips
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(video.date).toLocaleDateString()}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {video.sport}
                    </Badge>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{video.clips} clips created</span>
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
