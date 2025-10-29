"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, BookOpen, Play, Lock, BarChart3, Users, Briefcase, Target } from "lucide-react"
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
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-black">Learning Modules</h1>
          <p className="text-gray-600 text-lg mb-4">Explore courses designed to advance your career in sports</p>
          <div className="flex items-center gap-2 text-sm">
            <Badge className="bg-black text-white">Project-Based Learning</Badge>
            <Badge variant="outline" className="border-gray-300 text-black">Real-World Applications</Badge>
            <Badge variant="outline" className="border-gray-300 text-black">Industry Partnerships</Badge>
          </div>
        </div>

        {/* Project-Based Learning Highlight Banner */}
        <Card className="mb-8 border-2 border-gray-200 bg-white shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">
                    Learn by Doing
                  </h2>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Every module includes <span className="font-bold text-black">hands-on projects</span> that mirror real-world scenarios.
                  Build your portfolio while mastering skills that employers value.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-2xl font-bold text-black">12+</p>
                    <p className="text-xs text-gray-600">Projects</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-2xl font-bold text-green-600">100%</p>
                    <p className="text-xs text-gray-600">Practical</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-2xl font-bold text-blue-600">Real</p>
                    <p className="text-xs text-gray-600">Data</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/projects/project-analytics.svg" alt="Project-Based Learning" className="w-full max-w-sm h-auto drop-shadow-2xl" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-300"
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
            <Card key={module.id} className="flex flex-col hover:border-black/40 transition-colors overflow-hidden group bg-white border-gray-200">
              {/* Module Preview Image/Icon - Sport-Specific */}
              <div className="h-40 bg-gray-50 relative overflow-hidden">
                {/* Sport field background based on module title */}
                {module.title.toLowerCase().includes('basketball') || module.title.toLowerCase().includes('shot') ? (
                  <img src="/sports/basketball-court.svg" alt="Basketball" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                ) : module.title.toLowerCase().includes('baseball') || module.title.toLowerCase().includes('run') ? (
                  <img src="/sports/baseball-field.svg" alt="Baseball" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                ) : module.title.toLowerCase().includes('soccer') || module.title.toLowerCase().includes('goal') ? (
                  <img src="/sports/soccer-field.svg" alt="Soccer" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                ) : module.title.toLowerCase().includes('formula') || module.title.toLowerCase().includes('f1') || module.title.toLowerCase().includes('race') ? (
                  <img src="/sports/f1-track.svg" alt="Formula 1" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                ) : null}

                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Icon based on module category */}
                  <div className="w-20 h-20 rounded-full bg-white backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-gray-200">
                    {module.category === "analytics" && <BarChart3 className="w-10 h-10 text-black" />}
                    {module.category === "coaching" && <Users className="w-10 h-10 text-black" />}
                    {module.category === "business" && <Briefcase className="w-10 h-10 text-black" />}
                    {!["analytics", "coaching", "business"].includes(module.category) && (
                      <BookOpen className="w-10 h-10 text-black" />
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-2">
                    <Badge variant={module.level === "Beginner" ? "secondary" : "default"} className="bg-gray-100 text-black border-gray-300">{module.level}</Badge>
                    <Badge variant="outline" className="bg-black/5 text-black border-gray-300">
                      <Target className="w-3 h-3 mr-1" />
                      Project
                    </Badge>
                  </div>
                  {module.status === "in-progress" && <Badge className="bg-black text-white">In Progress</Badge>}
                  {module.status === "completed" && <Badge className="bg-green-600 text-white">Completed</Badge>}
                  {module.status === "locked" && <Lock className="w-4 h-4 text-gray-400" />}
                </div>
                <CardTitle className="text-xl group-hover:text-black transition-colors">{module.title}</CardTitle>
                <CardDescription className="text-gray-600">{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-4 h-4" />
                      {module.duration} hours
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <BookOpen className="w-4 h-4" />
                      {module.lessons.length} lessons
                    </span>
                  </div>

                  {/* Project Highlight */}
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-xs font-semibold text-black mb-1">✨ Includes Hands-On Project</p>
                    <p className="text-xs text-gray-600">Build real-world portfolio pieces</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {module.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-gray-300 text-black">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {module.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-black">{module.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-black transition-all" style={{ width: `${module.progress}%` }} />
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  className="w-full bg-black text-white hover:bg-gray-800"
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
            <p className="text-gray-600">No modules found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
