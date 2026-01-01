'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'



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

interface InvoiceFormProps {
  invoice: InvoiceData
  onSave: (invoice: InvoiceData) => void
  onChange: (invoice: InvoiceData) => void
  language: 'tr' | 'en'
  themeMode: 'light' | 'dark'
}

const translations = {
  tr: {
    addLogo: '+ Logonuzu Ekleyin',
    invoiceInfo: 'Fatura Bilgileri',
    invoiceNumber: 'Fatura Numarasi',
    date: 'Tarih',
    dueDate: 'Oedeme Tarihi',
    poNumber: 'PO Numarasi',
    optional: 'Istege bagli',
    companyInfo: 'Sirket Bilgileri',
    companyName: 'Sirket Adi',
    companyEmail: 'Sirket E-Posta',
    companyPhone: 'Sirket Telefonu',
    clientInfo: 'Musteri Bilgileri',
    clientName: 'Musteri Adi',
    clientEmail: 'Musteri E-Posta',
    clientPhone: 'Musteri Telefonu',
    clientAddress: 'Musteri Adresi',
    notes: 'Notlar',
    notesPlaceholder: 'Notlar - henuz kapsamini ilgili bilgiler',
    conditions: 'Sartlar',
    conditionsPlaceholder: 'Sartlar ve kosullar',
    discount: 'Indirim',
    discountPercent: 'Indirim Yuzdesi (%)',
    discountAmount: 'Indirim Tutari',
    theme: 'Tema',
    currency: 'Para Birimi',
    save: 'Kaydet',
    items: 'Oge',
    itemDesc: 'Urun/hizmetin aciklamasi...',
    addItem: '+ Satir Ogesi',
    remove: 'Kaldir',
    subtotal: 'Ara toplam',
    tax: 'KDV',
    taxLabel: 'Vergi Çeşidi',
    total: 'Toplam',
    download: 'Indir',
    defaultSave: 'Varsayilani Kaydet',
    loadDefault: 'Varsayilani Yukle',
    saveTemplate: 'Sablon Olarak Kaydet',
    applyTemplate: 'Sablonu Uygula',
    deleteTemplate: 'Sablonu Sil',
    templates: 'Sablonlar',
    noTemplates: 'Sablon yok',
    templateSaved: 'Sablon kaydedildi',
    templateDeleted: 'Sablon silindi',
    templateNamePrompt: 'Sablon adi girin',
  },
  en: {
    addLogo: '+ Add Your Logo',
    invoiceInfo: 'Invoice Information',
    invoiceNumber: 'Invoice Number',
    date: 'Date',
    dueDate: 'Due Date',
    poNumber: 'PO Number',
    optional: 'Optional',
    companyInfo: 'Company Information',
    companyName: 'Company Name',
    companyEmail: 'Company Email',
    companyPhone: 'Company Phone',
    clientInfo: 'Client Information',
    clientName: 'Client Name',
    clientEmail: 'Client Email',
    clientPhone: 'Client Phone',
    clientAddress: 'Client Address',
    notes: 'Notes',
    notesPlaceholder: 'Notes - relevant information',
    conditions: 'Conditions',
    conditionsPlaceholder: 'Terms and conditions',
    discount: 'Discount',
    discountPercent: 'Discount Percentage (%)',
    discountAmount: 'Discount Amount',
    theme: 'Theme',
    taxLabel: 'Tax Label',
    currency: 'Currency',
    save: 'Save',
    items: 'Items',
    itemDesc: 'Product/service description...',
    addItem: '+ Add Line Item',
    remove: 'Remove',
    subtotal: 'Subtotal',
    tax: 'Tax',
    total: 'Total',
    download: 'Download',
    defaultSave: 'Save as Default',
    loadDefault: 'Load Defaults',
    saveTemplate: 'Save as Template',
    applyTemplate: 'Apply Template',
    deleteTemplate: 'Delete Template',
    templates: 'Templates',
    noTemplates: 'No templates',
    templateSaved: 'Template saved',
    templateDeleted: 'Template deleted',
    templateNamePrompt: 'Enter template name',
  },
}

const currencies = ['TRY', 'EUR', 'USD', 'GBP', 'JPY']


export default function InvoiceForm({
  invoice,
  onSave,
  onChange,
  language,
  themeMode,
}: InvoiceFormProps) {
  const t = translations[language]

  const handleInputChange = (field: keyof InvoiceData, value: string | number) => {
    onChange({ ...invoice, [field]: value })
  }

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...invoice.items]
    if (field === 'quantity' || field === 'rate') {
      newItems[index][field] = typeof value === 'string' ? parseFloat(value) || 0 : value
    } else {
      newItems[index][field] = value as string
    }
    onChange({ ...invoice, items: newItems })
  }

  const addItem = () => {
    onChange({
      ...invoice,
      items: [...invoice.items, { description: '', quantity: 1, rate: 0 }],
    })
  }

  const removeItem = (index: number) => {
    onChange({
      ...invoice,
      items: invoice.items.filter((_, i) => i !== index),
    })
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        handleInputChange('companyLogo', event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const saveDefaults = () => {
    try {
      const defaults = {
        companyName: invoice.companyName,
        companyEmail: invoice.companyEmail,
        companyPhone: invoice.companyPhone,
        currency: invoice.currency,
        theme: invoice.theme,
        tax: invoice.tax,
        taxLabel: invoice.taxLabel,
       
        discount: invoice.discount,
        extraSections: invoice.extraSections || [],
      }
      localStorage.setItem('invoice_defaults', JSON.stringify(defaults))
      alert(t.defaultSave)
    } catch (err) {
      console.error('saveDefaults error', err)
      alert('Failed to save defaults')
    }
  }

  const loadDefaults = () => {
    try {
      const raw = localStorage.getItem('invoice_defaults')
      if (!raw) {
        alert(t.loadDefault + ' - none')
        return
      }
      const defaults = JSON.parse(raw)
      onChange({ ...invoice, ...defaults })
    } catch (err) {
      console.error('loadDefaults error', err)
      alert('Failed to load defaults')
    }
  }

  // Template management (save / apply / delete)
  const [templates, setTemplates] = useState<{ id: string; name: string; invoice: InvoiceData }[]>([])
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem('invoice_templates')
      if (raw) setTemplates(JSON.parse(raw))
    } catch (err) {
      console.error('load templates error', err)
    }
  }, [])

  const saveTemplate = () => {
    try {
      const name = (window.prompt(t.templateNamePrompt || 'Template name') || '').trim()
      if (!name) return
      const tpl = { id: Date.now().toString(), name, invoice }
      const updated = [...templates, tpl]
      localStorage.setItem('invoice_templates', JSON.stringify(updated))
      setTemplates(updated)
      alert(t.templateSaved)
    } catch (err) {
      console.error('saveTemplate error', err)
      alert('Failed to save template')
    }
  }

  const applyTemplate = (id: string) => {
    const tpl = templates.find((t) => t.id === id)
    if (!tpl) return
    // Merge template invoice but keep current id/number/date/dueDate
    const merged = { ...invoice, ...tpl.invoice, id: invoice.id, invoiceNumber: invoice.invoiceNumber, date: invoice.date, dueDate: invoice.dueDate }
    onChange(merged)
  }

  const deleteTemplate = (id: string) => {
    try {
      const updated = templates.filter((t) => t.id !== id)
      localStorage.setItem('invoice_templates', JSON.stringify(updated))
      setTemplates(updated)
      alert(t.templateDeleted)
    } catch (err) {
      console.error('deleteTemplate error', err)
      alert('Failed to delete template')
    }
  }

  const subtotal = invoice.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  const discountAmount = (subtotal * invoice.discount) / 100
  const taxableAmount = subtotal - discountAmount
  const taxAmount = (taxableAmount * invoice.tax) / 100
  const extraTotal = (invoice.extraSections || []).reduce((s, es) => s + (es.amount || 0), 0)
  const total = taxableAmount + taxAmount + extraTotal

  const bgClass = themeMode === 'dark' ? 'dark:bg-gray-800' : 'bg-white'
  const textClass = themeMode === 'dark' ? 'dark:text-gray-100' : ''
  const borderClass = themeMode === 'dark' ? 'dark:border-gray-600' : ''
  const inputBgClass = themeMode === 'dark' ? 'dark:bg-gray-700 dark:text-white' : ''

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="col-span-1 md:col-span-2 space-y-4">
        {/* Logo */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.addLogo}</h3>
          <div className="flex items-center gap-4">
            {invoice.companyLogo && (
              <Image 
                src={invoice.companyLogo} 
                alt="Company Logo" 
                width={96}
                height={96}
                className="object-contain rounded"
                priority
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className={`flex-1 px-4 py-2 border rounded-lg cursor-pointer ${borderClass} ${inputBgClass}`}
            />
          </div>
        </div>

        {/* Invoice Information */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.invoiceInfo}</h3>
          <div className="space-y-3">
            <div>
              <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>{t.invoiceNumber}</label>
              <input
                type="text"
                value={invoice.invoiceNumber}
                onChange={(e) => handleInputChange('invoiceNumber', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${borderClass} ${inputBgClass}`}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>{t.date}</label>
                <input
                  type="date"
                  value={invoice.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${borderClass} ${inputBgClass}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>{t.dueDate}</label>
                <input
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) => handleInputChange('dueDate', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${borderClass} ${inputBgClass}`}
                />
              </div>
            </div>
            <div>
              <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>{t.poNumber}</label>
              <input
                type="text"
                placeholder={t.optional}
                value={invoice.poNumber}
                onChange={(e) => handleInputChange('poNumber', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${borderClass} ${inputBgClass}`}
              />
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.companyInfo}</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder={t.companyName}
              value={invoice.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
            <input
              type="email"
              placeholder={t.companyEmail}
              value={invoice.companyEmail}
              onChange={(e) => handleInputChange('companyEmail', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
            <input
              type="tel"
              placeholder={t.companyPhone}
              value={invoice.companyPhone}
              onChange={(e) => handleInputChange('companyPhone', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
          </div>
        </div>

        {/* Client Information */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.clientInfo}</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder={t.clientName}
              value={invoice.clientName}
              onChange={(e) => handleInputChange('clientName', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
            <input
              type="email"
              placeholder={t.clientEmail}
              value={invoice.clientEmail}
              onChange={(e) => handleInputChange('clientEmail', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
            <input
              type="tel"
              placeholder={t.clientPhone}
              value={invoice.clientPhone || ''}
              onChange={(e) => handleInputChange('clientPhone', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
            <textarea
              placeholder={t.clientAddress}
              value={invoice.clientAddress}
              onChange={(e) => handleInputChange('clientAddress', e.target.value)}
              rows={3}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
            />
          </div>
        </div>

        {/* Items (moved under main form) */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.items}</h3>

          <div className={`mb-4 pb-3 border-b border-gray-200 ${borderClass} text-xs font-semibold text-gray-700 ${textClass}`}>
            <div className="hidden md:grid grid-cols-12 gap-2 items-center">
              <div className="col-span-6">{t.itemDesc}</div>
              <div className="col-span-1 text-center">Miktar</div>
              <div className="col-span-2 text-right">Birimi</div>
              <div className="col-span-2 text-right">Fiyat</div>
              <div className="col-span-1 text-right">Toplam</div>
            </div>
            <div className="md:hidden">{t.itemDesc}</div>
          </div>

          <div className="space-y-3 mb-4">
            {invoice.items.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row md:items-center gap-2 ${borderClass}`}>
                <input
                  type="text"
                  placeholder={t.itemDesc}
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  className={`w-full md:flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm ${inputBgClass}`}
                />

                <input
                  type="number"
                  placeholder="1"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                  className={`w-full md:w-20 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900 text-center text-sm ${inputBgClass}`}
                />

                <div className="w-full md:w-24">
                  <select
                    value={invoice.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className={`w-full px-3 py-2 border rounded text-sm ${inputBgClass}`}
                  >
                    {currencies.map((curr) => (
                      <option key={curr} value={curr}>
                        {curr}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="number"
                  placeholder="0"
                  value={item.rate}
                  onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
                  className={`w-full md:w-28 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900 text-right text-sm ${inputBgClass}`}
                />

                <div className={`w-full md:w-28 px-3 py-2 bg-gray-50 dark:bg-gray-700 border rounded text-gray-700 dark:text-gray-300 font-semibold text-right text-sm ${borderClass}`}>
                  ₺{(item.quantity * item.rate).toFixed(2)}
                </div>

                {invoice.items.length > 1 && (
                  <button
                    onClick={() => removeItem(index)}
                    className="px-3 py-1 text-red-600 hover:text-red-800 font-medium text-sm"
                  >
                    {t.remove}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={addItem}
              className={`flex-1 md:flex-none py-2 px-4 border-2 border-teal-500 bg-transparent text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition`}
            >
              {t.addItem}
            </button>
          </div>

          {/* Summary */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 space-y-3">
            <div className="flex justify-between text-sm">
              <span className={textClass}>{t.subtotal}</span>
              <span className={`font-semibold ${textClass}`}>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className={textClass}>{t.discount}</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={invoice.discount}
                    onChange={(e) => handleInputChange('discount', parseFloat(e.target.value) || 0)}
                    className={`w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900 text-right ${borderClass} ${inputBgClass}`}
                  />
                  <span className={textClass}>%</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t.discountAmount}: ${discountAmount.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className={textClass}>{t.tax}</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={invoice.tax}
                  onChange={(e) => handleInputChange('tax', parseFloat(e.target.value) || 0)}
                  className={`w-12 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900 text-right ${borderClass} ${inputBgClass}`}
                />
                <span className={textClass}>%</span>
              </div>
            </div>

            <div className={`flex justify-between text-sm font-semibold border-t border-gray-200 dark:border-gray-600 pt-3`}>
              <span className={textClass}>{t.total}</span>
              <span className={`text-lg text-slate-600 dark:text-slate-400`}>₺{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={() => onSave(invoice)}
            className="w-full mt-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            {t.save}
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 md:col-span-1 space-y-4">
        {/* Settings */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition mb-4">
            {t.download}
          </button>

          <div className="space-y-4">
            <div>
             
            </div>

            <div>
              <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>{t.currency}</label>
              <select
                value={invoice.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
              >
                {currencies.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>{t.taxLabel}</label>
              <input
                type="text"
                value={invoice.taxLabel || ''}
                onChange={(e) => handleInputChange('taxLabel', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
                placeholder={t.tax}
              />
            </div>

            <div className="mt-4">
              <label className={`block text-sm font-semibold text-gray-700 ${textClass} mb-2`}>Extra Sections</label>
              <div className="space-y-2">
                {(invoice.extraSections || []).map((es, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      value={es.label}
                      onChange={(e) => {
                        const list = [...(invoice.extraSections || [])]
                        list[idx] = { ...list[idx], label: e.target.value }
                        onChange({ ...invoice, extraSections: list })
                      }}
                      className={`flex-1 px-3 py-2 border rounded ${borderClass} ${inputBgClass}`}
                      placeholder="Label"
                    />
                    <input
                      type="number"
                      value={es.amount}
                      onChange={(e) => {
                        const list = [...(invoice.extraSections || [])]
                        list[idx] = { ...list[idx], amount: parseFloat(e.target.value) || 0 }
                        onChange({ ...invoice, extraSections: list })
                      }}
                      className={`w-28 px-3 py-2 border rounded text-right ${borderClass} ${inputBgClass}`}
                      placeholder="0.00"
                    />
                    <button
                      onClick={() => {
                        const list = (invoice.extraSections || []).filter((_, i) => i !== idx)
                        onChange({ ...invoice, extraSections: list })
                      }}
                      className="px-2 bg-red-600 text-white rounded"
                    >
                      X
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => onChange({ ...invoice, extraSections: [...(invoice.extraSections || []), { label: 'Other', amount: 0 }] })}
                  className="w-full mt-2 px-3 py-2 border rounded text-sm"
                >
                  + Add Section
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex gap-2">
                <button
                  onClick={saveDefaults}
                  className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 font-semibold border rounded hover:bg-slate-50 dark:hover:bg-gray-700"
                >
                  {t.defaultSave}
                </button>
                <button
                  onClick={loadDefaults}
                  className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 font-semibold border rounded hover:bg-slate-50 dark:hover:bg-gray-700"
                >
                  {t.loadDefault}
                </button>
                <button
                  onClick={saveTemplate}
                  className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 font-semibold border rounded hover:bg-slate-50 dark:hover:bg-gray-700"
                >
                  {t.saveTemplate}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <label className={`text-sm font-semibold ${textClass}`}>{t.templates}:</label>
                <select
                  value={selectedTemplateId}
                  onChange={(e) => setSelectedTemplateId(e.target.value)}
                  className={`px-3 py-2 border rounded ${borderClass} ${inputBgClass} text-sm flex-1`}
                >
                  <option value="">{t.noTemplates}</option>
                  {templates.map((tpl) => (
                    <option key={tpl.id} value={tpl.id}>
                      {tpl.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => selectedTemplateId && applyTemplate(selectedTemplateId)}
                  className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 font-semibold border rounded hover:bg-slate-50 dark:hover:bg-gray-700"
                >
                  {t.applyTemplate}
                </button>
                <button
                  onClick={() => selectedTemplateId && deleteTemplate(selectedTemplateId)}
                  className="px-3 py-2 text-sm text-red-600 font-semibold border rounded hover:bg-red-50"
                >
                  {t.deleteTemplate}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.notes}</h3>
          <textarea
            placeholder={t.notesPlaceholder}
            value={invoice.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
          />
        </div>

        {/* Conditions */}
        <div className={`${bgClass} rounded-lg shadow p-6`}>
          <h3 className={`text-lg font-semibold text-gray-700 ${textClass} mb-4`}>{t.conditions}</h3>
          <textarea
            placeholder={t.conditionsPlaceholder}
            value={invoice.conditions}
            onChange={(e) => handleInputChange('conditions', e.target.value)}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${borderClass} ${inputBgClass}`}
          />
        </div>

        
      </div>
     
    </div>
    
  )
}
