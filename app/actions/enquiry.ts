'use server';

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
}

export async function submitEnquiryAction(
  prevState: EnquirySubmissionResult | null,
  formData: FormData
): Promise<EnquirySubmissionResult> {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const phone = formData.get('phone')?.toString() || '';
  const weddingDate = formData.get('weddingDate')?.toString() || '';
  const destination = formData.get('destination')?.toString() || '';
  const guestCount = formData.get('guestCount')?.toString() || '';
  const budget = formData.get('budget')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // Server-side validation check
  if (!name || !email || !phone) {
    return {
      success: false,
      message: 'Please provide all essential contact details.',
    };
  }

  // Simulated server processing / database / email dispatch
  console.log('--- MANGALGATHA PRIVATE ENQUIRY RECEIVED ---');
  console.log({
    name,
    email,
    phone,
    weddingDate,
    destination,
    guestCount,
    budget,
    message,
    timestamp: new Date().toISOString(),
  });

  // Return success response to client
  return {
    success: true,
    message: `Thank you, ${name}. Your consultation request has been received by our private studio. A Creative Director will reach out within 24 hours.`,
  };
}
