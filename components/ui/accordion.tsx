"use client"
import * as React from "react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full py-3 text-left font-medium"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  )
}

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="divide-y">{children}</div>
}
