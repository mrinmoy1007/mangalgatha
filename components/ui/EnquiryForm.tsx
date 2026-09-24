'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitEnquiryAction } from '@/app/actions/enquiry';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  weddingDate: z.string().min(3, 'Please select an approximate or confirmed wedding date'),
  destination: z.string().min(2, 'Please specify your preferred city or destination'),
  guestCount: z.string().min(1, 'Please select your estimated guest count'),
  budget: z.string().min(1, 'Please select an estimated celebratory budget range'),
  message: z.string().min(10, 'Please share a brief message regarding your celebratory vision (minimum 10 characters)'),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      weddingDate: '',
      destination: 'Udaipur, Rajasthan',
      guestCount: '250 – 500 Guests',
      budget: '₹1.5 Cr – ₹3.0 Cr',
      message: '',
    },
  });

  const onSubmit = (data: EnquiryFormData) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitEnquiryAction(null, formData);
      setSubmitResult(result);

      if (result.success) {
        reset();
      }
    });
  };

  return (
    <div className="bg-[#F8F4EC] border border-[#B08D57]/40 shadow-xl p-8 sm:p-12">
      <div className="mb-8 pb-6 border-b border-[#B08D57]/20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium block">
          Confidential Dossier
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight text-[#1C1C1C] font-light mt-1">
          Initiate Consultation
        </h3>
        <p className="text-xs text-[#666666] font-sans font-light mt-2">
          Kindly provide the foundational details of your celebration. All discussions are held under strict non-disclosure.
        </p>
      </div>

      {submitResult && (
        <div
          className={`p-4 mb-8 border flex items-start gap-3 text-xs font-sans tracking-wide ${
            submitResult.success
              ? 'bg-[#EFE7DA] border-[#B08D57] text-[#5C1A1B]'
              : 'bg-red-50 border-red-300 text-red-800'
          }`}
        >
          {submitResult.success ? (
            <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          )}
          <div>{submitResult.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              placeholder="e.g. Radhika Singhania"
              className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
            />
            {errors.name && (
              <p className="text-[10px] text-[#5C1A1B] font-sans">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
              Phone / WhatsApp *
            </label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="e.g. +91 98110 00000"
              className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
            />
            {errors.phone && (
              <p className="text-[10px] text-[#5C1A1B] font-sans">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email & Wedding Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="e.g. radhika@singhania.com"
              className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
            />
            {errors.email && (
              <p className="text-[10px] text-[#5C1A1B] font-sans">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
              Estimated Wedding Date / Month *
            </label>
            <input
              {...register('weddingDate')}
              type="text"
              placeholder="e.g. November 2026 or Spring 2027"
              className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
            />
            {errors.weddingDate && (
              <p className="text-[10px] text-[#5C1A1B] font-sans">{errors.weddingDate.message}</p>
            )}
          </div>
        </div>

        {/* Destination & Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
              Preferred City or Destination *
            </label>
            <select
              {...register('destination')}
              className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
            >
              <option value="Udaipur, Rajasthan">Udaipur, Rajasthan</option>
              <option value="Jaipur, Rajasthan">Jaipur, Rajasthan</option>
              <option value="Jodhpur, Rajasthan">Jodhpur, Rajasthan</option>
              <option value="Delhi NCR (The Dhan Mill / Chhatarpur)">Delhi NCR (Headquarters)</option>
              <option value="Goa (Beachside / Heritage Villa)">Goa (Beachside / Heritage Villa)</option>
              <option value="Mussoorie / Himalayas">Mussoorie / Himalayas</option>
              <option value="Lake Como / Tuscany (Italy)">Lake Como / Tuscany (Italy)</option>
              <option value="Dubai / Abu Dhabi (UAE)">Dubai / Abu Dhabi (UAE)</option>
              <option value="Other Global / Bespoke Location">Other Global / Bespoke Location</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
              Estimated Guest Count *
            </label>
            <select
              {...register('guestCount')}
              className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
            >
              <option value="Intimate (50 – 150 Guests)">Intimate (50 – 150 Guests)</option>
              <option value="Grand (150 – 350 Guests)">Grand (150 – 350 Guests)</option>
              <option value="Royal (350 – 600 Guests)">Royal (350 – 600 Guests)</option>
              <option value="Epic (600 – 1,500+ Guests)">Epic (600 – 1,500+ Guests)</option>
            </select>
          </div>
        </div>

        {/* Budget Range */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
            Estimated Budget Range (INR) *
          </label>
          <select
            {...register('budget')}
            className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
          >
            <option value="₹75 Lakhs – ₹1.5 Crore">₹75 Lakhs – ₹1.5 Crore</option>
            <option value="₹1.5 Crore – ₹3.0 Crore">₹1.5 Crore – ₹3.0 Crore</option>
            <option value="₹3.0 Crore – ₹6.0 Crore">₹3.0 Crore – ₹6.0 Crore</option>
            <option value="₹6.0 Crore+ (Monumental Palatial Scope)">₹6.0 Crore+ (Monumental Palatial Scope)</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C] font-medium font-sans">
            Celebratory Narrative &amp; Aspirations *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Share your personal story, aesthetic preferences (e.g. candlelight, architectural botanicals), or specific heritage protocols..."
            className="w-full bg-white/70 border border-[#B08D57]/40 px-4 py-3 text-xs text-[#1C1C1C] font-sans focus:outline-hidden focus:border-[#5C1A1B] transition-colors"
          />
          {errors.message && (
            <p className="text-[10px] text-[#5C1A1B] font-sans">{errors.message.message}</p>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="btn-luxury-maroon w-full cursor-pointer flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#D4AF7A]" />
                <span>Transmitting Dossier...</span>
              </>
            ) : (
              <span>Submit Confidential Consultation Request</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
