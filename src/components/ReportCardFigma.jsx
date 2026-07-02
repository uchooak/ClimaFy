const toneClasses = {
  blue: 'border-t-blue-600',
  red: 'border-t-red-600',
  orange: 'border-t-orange-500',
  green: 'border-t-green-600',
};

const badgeClasses = {
  blue: 'bg-blue-50 text-blue-700',
  red: 'bg-red-50 text-red-700',
  orange: 'bg-orange-50 text-orange-700',
  green: 'bg-green-50 text-green-700',
};

const statusClasses = {
  Aberto: 'bg-blue-50 text-blue-700',
  'Em andamento': 'bg-yellow-50 text-yellow-700',
  Resolvido: 'bg-emerald-50 text-emerald-700',
};

export default function ReportCardFigma({ report }) {
  return (
    <article className={`flex h-[204px] flex-col rounded-[14px] border border-[#e3e8ec] border-t-4 bg-white p-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] ${toneClasses[report.tone]}`}>
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-[10px] px-3 py-[5px] text-[10px] font-medium leading-3 ${badgeClasses[report.tone]}`}>
          {report.category}
        </span>
        <span className="text-[10px] leading-3 text-[#8b96a3]">{report.neighborhood}</span>
      </div>
      <h3 className="mt-[10px] text-[13px] font-semibold leading-4 text-[#15191e]">{report.title}</h3>
      <p className="mt-[10px] flex-1 text-[11px] leading-4 text-[#48525f]">{report.description}</p>
      <div className="mt-3 flex items-center justify-between border-t border-[#e3e8ec] pt-3 text-[10px] text-[#8b96a3]">
        <span className={`rounded-xl px-2 py-[5px] font-semibold ${statusClasses[report.status]}`}>
          {report.status}
        </span>
        <span>{report.time}</span>
        <span>^ {report.votes}</span>
      </div>
    </article>
  );
}
