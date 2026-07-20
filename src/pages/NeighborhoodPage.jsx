const categories = [
  ['Alagamento', 68, '#2469d6'],
  ['Lixo Irregular', 15, '#8b6328'],
  ['Calor Extremo', 10, '#f35c22'],
  ['Queimada', 5, '#d62727'],
  ['Outros', 2, '#8b96a3'],
];

const monthly = [
  ['Jun', 38, 120], ['Jul', 52, 132], ['Ago', 35, 68], ['Set', 80, 140],
  ['Out', 95, 82], ['Nov', 110, 76], ['Dez', 130, 65], ['Jan', 118, 55],
  ['Fev', 138, 88], ['Mar', 126, 44], ['Abr', 142, 35], ['Mai', 139, 28],
];

const deficit = [
  ['Drenagem urbana', 16000, 100000],
  ['Pavimentacao', 42000, 80000],
  ['Coleta de residuos', 64000, 90000],
];

const timeline = [
  ['Alagamento', 'Rua do Gasometro alagada', 'Ha 2 horas', 'Aberto', '#2469d6'],
  ['Lixo Irregular', 'Entulho bloqueando calcada', 'Ha 5 horas', 'Em andamento', '#8b6328'],
  ['Alagamento', 'Bueiro entupido Av. Rangel Pestana', 'Ha 1 dia', 'Aberto', '#2469d6'],
  ['Calor Extremo', 'Praca sem sombra ou agua', 'Ha 2 dias', 'Aberto', '#f35c22'],
  ['Queimada', 'Vegetacao queimando prox. trilhos', 'Ha 3 dias', 'Resolvido', '#d62727'],
];

const related = [
  ['Mooca', 'ALTA', 67, '82 relatos · R$ 290K investidos', '#f37d22'],
  ['Pinheiros', 'ALTA', 71, '94 relatos · R$ 380K investidos', '#f37d22'],
  ['Consolacao', 'MEDIA', 48, '61 relatos · R$ 450K investidos', '#f4b60d'],
  ['Perdizes', 'BAIXA', 21, '28 relatos · R$ 680K investidos', '#1a9651'],
];

const statusClass = {
  Aberto: 'bg-[#e0efff] text-[#1a61d6]',
  'Em andamento': 'bg-[#fff6d6] text-[#b08000]',
  Resolvido: 'bg-[#e0f5e9] text-[#1a9651]',
};

export default function NeighborhoodPage() {
  return (
    <div className="bg-[#f8fafb] text-[#15191e]">
      <section className="relative flex min-h-[200px] items-center justify-between overflow-hidden bg-[#051c0e] px-20 py-7 text-white max-md:flex-col max-md:items-start max-md:px-6" aria-labelledby="bairro-title">
        <div className="absolute -left-20 -top-24 size-[280px] rounded-full bg-[#63a93a]/15" />
        <div className="absolute -right-20 -top-16 size-[300px] rounded-full bg-[#63a93a]/15" />
        <article className="relative">
          <a className="text-[13px] text-[#99d1ad]" href="/ranking">← Voltar ao Ranking</a>
          <p className="mt-3 flex items-center gap-3 text-[13px] text-[#c7ead1]"><span className="rounded-[14px] bg-[#ffe0e0] px-4 py-[7px] text-[11px] font-bold text-[#d62727]">CRITICA</span> Posicao #1 no Ranking</p>
          <h1 id="bairro-title" className="mt-2 text-[40px] font-extrabold leading-tight">Brás</h1>
          <p className="mt-3 text-[16px] text-[#b7e0c4]">São Paulo, SP · Zona Leste</p>
        </article>
        <aside className="relative grid size-32 place-items-center rounded-full border-[3px] border-[#d62727] bg-[#ffe0e0] text-center text-[#d62727] shadow-[0_6px_24px_rgba(0,0,0,0.2)]" aria-label="Score de vulnerabilidade">
          <strong className="mt-3 text-[36px] font-extrabold leading-none">91</strong>
          <span className="-mt-5 text-[13px]">/ 100</span>
          <small className="absolute top-[132px] min-w-[170px] text-[11px] text-[#b7e0c4] max-md:static max-md:text-[#d62727]">Score de Vulnerabilidade</small>
        </aside>
      </section>

      <section className="border border-[#e3e8ec] bg-white" aria-label="Indicadores do bairro">
        <dl className="mx-auto grid min-h-[88px] max-w-[1440px] grid-cols-6 items-center max-lg:grid-cols-3 max-md:grid-cols-1">
          {[
            ['147', 'Relatos Abertos', '↑ 12 esta semana', '#d62727'],
            ['R$ 124K', 'Investimento', '↓ -43% vs meta', '#f37d22'],
            ['91', 'Score', 'Mais alto da cidade', '#d62727'],
            ['22', 'Resolvidos', 'Nos ultimos 30 dias', '#f37d22'],
            ['2', 'Dias desde ultimo', 'Relato novo hoje', '#2469d6'],
            ['+12%', 'Tendencia', 'Risco subindo', '#f35c22'],
          ].map(([value, label, helper, color]) => (
            <div className="border-r border-[#e3e8ec] px-9 py-4 last:border-r-0 max-md:border-r-0 max-md:border-b" key={label}>
              <dd className="text-[22px] font-bold" style={{ color }}>{value}</dd>
              <dt className="mt-1 text-[11px] text-[#48525f]">{label}</dt>
              <small className="text-[10px] text-[#8b96a3]">{helper}</small>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto my-7 grid w-[calc(100%-96px)] max-w-[1296px] grid-cols-[minmax(0,870px)_400px] gap-6 max-xl:grid-cols-1 max-md:w-[calc(100%-32px)]" aria-label="Analises do bairro">
        <div className="grid gap-5">
          <Panel title="Relatos por Categoria" subtitle="Distribuicao dos eventos registrados no bairro">
            <div className="mt-6 grid gap-3.5">
              {categories.map(([label, value, color]) => <HorizontalBar key={label} label={label} value={value} color={color} />)}
            </div>
          </Panel>

          <Panel title="Historico - Relatos x Investimento Mensal" subtitle="Ultimos 12 meses · 2024-2025">
            <MonthlyChart />
          </Panel>

          <Panel title="Deficit de Investimento - Brás vs. Meta Municipal" subtitle="Valor investido vs. estimativa necessaria para infraestrutura">
            <div className="mt-6 grid gap-5">
              {deficit.map(([label, invested, required]) => <DeficitBar key={label} label={label} invested={invested} required={required} />)}
            </div>
          </Panel>
        </div>

        <aside className="grid gap-5">
          <Panel title="Localizacao do Bairro">
            <figure className="mt-4">
              <svg className="w-full rounded-lg" viewBox="0 0 360 210" role="img" aria-label="Mapa esquematico do Brás">
                <rect width="360" height="210" rx="8" fill="#d8e5db" />
                <path d="M0 55H360M0 105H360M0 155H360M42 0V210M98 0V210M154 0V210M210 0V210M266 0V210M322 0V210" stroke="#f7fbf8" strokeWidth="3" />
                <polygon points="142,72 241,62 254,145 128,154" fill="#d8e9f5" />
                <rect x="30" y="32" width="300" height="145" rx="4" fill="rgba(214,39,39,.08)" stroke="#d62727" strokeWidth="3" />
                <circle cx="167" cy="96" r="17" fill="#d62727" />
                <text x="167" y="129" textAnchor="middle" fill="#d62727" fontSize="13" fontWeight="700">Brás</text>
              </svg>
              <figcaption className="mt-2 text-[12px] text-[#8b96a3]">-23.5499°, -46.6169° · São Paulo</figcaption>
            </figure>
          </Panel>

          <Panel title="Composicao da Pontuacao" subtitle="Como o indice 91/100 foi calculado">
            <ScoreBreakdown />
          </Panel>

          <Panel title="Ultimos Relatos no Bairro">
            <ol className="mt-5 grid gap-4">
              {timeline.map(([category, title, time, status, color]) => (
                <li className="grid grid-cols-[14px_1fr_auto] gap-3" key={title}>
                  <span className="mt-1 size-3 rounded-full" style={{ background: color }} />
                  <article>
                    <span className="rounded-[10px] px-3 py-1 text-[10px] font-semibold" style={{ background: `${color}1f`, color }}>{category}</span>
                    <h3 className="mt-2 text-[13px] font-bold">{title}</h3>
                    <time className="text-[10px] text-[#8b96a3]">{time}</time>
                  </article>
                  <span className={`self-center rounded-[10px] px-2 py-1 text-[10px] font-bold ${statusClass[status]}`}>{status}</span>
                </li>
              ))}
            </ol>
          </Panel>
        </aside>
      </section>

      <section className="mx-auto mb-16 w-[calc(100%-96px)] max-w-[1296px] max-md:w-[calc(100%-32px)]" aria-labelledby="related-title">
        <h2 id="related-title" className="border-b border-[#e3e8ec] pb-4 text-[18px] font-bold">Bairros Proximos - Compare a Vulnerabilidade</h2>
        <div className="mt-4 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {related.map(([name, risk, score, meta, color]) => (
            <article className="rounded-xl border border-[#e3e8ec] border-t-4 bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)]" style={{ borderTopColor: color }} key={name}>
              <header className="flex justify-between"><h3 className="text-[15px] font-bold">{name}</h3><span className="rounded-[10px] px-2 py-1 text-[10px] font-bold" style={{ background: `${color}1f`, color }}>{risk}</span></header>
              <p className="mt-1 text-[12px] text-[#8b96a3]">{meta}</p>
              <div className="mt-3 h-2 rounded bg-[#eff3f5]"><span className="block h-2 rounded" style={{ width: `${score}%`, background: color }} /></div>
              <footer className="mt-2 flex justify-between text-[11px] font-bold" style={{ color }}><span>Score {score}</span><a href="#">Ver →</a></footer>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Panel({ title, subtitle, children }) {
  return (
    <article className="rounded-xl border border-[#e3e8ec] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <header>
        <h2 className="text-[16px] font-bold">{title}</h2>
        {subtitle ? <p className="mt-1.5 text-[12px] text-[#8b96a3]">{subtitle}</p> : null}
      </header>
      {children}
    </article>
  );
}

function HorizontalBar({ label, value, color }) {
  return (
    <div className="grid grid-cols-[140px_1fr_42px] items-center gap-3 text-[12px] text-[#48525f] max-md:grid-cols-1">
      <span>{label}</span>
      <span className="h-5 rounded bg-[#eff3f5]"><span className="block h-5 rounded" style={{ width: `${value}%`, background: color }} /></span>
      <strong style={{ color }}>{value}%</strong>
    </div>
  );
}

function MonthlyChart() {
  const baseY = 204;
  const left = 34;
  const gap = 63;
  const chartHeight = 150;
  const points = monthly.map(([, , investment], index) => [left + index * gap + 18, baseY - (investment / 150) * chartHeight]);
  return (
    <svg className="mt-4 min-h-[250px] w-full" viewBox="0 0 820 250" role="img" aria-label="Grafico mensal de relatos e investimento">
      {[0, 50, 100, 150].map((tick) => {
        const y = baseY - (tick / 150) * chartHeight;
        return <g key={tick}><line x1="20" y1={y} x2="800" y2={y} stroke="#eff3f5" /><text x="0" y={y + 4} fill="#8b96a3" fontSize="10">{tick}</text></g>;
      })}
      {monthly.map(([month, reports], index) => {
        const x = left + index * gap;
        const h = (reports / 150) * chartHeight;
        return <g key={month}><rect x={x} y={baseY - h} width="36" height={h} rx="3" fill="#d62727" /><text x={x + 18} y="229" textAnchor="middle" fill="#8b96a3" fontSize="9">{month}</text></g>;
      })}
      <polyline points={points.map(([x, y]) => `${x},${y}`).join(' ')} fill="none" stroke="#2469d6" strokeWidth="2" />
      {points.map(([x, y]) => <circle cx={x} cy={y} r="4" fill="#2469d6" key={`${x}-${y}`} />)}
    </svg>
  );
}

function DeficitBar({ label, invested, required }) {
  const max = 100000;
  return (
    <div className="grid grid-cols-[150px_1fr] items-center gap-5 text-[12px] text-[#48525f] max-md:grid-cols-1">
      <span>{label}</span>
      <span className="relative h-5 overflow-hidden rounded bg-[#f3f6f7]">
        <span className="absolute inset-y-0 right-0 bg-[#fff0e6]" style={{ width: `${(required / max) * 100}%` }} />
        <span className="absolute inset-y-0 left-0 grid place-items-center end rounded bg-[#1a9651] pr-2 text-[10px] font-bold text-white" style={{ width: `${(invested / max) * 100}%` }}>R$ {Math.round(invested / 1000)}K</span>
        <span className="absolute right-2 top-1 text-[10px] text-[#f37d22]">R$ {Math.round(required / 1000)}K</span>
      </span>
    </div>
  );
}

function ScoreBreakdown() {
  return (
    <div className="mt-5 grid gap-5">
      {[
        ['Relatos em aberto', 'Peso: 60%', 147, 200, 53, '#d62727'],
        ['Deficit de invest.', 'Peso: 40%', 76, 100, 38, '#f37d22'],
      ].map(([label, weight, value, max, points, color]) => (
        <section key={label}>
          <header className="flex justify-between text-[11px] text-[#48525f]"><strong>{label}</strong><span>{weight}</span></header>
          <div className="mt-2 h-3 rounded bg-[#eff3f5]"><span className="block h-3 rounded" style={{ width: `${(value / max) * 100}%`, background: color }} /></div>
          <p className="mt-2 flex justify-between text-[10px] text-[#8b96a3]"><span>{value} / {max}</span><strong>+{points} pts</strong></p>
        </section>
      ))}
      <p className="flex justify-between border-t border-[#e3e8ec] pt-4 text-[12px] font-bold text-[#48525f]">Pontuacao Total <strong className="rounded-lg border-2 border-[#d62727] bg-[#ffe0e0] px-3 py-1 text-[#d62727]">91 / 100</strong></p>
    </div>
  );
}
