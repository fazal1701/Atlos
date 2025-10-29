"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, ArrowLeft, CheckCircle2, Trophy } from "lucide-react"

type GradeLevel =
  | "9th Grade"
  | "10th Grade"
  | "11th Grade"
  | "12th Grade"
  | "College Freshman"
  | "College Sophomore"
  | "College Junior"
  | "College Senior"
  | "Graduate"

interface CareerPath {
  id: string
  name: string
  icon: string
  description: string
}

const sports: string[] = [
  "Basketball","Football","Soccer","Baseball","Softball","Volleyball","Track & Field",
  "Cross Country","Hockey","Lacrosse","Tennis","Golf","Wrestling","Swimming","Cheer",
]

const careerPaths: CareerPath[] = [
  { id: "analytics", name: "Data & Analytics", icon: "📊", description: "Sports stats, BI dashboards, and decision science." },
  { id: "business", name: "Business & Ops", icon: "🏢", description: "Front office, operations, partnerships, and strategy." },
  { id: "marketing", name: "Marketing & Media", icon: "🎥", description: "Content, social, brand, NIL, and storytelling." },
  { id: "engineering", name: "Software & Product", icon: "💻", description: "Apps, product management, UX, and platforms." },
  { id: "health", name: "Health & Performance", icon: "🧬", description: "Kinesiology, physio, S&C, and sports science." },
  { id: "finance", name: "Finance & Investing", icon: "💹", description: "Budgeting, FP&A, and sports investing." },
  { id: "education", name: "Education & Coaching", icon: "🏫", description: "Coaching, mentoring, and leadership development." },
  { id: "law", name: "Law & Compliance", icon: "⚖️", description: "Policy, compliance, sports law, and governance." },
  { id: "entrepreneurship", name: "Entrepreneurship", icon: "🚀", description: "Startups, product-market fit, and growth." },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [formData, setFormData] = useState<{
    name: string
    sport: string
    position: string
    gradeLevel: GradeLevel | ""
    careerPath: string
  }>({ name: "", sport: "", position: "", gradeLevel: "", careerPath: "" })

  const isStepValid = (): boolean => {
    if (step === 1) return !!formData.name.trim() && !!formData.sport
    if (step === 2) return !!formData.position.trim() && !!formData.gradeLevel
    if (step === 3) return !!formData.careerPath
    return false
  }

  const handleNext = () => {
    if (!isStepValid()) return
    if (step < 3) {
      setStep((s) => (s + 1) as 1 | 2 | 3)
      return
    }
    try {
      localStorage.setItem("userProfile", JSON.stringify(formData))
      localStorage.setItem("onboardingComplete", "true")
    } catch {}
    router.push("/dashboard")
  }

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as 1 | 2 | 3)
  }

  const percent = Math.round((step / 3) * 100)

  // Light theme variables (Modern Sport-Tech: white + blue accents)
  const themeVars: React.CSSProperties = {
    // whites & grays
    ["--background" as any]: "#ffffff",
    ["--foreground" as any]: "#0b0c10",
    ["--muted" as any]: "#6b7280",
    ["--border" as any]: "#e5e7eb",
    // brand blue
    ["--primary" as any]: "#2563eb",
  }

  return (
    <div
      style={themeVars}
      className="min-h-screen flex items-center justify-center p-4 bg-[var(--background)] text-[var(--foreground)]"
    >
      <Card className="w-full max-w-3xl p-8 lg:p-12 shadow-md rounded-2xl border bg-[var(--background)]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 pb-6 border-b">
          <div className="w-14 h-14 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome to Atlos</h1>
            <p className="text-sm text-[var(--muted)]">Personalize your journey as a student-athlete</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold">Step {step} of 3</span>
            <span className="text-sm font-medium text-[var(--primary)]">{percent}% Complete</span>
          </div>
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${percent}%`,
                background:
                  "linear-gradient(90deg,var(--primary),rgba(37,99,235,0.8))",
              }}
            />
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">Let’s get started</h2>
              <p className="text-[var(--muted)] text-lg">Tell us a bit about yourself</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  What&apos;s your name?
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-base bg-white border focus-visible:ring-[var(--primary)]"
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-semibold">What sport do you play?</Label>
                <Select
                  value={formData.sport}
                  onValueChange={(value) => setFormData({ ...formData, sport: value })}
                >
                  <SelectTrigger className="h-12 text-base bg-white border focus:ring-2 focus:ring-[var(--primary)]">
                    <SelectValue placeholder="Select your sport" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border">
                    {sports.map((sport) => (
                      <SelectItem
                        key={sport}
                        value={sport}
                        className="text-base focus:bg-blue-50 data-[state=checked]:bg-blue-100"
                      >
                        {sport}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">Tell us about your game</h2>
              <p className="text-[var(--muted)] text-lg">This helps us tailor content for you</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="position" className="text-base font-semibold">
                  What position do you play?
                </Label>
                <Input
                  id="position"
                  placeholder="e.g., Point Guard, Quarterback, Midfielder"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="h-12 text-base bg-white border focus-visible:ring-[var(--primary)]"
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-semibold">What grade are you in?</Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) =>
                    setFormData({ ...formData, gradeLevel: value as GradeLevel })
                  }
                >
                  <SelectTrigger className="h-12 text-base bg-white border focus:ring-2 focus:ring-[var(--primary)]">
                    <SelectValue placeholder="Select your grade level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border">
                    <SelectItem value="9th Grade" className="text-base">9th Grade (Freshman)</SelectItem>
                    <SelectItem value="10th Grade" className="text-base">10th Grade (Sophomore)</SelectItem>
                    <SelectItem value="11th Grade" className="text-base">11th Grade (Junior)</SelectItem>
                    <SelectItem value="12th Grade" className="text-base">12th Grade (Senior)</SelectItem>
                    <SelectItem value="College Freshman" className="text-base">College Freshman</SelectItem>
                    <SelectItem value="College Sophomore" className="text-base">College Sophomore</SelectItem>
                    <SelectItem value="College Junior" className="text-base">College Junior</SelectItem>
                    <SelectItem value="College Senior" className="text-base">College Senior</SelectItem>
                    <SelectItem value="Graduate" className="text-base">Graduate Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">Choose your career path</h2>
              <p className="text-[var(--muted)] text-lg">
                Pick one to start. You can explore others later.
              </p>
            </div>

            <div className="grid gap-4">
              {careerPaths.map((path) => {
                const selected = formData.careerPath === path.id
                return (
                  <button
                    key={path.id}
                    onClick={() => setFormData({ ...formData, careerPath: path.id })}
                    className={`text-left p-5 rounded-xl border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/40 hover:border-[var(--primary)]/60 ${
                      selected ? "border-[var(--primary)] bg-blue-50" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{path.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{path.name}</h3>
                          {selected && <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />}
                        </div>
                        <p className="text-sm text-[var(--muted)]">{path.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Nav buttons */}
        <div className="flex justify-between mt-10 pt-6 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            size="lg"
            className="h-12 px-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            size="lg"
            className="h-12 px-8 bg-[var(--primary)] text-white font-semibold hover:opacity-90"
          >
            {step === 3 ? "Complete Setup" : "Continue"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
