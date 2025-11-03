"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { trackEvent } from "@/lib/analytics"

interface ApplyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApplyModal({ open, onOpenChange }: ApplyModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    thesis: "",
    firstCustomers: "",
    whyYou: "",
    links: "",
    startTimeline: false,
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent("submit_apply", { email: formData.email })
    setIsSubmitted(true)
    // In production, send to your backend/CRM
    console.log("Application submitted:", formData)
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        company: "",
        thesis: "",
        firstCustomers: "",
        whyYou: "",
        links: "",
        startTimeline: false,
        consent: false,
      })
    }, 300)
  }

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Application received</DialogTitle>
            <DialogDescription>
              Thank you for applying to GIRAF. We'll review your application and get back to you within 3 business days.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleClose} className="w-full">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply as Founder</DialogTitle>
          <DialogDescription>Tell us about your vision and what you're building.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="thesis">
              280-character thesis <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="thesis"
              required
              maxLength={280}
              rows={3}
              placeholder="What problem are you solving and why now?"
              value={formData.thesis}
              onChange={(e) => setFormData({ ...formData, thesis: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">{formData.thesis.length}/280 characters</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstCustomers">
              First 5 customers <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="firstCustomers"
              required
              rows={3}
              placeholder="Who are they? How did you find them?"
              value={formData.firstCustomers}
              onChange={(e) => setFormData({ ...formData, firstCustomers: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyYou">
              Why you <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="whyYou"
              required
              rows={3}
              placeholder="What makes you the right person to build this?"
              value={formData.whyYou}
              onChange={(e) => setFormData({ ...formData, whyYou: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="links">Links (deck/Loom)</Label>
            <Input
              id="links"
              type="url"
              placeholder="https://"
              value={formData.links}
              onChange={(e) => setFormData({ ...formData, links: e.target.value })}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="startTimeline"
              checked={formData.startTimeline}
              onCheckedChange={(checked) => setFormData({ ...formData, startTimeline: checked as boolean })}
            />
            <Label htmlFor="startTimeline" className="text-sm font-normal leading-relaxed cursor-pointer">
              I can start within 4 weeks
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              required
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            />
            <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
              I consent to GIRAF storing and processing my application data <span className="text-destructive">*</span>
            </Label>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
