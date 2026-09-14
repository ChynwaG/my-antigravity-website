# MVP Documentation: Oracle of God Pharmacy

**Live URL:** [https://oracle-of-god-pharmacy.vercel.app/](https://oracle-of-god-pharmacy.vercel.app/)  
**Platform:** Web Application (Responsive Mobile & Desktop)  
**Industry:** Healthcare / E-commerce (Pharmacy)  

---

## 1. Project Overview & Description
The Oracle of God Pharmacy web application is a Minimum Viable Product (MVP) designed to digitize a local community pharmacy in Ago Palace Way, Lagos. 

It provides a seamless, zero-friction experience for patients to browse live inventory, check prices, upload prescriptions, and place orders directly via WhatsApp for in-store pickup or local delivery. The platform prioritizes speed, accessibility, and direct communication with the pharmacist.

---

## 2. Core Features (MVP Scope)

### 👥 User-Facing Features (Patients & Customers)
- **Live Searchable Drug Catalog:** Browse a curated database of 98 verified medications across 14 clinical categories (Antacids, Antibiotics, Malaria, BP & Diabetes, etc.).
- **Smart Search:** Real-time filtering by brand name, generic name, category, or symptoms.
- **Prescription Upload (Snap & Order):** A friction-free modal allowing users to snap a picture of their doctor's slip or upload an image file and send it directly to the pharmacist.
- **Multi-Item Shopping Cart:** Users can add multiple medications, adjust quantities, and see a calculated subtotal.
- **Fulfillment Options:** Choose between "Free Store Pickup" (Ready in 15 mins) or "Home Delivery" (Fixed ₦1,500 dispatch fee).
- **WhatsApp Checkout Engine:** The cart automatically compiles the order details, calculates totals, formats a clean receipt, and opens a pre-filled WhatsApp chat with the official store number.
- **Bank Transfer Integration:** Displays official corporate bank details for easy payment before dispatch.

### ⚙️ Admin-Facing Features (Staff)
- **Hidden Staff Admin Portal:** Accessible via a discreet button in the top bar.
- **Live Inventory Management:** Staff can instantly edit retail prices, toggle stock availability (In Stock vs. Call to Confirm), and delete items.
- **Add New Medications:** A form to add custom drugs to the catalog, complete with category selection, dosage form, and search keywords.
- **Local Data Persistence:** All admin changes are saved to the browser's `localStorage`, meaning updates persist for the staff member managing the kiosk or device.

---

## 3. UI & UX (Frontend Architecture)

### 🎨 Design System & Branding
- **Primary Colors:** Medical Royal Blue (`#1e3a8a`) and Fresh Emerald Green (`#059669`).
- **Typography:** Modern, clean sans-serif stack (`Inter`, `Plus Jakarta Sans`) for readability and clinical trust.
- **Visual Feedback:** Interactive hover states, pulsing active beacons ("Pharmacist on Duty"), and color-coded stock indicators.

### 📱 User Experience (UX) Principles
- **Mobile-First:** 100% responsive design. The interface behaves like a native app on mobile devices, with horizontal scrolling category chips and slide-out drawers.
- **Zero Login Required:** To maximize conversion and reduce friction, users are not forced to create accounts.
- **Immediate Assistance:** A persistent floating WhatsApp action button ensures the pharmacist is always one click away.

### 🛠️ Frontend Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite 5 (for ultra-fast HMR and optimized production builds)
- **Styling:** Tailwind CSS 3.4 (Utility-first CSS for rapid UI development)
- **Icons:** Native emojis and SVG icons for lightweight rendering.

---

## 4. Backend & Data Architecture

To maintain a lean, cost-effective MVP, the application utilizes a "Serverless / Backend-less" architecture, leveraging local browser storage and third-party communication APIs.

- **State Management:** React Context API (`InventoryContext` and `CartContext`) handles global state without the need for complex libraries like Redux.
- **Data Persistence (Database Alternative):** Instead of a cloud database, the initial catalog of 98 drugs is hardcoded as the default state. Any modifications made via the Admin Portal are saved to the browser's `localStorage` (versioned as `oracle_pharmacy_inventory_v4`). 
- **Checkout & Fulfillment Backend:** The "backend" for order processing is entirely handled by the **WhatsApp API**. The React app formats the payload and offloads the transaction to WhatsApp, leveraging the pharmacy's existing customer service workflow.
- **Hosting & CI/CD:** Hosted on **Vercel** with continuous deployment linked to a GitHub repository.

---

## 5. Future Roadmap (Version 2.0 Considerations)

Once the MVP proves the business model and user adoption, the following features can be introduced in subsequent iterations:
1. **Cloud Database (Firebase / Supabase):** Transition from `localStorage` to a real-time cloud database so inventory changes reflect instantly across all customer devices.
2. **Integrated Payment Gateway:** Embed Paystack or Flutterwave for instant card/USSD payments within the web app, replacing manual bank transfers.
3. **User Authentication:** Allow users to create accounts to save their order history, delivery addresses, and chronic medication refill reminders.
4. **Admin Dashboard Application:** A dedicated, password-protected backend application for staff to manage orders, track delivery dispatch, and view sales analytics.
