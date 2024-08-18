export const formatPrice = (amount, currency = 'INR', locale = 'en-IN') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };
  