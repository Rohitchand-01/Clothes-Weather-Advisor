// Settings/page.tsx
"use client";

import { PreferenceForm } from "@/components/PreferenceForm";

export default function Preference() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
      <PreferenceForm />
    </main>
  );
}