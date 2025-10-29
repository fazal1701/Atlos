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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Video Library</h1>
            <p className="text-muted-foreground">Upload and analyze your game footage</p>
          </div>
          <Button size="lg" asChild>
            <Link href="/videos/upload">
              <Upload className="mr-2 w-5 h-5" />
              Upload Video
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Videos</p>
                  <p className="text-3xl font-bold">{videos.length}</p>
                </div>
                <Video className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Analyzed</p>
                  <p className="text-3xl font-bold">{videos.filter((v) => v.analyzed).length}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Clips</p>
                  <p className="text-3xl font-bold">{videos.reduce((acc, v) => acc + v.clips, 0)}</p>
                </div>
                <Play className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Watch Time</p>
                  <p className="text-3xl font-bold">8.2h</p>
                </div>
                <Clock className="w-8 h-8 text-primary" />
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
                {/* Thumbnail - Enhanced with mock video preview */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 relative overflow-hidden">
                  {/* Mock court/field pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 225">
                      {/* Basketball court lines */}
                      <rect x="50" y="20" width="300" height="185" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="200" cy="112.5" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <line x1="200" y1="20" x2="200" y2="205" stroke="currentColor" strokeWidth="2"/>
                      <path d="M 50 112.5 Q 80 112.5 80 82.5 L 80 142.5 Q 80 112.5 50 112.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M 350 112.5 Q 320 112.5 320 82.5 L 320 142.5 Q 320 112.5 350 112.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
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
