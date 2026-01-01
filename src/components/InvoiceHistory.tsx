'use client'

interface InvoiceItem {
  description: string
  quantity: number
  rate: number
}

interface InvoiceData {
  id: string
  invoiceNumber: string
  date: string
  dueDate: string
  poNumber: string
  companyName: string
  companyEmail: string
  companyPhone: string
  companyLogo?: string
  clientName: string
  clientEmail: string
  clientAddress: string
  clientPhone?: string
  items: InvoiceItem[]
  notes: string
  conditions: string
  tax: number
  discount: number
  shipping: number
  currency: string
  theme: string
}

interface InvoiceHistoryProps {
  invoices: InvoiceData[]
  onLoadInvoice: (invoice: InvoiceData) => void
  language: 'tr' | 'en'
  themeMode: 'light' | 'dark'
}

const translations = {
  tr: {
    invoiceNumber: 'Fatura No',
    client: 'Musteri',
    date: 'Tarih',
    total: 'Toplam',
    action: 'Islem',
    view: 'Goruntule',
    noInvoices: 'Henuz fatura yoktur',
  },
  en: {
    invoiceNumber: 'Invoice No',
    client: 'Client',
    date: 'Date',
    total: 'Total',
    action: 'Action',
    view: 'View',
    noInvoices: 'No invoices yet',
  },
}

export default function InvoiceHistory({
  invoices,
  onLoadInvoice,
  language,
  themeMode,
}: InvoiceHistoryProps) {
  const t = translations[language]

  const getCurrencySymbol = (currency: string): string => {
    const symbols: { [key: string]: string } = {
      USD: '$',
      EUR: '€',
      TRY: '₺',
      GBP: '£',
      JPY: '¥',
    }
    return symbols[currency] || currency
  }

  const calculateTotal = (invoice: InvoiceData): number => {
    const subtotal = invoice.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
    const discountAmount = (subtotal * invoice.discount) / 100
    const taxableAmount = subtotal - discountAmount
    const taxAmount = (taxableAmount * invoice.tax) / 100
    return taxableAmount + taxAmount + invoice.shipping
  }

  const bgClass = themeMode === 'dark' ? 'dark:bg-gray-800' : ''
  const textClass = themeMode === 'dark' ? 'dark:text-gray-100' : ''
  const borderClass = themeMode === 'dark' ? 'dark:border-gray-600' : ''

  return (
    <div className={`bg-white ${bgClass} rounded-lg shadow overflow-hidden`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b border-gray-200 ${borderClass} bg-gray-50 dark:bg-gray-700`}>
              <th className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${textClass}`}>
                {t.invoiceNumber}
              </th>
              <th className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${textClass}`}>
                {t.client}
              </th>
              <th className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${textClass}`}>
                {t.date}
              </th>
              <th className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${textClass}`}>
                {t.total}
              </th>
              <th className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${textClass}`}>
                {t.action}
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.length === 0 ? (
              <tr>
                <td colSpan={5} className={`px-6 py-8 text-center text-gray-500 ${textClass}`}>
                  {t.noInvoices}
                </td>
              </tr>
            ) : (
              invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className={`border-b border-gray-200 ${borderClass} hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
                >
                  <td className={`px-6 py-4 text-sm text-gray-900 ${textClass}`}>
                    {invoice.invoiceNumber}
                  </td>
                  <td className={`px-6 py-4 text-sm text-gray-900 ${textClass}`}>
                    {invoice.clientName}
                  </td>
                  <td className={`px-6 py-4 text-sm text-gray-900 ${textClass}`}>
                    {invoice.date}
                  </td>
                  <td className={`px-6 py-4 text-sm font-semibold text-gray-900 ${textClass}`}>
                    {getCurrencySymbol(invoice.currency)}
                    {calculateTotal(invoice).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => onLoadInvoice(invoice)}
                      className="text-slate-900 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium"
                    >
                      {t.view}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
