"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, BookOpen, Play, Lock, BarChart3, Users, Briefcase } from "lucide-react"
import { getModulesByCategory } from "@/lib/education-framework"

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredModules = getModulesByCategory(selectedCategory).filter((module) => {
    const matchesSearch =
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-purple-600 to-purple-700 bg-clip-text text-transparent">Learning Modules</h1>
          <p className="text-foreground/70 text-lg">Explore courses designed to advance your career in sports</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList>
              <TabsTrigger value="all">All Modules</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="coaching">Coaching</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <Card key={module.id} className="flex flex-col hover:border-primary/50 transition-colors overflow-hidden group">
              {/* Module Preview Image/Icon - Sport-Specific */}
              <div className="h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 relative overflow-hidden">
                {/* Sport field background based on module title */}
                {module.title.toLowerCase().includes('basketball') || module.title.toLowerCase().includes('shot') ? (
                  <img src="/sports/basketball-court.svg" alt="Basketball" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                ) : module.title.toLowerCase().includes('baseball') || module.title.toLowerCase().includes('run') ? (
                  <img src="/sports/baseball-field.svg" alt="Baseball" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                ) : module.title.toLowerCase().includes('soccer') || module.title.toLowerCase().includes('goal') ? (
                  <img src="/sports/soccer-field.svg" alt="Soccer" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                ) : module.title.toLowerCase().includes('formula') || module.title.toLowerCase().includes('f1') || module.title.toLowerCase().includes('race') ? (
                  <img src="/sports/f1-track.svg" alt="Formula 1" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                ) : null}

                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  {/* Icon based on module category */}
                  <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    {module.category === "Analytics" && <BarChart3 className="w-10 h-10 text-primary" />}
                    {module.category === "Coaching" && <Users className="w-10 h-10 text-primary" />}
                    {module.category === "Business" && <Briefcase className="w-10 h-10 text-primary" />}
                    {!["Analytics", "Coaching", "Business"].includes(module.category) && (
                      <BookOpen className="w-10 h-10 text-primary" />
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={module.level === "Beginner" ? "secondary" : "default"}>{module.level}</Badge>
                  {module.status === "in-progress" && <Badge className="bg-primary">In Progress</Badge>}
                  {module.status === "completed" && <Badge className="bg-accent">Completed</Badge>}
                  {module.status === "locked" && <Lock className="w-4 h-4 text-muted-foreground" />}
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {module.duration} hours
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {module.lessons.length} lessons
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {module.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {module.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{module.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all" style={{ width: `${module.progress}%` }} />
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  className="w-full"
                  variant={module.status === "locked" ? "outline" : "default"}
                  disabled={module.status === "locked"}
                  asChild={module.status !== "locked"}
                >
                  {module.status === "locked" ? (
                    <>
                      <Lock className="mr-2 w-4 h-4" />
                      Locked
                    </>
                  ) : (
                    <Link href={`/learn/${module.id}`}>
                      {module.status === "in-progress" ? (
                        <>
                          <Play className="mr-2 w-4 h-4" />
                          Continue
                        </>
                      ) : module.status === "completed" ? (
                        <>
                          <Play className="mr-2 w-4 h-4" />
                          Review
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 w-4 h-4" />
                          Start Module
                        </>
                      )}
                    </Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No modules found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
