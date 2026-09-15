"use client";

import { useState } from "react";
import { Smartphone, Laptop, Zap } from "lucide-react";
import {
  SiFlutter,
  SiFirebase,
  SiDart,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

/* ─── Floating tech badge ─────────────────────────────────── */
function TechBadge({
  label,
  icon,
  style,
}: {
  label: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className="float-badge absolute z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md border"
      style={{
        background: "color-mix(in oklab, rgb(var(--card)) 90%, transparent)",
        borderColor: "color-mix(in oklab, rgb(var(--accentA)) 40%, transparent)",
        color: "rgb(var(--fg))",
        ...style,
      }}
      aria-hidden="true"
    >
      {icon}
      <span>{label}</span>
    </span>
  );
}

/* ─── Phone mock (Flutter AI Chat) ──────────────────────────── */
function PhoneMockup() {
  return (
    <div
      className="phone-frame mx-auto"
      style={{
        width: 260,
        height: 520,
        background: "linear-gradient(160deg, #12122a 0%, #0d0d1f 100%)",
        borderRadius: 40,
        border: "7px solid #252545",
        position: "relative",
        boxShadow:
          "0 0 0 1.5px #3b3b66, 0 40px 80px -20px rgba(139,92,246,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Speaker bar */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 70,
          height: 5,
          background: "#2a2a4a",
          borderRadius: 3,
          zIndex: 10,
        }}
      />
      {/* Front camera */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 24,
          width: 7,
          height: 7,
          background: "#2a2a4a",
          borderRadius: "50%",
          zIndex: 10,
        }}
      />

      {/* Screen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          paddingTop: 36,
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 18px",
            fontSize: 9,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <span>9:41</span>
          <span>●●● ■</span>
        </div>

        {/* App header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              flexShrink: 0,
            }}
          />
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Dynamics AI
            </p>
            <p style={{ margin: 0, fontSize: 8, color: "rgba(139,92,246,0.9)" }}>
              ● Online
            </p>
          </div>
          <div style={{ marginLeft: "auto", fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            ⋮
          </div>
        </div>

        {/* Code snippet display */}
        <div
          style={{
            flex: 1,
            padding: "8px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            overflowY: "hidden",
          }}
        >
          {/* Code block */}
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: 8,
              padding: "8px 10px",
              fontSize: 7,
              color: "rgba(255,255,255,0.85)",
              fontFamily: "monospace",
              lineHeight: 1.4,
              overflow: "hidden",
            }}
          >
            <div style={{ color: "#8b5cf6", marginBottom: 4 }}>{"class VoiceWidget extends StatefulWidget"}</div>
            <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)" }}>{"  _VoiceWidgetState createState() =>"}</div>
            <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)" }}>{"    _VoiceWidgetState();"}</div>
            <div style={{ marginTop: 4, color: "#06b6d4" }}>{"  Widget build(BuildContext context) {"}</div>
            <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)" }}>{"    return Scaffold("}</div>
            <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)" }}>{"      appBar: AppBar(title: Text('AI Voice')),"}</div>
            <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)" }}>{"      body: StreamBuilder<String>("}</div>
            <div style={{ paddingLeft: 16, color: "rgba(255,255,255,0.7)" }}>{"        stream: voiceService.listen(),"}</div>
            <div style={{ paddingLeft: 16, color: "rgba(255,255,255,0.7)" }}>{"        builder: (context, snapshot) =>"}</div>
            <div style={{ paddingLeft: 20, color: "#34d399" }}>{"          Text(snapshot.data ?? ''),"} </div>
            <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)" }}>{"      ),"}</div>
            <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)" }}>{"    );"}</div>
            <div style={{ color: "#06b6d4" }}>{"  }"}</div>
          </div>

          {/* Status indicator */}
          <div
            style={{
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: 6,
              padding: "6px 10px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.8)" }}>
              Voice recognition active
            </span>
          </div>
        </div>

        {/* Input bar */}
        <div
          style={{
            margin: "6px 12px 14px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            padding: "6px 8px 6px 14px",
            gap: 6,
          }}
        >
          <span style={{ flex: 1, fontSize: 9, color: "rgba(255,255,255,0.3)" }}>
            Ask anything…
          </span>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: "#fff",
            }}
          >
            ▶
          </div>
        </div>

        {/* Home bar */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "rgba(255,255,255,0.2)",
            borderRadius: 2,
            margin: "0 auto 10px",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Laptop mock (Next.js Dashboard) ──────────────────────── */
function LaptopMockup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Screen lid */}
      <div
        style={{
          width: 440,
          height: 280,
          background: "linear-gradient(160deg, #12122a 0%, #0d0d1f 100%)",
          borderRadius: "12px 12px 0 0",
          border: "6px solid #252545",
          borderBottom: "none",
          overflow: "hidden",
          boxShadow:
            "0 -4px 40px -10px rgba(139,92,246,0.35), 0 0 0 1px #3b3b66, inset 0 1px 0 rgba(255,255,255,0.06)",
          position: "relative",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "6px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Dots */}
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
          ))}
          {/* URL bar */}
          <div
            style={{
              flex: 1,
              margin: "0 8px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 5,
              padding: "2px 8px",
              fontSize: 8,
              color: "rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            🔒 bolajidavid.dev
          </div>
        </div>

        {/* Web app content */}
        <div style={{ display: "flex", height: "calc(100% - 30px)" }}>
          {/* Sidebar */}
          <div
            style={{
              width: 70,
              background: "rgba(139,92,246,0.06)",
              borderRight: "1px solid rgba(139,92,246,0.12)",
              padding: "12px 8px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#8b5cf6,#06b6d4)", margin: "0 auto 8px" }} />
            {["⊞", "📁", "📊", "⚙️"].map((icon, i) => (
              <div
                key={i}
                style={{
                  padding: "6px",
                  borderRadius: 8,
                  textAlign: "center",
                  fontSize: 11,
                  background: i === 0 ? "rgba(139,92,246,0.18)" : "transparent",
                  border: i === 0 ? "1px solid rgba(139,92,246,0.3)" : "1px solid transparent",
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Main area */}
          <div style={{ flex: 1, padding: "12px 14px", overflow: "hidden" }}>
            {/* Code editor */}
            <div
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 8,
                color: "rgba(255,255,255,0.85)",
                fontFamily: "monospace",
                lineHeight: 1.5,
                height: "100%",
                overflow: "hidden",
              }}
            >
              <div style={{ color: "#8b5cf6", marginBottom: 6 }}>{"import React, { useState } from 'react';"}</div>
              <div style={{ color: "#8b5cf6", marginBottom: 6 }}>{"import { motion } from 'framer-motion';"}</div>
              <div style={{ marginBottom: 6 }}>{" "}</div>
              <div style={{ color: "#06b6d4", marginBottom: 6 }}>{"export default function Portfolio() {"}</div>
              <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"  const [projects, setProjects] = useState([]);"}</div>
              <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>{"  const [isLoading, setIsLoading] = useState(true);"}</div>
              <div style={{ marginBottom: 6 }}>{" "}</div>
              <div style={{ paddingLeft: 8, color: "#8b5cf6", marginBottom: 4 }}>{"  useEffect(() => {"}</div>
              <div style={{ paddingLeft: 16, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"    fetchProjects().then(data => {"}</div>
              <div style={{ paddingLeft: 20, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"      setProjects(data);"}</div>
              <div style={{ paddingLeft: 20, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"      setIsLoading(false);"}</div>
              <div style={{ paddingLeft: 16, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"    });"}</div>
              <div style={{ paddingLeft: 8, color: "#06b6d4", marginBottom: 6 }}>{"  }, []);"}</div>
              <div style={{ marginBottom: 6 }}>{" "}</div>
              <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"  return ("}</div>
              <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"    <motion.div"}</div>
              <div style={{ paddingLeft: 16, color: "#34d399", marginBottom: 4 }}>{"      initial={{ opacity: 0 }}"}</div>
              <div style={{ paddingLeft: 16, color: "#34d399", marginBottom: 4 }}>{"      animate={{ opacity: 1 }}"}</div>
              <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{">"}</div>
              <div style={{ paddingLeft: 16, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"      <ProjectGrid projects={projects} />"}</div>
              <div style={{ paddingLeft: 12, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"    </motion.div>"}</div>
              <div style={{ paddingLeft: 8, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{"  );"}</div>
              <div style={{ color: "#06b6d4" }}>{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        style={{
          width: 460,
          height: 6,
          background: "#1e1e38",
          borderLeft: "6px solid #252545",
          borderRight: "6px solid #252545",
        }}
      />

      {/* Base */}
      <div
        style={{
          width: 480,
          height: 12,
          background: "#1a1a30",
          borderRadius: "0 0 6px 6px",
          border: "4px solid #252545",
          borderTop: "none",
          boxShadow: "0 8px 24px -6px rgba(0,0,0,0.6)",
        }}
      />

      {/* Trackpad hint */}
      <div
        style={{
          width: 80,
          height: 6,
          background: "#252545",
          borderRadius: 3,
          marginTop: 6,
        }}
      />
    </div>
  );
}

/* ─── Main DeviceSlider ─────────────────────────────────────── */
const DEVICES = [
  { key: "phone", label: "Flutter App", Icon: Smartphone },
  { key: "laptop", label: "Web App", Icon: Laptop },
] as const;

const PHONE_BADGES = [
  { label: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#54C5F8]" />, style: { top: "5%", left: "-10%" } },
  { label: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />, style: { top: "35%", right: "-15%" } },
  { label: "Dart", icon: <SiDart className="w-4 h-4 text-[#0175C2]" />, style: { bottom: "20%", left: "-15%" } },
  { label: "Riverpod", icon: <Zap className="w-4 h-4 text-[#00D2FF]" />, style: { bottom: "8%", right: "-10%" } },
];

const LAPTOP_BADGES = [
  { label: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" />, style: { top: "5%", left: "-2%" } },
  { label: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" />, style: { top: "35%", right: "-8%" } },
  { label: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />, style: { bottom: "20%", left: "-6%" } },
  { label: "Tailwind", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />, style: { bottom: "8%", right: "-4%" } },
];

export function DeviceSlider() {
  const [active, setActive] = useState<"phone" | "laptop">("phone");
  const badges = active === "phone" ? PHONE_BADGES : LAPTOP_BADGES;

  return (
    <div className="relative flex flex-col items-center">
      {/* Toggle tabs */}
      <div
        className="mb-8 flex gap-1 rounded-full p-1"
        style={{
          background: "color-mix(in oklab, rgb(var(--card)) 80%, transparent)",
          border: "1px solid color-mix(in oklab, rgb(var(--border)) 70%, transparent)",
        }}
      >
        {DEVICES.map((d) => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200"
            style={
              active === d.key
                ? {
                    background: "rgb(var(--accentA))",
                    color: "#fff",
                  }
                : { color: "rgb(var(--muted))" }
            }
          >
            <span className="flex items-center gap-1.5"><d.Icon className="w-4 h-4" />{d.label}</span>
          </button>
        ))}
      </div>

      {/* Device + orbit rings container */}
      <div
        className="relative"
        style={{ width: active === "phone" ? 340 : 520, height: active === "phone" ? 580 : 400 }}
      >
        {/* Floating tech badges */}
        {badges.map((b) => (
          <TechBadge key={b.label} label={b.label} icon={b.icon} style={b.style} />
        ))}

        {/* Device mockup with fade transition */}
        <div
          key={active}
          style={{
            animation: "fade-in 0.4s ease forwards",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {active === "phone" ? <PhoneMockup /> : <LaptopMockup />}
        </div>

        {/* Glow beneath device */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 40,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, color-mix(in oklab, rgb(var(--accentA)) 30%, transparent), transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
