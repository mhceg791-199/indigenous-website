export default function Recognition({ awards }) {
  return (
    <>
      {awards && awards.length > 0 && (
        <section className="max-w-5xl mx-auto mt-10 px-6 md:px-10">
          <div className="bg-mainColor border border-mainGold/40 rounded-2xl p-10 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.25)] relative overflow-hidden">
            <h3 className="text-2xl font-semibold text-mainGold mb-6">
              Awards & Recognition
            </h3>

            <ul className="space-y-3">
              {awards.map((award, index) => (
                <li key={index} className="flex gap-3 text-lightColor">
                  <span className="text-mainGold">•</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
