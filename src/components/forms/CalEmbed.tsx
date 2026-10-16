"use client";

import { useEffect } from "react";
import { track } from "@/components/ui/Analytics";

/** Reserva con Cal.com en iframe. Marca la conversión cuando Cal.com avisa de una reserva. */
export function CalEmbed({ link }: { link: string }) {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!/cal\.com$/.test(new URL(e.origin).hostname)) return;
      const raw = typeof e.data === "string" ? e.data : JSON.stringify(e.data ?? "");
      if (raw.includes("bookingSuccessful")) track("booking_completed", { source: "cal.com" });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      src={`https://cal.com/${link}?embed=true&theme=light&layout=month_view`}
      title="Reservar diagnóstico gratuito"
      className="h-[760px] w-full rounded-[18px] border-0 bg-surface"
      loading="lazy"
    />
  );
}
