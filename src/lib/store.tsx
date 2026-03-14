import React, { createContext, useContext, useState, useEffect } from "react";

// ---- Mock Data Store ----
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  status: "draft" | "published";
  metaTitle: string;
  metaDescription: string;
  createdAt: string;
  updatedAt: string;
}

export interface CMSPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: "draft" | "published";
  metaTitle: string;
  metaDescription: string;
  createdAt: string;
  updatedAt: string;
}

export interface Keyword {
  id: string;
  keyword: string;
  targetPage: string;
  priority: "high" | "medium" | "low";
  notes: string;
}

export interface SEODefaults {
  siteTitle: string;
  siteDescription: string;
  ogImage: string;
}

export interface AppSettings {
  applicationFormUrl: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Every Graduate Should Consider an Internship First",
    slug: "why-every-graduate-should-consider-internship",
    excerpt: "The transition from university to career is rarely straightforward. Here's why an internship might be the smartest first step you take.",
    content: "<p>The transition from university to career is rarely straightforward...</p>",
    coverImage: "",
    status: "published",
    metaTitle: "",
    metaDescription: "",
    createdAt: "2026-02-15",
    updatedAt: "2026-02-15",
  },
  {
    id: "2",
    title: "Building a Business from Scratch: Lessons from the First 90 Days",
    slug: "building-business-from-scratch-first-90-days",
    excerpt: "What nobody tells you about the first three months of building a business — and why the messy middle is where the magic happens.",
    content: "<p>The first 90 days of any new venture are simultaneously the most exciting and the most terrifying...</p>",
    coverImage: "",
    status: "published",
    metaTitle: "",
    metaDescription: "",
    createdAt: "2026-03-01",
    updatedAt: "2026-03-01",
  },
];

const STORE_KEY = "internwise_store";

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

function saveStore(data: any) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

interface StoreState {
  posts: BlogPost[];
  pages: CMSPage[];
  keywords: Keyword[];
  seo: SEODefaults;
  settings: AppSettings;
  isAuthenticated: boolean;
}

interface StoreContextType extends StoreState {
  setPosts: (p: BlogPost[]) => void;
  setPages: (p: CMSPage[]) => void;
  setKeywords: (k: Keyword[]) => void;
  setSeo: (s: SEODefaults) => void;
  setSettings: (s: AppSettings) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

const defaultState: StoreState = {
  posts: defaultPosts,
  pages: [],
  keywords: [],
  seo: { siteTitle: "Internwise Founder Partnership", siteDescription: "", ogImage: "" },
  settings: { applicationFormUrl: "#apply" },
  isAuthenticated: false,
};

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoreState>(() => {
    const saved = loadStore();
    return saved ? { ...defaultState, ...saved } : defaultState;
  });

  useEffect(() => {
    const { isAuthenticated, ...rest } = state;
    saveStore(rest);
  }, [state]);

  const setPosts = (posts: BlogPost[]) => setState((s) => ({ ...s, posts }));
  const setPages = (pages: CMSPage[]) => setState((s) => ({ ...s, pages }));
  const setKeywords = (keywords: Keyword[]) => setState((s) => ({ ...s, keywords }));
  const setSeo = (seo: SEODefaults) => setState((s) => ({ ...s, seo }));
  const setSettings = (settings: AppSettings) => setState((s) => ({ ...s, settings }));
  const login = (email: string, password: string) => {
    if (email === "admin@internwise.com" && password === "admin123") {
      setState((s) => ({ ...s, isAuthenticated: true }));
      return true;
    }
    return false;
  };
  const logout = () => setState((s) => ({ ...s, isAuthenticated: false }));

  return (
    <StoreContext.Provider value={{ ...state, setPosts, setPages, setKeywords, setSeo, setSettings, login, logout }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
