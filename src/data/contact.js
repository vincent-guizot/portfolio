import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { profile } from "./profile";

/* ---------------------------------------------------------------------- *
 * Contact — pulls straight from `profile`, so updating profile above is
 * enough to keep this in sync.
 * ---------------------------------------------------------------------- */
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    note: "I usually reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    note: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    note: "Open to Remote Work",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for new opportunities",
    note: "Full-time / Freelance / Consulting",
  },
];
