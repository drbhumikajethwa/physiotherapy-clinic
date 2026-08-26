// Central content for the clinic site. Edit here to update copy across all pages.

export const doctor = {
  name: "Dr. Bhumika Jethwa",
  qualification: "M.P.T (Community Health and Rehabilitation)",
  title: "Consultant Physiotherapist",
  experience: "6+ Years of Clinical Experience",
  serviceArea: "Ahmedabad",
  tagline: "Personalised physiotherapy care for lasting recovery, in Ahmedabad.",
  bio: [
    "Dr. Bhumika Jethwa is a Consultant Physiotherapist (M.P.T. in Community Health & Rehabilitation) with 6+ years of clinical experience. She provides expert care for a wide range of conditions, including joint replacements, arthritis, sports injuries, back/neck pain, and neurological rehabilitation like paralysis and cerebral palsy.",
    "She is associated with multiple hospitals and clinics across Ahmedabad, and has treated a wide range of neurological, orthopaedic, post-surgical, and sports-related conditions.",
    "Beyond clinic-based care, Dr. Jethwa offers home visits and tele-consultations, along with corporate physiotherapy and ergonomics consulting for desk-job posture correction and lifestyle management.",
  ],
};

const clinicAddress =
  "Vidyanagar Flats, Himatlal Park, Vidhya Nagar, I I M, Vastrapur, Ahmedabad, Gujarat 380015";

export const contact = {
  phone: "+91 95122 03854",
  phoneHref: "tel:+919512203854",
  email: "drbhumikajethwa@gmail.com",
  whatsappHref: "https://wa.me/919512203854",
  instagramHandle: "@physio_bhumika",
  instagramUrl: "https://instagram.com/physio_bhumika",
  serviceArea: "Ahmedabad, Gujarat",
  address: clinicAddress,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(clinicAddress)}&output=embed`,
  mapDirectionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress)}`,
};

export const specializations = [
  {
    title: "Neuro, Ortho & Post-Surgical Rehabilitation",
    description:
      "Structured rehabilitation programs for neurological conditions, orthopaedic injuries, and recovery after surgery.",
  },
  {
    title: "Sports Injury, Antenatal & Postnatal, Geriatric Care",
    description:
      "Targeted care for sports injuries, safe exercise guidance through pregnancy and after delivery, and age-appropriate care for elderly patients.",
  },
  {
    title: "ICU & Critical Care Rehabilitation",
    description:
      "Early mobilisation and rehabilitation support for patients recovering in intensive and critical care settings.",
  },
  {
    title: "Yoga, Aerobics, Fitness & Diet Guidance",
    description:
      "Wellness-focused programs combining movement therapy, fitness routines, and diet guidance for overall health.",
  },
  {
    title: "Corporate Physiotherapy & Ergonomics Consulting",
    description:
      "Desk-job posture correction and lifestyle management programs designed for corporate teams and individuals.",
  },
  {
    title: "Home Visits & Tele-Consultation",
    description:
      "Flexible care options for patients who cannot travel, including in-home sessions and remote consultations.",
  },
];

export const conditionsTreated = [
  "Joint Replacement (TKR, THR)",
  "Back Pain",
  "Post Fracture Exercise",
  "Osteoarthritis",
  "Ligament Injury",
  "Sports Injury",
  "Facial Palsy",
  "Neck Pain",
  "Cerebral Palsy",
  "Paralysis",
  "Frozen Shoulder",
  "Shoulder Pain",
  "Rheumatoid Arthritis",
  "Sciatica",
  "Stroke",
  "Spinal Cord Injury",
  "Parkinson's Disease",
];

export const whyChooseUs = [
  {
    title: "6+ Years of Clinical Experience",
    description: "Trusted, hands-on experience treating a wide range of conditions.",
  },
  {
    title: "Associated with Multiple Hospitals & Clinics",
    description: "Actively practicing across leading hospitals and clinics in Ahmedabad.",
  },
  {
    title: "Home Visit Available",
    description: "Convenient physiotherapy sessions at your home when you can't travel.",
  },
  {
    title: "Tele-Consultation Support",
    description: "Remote guidance and follow-ups from wherever you are.",
  },
  {
    title: "Personalised Treatment Plans",
    description: "Every plan is tailored to the patient's condition, goals, and lifestyle.",
  },
  {
    title: "Holistic Approach",
    description: "Combining physiotherapy with yoga, fitness, and diet guidance for complete recovery.",
  },
];

export const testimonials = [
  {
    name: "Patient Testimonial",
    quote:
      "Dr. Bhumika's home visit sessions made my post-surgery recovery so much easier. Very professional and patient throughout the process.",
  },
  {
    name: "Patient Testimonial",
    quote:
      "Excellent guidance for my back pain — the exercises and posture corrections have made a real difference at my desk job.",
  },
  {
    name: "Patient Testimonial",
    quote:
      "Great experience with tele-consultation for follow-up sessions. Highly recommend for anyone looking for reliable physiotherapy care in Ahmedabad.",
  },
];

export const services = [
  {
    slug: "neuro-rehabilitation",
    title: "Neuro Rehabilitation",
    description:
      "Rehabilitation programs for stroke, cerebral palsy, facial palsy, and other neurological conditions, focused on regaining function and independence.",
  },
  {
    slug: "ortho-post-surgical",
    title: "Ortho & Post-Surgical Rehabilitation",
    description:
      "Recovery programs for joint replacements (TKR, THR), fractures, ligament injuries, and post-operative rehabilitation.",
  },
  {
    slug: "sports-injury",
    title: "Sports Injury Management",
    description:
      "Assessment and rehabilitation for sports-related injuries, helping athletes and active individuals return to their activity safely.",
  },
  {
    slug: "antenatal-postnatal",
    title: "Antenatal & Postnatal Care",
    description:
      "Safe, guided physiotherapy through pregnancy and after delivery to support recovery and physical wellbeing.",
  },
  {
    slug: "geriatric-care",
    title: "Geriatric Physiotherapy",
    description:
      "Age-appropriate care for elderly patients, including mobility support, fall prevention, and management of arthritis and joint pain.",
  },
  {
    slug: "icu-critical-care",
    title: "ICU & Critical Care Rehabilitation",
    description:
      "Early mobilisation and rehabilitation support for patients in intensive and critical care recovery.",
  },
  {
    slug: "corporate-ergonomics",
    title: "Corporate Physiotherapy & Ergonomics",
    description:
      "Workplace ergonomics consulting, desk-job posture correction, and lifestyle management programs for corporate teams.",
  },
  {
    slug: "wellness-fitness",
    title: "Yoga, Fitness & Diet Guidance",
    description:
      "Wellness programs combining yoga, aerobics, fitness routines, and diet guidance for holistic health.",
  },
];
