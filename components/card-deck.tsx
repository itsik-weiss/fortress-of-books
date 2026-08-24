"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { FlipCard } from "@/components/flip-card";
import { Button } from "@/components/ui/button";
import type { WorkCard } from "@/lib/cards";

function shuffleList<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function CardDeck({ cards }: { cards: WorkCard[] }) {
  const [order, setOrder] = useState(cards.map((_, index) => index));
  const [current, setCurrent] = useState(0);

  const deck = useMemo(
    () => order.map((index) => cards[index]).filter(Boolean),
    [cards, order],
  );

  if (deck.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-600">
        אין כרטיסיות בתחנה הזו.
      </div>
    );
  }

  const card = deck[Math.min(current, deck.length - 1)];

  return (
    <div>
      <FlipCard
        key={`${card.id}-${current}`}
        card={card}
        index={current}
        total={deck.length}
      />
      <div className="mx-auto mt-6 flex max-w-2xl items-center justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          size="lg"
          disabled={current === 0}
          onClick={() => setCurrent((value) => Math.max(0, value - 1))}
        >
          <ChevronRight data-icon="inline-start" />
          הקודם
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setOrder(shuffleList(cards.map((_, index) => index)));
            setCurrent(0);
          }}
        >
          <Shuffle data-icon="inline-start" />
          ערבוב
        </Button>
        <Button
          type="button"
          size="lg"
          disabled={current >= deck.length - 1}
          onClick={() =>
            setCurrent((value) => Math.min(deck.length - 1, value + 1))
          }
        >
          הבא
          <ChevronLeft data-icon="inline-end" />
        </Button>
      </div>
    </div>
  );
}
