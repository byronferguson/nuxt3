export type FormatType =
  | 'string'
  | 'currency'
  | 'currencyCompact'
  | 'percent'
  | 'integer'
  | 'decimal';

export type Formatter = (value: unknown, scale?: number) => string;

export function isPrimitiveValue(value: unknown) {
  return ['number', 'string'].includes(typeof value);
}

export function formatInteger(value: number) {
  return value.toFixed(0);
}

export function formatDecimal(value: number, scale = 2) {
  return value.toFixed(scale);
}

export function formatCurrency(value: number, scale = 2, currency = 'USD', i18n = 'en-US') {
  const integerFormatter = new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const fractionFormatter = new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
    minimumFractionDigits: scale,
  });

  return value % 1 === 0 ? integerFormatter.format(value) : fractionFormatter.format(value);
}

export function formatCurrencyCompact(value: number, scale = 2) {
  let suffix;
  let _value;

  const kValue = value / 1000;
  const mValue = kValue / 1000;

  if (mValue >= 1) {
    _value = mValue;
    suffix = 'M';
  } else if (kValue >= 1) {
    _value = kValue;
    suffix = 'K';
  } else {
    _value = value;
    suffix = '';
  }

  const fixedValue = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: scale,
  }).format(_value);

  return '$' + fixedValue + suffix;
}

export function formatPercent(value: number, scale = 0) {
  return new Intl.NumberFormat('en-us', {
    style: 'percent',
    maximumFractionDigits: scale,
  }).format(value);
}

export function formatValue(value: unknown, format: FormatType = 'string', scale = 2): string {
  const FORMATTERS = {
    currency: formatCurrency,
    currencyCompact: formatCurrencyCompact,
    percent: formatPercent,
    integer: formatInteger,
    decimal: formatDecimal,
    string: (val: string) => val, // satisfies TS, and is handled below
  } as Record<FormatType, Formatter>;

  return FORMATTERS?.[format]?.(value as number, scale) ?? value;
}
