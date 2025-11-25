export function interpretIntent(input) {
  const lower = input.toLowerCase();

  if (lower.includes('ذهب') || lower.includes('gold')) {
    return 'صفقة على XAU/USD، راقب جلسة نيويورك.';
  }
  if (lower.includes('قصيرة') || lower.includes('short')) {
    return 'اقتراح: صفقة بيع قصيرة المدى، راقب الزخم.';
  }
  if (lower.includes('طويلة') || lower.includes('long')) {
    return 'اقتراح: صفقة شراء طويلة المدى، انتظر كسر مقاومة.';
  }

  return 'تحليل غير واضح، يرجى تحديد الأصل والمدة والنمط.';
}
