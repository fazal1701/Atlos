"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, CheckCircle2, Trophy } from "lucide-react"

const sports = [
  "Basketball",
  "Football",
  "Soccer",
  "Baseball",
  "Volleyball",
  "Track & Field",
  "Swimming",
  "Tennis",
  "Lacrosse",
  "Hockey",
  "Wrestling",
  "Golf",
  "Formula 1 (F1)",
  "Other",
]

const careerPaths = [
  {
    id: "analytics",
    name: "Sports Analytics",
    description: "Data analysis, statistics, and performance metrics",
    icon: "📊",
  },
  {
    id: "coaching",
    name: "Coaching & Training",
    description: "Player development and team strategy",
    icon: "🏆",
  },
  {
    id: "business",
    name: "Sports Business",
    description: "Management, marketing, and operations",
    icon: "💼",
  },
  {
    id: "media",
    name: "Sports Media",
    description: "Broadcasting, journalism, and content creation",
    icon: "📺",
  },
  {
    id: "medicine",
    name: "Sports Medicine",
    description: "Athletic training and physical therapy",
    icon: "⚕️",
  },
  {
    id: "tech",
    name: "Sports Technology",
    description: "Software development and innovation",
    icon: "💻",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    position: "",
    gradeLevel: "",
    careerPath: "",
  })

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      localStorage.setItem("userProfile", JSON.stringify(formData))
      localStorage.setItem("onboardingComplete", "true")
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const isStepValid = () => {
    if (step === 1) return formData.name.trim() && formData.sport
    if (step === 2) return formData.position.trim() && formData.gradeLevel
    if (step === 3) return formData.careerPath
    return false
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-8 lg:p-12 shadow-2xl border-2 border-primary/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border/50">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary via-purple-600 to-purple-700 bg-clip-text text-transparent">Atlos Platform</h1>
            <p className="text-sm text-foreground/70 font-medium mt-1">Your path to success starts here</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            <span className="text-sm font-semibold text-foreground">Step {step} of 3</span>
            <span className="text-sm font-medium text-primary">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-primary via-purple-600 to-purple-700 transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mt-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    s < step
                      ? "bg-gradient-to-br from-primary to-purple-700 text-white shadow-lg scale-105"
                      : s === step
                        ? "bg-gradient-to-br from-primary to-purple-700 text-white shadow-lg scale-110 ring-4 ring-primary/20"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600"
                  }`}
                >
                  {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                <span
                  className={`text-sm font-semibold hidden sm:inline transition-colors ${
                    s <= step ? "text-foreground" : "text-slate-400 dark:text-slate-600"
                  }`}
                >
                  {s === 1 ? "About You" : s === 2 ? "Your Sport" : "Career Path"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-3xl font-bold mb-3">Welcome! Let's get started</h2>
              <p className="text-muted-foreground text-lg">
                Tell us a bit about yourself so we can personalize your experience
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-base font-semibold">
                  What's your name?
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-base"
                  autoFocus
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">What sport do you play?</Label>
                <Select value={formData.sport} onValueChange={(value) => setFormData({ ...formData, sport: value })}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map((sport) => (
                      <SelectItem key={sport} value={sport} className="text-base">
                        {sport}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Athletic Details */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-3xl font-bold mb-3">Tell us about your game</h2>
              <p className="text-muted-foreground text-lg">This helps us tailor content specifically for you</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="position" className="text-base font-semibold">
                  What position do you play?
                </Label>
                <Input
                  id="position"
                  placeholder="e.g., Point Guard, Quarterback, Midfielder"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="h-12 text-base"
                  autoFocus
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">What grade are you in?</Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) => setFormData({ ...formData, gradeLevel: value })}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9th Grade" className="text-base">
                      9th Grade (Freshman)
                    </SelectItem>
                    <SelectItem value="10th Grade" className="text-base">
                      10th Grade (Sophomore)
                    </SelectItem>
                    <SelectItem value="11th Grade" className="text-base">
                      11th Grade (Junior)
                    </SelectItem>
                    <SelectItem value="12th Grade" className="text-base">
                      12th Grade (Senior)
                    </SelectItem>
                    <SelectItem value="College Freshman" className="text-base">
                      College Freshman
                    </SelectItem>
                    <SelectItem value="College Sophomore" className="text-base">
                      College Sophomore
                    </SelectItem>
                    <SelectItem value="College Junior" className="text-base">
                      College Junior
                    </SelectItem>
                    <SelectItem value="College Senior" className="text-base">
                      College Senior
                    </SelectItem>
                    <SelectItem value="Graduate" className="text-base">
                      Graduate Student
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Career Path */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-3xl font-bold mb-3">Choose your career path</h2>
              <p className="text-muted-foreground text-lg">
                What interests you most? Don't worry, you can explore all paths later
              </p>
            </div>

            <div className="grid gap-4">
              {careerPaths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => setFormData({ ...formData, careerPath: path.id })}
                  className={`text-left p-5 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    formData.careerPath === path.id ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{path.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{path.name}</h3>
                        {formData.careerPath === path.id && <CheckCircle2 className="w-5 h-5 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            size="lg"
            className="h-12 px-6 bg-transparent"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={!isStepValid()} size="lg" className="h-12 px-8">
            {step === 3 ? "Complete Setup" : "Continue"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
