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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-8 lg:p-12 shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Atlos Platform</h1>
            <p className="text-sm text-foreground/70">Your path to success starts here</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-3">
            <span className="text-sm font-medium">Step {step} of 3</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mt-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    s < step
                      ? "bg-primary text-primary-foreground"
                      : s === step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:inline ${
                    s <= step ? "text-foreground" : "text-muted-foreground"
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
