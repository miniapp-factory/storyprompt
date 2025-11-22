'use client';

import { useState } from "react";

export interface CreativePromptProps {
  topic: string;
}

export default function CreativePrompt({ topic }: CreativePromptProps) {
  const [prompt, setPrompt] = useState<string | null>(null);

  const generatePrompt = () => {
    setPrompt(`Write a short story about ${topic}. Explore the emotions, setting, and unexpected twists that could arise from this scenario.`);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Creative Writing Prompt</h2>
      <p className="text-muted-foreground">Topic: <span className="font-medium">{topic}</span></p>
      <button
        className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={generatePrompt}
      >
        Generate Prompt
      </button>
      {prompt && (
        <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
          {prompt}
        </blockquote>
      )}
    </div>
  );
}
