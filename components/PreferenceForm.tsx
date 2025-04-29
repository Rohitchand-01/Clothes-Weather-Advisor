// components/PreferenceForm.tsx
"use client";

import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function PreferenceForm() {
  const [style, setStyle] = useState("casual");
  const router = useRouter();

  useEffect(() => {
    const savedStyle = localStorage.getItem("stylePreference");
    if (savedStyle) setStyle(savedStyle);
  }, []);

  function handleSave(value: string) {
    setStyle(value);
    localStorage.setItem("stylePreference", value);
  }

  return (
    <div className="space-y-4">
      <label className="block mb-2">Select your preferred style:</label>
      <Select value={style} onValueChange={handleSave}>
        <SelectTrigger>
          <SelectValue placeholder="Select a style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="casual">Casual</SelectItem>
          <SelectItem value="formal">Formal</SelectItem>
          <SelectItem value="sporty">Sporty</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={()=>router.push('/dashboard')}> Submit your preference</Button>
    </div>
  );
}