"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Play, CheckCircle2, Clock, Award, BookOpen, Video, FileText, HelpCircle } from "lucide-react"
import { getModuleById } from "@/lib/education-framework"

export default function ModulePage() {
  const params = useParams()
  const moduleId = params.moduleId as string
  const module = getModuleById(moduleId)
  const [activeTab, setActiveTab] = useState("overview")

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Module not found</h1>
          <Button asChild>
            <Link href="/learn">Back to Modules</Link>
          </Button>
        </div>
      </div>
    )
  }

  const totalLessons = module.lessons.length
  const completedLessons = module.lessons.filter((l) => l.completed).length

  const chaptersSize = Math.ceil(totalLessons / 3)
  const chapters = [
    {
      id: 1,
      title: "Foundations",
      lessons: module.lessons.slice(0, chaptersSize),
    },
    {
      id: 2,
      title: "Core Concepts",
      lessons: module.lessons.slice(chaptersSize, chaptersSize * 2),
    },
    {
      id: 3,
      title: "Advanced Topics",
      lessons: module.lessons.slice(chaptersSize * 2),
    },
  ].filter((chapter) => chapter.lessons.length > 0)

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />
      case "reading":
        return <FileText className="w-4 h-4" />
      case "quiz":
        return <HelpCircle className="w-4 h-4" />
      case "interactive":
        return <Play className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
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
              <Link href="/learn">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Modules
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Module Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge>{module.level}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {module.duration} hours
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {totalLessons} lessons
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{module.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{module.description}</p>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Your Progress</span>
                <span className="font-semibold">
                  {completedLessons}/{totalLessons} lessons ({module.progress}%)
                </span>
              </div>
              <Progress value={module.progress} />
            </div>
            <Button size="lg">
              <Play className="mr-2 w-5 h-5" />
              {module.progress > 0 ? "Continue Learning" : "Start Module"}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Module</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Skills You'll Gain</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {module.prerequisites.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3">Prerequisites</h3>
                        <div className="space-y-2">
                          {module.prerequisites.map((prereq) => (
                            <div key={prereq} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              <span className="text-sm text-muted-foreground">{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold mb-3">Module Structure</h3>
                      <p className="text-muted-foreground text-sm">
                        This module contains {totalLessons} lessons organized into {chapters.length} chapters. Each
                        lesson includes video content, readings, and interactive exercises to reinforce your learning.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <CardDescription>
                      {completedLessons} of {totalLessons} lessons completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {chapters.map((chapter) => (
                        <AccordionItem key={chapter.id} value={`chapter-${chapter.id}`}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3 text-left">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-bold text-primary">{chapter.id}</span>
                              </div>
                              <span className="font-semibold">{chapter.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pl-11">
                              {chapter.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                                >
                                  <div className="flex items-center gap-3">
                                    {lesson.completed ? (
                                      <CheckCircle2 className="w-5 h-5 text-accent" />
                                    ) : (
                                      <div className="w-5 h-5 text-muted-foreground">{getLessonIcon(lesson.type)}</div>
                                    )}
                                    <div>
                                      <p className="font-medium text-sm">{lesson.title}</p>
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>{lesson.duration} min</span>
                                        <span>•</span>
                                        <span className="capitalize">{lesson.type}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Button size="sm" variant="ghost">
                                    {lesson.completed ? "Review" : "Start"}
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Resources</CardTitle>
                    <CardDescription>Supplementary materials to enhance your learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { title: `${module.title} - Study Guide`, type: "PDF", size: "2.4 MB" },
                      { title: "Practice Exercises", type: "PDF", size: "1.8 MB" },
                      { title: "Sample Data Sets", type: "CSV", size: "856 KB" },
                      { title: "Recommended Reading List", type: "PDF", size: "124 KB" },
                    ].map((resource, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        <div>
                          <p className="font-medium text-sm">{resource.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {resource.type} • {resource.size}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost">
                          Download
                        </Button>
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
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completion</span>
                  <span className="font-semibold">{module.progress}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Lessons Done</span>
                  <span className="font-semibold">
                    {completedLessons}/{totalLessons}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Time Remaining</span>
                  <span className="font-semibold">
                    {Math.round((module.duration * (100 - module.progress)) / 100)} hrs
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {module.progress >= 25 && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <Award className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-medium text-sm">Getting Started</p>
                      <p className="text-xs text-muted-foreground">Complete 25% of module</p>
                    </div>
                  </div>
                )}
                {module.progress >= 50 && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <Award className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-medium text-sm">Halfway There</p>
                      <p className="text-xs text-muted-foreground">Complete 50% of module</p>
                    </div>
                  </div>
                )}
                {module.progress < 100 && (
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-border opacity-50">
                    <Award className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Module Master</p>
                      <p className="text-xs text-muted-foreground">Complete all lessons</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
