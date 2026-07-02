import ClimateMap from '../components/ClimateMap.jsx';
import ReportCard from '../components/ReportCard.jsx';
import WeeklyReportsChart from '../components/WeeklyReportsChart.jsx';
import { useClimateReports } from '../hooks/useClimateReports.js';
import { ranking, stats } from '../utils/climafyData.js';

const steps = [
  ['01', 'Registre o evento', 'Clique no mapa, marque o local exato e descreva o problema em menos de 2 minutos.'],
  ['02', 'Moderacao em 24h', 'Nossa equipe analisa a publicacao, valida dados e organiza tudo por bairro.'],
  ['03', 'Pressao publica', 'Relatos viram dados claros para imprensa, vereadores e Defesa Civil.'],
  ['04', 'Resolucao rastreada', 'Cada caso acompanha status, prioridade e historico de resposta.'],
];

export default function Home() {
  const { reports } = useClimateReports();

  return (
    <div className="overflow-hidden">
      <section className="bg-[#f8fafb]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 lg:grid-cols-[0.86fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#1a9651]">
              <span className="h-2 w-2 rounded-full bg-[#1a9651]" />
              Monitoramento climatico comunitario
            </p>
            <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-[#15191e] sm:text-6xl">
              O seu bairro nao pode <span className="text-[#1a9651]">esperar</span> mais.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-[#48525f]">
              Enquanto os dados oficiais olham so para a cidade como um todo, o alagamento e na sua rua.
              O ClimaFy transforma cada relato de morador em pressao real por investimento.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#relatar"
                className="rounded-full bg-[#116b38] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 hover:bg-[#0d5c30]"
              >
                Relatar um problema agora
              </a>
              <a
                href="#ranking"
                className="rounded-full border border-[#8b96a3] bg-white px-7 py-4 text-sm font-semibold text-[#15191e] hover:border-[#1a9651] hover:text-[#1a9651]"
              >
                Ver bairros esquecidos
              </a>
            </div>
          </div>

          <ClimateMap />
        </div>
      </section>

      <section className="bg-[#15191e]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-px px-5 py-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 text-center">
              <strong className="block text-2xl font-extrabold text-[#1a9651]">{stat.value}</strong>
              <span className="mt-1 block text-xs font-semibold text-white">{stat.label}</span>
              <span className="mt-1 block text-[10px] uppercase text-[#8b96a3]">{stat.helper}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14">
        <p className="mb-3 inline-flex rounded-full bg-[#e0f5e9] px-3 py-1 text-[10px] font-bold uppercase text-[#1a9651]">
          Como funciona
        </p>
        <h2 className="text-3xl font-bold text-[#15191e]">Simples, rapido e com impacto real</h2>
        <p className="mt-2 text-sm text-[#8b96a3]">Qualquer cidadao pode contribuir. Sem burocracia, sem conhecimento tecnico.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <article key={number} className="rounded-lg border border-[#e3e8ec] bg-white p-5 shadow-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#e0f5e9] text-xs font-bold text-[#1a9651]">
                {number}
              </span>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#48525f]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ranking" className="border-y border-[#e3e8ec] bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#e0f5e9] px-3 py-1 text-[10px] font-bold uppercase text-[#1a9651]">
              Ranking de vulnerabilidade
            </p>
            <h2 className="text-3xl font-bold">Os bairros que mais precisam de atencao</h2>
            <p className="mt-4 text-sm leading-6 text-[#48525f]">
              Relatos da comunidade cruzados com dados publicos de investimento geram uma score de risco por bairro.
            </p>
            <a className="mt-8 inline-flex rounded-lg bg-[#1a9651] px-5 py-3 text-sm font-semibold text-white" href="#ranking">
              Ver ranking completo +
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {ranking.map((item) => (
              <article key={item.neighborhood} className="rounded-xl border border-[#e3e8ec] bg-[#f8fafb] p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#15191e] text-xs font-bold text-white">
                    #{item.position}
                  </span>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase text-red-600">
                    {item.risk}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.neighborhood}</h3>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-extrabold">{item.score}</span>
                    <p className="text-xs text-[#8b96a3]">Score de vulnerabilidade</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">{item.investment}</span>
                    <p className="text-xs text-[#8b96a3]">Investimento 2025</p>
                  </div>
                </div>
                <div className="mt-5 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-[#1a9651]" style={{ width: `${Math.min(item.score, 150) / 1.5}%` }} />
                </div>
                <a className="mt-5 inline-flex w-full justify-center rounded-lg border border-[#1a9651] px-4 py-2 text-xs font-semibold text-[#1a9651]" href="#mapa">
                  Ver detalhes do bairro +
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="relatos" className="mx-auto max-w-[1320px] px-5 py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#e0f5e9] px-3 py-1 text-[10px] font-bold uppercase text-[#1a9651]">
              Ultimos relatos
            </p>
            <h2 className="text-3xl font-bold">Registrados agora pela comunidade</h2>
          </div>
          <a className="rounded-lg border border-[#1a9651] px-5 py-3 text-sm font-semibold text-[#1a9651]" href="#relatos">
            Ver todos os relatos +
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reports.map((report) => (
            <ReportCard key={report.title} report={report} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#e3e8ec] bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#e0f5e9] px-3 py-1 text-[10px] font-bold uppercase text-[#1a9651]">
              Atividade recente
            </p>
            <h2 className="text-3xl font-bold">Relatos registrados nos ultimos 7 dias</h2>
            <p className="mt-4 text-sm leading-6 text-[#48525f]">Acompanhe o volume diario de relatos e a taxa de resolucao.</p>
          </div>
          <WeeklyReportsChart />
        </div>
      </section>

      <section id="relatar" className="bg-[#116b38] px-5 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Viu algo errado na sua cidade?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#c7ead1]">
          Seu relato pode mudar a realidade do seu bairro. Registre agora: e gratuito e leva 2 minutos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="rounded-lg border-2 border-[#63a93a] bg-[#1a9651] px-6 py-3 text-sm font-semibold text-white" href="#relatar">
            + Registrar um Evento
          </a>
          <a className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#116b38]" href="#mapa">
            Ver o Mapa Interativo +
          </a>
        </div>
      </section>

      <footer id="sobre" className="bg-[#15191e] px-5 py-8 text-sm text-[#8b96a3]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="text-[#1a9651]">ClimaFy</strong>
            <p className="mt-2">Plataforma de Monitoramento Climatico Comunitario</p>
          </div>
          <nav className="flex flex-wrap gap-8">
            <a href="#mapa">Inicio</a>
            <a href="#ranking">Ranking</a>
            <a href="#relatos">Relatos</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <span>© ClimaFy 2026</span>
        </div>
      </footer>
    </div>
  );
}
