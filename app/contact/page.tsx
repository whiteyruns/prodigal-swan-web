import type { Metadata } from "next";
import { BookingCard } from "@/components/BookingCard";

export const metadata: Metadata = {
  title: "Booking — Prodigal Swan",
  description:
    "Book the Prodigal Swan for festivals, parades, brand activations, film shoots, and private events. $5,000 per 6-hour booking, fully operated.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <BookingCard />
    </main>
  );
}
