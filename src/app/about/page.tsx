
const values = [
  { icon: "💡", title: "فكرة التطبيق", desc: "NoviZone وُلد من فكرة بسيطة: لماذا يصعب إيجاد خدمة منزلية موثوقة وسريعة؟ أردنا أن نربط المواطن بأفضل مقدمي الخدمات في مدينته بطريقة سهلة وآمنة." },
  { icon: "🎯", title: "رؤيتنا", desc: "أن نكون المنصة الرائدة للخدمات المنزلية في مصر والوطن العربي، نضمن الجودة والأمان لكل عميل في كل وقت." },
  { icon: "🛡️", title: "الأمان والجودة", desc: "جميع مقدمي الخدمة يمرون بفحص دقيق: التحقق من الهوية، شهادات الكفاءة، وتقييمات العملاء السابقين." },
  { icon: "🌍", title: "المدن المتاحة", desc: "نعمل حاليًا في 8 محافظات مصرية ونتوسع شهريًا. هدفنا تغطية كل محافظات مصر." },
  { icon: "🤝", title: "اختيار مقدمي الخدمة", desc: "نختار مقدمي الخدمة بعناية شديدة من خلال مقابلات ومراجعة الخبرات والتحقق من السجل المهني." },
  { icon: "⭐", title: "أهدافنا", desc: "توفير خدمة سريعة وموثوقة بأسعار مناسبة، مع ضمان رضا العميل الكامل في كل تجربة." },
];
 
export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen" dir="rtl">
      {/* Hero */}
      <section className="py-24 px-4 text-center text-white"
        style={{ background: "linear-gradient(to bottom, #0a1a4a, #1a3a8f)" }}>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          عن <span style={{ color: "#a0c0ff" }}>NoviZone</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg" style={{ color: "#c0d0ff" }}>
          منصة رائدة في خدمات المنازل — نربطك بالخبراء الموثوقين في مدينتك
        </p>
      </section>
 
      {/* Values */}
      <section className="py-16 px-4" style={{ background: "#f4f6fb" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border-r-4"
              style={{ borderRightColor: "#1a3a8f" }}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-xl mb-2" style={{ color: "#1a3a8f" }}>{v.title}</h3>
              <p className="leading-relaxed" style={{ color: "#444" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* Stats */}
      <section className="py-16 px-4 text-white" style={{ background: "#000" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">أرقامنا تتحدث</h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[["500+", "مقدم خدمة معتمد"], ["10,000+", "عميل سعيد"], ["25+", "مدينة مغطاة"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl p-6 border" style={{ background: "#0a1535", borderColor: "#1a3a8f" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#4a7fff" }}>{n}</div>
                <div className="text-sm" style={{ color: "#aaa" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}