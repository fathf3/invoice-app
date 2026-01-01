# Invoice Generator

A modern, professional invoice generation web application built with Next.js, React, and Tailwind CSS.

## Features

✨ **Create Professional Invoices**
- Easy-to-use form interface
- Real-time invoice preview
- Professional invoice templates

📄 **Export & Print**
- Download invoices as PDF
- Print directly from the browser
- Professional formatting

💾 **Invoice Management**
- Save invoice history
- Load and edit previous invoices
- Track all generated invoices

🎨 **Modern Design**
- Clean, professional UI with Tailwind CSS
- Responsive design for all devices
- Real-time calculation updates

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd invoice-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Creating an Invoice

1. Fill in your company details (name, email, phone)
2. Add client information (name, address, email)
3. Set invoice number, dates, and payment terms
4. Add invoice items with descriptions, quantities, and rates
5. Set tax percentage and discount (optional)
6. Click "Save Invoice" to store it

### Previewing & Exporting

1. Click the "Preview" tab to see the formatted invoice
2. Download as PDF or print directly
3. View all previously saved invoices in the "History" tab

## Invoice Features

- **Automatic Calculations**: Subtotal, discount, tax, and total are calculated automatically
- **Item Management**: Add or remove line items as needed
- **Flexible Tax & Discount**: Apply percentage-based tax and discount
- **Notes Section**: Add payment terms or additional notes
- **Professional Header**: Company branding at the top

## Project Structure

```
invoice-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Main page/dashboard
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── InvoiceForm.tsx  # Invoice form component
│   │   ├── InvoicePreview.tsx # Invoice preview with PDF export
│   │   └── InvoiceHistory.tsx # Invoice history/list view
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── tailwind.config.ts       # Tailwind CSS config
```

## Dependencies

- **Next.js**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **jsPDF**: PDF generation
- **html2canvas**: HTML to canvas conversion for PDF export

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Breakdown

### Invoice Form
- Separate sections for company, client, and item details
- Real-time validation and calculation
- Add/remove invoice items dynamically
- Tax and discount percentage inputs

### Invoice Preview
- Professional invoice layout
- Automatic calculations display
- PDF download functionality
- Print-friendly formatting

### Invoice History
- Table view of all saved invoices
- Quick access to previous invoices
- Load invoices for editing

## Customization

### Styling
Modify `tailwind.config.ts` and `src/app/globals.css` to customize the appearance.

### Invoice Template
Edit `src/components/InvoicePreview.tsx` to change the invoice layout and design.

### Tax & Discount Logic
Modify the calculation logic in `InvoiceForm.tsx` and `InvoicePreview.tsx` for different business rules.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available for personal and commercial use.

## Support

For issues or suggestions, please create an issue in the project repository.

---

**Made with ❤️ for freelancers and small businesses**
