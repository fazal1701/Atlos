"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Upload, Video, CheckCircle2 } from "lucide-react"

export default function UploadVideoPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "game",
    date: "",
    opponent: "",
  })

  const handleUpload = () => {
    setUploading(true)
    // Simulate upload
    setTimeout(() => {
      setUploading(false)
      setStep(3)
    }, 2000)
  }

  const handleFinish = () => {
    router.push("/videos")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-2xl font-bold text-primary">
              GameSense
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/videos">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Videos
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="w-6 h-6" /> : s}
                  </div>
                  {s < 3 && <div className={`flex-1 h-1 mx-2 ${s < step ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Video Details</span>
              <span>Upload File</span>
              <span>Complete</span>
            </div>
          </div>

          {/* Step 1: Video Details */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Video Details</CardTitle>
                <CardDescription>Tell us about this video</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Video Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Championship Game Q4"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Add notes about this video..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Video Type</Label>
                  <RadioGroup
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="game" id="game" />
                      <Label htmlFor="game" className="cursor-pointer">
                        Game Footage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="practice" id="practice" />
                      <Label htmlFor="practice" className="cursor-pointer">
                        Practice Session
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="drill" id="drill" />
                      <Label htmlFor="drill" className="cursor-pointer">
                        Individual Drill
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  {formData.type === "game" && (
                    <div className="space-y-2">
                      <Label htmlFor="opponent">Opponent (Optional)</Label>
                      <Input
                        id="opponent"
                        placeholder="Team name"
                        value={formData.opponent}
                        onChange={(e) => setFormData({ ...formData, opponent: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setStep(2)} disabled={!formData.title || !formData.date}>
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Upload File */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Upload Video File</CardTitle>
                <CardDescription>Supported formats: MP4, MOV, AVI (Max 2GB)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Drop your video here or click to browse</p>
                  <p className="text-sm text-muted-foreground">MP4, MOV, or AVI up to 2GB</p>
                  <input type="file" className="hidden" accept="video/*" />
                </div>

                {uploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Uploading...</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-300" style={{ width: "45%" }} />
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={handleUpload} disabled={uploading}>
                    {uploading ? "Uploading..." : "Upload & Analyze"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Complete */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>Upload Complete!</CardTitle>
                  <CardDescription>Your video is being processed and analyzed</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <Video className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{formData.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {formData.type.charAt(0).toUpperCase() + formData.type.slice(1)} • {formData.date}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border">
                    <h3 className="font-semibold mb-2">What's Next?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>AI analysis will identify key moments and plays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Automatic clip generation for highlights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Performance metrics and insights</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep(1)}>
                    Upload Another
                  </Button>
                  <Button className="flex-1" onClick={handleFinish}>
                    View Library
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
