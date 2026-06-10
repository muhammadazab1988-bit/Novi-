import Link from "next/link";

const services = [
  { icon: "🔧", title: "الصيانة", desc: "كهرباء، سباكة، تكييف، دهانات" },
  { icon: "🧹", title: "النظافة", desc: "منازل، شركات، بعد التشطيب" },
  { icon: "👨‍⚕️", title: "الرعاية", desc: "كبار السن، أطفال، تمريض" },
  { icon: "🍳", title: "الطبخ", desc: "طبخ منزلي، مناسبات" },
  { icon: "🚚", title: "النقل", desc: "نقل أثاث، توصيل" },
  { icon: "🛠️", title: "التركيب", desc: "أجهزة، أثاث" },
];

const stats = [
  { value: "+500", label: "مقدم خدمة" },
  { value: "+10,000", label: "عميل سعيد" },
  { value: "+25", label: "مدينة" },
];

const steps = [
  {
    num: "01",
    title: "حمّل التطبيق",
    desc: "متاح على Google Play و App Store مجاناً",
  },
  { num: "02", title: "اختر خدمتك", desc: "تصفح الخدمات المتاحة في مدينتك" },
  { num: "03", title: "حدد الموعد", desc: "اختر الوقت المناسب لك" },
  { num: "04", title: "استمتع بالخدمة", desc: "مقدم الخدمة يصلك في الموعد" },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white" dir="rtl">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        {/* الفيديو في الخلفية */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        {/* طبقة داكنة فوق الفيديو */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,26,74,0.8), rgba(0,0,0,0.9))",
          }}
        />

        {/* المحتوى */}
        <div className="relative z-20 flex flex-col items-center">
          <span
            className="text-sm font-bold px-4 py-1 rounded-full mb-6 inline-block border"
            style={{
              background: "#1a3a8f",
              borderColor: "#2952cc",
              color: "#fff",
            }}
          >
            🌟 التطبيق الأول للخدمات المنزلية في مصر
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            كل خدماتك اليومية
            <br />
            <span style={{ color: "#4a7fff" }}>في مكان واحد</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-10">
            NoviZone يربطك بأفضل مقدمي الخدمات المنزلية المعتمدين في مدينتك
            بضغطة زر
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/download-app"
              className="font-bold px-8 py-4 rounded-xl transition text-lg text-white"
              style={{ background: "#1a3a8f" }}
            >
              📱 Google Play
            </Link>
            <Link
              href="/download-app"
              className="font-bold px-8 py-4 rounded-xl transition text-lg"
              style={{ background: "#fff", color: "#000" }}
            >
              🍎 App Store
            </Link>
          </div>
          <div className="flex flex-wrap gap-12 justify-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-black"
                  style={{ color: "#4a7fff" }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* الفيديو في الخلفية */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg-video-2.mp4" type="video/mp4" />
        </video>

        {/* طبقة بيضاء فوق الفيديو */}
        {/* <div className="absolute inset-0 z-10"
    style={{ background: "rgba(255,255,255,0.85)" }} /> */}

        {/* المحتوى */}
        <div className="relative z-20 max-w-5xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-2"
            style={{ color: "#000" }}
          >
            خدماتنا
          </h2>
          <p className="text-center mb-12" style={{ color: "#555" }}>
            كل ما تحتاجه في متناول يدك
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                href="/services"
                key={s.title}
                className="rounded-2xl p-6 text-center transition border-2 border-[#e0e8ff] hover:border-[#1a3a8f]"
                style={{ background: "rgba(248,249,255,0.9)" }}
              >
                <div className="hover-3d">
                  <figure className="max-w-100 rounded-2xl">
                    <div className="text-4xl">{s.icon}</div>
                  </figure>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div
                  className="font-bold text-lg mb-1"
                  style={{ color: "#1a3a8f" }}
                >
                  {s.title}
                </div>
                <div className="text-sm" style={{ color: "#666" }}>
                  {s.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-2">كيف يعمل؟</h2>
          <p className="text-gray-400 text-center mb-12">
            4 خطوات بسيطة للحصول على خدمتك
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flex gap-4 items-start rounded-2xl p-6 border"
                style={{ background: "#0a1535", borderColor: "#1a3a8f" }}
              >
                <span
                  className="font-black text-2xl min-w-48"
                  style={{ color: "#4a7fff" }}
                >
                  {s.num}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "#1a3a8f" }}
      >
        <h2 className="text-3xl font-black mb-4 text-white">جاهز تبدأ؟</h2>
        <p className="mb-8 text-lg" style={{ color: "#c0d0ff" }}>
          انضم لآلاف العملاء الراضين عن خدماتنا
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/download-app"
            className="font-black px-8 py-4 rounded-xl transition text-lg"
            style={{ background: "#fff", color: "#1a3a8f" }}
          >
            حمّل التطبيق الآن
          </Link>
          <Link
            href="/download-app"
            className="font-bold px-8 py-4 rounded-xl transition text-lg border-2 text-white"
            style={{ borderColor: "#fff" }}
          >
            انضم كمقدم خدمة
          </Link>
        </div>
      </section>
    </main>
  );
}

// <div className="text-4xl mb-3">{s.icon}</div>
