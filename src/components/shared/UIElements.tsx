import React from "react";

// Shared UI building blocks

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sky text-xs font-semibold tracking-widest uppercase font-body">{children}</span>
);

export const SectionHeading = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`font-display text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-navy"}`}>{children}</h2>
);

export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>{children}</div>
);

export const DotGrid = ({ opacity = 7 }: { opacity?: number }) => (
  <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: opacity / 100 }} />
);

export const BlobDecoration = ({ color, className }: { color: "sky" | "coral"; className?: string }) => {
  const bg = color === "sky" ? "bg-sky" : "bg-coral";
  return <div className={`absolute rounded-full blur-[100px] ${bg} pointer-events-none ${className}`} />;
};
