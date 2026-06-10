"use client";
import { useState } from "react";
 
// const contactInfo = [
//   { icon: "📞", label: "رقم الهاتف", value: "+20 100 000 0000", href: "tel:+201000000000" },
//   { icon: "💬", label: "واتساب", value: "تواصل الآن", href: "https://wa.me/201000000000" },
//   { icon: "📧", label: "البريد الإلكتروني", value: "info@novizone.com", href: "mailto:info@novizone.com" },
//   { icon: "📘", label: "فيسبوك", value: "NoviZone", href: "https://facebook.com" },
// ];
 
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const inputStyle = "w-full border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-blue-900 transition bg-white";
 
  return (
    <main className="min-h-screen" dir="rtl" style={{ background: "#f4f6fb" }}>
      <section className="py-24 px-4 text-center text-white"
        style={{ background: "linear-gradient(to bottom, #0a1a4a, #1a3a8f)" }}>
        <h1 className="text-4xl md:text-5xl font-black mb-4">تواصل معنا 📞</h1>
        <p className="max-w-xl mx-auto text-lg" style={{ color: "#c0d0ff" }}>نحن هنا لمساعدتك في أي وقت</p>
      </section>
 
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                className="bg-white border border-gray-100 hover:shadow-md rounded-2xl p-5 text-center transition block">
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="text-xs mb-1" style={{ color: "#888" }}>{c.label}</div>
                <div className="font-semibold text-sm" style={{ color: "#1a3a8f" }}>{c.value}</div>
              </a>
            ))}
          </div> */}
 
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-xl mx-auto">
            <h3 className="font-black text-xl mb-6" style={{ color: "#1a3a8f" }}>نموذج التواصل</h3>
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-green-600 font-bold">تم إرسال رسالتك! سنرد عليك قريباً.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {[
                  { label: "الاسم", type: "text", placeholder: "اسمك" },
                  { label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block font-semibold mb-2" style={{ color: "#1a3a8f" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className={inputStyle} />
                  </div>
                ))}
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "#1a3a8f" }}>الرسالة</label>
                  <textarea rows={4} placeholder="اكتب رسالتك..."
                    className={inputStyle + " resize-none"} />
                </div>
                <button onClick={() => setSent(true)}
                  className="w-full text-white font-black py-4 rounded-xl transition text-lg"
                  style={{ background: "#1a3a8f" }}>
                  إرسال الرسالة
                </button>
              </div>
            )}
          </div>
 
          {/* <div className="text-center mt-10">
            <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 text-white font-black px-8 py-4 rounded-2xl transition text-lg"
              style={{ background: "#1a7a3a" }}>
              💬 تواصل معنا على واتساب الآن
            </a>
          </div> */}
        </div>
      </section>
    </main>
  );
}