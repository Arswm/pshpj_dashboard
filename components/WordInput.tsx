"use client";

import React, { useState, KeyboardEvent, MouseEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, X, Edit2, Check } from "lucide-react";

export default function WordInput() {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const addWord = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setWords([...words, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addWord(e);
    }
  };

  const startEdit = (e: MouseEvent, index: number) => {
    e.preventDefault();
    setEditIndex(index);
    setEditValue(words[index]);
  };

  const saveEdit = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    if (editIndex !== null && editValue.trim()) {
      const newWords = [...words];
      newWords[editIndex] = editValue.trim();
      setWords(newWords);
      setEditIndex(null);
      setEditValue("");
    }
  };

  const cancelEdit = (e: MouseEvent) => {
    e.preventDefault();
    setEditIndex(null);
    setEditValue("");
  };

  const deleteWord = (e: MouseEvent, index: number) => {
    e.preventDefault();
    const newWords = words.filter((_, i) => i !== index);
    setWords(newWords);
  };

  const handleEditInputChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditValue(e.currentTarget.value);
  };

  const handleMainInputChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex space-x-2">
        <Button
          type="button"
          size="icon"
          onClick={addWord}
          className="size-11"
        >
        <PlusCircle className="h-4 w-4" />
        </Button>
        <Input
          type="text"
          className="!ms-4 !me-0"
          placeholder="Enter a word"
          value={inputValue}
          onChange={handleMainInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        className={`${
          words.length > 0
            ? "flex flex-wrap gap-4 bg-white shadow p-2 rounded-lg"
            : "hidden"
        }`}
      >
        {words.map((word, index) => (
          <div
            key={index}
            className="flex items-center bg-[#EFF4FB] rounded-lg overflow-hidden"
          >
            {editIndex === index ? (
              <>
                <Input
                  type="text"
                  value={editValue}
                  onChange={handleEditInputChange}
                  className="border-none bg-transparent px-2 py-1 text-lg focus:ring-0 w-[642.5px]"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      saveEdit(e);
                    }
                  }}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={saveEdit}
                  className="h-8 w-8"
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={cancelEdit}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <p className="px-4 py-1 text-lg">{word}</p>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => startEdit(e, index)}
                  className="h-8 w-8"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => deleteWord(e, index)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
