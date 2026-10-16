"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="eyebrow mt-2 rounded-[6px] border border-ink px-4 py-2.5 not-italic hover:bg-ink hover:text-white"
    >
      Configurar cookies
    </button>
  );
}
