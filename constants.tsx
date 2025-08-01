

import { Product, Customer, Supplier, PurchaseOrder, SupplierInvoice, User, Settings, AuditLog, Permission, Role, Quotation, BusinessType } from './types';

export const MOCK_PRODUCTS: Product[] = [];

export const MOCK_CUSTOMERS: Customer[] = [
  { id: 'cust001', name: 'Walk-in Customer', phone: 'N/A', email: 'walkin@kenpos.co.ke', address: 'N/A', city: 'N/A', dateAdded: new Date('2023-01-01'), loyaltyPoints: 0 },
];

export const MOCK_USERS: User[] = [];

export const MOCK_SUPPLIERS: Supplier[] = [];

export const MOCK_PURCHASE_ORDERS: PurchaseOrder[] = [];

export const MOCK_SUPPLIER_INVOICES: SupplierInvoice[] = [];

export const MOCK_QUOTATIONS: Quotation[] = [];

export const MOCK_AUDIT_LOGS: AuditLog[] = [];

export const DEFAULT_SETTINGS: Settings = {
    isSetupComplete: false,
    businessType: 'GeneralRetail',
    businessInfo: {
        name: 'My Biashara Ltd.',
        kraPin: 'P000000000X',
        logoUrl: '',
        location: 'Biashara Street, Nairobi',
        phone: '0712 345 678',
        currency: 'KES',
        language: 'en-US',
    },
    tax: {
        vatEnabled: true,
        vatRate: 16,
        pricingType: 'inclusive',
    },
    discount: {
        enabled: true,
        type: 'percentage',
        maxValue: 10,
    },
    communication: {
        sms: {
            provider: 'none',
            username: 'sandbox',
            apiKey: '',
            senderId: '',
            useSandbox: true,
        },
        email: {
            mailer: 'smtp',
            host: 'smtp.mailtrap.io',
            port: 587,
            username: '',
            password: '',
            encryption: 'tls',
            fromAddress: 'sales@kenpos.co.ke',
            fromName: 'KenPOS Sales',
        },
        whatsapp: {
            provider: 'none',
            apiKey: '',
            apiSecret: '',
            senderPhoneNumber: '',
        },
        mpesa: {
            enabled: false,
            environment: 'sandbox',
            shortcode: '',
            consumerKey: '',
            consumerSecret: '',
            passkey: '',
            callbackUrl: '',
        }
    },
    receipt: {
        footer: 'Thank you for your business!',
        showQrCode: true,
        invoicePrefix: 'INV-',
        quotePrefix: 'QUO-',
    },
    hardware: {
        printer: {
            type: 'Browser',
            connection: 'USB',
            name: '',
            address: '',
        },
        barcodeScanner: {
            enabled: true,
        },
        barcodePrinter: {
            enabled: false,
            type: 'Image',
            connection: 'USB',
            name: '',
        },
    },
    loyalty: {
        enabled: true,
        pointsPerKsh: 100,
        redemptionRate: 0.5, // 1 point = 0.5 KES
        minRedeemablePoints: 100,
        maxRedemptionPercentage: 50,
    },
    permissions: {
        Admin: ['view_dashboard', 'view_pos', 'view_inventory', 'edit_inventory', 'delete_inventory', 'view_purchases', 'manage_purchases', 'view_ap', 'manage_ap', 'view_tax_reports', 'view_shift_report', 'view_customers', 'manage_customers', 'view_settings', 'view_quotations', 'manage_quotations'],
        Cashier: ['view_pos', 'view_shift_report', 'view_customers'],
        Supervisor: ['view_dashboard', 'view_pos', 'view_inventory', 'edit_inventory', 'view_purchases', 'view_shift_report', 'view_customers', 'manage_customers', 'view_quotations', 'manage_quotations'],
        Accountant: ['view_dashboard', 'view_purchases', 'manage_purchases', 'view_ap', 'manage_ap', 'view_tax_reports', 'view_customers'],
    }
};

export const BUSINESS_TYPES_CONFIG: { [key in BusinessType]: { name: string; description: string; icon: React.ReactNode; } } = {
    GeneralRetail: {
        name: 'General Retail',
        description: 'For kiosks, shops, boutiques, hardware stores, or any business selling physical items.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
    },
    Restaurant: {
        name: 'Restaurant / Cafe',
        description: 'For food businesses like restaurants, cafes, pizza shops, and fast-food joints.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    Salon: {
        name: 'Salon / Spa',
        description: 'For service businesses like hair salons, barber shops, nail bars, and spas.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a1 1 0 01-1.414 0L9 12m0 0l2.879-2.879a1 1 0 011.414 0L15 11" /></svg>,
    },
    Services: {
        name: 'Professional Services',
        description: 'For project-based work like tailors, interior designers, consultants, and agencies.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    }
};

export const PERMISSIONS_CONFIG: { module: string; permissions: { id: Permission; label: string }[] }[] = [
    {
        module: "General",
        permissions: [
            { id: "view_pos", label: "Access POS Screen" },
            { id: "view_dashboard", label: "View Dashboard" },
            { id: "view_shift_report", label: "View Shift Reports" },
        ],
    },
    {
        module: "Inventory & Products",
        permissions: [
            { id: "view_inventory", label: "View Inventory" },
            { id: "edit_inventory", label: "Edit Products" },
            { id: "delete_inventory", label: "Delete Products" },
        ],
    },
    {
        module: "Financial",
        permissions: [
            { id: "view_purchases", label: "View Purchases" },
            { id: "manage_purchases", label: "Manage Purchases (Receive)" },
            { id: "view_ap", label: "View Accounts Payable" },
            { id: "manage_ap", label: "Manage Accounts Payable (Pay)" },
            { id: "view_tax_reports", label: "View Tax Reports" },
        ],
    },
     {
        module: "Sales",
        permissions: [
            { id: "view_quotations", label: "View Quotations" },
            { id: "manage_quotations", label: "Create/Edit Quotations" },
        ],
    },
    {
        module: "Customers",
        permissions: [
            { id: "view_customers", label: "View Customers" },
            { id: "manage_customers", label: "Manage Customers" },
        ],
    },
    {
        module: "Administration",
        permissions: [
            { id: "view_settings", label: "Access System Settings" },
        ],
    },
];


export const ICONS = {
  pos: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M5 6h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm0 10h14v-2H5v2zm0-4h14V8H5v4z"/><path d="M5 8v4h14V8H5zm0 6h14v-2H5v2zM5 4h14c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4H5c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4zM5 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H5z"/></svg>,
  dashboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M19 20H5V9h14v11zM9 12H7v6h2v-6zm4-2h-2v8h2v-8zm4 4h-2v4h2v-4z"/><path d="M3 20h18V7H3v13zM5 9h14v11H5V9zm2 3v6h2v-6H7zm4-2v8h2v-8h-2zm4 4v4h2v-4h-2z"/></svg>,
  inventory: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M20 8h-3V6.08c0-1.14-.98-2.08-2.13-2.08H9.13C7.98 4 7 4.94 7 6.08V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-5-2h-2v2h2V6z"/><path d="M20 6.08C20 4.94 19.02 4 17.87 4H14V2h-4v2H6.13C4.98 4 4 4.94 4 6.08V8H2v12h20V8h-2V6.08zM9.13 6h5.74c.07 0 .13.06.13.12v1.76H9V6.12c0-.06.06-.12.13-.12zM20 20H4V10h16v10zm-7-14h-2v2h2V6z"/></svg>,
  purchases: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12.96 11H11v2h1.96c.61 0 1.11-.59.98-1.19-.08-.39-.42-.81-.98-.81z"/><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>,
  ap: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M14.4 6L14 4H5v17h15v-7h-5.6c-.96 0-1.63-1.01-1-1.86.63-.85 1.71-.92 2.37-.16.38.44.95.66 1.53.66H20v-5h-4.4c-.96 0-1.63 1.01-1 1.86.63.85 1.71.92 2.37-.16.38-.44.95-.66 1.53-.66H20V6h-5.6z"/><path d="M19 3H4.99C3.89 3 3 3.9 3 5v14c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 13h-4.4c-1.57 0-2.43-1.84-1.53-3.14.9-.1.9-1.93 0-2.03C11.17 9.53 12 7.69 13.4 7.69H18v2h-2.12c-.58 0-1.15.22-1.53.66-.66.76-1.74.69-2.37-.16-.63-.85.04-1.86 1-1.86H18v2h-1.6c-.58 0-1.15.22-1.53.66-.66.76-1.74.69-2.37-.16-.63-.85.04-1.86 1-1.86H18v8z"/></svg>,
  tax: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M19 5H5v14h14V5zM7.5 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9C6.67 7.5 6 8.17 6 9s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S8.33 7.5 7.5 7.5zm9 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7.5 9c.83 0 1.5-.67 1.5-1.5S8.33 6 7.5 6 6 6.67 6 7.5 6.67 9 7.5 9zm0 4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm4.5-2.5h-2V9.5h2v-2h-2V6h3v5h-3v-1.5zm.5 4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>,
  shiftReport: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M8 17h2v-5H8v5zm4-10h2V5h-2v2zm4 6h2v-3h-2v3z"/><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12zM8 17h2v-5H8v5zm4-10h2V5h-2v2zm4 6h2v-3h-2v3z"/></svg>,
  customers: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"/><circle cx="12" cy="8" r="4" opacity=".3"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>,
  quotations: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M13 20H6V4h7v5h5v3.68c.61-.43 1.28-.75 2-1V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.08c-.62-.87-1-1.89-1.08-3zM12 11H8v-2h4v2zm-4 4h4v-2H8v2z"/><path d="M18 22c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-7v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2zm-3-9H6V4h7v5h5v3.68c.61-.43 1.28-.75 2-1V8l-6-6zm-6 8h4v-2H8v2zm4-4h-4V9h4v2z"/></svg>,
  settings: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.68-1.62-0.9l-0.36-2.54C14.4,2.14,14.2,2,13.96,2 h-3.92c-0.24,0-0.44,0.14-0.52,0.34L9.16,4.88c-0.59,0.22-1.12,0.52-1.62,0.9L5.15,4.82c-0.22-0.08-0.47,0-0.59,0.22L2.64,8.36 c-0.11,0.2-0.06,0.47,0.12,0.61l2.03,1.58C4.72,10.79,4.7,11.1,4.7,11.43c0,0.33,0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.68,1.62,0.9l0.36,2.54 c0.08,0.2,0.28,0.34,0.52,0.34h3.92c0.24,0,0.44-0.14,0.52-0.34l0.36-2.54c0.59-0.22,1.12-0.52,1.62-0.9l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.11-0.2,0.06-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" opacity=".3"/><path d="M12,8.4c-1.98,0-3.6,1.62-3.6,3.6s1.62,3.6,3.6,3.6s3.6-1.62,3.6-3.6S13.98,8.4,12,8.4z"/></svg>,
  hardware: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M8 5h8v2H8z"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16zM8 5h8v2H8z"/></svg>,
  logout: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>,
  bell: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>,
  sun: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  moon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
  barcode: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h2v12H4zm4 0h2v12H8zm4 0h2v12h-2zm4 0h1v12h-1zm3 0h2v12h-2z"/></svg>,

  // Settings Icons
  business: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/><path d="M10 19H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm4-4h-2v2h2v-2zm0 4h-2v2h2v-2zm2-12h-2V3h-2v2H8V3H6v2H4v16h16V5h-2zM4 19V5h2v2h2V5h2v2h2V5h2v2h2V5h2v14H4zm4-12H6v2h2V7zm0 4H6v2h2v-2zm0 4H6v2h2v-2z"/></svg>,
  receipt: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M14 18H6V4h7v5h5v5.08c-.34-.05-.68-.08-1-.08s-1.39.14-2 .42V15h-4v2h4.18c.11.31.25.61.42.88V18z"/><path d="M20 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1H6V4h7v5h5v5.08c.33.05.66.08 1 .08s.67-.03 1-.08V8l-6-6zm-2 16c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1 7v-2h-2v-2h2v-2h2v2h2v2h-2v2h-2z"/></svg>,
  discount: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12.96 11H11v2h1.96c.61 0 1.11-.59.98-1.19-.08-.39-.42-.81-.98-.81z"/><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>,
  loyalty: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.3l.1.1.1-.1c4.76-4.56 7.9-7.41 7.9-10.3C20 6.5 18.5 5 16.5 5z"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>,
  users: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"/><circle cx="12" cy="8" r="4" opacity=".3"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>,
  email: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M20 8l-8 5-8-5v10h16V8z"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>,
  sms: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M4 18h16V6H4v12zm8-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM8 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>,
  whatsapp: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004l-1.03 3.766l3.847-1.026z"/></svg>,
  mpesa: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 250 250"><path fill="#FFF" d="M0 0h250v250H0z"/><path fill="#67b32e" d="M125 40c-46.939 0-85 38.061-85 85s38.061 85 85 85 85-38.061 85-85-38.061-85-85-85zm-.01 150.01c-35.898 0-65.01-29.112-65.01-65.01s29.112-65.01 65.01-65.01 65.01 29.112 65.01 65.01-29.112 65.01-65.01 65.01z"/><path fill="#67b32e" d="M101.07 110.13c-.875-.312-1.792-.543-2.739-.688l-1.427-.229c-1.396-.219-2.583-.406-3.563-.562-1.938-.302-3.802-.688-5.594-1.156-2.5-.667-4.625-1.5-6.385-2.5-2.073-1.198-3.792-2.865-5.156-4.99-1.365-2.125-2.052-4.667-2.052-7.625 0-3.135.802-5.896 2.406-8.281 1.604-2.385 3.865-4.229 6.781-5.531 2.917-1.302 6.292-1.958 10.125-1.958 4.74 0 8.781 1.01 12.125 3.031 3.344 2.021 5.865 4.865 7.573 8.531l-10.813 5.438c-.375-.823-.781-1.5-1.219-2.031-.438-.531-1.021-.958-1.75-1.281-.729-.323-1.635-.489-2.719-.489-1.281 0-2.365.312-3.25.938-.885.625-1.323 1.552-1.323 2.781 0 .99.302 1.812.906 2.469.604.656 1.458 1.146 2.563 1.469.948.271 1.875.5 2.781.688l1.438.219c1.375.219 2.552.406 3.531.562 1.958.312 3.823.688 5.615 1.156 2.5.667 4.625 1.5 6.385 2.5 2.073 1.198 3.792 2.865 5.156 4.99 1.365 2.125 2.052 4.667 2.052 7.625 0 3.125-.802 5.896-2.406 8.281-1.604 2.385-3.865 4.229-6.781 5.531-2.917 1.302-6.292 1.958-10.125 1.958-4.729 0-8.771-1.01-12.115-3.031-3.344-2.021-5.865-4.865-7.573-8.531l10.813-5.438c.375.823.781 1.5 1.219 2.031.438.531 1.021.958 1.75 1.281.729.323 1.635.489 2.719-.489 1.281 0 2.365-.312 3.25-.938.885-.625 1.323-1.552 1.323-2.781 0-.99-.302-1.812-.906-2.469-.604-.656-1.469-1.146-2.573-1.469z"/><path fill="#67b32e" d="M140.28 77.292h14.229v18.781c1.688-1.906 3.354-3.417 5.01-4.531 1.656-1.115 3.365-1.677 5.125-1.677 1.313 0 2.51.24 3.594.719.927.479 1.708 1.104 2.344 1.885.635.781 1.104 1.688 1.406 2.719.302 1.031.458 2.146.458 3.344v27.021h-14.229v-25.135c0-2.312-.531-4.042-1.594-5.188-.958-1.146-2.312-1.719-4.062-1.719-1.396 0-2.75.438-4.062 1.313-1.313.875-2.448 2.073-3.406 3.604-1.083 1.531-1.625 3.323-1.625 5.375v21.75h-14.229V77.292z"/></svg>,
  audit: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M11 17.5c-3.86 0-7-1.57-7-3.5V6.85c0-.63.26-1.23.7-1.68l6-4.5c.29-.22.65-.22.94 0l6 4.5c.44.35.7.95.7 1.68V14c0 1.93-3.14 3.5-7 3.5z"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM11 6V4.41c0-.29.13-.56.36-.75l6-4.5c.14-.11.3-.11.44 0l6 4.5c.23.19.36.46.36.75V14c0 2.3-3.58 4.16-8 4.41V12h8v2c0 1.93-3.14 3.5-7 3.5S4 15.93 4 14V6.85c0-.63.26-1.23.7-1.68l6-4.5c.29-.22.65-.22.94 0l6 4.5c.44.35.7.95.7 1.68V8h-2V6.85l-6-4.5-6 4.5V14c0 1.23 1.94 2.34 4.63 2.82l.54.09c.28.05.56.09.83.13V12h-2z"/></svg>,
  data: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12 15c-3.86 0-7-1.57-7-3.5S8.14 8 12 8s7 1.57 7 3.5-3.14 3.5-7 3.5z"/><ellipse cx="12" cy="6" rx="7" ry="3.5" opacity=".3"/><path d="M12 15c-3.86 0-7-1.57-7-3.5S8.14 8 12 8s7 1.57 7 3.5-3.14 3.5-7 3.5zm0-5.5c-2.72 0-5.11.96-6.12 2.41.55.93 2.15 2.09 6.12 2.09s5.57-1.16 6.12-2.09C17.11 10.46 14.72 9.5 12 9.5zM12 6c-3.86 0-7-1.57-7-3.5S8.14-.5 12-.5s7 1.57 7 3.5S15.86 6 12 6zm0-4C9.28 2 6.89 2.96 5.88 4.41c.55.93 2.15 2.09 6.12 2.09s5.57-1.16 6.12-2.09C17.11 2.96 14.72 2 12 2zm0 18c-3.86 0-7-1.57-7-3.5v-1.58c1.02 1.45 3.4 2.41 6.12 2.41s5.1-1.04 6.12-2.49v1.66c0 1.93-3.14 3.5-7 3.5zm-6.12-5.09c-1.01-1.45-1.01-3.37 0-4.82 1.01-1.45 3.4-2.41 6.12-2.41s5.1 1.04 6.12 2.49v1.66C17.1 17.04 14.72 18 12 18s-5.1-.96-6.12-2.41z"/></svg>,
  reset: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path opacity=".3" d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>,
};