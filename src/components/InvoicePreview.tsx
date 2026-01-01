'use client'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Image from 'next/image'
import { useRef } from 'react'

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
  taxLabel?: string
  discount: number
  
  extraSections?: { label: string; amount: number }[]
  currency: string
  theme: string
}

const translations = {
  tr: {
    download: 'İndir',
    print: 'Yazdir',
    invoice: 'FATURA',
    billTo: 'Fatura Alan',
    product: 'Urun/Hizmet',
    quantity: 'Miktar',
    rate: 'Oran',
    amount: 'Tutar',
    subtotal: 'Ara toplam',
    discount: 'İndirim',
    tax: 'Vergi',
    total: 'Toplam',
    notes: 'Notlar',
    conditions: 'Sartlar ve Kosullar',
    invoiceNumber: 'Fatura No',
    date: 'Tarih',
    dueDate: 'Ödeme Tarihi',
    poNumber: 'PO No',
  },
  en: {
    download: 'Download',
    print: 'Print',
    invoice: 'INVOICE',
    billTo: 'Bill To',
    product: 'Product/Service',
    quantity: 'Quantity',
    rate: 'Rate',
    amount: 'Amount',
    subtotal: 'Subtotal',
    discount: 'Discount',
    tax: 'Tax',
    total: 'Total',
    notes: 'Notes',
    conditions: 'Terms and Conditions',
    invoiceNumber: 'Invoice No',
    date: 'Date',
    dueDate: 'Due Date',
    poNumber: 'PO No',
  },
}

interface InvoicePreviewProps {
  invoice: InvoiceData
  language: 'tr' | 'en'
  themeMode: 'light' | 'dark'
}

export default function InvoicePreview({
  invoice,
  language,
  themeMode,
}: InvoicePreviewProps) {
  const invoiceRef = useRef<HTMLDivElement>(null)
  const t = translations[language]

  const getCurrencySymbol = (): string => {
    const symbols: { [key: string]: string } = {
      USD: '$',
      EUR: '€',
      TRY: '₺',
      GBP: '£',
      JPY: '¥',
    }
    return symbols[invoice.currency] || invoice.currency
  }

  const subtotal = invoice.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  const discountAmount = (subtotal * invoice.discount) / 100
  const taxableAmount = subtotal - discountAmount
  const taxAmount = (taxableAmount * invoice.tax) / 100
  const extraTotal = (invoice.extraSections || []).reduce((s, es) => s + (es.amount || 0), 0)
  const total = taxableAmount + taxAmount + extraTotal

  const downloadPDF = async () => {
    if (!invoiceRef.current) return

    try {
      const canvas = await html2canvas(invoiceRef.current, { scale: 2, useCORS: true })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save(`fatura-${invoice.invoiceNumber}.pdf`)
    } catch (error) {
      console.error('PDF download failed:', error)
    }
  }

  const printInvoice = () => {
    if (!invoiceRef.current) return

    const printWindow = window.open('', '', 'width=800,height=600')
    if (!printWindow) return

    printWindow.document.write('<html><head><title>Invoice</title>')
    printWindow.document.write('<style>')
    printWindow.document.write(document.head.innerHTML)
    printWindow.document.write('</style>')
    printWindow.document.write('</head><body>')
    printWindow.document.write(invoiceRef.current.innerHTML)
    printWindow.document.write('</body></html>')
    printWindow.document.close()
    printWindow.print()
  }

  const bgClass = themeMode === 'dark' ? 'bg-gray-900' : 'bg-white'


  return (
    <div className={`${bgClass} rounded-lg shadow`}>
      <div className={`p-6 border-b border-gray-200 flex gap-4 flex-wrap bg-white dark:bg-gray-800`}>
        <button
          onClick={downloadPDF}
          className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
        >
          {t.download}
        </button>
        <button
          onClick={printInvoice}
          className="px-6 py-2 border-2 border-slate-900 text-slate-900 dark:text-slate-100 dark:border-slate-400 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-gray-700 transition"
        >
          {t.print}
        </button>
      </div>

      <div
        ref={invoiceRef}
        className="p-6 sm:p-12 bg-white"
        style={{
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          color: '#333',
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
          <div>
            {invoice.companyLogo && (
              <Image 
                src={invoice.companyLogo} 
                alt="Company Logo" 
                width={64}
                height={64}
                className="mb-4"
                priority
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{invoice.companyName}</h1>
              <p className="text-gray-600">{invoice.companyEmail}</p>
              <p className="text-gray-600">{invoice.companyPhone}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-5xl font-bold text-slate-900 mb-4">{invoice.companyName}</p>
            <div className="space-y-1 text-gray-600">
              <p>
                <span className="font-semibold">{t.invoiceNumber}:</span> {invoice.invoiceNumber}
              </p>
              <p>
                <span className="font-semibold">{t.date}:</span> {invoice.date}
              </p>
              <p>
                <span className="font-semibold">{t.dueDate}:</span> {invoice.dueDate}
              </p>
              {invoice.poNumber && (
                <p>
                  <span className="font-semibold">{t.poNumber}:</span> {invoice.poNumber}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div className="mb-8 pb-8 border-b">
          <h3 className="font-bold text-slate-900 mb-2">{t.billTo}</h3>
          <p className="font-semibold">{invoice.clientName}</p>
          <p className="text-gray-600">{invoice.clientAddress}</p>
          <p className="text-gray-600">{invoice.clientEmail}</p>
          {invoice.clientPhone && <p className="text-gray-600">{invoice.clientPhone}</p>}
        </div>

        {/* Items Table */}
        <div className="overflow-auto mb-8">
          <table className="min-w-full mb-8">
          <thead>
            <tr className="border-b-2 border-slate-900">
              <th className="text-left py-3 px-2 text-slate-900 font-bold">{t.product}</th>
              <th className="text-center py-3 px-2 text-slate-900 font-bold">{t.quantity}</th>
              <th className="text-right py-3 px-2 text-slate-900 font-bold">{t.rate}</th>
              <th className="text-right py-3 px-2 text-slate-900 font-bold">{t.amount}</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-2">{item.description}</td>
                <td className="text-center py-3 px-2">{item.quantity}</td>
                <td className="text-right py-3 px-2">
                  {getCurrencySymbol()}
                  {item.rate.toFixed(2)}
                </td>
                <td className="text-right py-3 px-2 font-semibold">
                  {getCurrencySymbol()}
                  {(item.quantity * item.rate).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex justify-end mb-8">
          <div className="w-80 space-y-2">
            <div className="flex justify-between text-sm">
              <span>{t.subtotal}</span>
              <span>
                {getCurrencySymbol()}
                {subtotal.toFixed(2)}
              </span>
            </div>

            {invoice.discount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>{t.discount} ({invoice.discount}%)</span>
                <span>-{getCurrencySymbol()}{discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span>{invoice.taxLabel || t.tax} ({invoice.tax}%)</span>
              <span>
                {getCurrencySymbol()}
                {taxAmount.toFixed(2)}
              </span>
            </div>

            {(invoice.extraSections || []).map((es, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{es.label}</span>
                <span>
                  {getCurrencySymbol()}
                  {es.amount.toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-between font-bold text-lg border-t-2 pt-2 border-slate-900">
              <span>{t.total}</span>
              <span>
                {getCurrencySymbol()}
                {total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="mb-8 pb-8 border-t">
            <h3 className="font-bold text-slate-900 mb-2">{t.notes}</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{invoice.notes}</p>
          </div>
        )}

        {/* Conditions */}
        {invoice.conditions && (
          <div>
            <h3 className="font-bold text-slate-900 mb-2">{t.conditions}</h3>
            <p className="text-gray-600 text-sm whitespace-pre-wrap">{invoice.conditions}</p>
          </div>
        )}
      </div>
    </div>
  )
}
