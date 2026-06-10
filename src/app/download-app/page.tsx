import Image from "next/image";
export default function DownloadPage() {
  return (
    <main
      className="min-h-screen text-white"
      dir="rtl"
      style={{
        background: "linear-gradient(to bottom, #000, #0a1535, #1a3a8f)",
      }}
    >
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        {/* الفيديو في الخلفية */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg-video-3.mp4" type="video/mp4" />
        </video>

        {/* طبقة داكنة */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,26,74,0.8), rgba(0,0,0,0.9))",
          }}
        />

        {/* كل المحتوى هنا */}
        <div className="relative z-20 flex flex-col items-center w-full">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            حمّل التطبيق الآن 📥
          </h1>
          <p className="text-lg max-w-md mb-12" style={{ color: "#c0d0ff" }}>
            متاح على جميع الأجهزة — مجاني تمامًا
          </p>
          <div className="bg-white rounded-3xl w-48 h-48 flex items-center justify-center mb-12 shadow-2xl overflow-hidden">
            <Image
              src="/qr-code.jpg"
              alt="QR Code"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="https://play.google.com/store/apps/details?id=com.fassladev.novyApp"
              className="font-black px-10 py-5 rounded-2xl transition text-xl flex items-center gap-2 text-white"
              style={{ background: "#1a3a8f" }}
            >
              📱 Google Play
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fassladev.novyApp"
              className="font-black px-10 py-5 rounded-2xl transition text-xl flex items-center gap-2"
              style={{ background: "#fff", color: "#000" }}
            >
              🍎 App Store
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
            {[
              { icon: "⚡", title: "سريع وسهل", desc: "اطلب خدمتك في ثوانٍ" },
              {
                icon: "🔒",
                title: "آمن وموثوق",
                desc: "جميع مقدمي الخدمة معتمدون",
              },
              {
                icon: "💳",
                title: "دفع مرن",
                desc: "كاش، بطاقة، أو محافظ إلكترونية",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 text-center border"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "#2952cc",
                }}
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <div className="font-bold text-lg mb-1">{f.title}</div>
                <div className="text-sm" style={{ color: "#a0b8ff" }}>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ← إقفال z-20 */}
      </section>
    </main>
  );
}
