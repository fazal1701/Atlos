"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, MessageSquare, ThumbsUp, Users, Calendar, Video, TrendingUp, Award, Send, Filter, Eye } from "lucide-react"

const discussions = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    title: "Best tools for tracking shooting percentages?",
    content: "I'm looking for recommendations on tools or apps to track shooting percentages during practice...",
    category: "Analytics",
    replies: 12,
    likes: 24,
    time: "2 hours ago",
    tags: ["analytics", "tools", "basketball"],
  },
  {
    id: 2,
    author: "Marcus Johnson",
    avatar: "MJ",
    title: "How to break down game film effectively?",
    content: "What's your process for analyzing game footage? Looking for tips on what to focus on...",
    category: "Video Analysis",
    replies: 8,
    likes: 18,
    time: "5 hours ago",
    tags: ["video-analysis", "tips"],
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    avatar: "ER",
    title: "Career advice: Analytics vs. Coaching path?",
    content: "I'm torn between pursuing analytics or coaching. Would love to hear from people in both fields...",
    category: "Career",
    replies: 15,
    likes: 31,
    time: "1 day ago",
    tags: ["career", "advice"],
  },
]

const mentors = [
  {
    name: "Dr. James Wilson",
    role: "NBA Analytics Director",
    expertise: "Sports Analytics",
    students: 45,
    rating: 4.9,
    avatar: "JW",
  },
  {
    name: "Coach Lisa Martinez",
    role: "College Basketball Coach",
    expertise: "Coaching & Development",
    students: 38,
    rating: 4.8,
    avatar: "LM",
  },
  {
    name: "Alex Thompson",
    role: "Sports Tech Founder",
    expertise: "Sports Technology",
    students: 52,
    rating: 4.9,
    avatar: "AT",
  },
]

const events = [
  {
    title: "Live Q&A: Breaking into Sports Analytics",
    host: "Dr. James Wilson",
    date: "Tomorrow at 3:00 PM",
    attendees: 124,
    type: "webinar",
  },
  {
    title: "Workshop: Advanced Video Analysis Techniques",
    host: "Coach Lisa Martinez",
    date: "Friday at 5:00 PM",
    attendees: 89,
    type: "workshop",
  },
  {
    title: "Career Fair: Sports Industry Opportunities",
    host: "GameSense Team",
    date: "Next Monday at 2:00 PM",
    attendees: 256,
    type: "event",
  },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discussions")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with peers, mentors, and industry professionals</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                  <p className="text-3xl font-bold">10.2K</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Discussions</p>
                  <p className="text-3xl font-bold">1.5K</p>
                </div>
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Mentors</p>
                  <p className="text-3xl font-bold">150</p>
                </div>
                <Award className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Events</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Discussion Feed */}
              <div className="lg:col-span-2 space-y-6">
                {/* Search and Filter */}
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search discussions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 w-4 h-4" />
                    Filter
                  </Button>
                </div>

                {/* New Discussion */}
                <Card>
                  <CardHeader>
                    <CardTitle>Start a Discussion</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Input placeholder="Discussion title..." />
                    <Textarea placeholder="What's on your mind?" rows={3} />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="cursor-pointer">
                          Analytics
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Career
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Video
                        </Badge>
                      </div>
                      <Button>
                        <Send className="mr-2 w-4 h-4" />
                        Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Discussion List - Enhanced with Visual Elements */}
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <Card key={discussion.id} className="hover:border-primary/50 transition-colors cursor-pointer group overflow-hidden">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          {/* Enhanced Avatar with Gradient Ring */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                            <Avatar className="w-12 h-12 relative border-2 border-background">
                              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold">
                                {discussion.avatar}
                              </AvatarFallback>
                            </Avatar>
                            {/* Online indicator for some users */}
                            {index % 3 === 0 && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                  {discussion.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span className="font-medium">{discussion.author}</span>
                                  <span>•</span>
                                  <span>{discussion.time}</span>
                                  <Badge variant="secondary" className="text-xs">
                                    {discussion.category}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-3">{discussion.content}</p>

                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                                <ThumbsUp className="mr-2 w-4 h-4" />
                                {discussion.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                                <MessageSquare className="mr-2 w-4 h-4" />
                                {discussion.replies} replies
                              </Button>
                              {/* View count */}
                              <span className="text-sm text-muted-foreground ml-auto flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {Math.floor(Math.random() * 500) + 100}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trending Topics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Trending Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { tag: "analytics", posts: 156 },
                      { tag: "career-advice", posts: 89 },
                      { tag: "video-analysis", posts: 67 },
                      { tag: "basketball", posts: 234 },
                      { tag: "coaching", posts: 45 },
                    ].map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer"
                      >
                        <span className="text-sm font-medium">#{topic.tag}</span>
                        <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Community Guidelines */}
                <Card>
                  <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Be respectful and supportive</p>
                    <p>• Share knowledge and experiences</p>
                    <p>• Stay on topic</p>
                    <p>• No spam or self-promotion</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read full guidelines
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mentors">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Mentor List */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Find a Mentor</h2>
                  <p className="text-muted-foreground">Connect with industry professionals for guidance and advice</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {mentors.map((mentor, i) => (
                    <Card key={i} className="hover:border-primary/50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center mb-4">
                          <Avatar className="w-20 h-20 mb-3">
                            <AvatarFallback className="bg-primary/10 text-primary text-xl">
                              {mentor.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="font-semibold text-lg">{mentor.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{mentor.role}</p>
                          <Badge variant="secondary">{mentor.expertise}</Badge>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Students</span>
                            <span className="font-semibold">{mentor.students}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Rating</span>
                            <span className="font-semibold">{mentor.rating} / 5.0</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-transparent" variant="outline">
                            View Profile
                          </Button>
                          <Button className="flex-1">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Expert Guidance</p>
                        <p className="text-muted-foreground">Learn from industry professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Network Building</p>
                        <p className="text-muted-foreground">Connect with the sports industry</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Career Growth</p>
                        <p className="text-muted-foreground">Accelerate your career path</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Become a Mentor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Share your expertise and help the next generation of sports professionals
                    </p>
                    <Button className="w-full">Apply Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Events List */}
              <div className="lg:col-span-2 space-y-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
                  <p className="text-muted-foreground">Join live sessions, workshops, and networking events</p>
                </div>

                <div className="space-y-4">
                  {events.map((event, i) => (
                    <Card key={i} className="hover:border-primary/50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {event.type === "webinar" ? (
                              <Video className="w-8 h-8 text-primary" />
                            ) : event.type === "workshop" ? (
                              <Users className="w-8 h-8 text-primary" />
                            ) : (
                              <Calendar className="w-8 h-8 text-primary" />
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <Badge variant="secondary" className="mb-2">
                                  {event.type}
                                </Badge>
                                <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                                <p className="text-sm text-muted-foreground">Hosted by {event.host}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.attendees} attending
                              </span>
                            </div>

                            <Button>Register</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Events</CardTitle>
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

                <Card>
                  <CardHeader>
                    <CardTitle>Event Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
