"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  BarChart3,
  Users,
  Briefcase,
  Heart,
  Laptop,
  DollarSign,
  Calendar,
  Lightbulb,
  Radio,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

const careerPathways = [
  {
    id: "analytics",
    name: "Sports Analytics & Performance",
    icon: BarChart3,
    description: "Data science, statistical analysis, and performance optimization",
    skills: ["Python", "Statistics", "Data Visualization", "Machine Learning"],
    roles: ["Sports Data Scientist", "Performance Analyst", "Analytics Consultant"],
    progress: 45,
    color: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-200 dark:border-blue-900",
  },
  {
    id: "business",
    name: "Business/Sales/Marketing",
    icon: Briefcase,
    description: "Sports marketing, brand management, and business operations",
    skills: ["Marketing", "Sales", "Brand Strategy", "Business Development"],
    roles: ["Sports Marketer", "Brand Manager", "Business Development Manager"],
    progress: 20,
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-200 dark:border-green-900",
  },
  {
    id: "coaching",
    name: "Coaching & Education",
    icon: Users,
    description: "Coaching, player development, and sports education",
    skills: ["Leadership", "Communication", "Strategy", "Player Development"],
    roles: ["Head Coach", "Assistant Coach", "Skills Trainer", "Sports Educator"],
    progress: 60,
    color: "text-purple-600",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-200 dark:border-purple-900",
  },
  {
    id: "health",
    name: "Health & Wellness",
    icon: Heart,
    description: "Sports medicine, nutrition, and athletic training",
    skills: ["Anatomy", "Nutrition", "Injury Prevention", "Rehabilitation"],
    roles: ["Athletic Trainer", "Sports Nutritionist", "Physical Therapist"],
    progress: 0,
    color: "text-red-600",
    bgColor: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
    borderColor: "border-red-200 dark:border-red-900",
  },
  {
    id: "tech",
    name: "Tech & Product Management",
    icon: Laptop,
    description: "Sports technology, product development, and innovation",
    skills: ["Product Management", "UX Design", "Software Development", "Innovation"],
    roles: ["Product Manager", "Sports Tech Developer", "Innovation Lead"],
    progress: 15,
    color: "text-cyan-600",
    bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-200 dark:border-cyan-900",
  },
  {
    id: "finance",
    name: "Finance & Investment",
    icon: DollarSign,
    description: "Sports finance, investment, and contract negotiation",
    skills: ["Financial Analysis", "Investment Strategy", "Contract Law", "Economics"],
    roles: ["Sports Agent", "Financial Analyst", "Investment Manager"],
    progress: 0,
    color: "text-yellow-600",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-200 dark:border-yellow-900",
  },
  {
    id: "events",
    name: "Event Management",
    icon: Calendar,
    description: "Sports event planning, operations, and logistics",
    skills: ["Event Planning", "Operations", "Logistics", "Vendor Management"],
    roles: ["Event Manager", "Operations Director", "Venue Manager"],
    progress: 0,
    color: "text-orange-600",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-200 dark:border-orange-900",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship & NIL Branding",
    icon: Lightbulb,
    description: "Personal branding, NIL opportunities, and entrepreneurship",
    skills: ["Branding", "Social Media", "Entrepreneurship", "NIL Strategy"],
    roles: ["Brand Entrepreneur", "Content Creator", "NIL Consultant"],
    progress: 30,
    color: "text-pink-600",
    bgColor: "bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20",
    borderColor: "border-pink-200 dark:border-pink-900",
  },
  {
    id: "media",
    name: "Communications & Broadcasting",
    icon: Radio,
    description: "Sports journalism, broadcasting, and media production",
    skills: ["Writing", "Public Speaking", "Video Production", "Journalism"],
    roles: ["Sports Journalist", "Broadcaster", "Content Producer", "Analyst"],
    progress: 10,
    color: "text-indigo-600",
    bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-200 dark:border-indigo-900",
  },
]

export default function CareersPage() {
  const activePathways = careerPathways.filter((p) => p.progress > 0)
  const availablePathways = careerPathways.filter((p) => p.progress === 0)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Career Pathways</h1>
              <p className="text-muted-foreground">
                Explore 9 career tracks from athletics to professional excellence
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{activePathways.length}</div>
                <div className="text-sm text-muted-foreground">Active Pathways</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Skills Developed</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">Mentor Connections</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">94%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Pathways */}
        {activePathways.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Active Pathways</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {activePathways.map((pathway) => (
                <Card key={pathway.id} className={`${pathway.borderColor} hover:shadow-xl transition-all overflow-hidden group`}>
                  {/* Visual Header with Gradient */}
                  <div className={`h-24 ${pathway.bgColor} relative overflow-hidden border-b ${pathway.borderColor}`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <div className={`w-16 h-16 rounded-xl bg-background shadow-lg flex items-center justify-center border-2 border-background group-hover:scale-110 transition-transform`}>
                        <pathway.icon className={`w-8 h-8 ${pathway.color}`} />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pt-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="mb-2">{pathway.name}</CardTitle>
                        <CardDescription>{pathway.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{pathway.progress}%</span>
                      </div>
                      <Progress value={pathway.progress} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Key Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {pathway.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/careers/${pathway.id}`}>
                        Continue Learning <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Career Pathways */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Explore All Pathways</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPathways.map((pathway) => (
              <Card
                key={pathway.id}
                className="hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${pathway.bgColor} flex items-center justify-center`}>
                      <pathway.icon className={`w-5 h-5 ${pathway.color}`} />
                    </div>
                    {pathway.progress > 0 && (
                      <Badge variant="default" className="ml-auto">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {pathway.name}
                  </CardTitle>
                  <CardDescription className="text-sm">{pathway.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Sample Roles</p>
                      <div className="space-y-1">
                        {pathway.roles.slice(0, 2).map((role) => (
                          <p key={role} className="text-sm">
                            • {role}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/careers/${pathway.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

