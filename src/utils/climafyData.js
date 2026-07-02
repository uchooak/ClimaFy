export const stats = [
  { value: '1.247', label: 'Relatos registrados', helper: 'em tempo real' },
  { value: '48', label: 'Bairros monitorados', helper: 'em Sao Paulo' },
  { value: '12', label: 'Cidades cobertas', helper: 'em operacao inicial' },
  { value: '312', label: 'Problemas resolvidos', helper: 'via comunidade' },
  { value: 'R$ 2,4M', label: 'Investimento mapeado', helper: 'em areas criticas' },
];

export const reports = [
  {
    category: 'Alagamento',
    neighborhood: 'Vila Madalena',
    title: 'Rua das Flores completamente alagada apos chuva',
    description: "Nivel d'agua subiu 40cm em 30 min. Drenos obstruidos ha semanas sem manutencao.",
    status: 'Aberto',
    time: 'Ha 2 horas',
    votes: 34,
    tone: 'blue',
  },
  {
    category: 'Queimada',
    neighborhood: 'Bras',
    title: 'Foco de queimada proximo a linha ferrea central',
    description: 'Fumaca densa visivel a 2km. Bombeiros acionados, mas sem resposta ate o momento.',
    status: 'Em andamento',
    time: 'Ha 4 horas',
    votes: 67,
    tone: 'red',
  },
  {
    category: 'Calor Extremo',
    neighborhood: 'Consolacao',
    title: 'Ponto de hidratacao desativado na praca central',
    description: 'Com 38 graus registrados, o ponto de apoio foi retirado sem aviso previo.',
    status: 'Aberto',
    time: 'Ha 6 horas',
    votes: 29,
    tone: 'orange',
  },
  {
    category: 'Arvore Caida',
    neighborhood: 'Pinheiros',
    title: 'Arvore de grande porte caida na Rua Oscar Freire',
    description: 'Bloqueia 70% da via e oferece risco ao poste de energia. Situacao controlada.',
    status: 'Resolvido',
    time: 'Ha 1 dia',
    votes: 12,
    tone: 'green',
  },
];

export const ranking = [
  {
    position: 1,
    neighborhood: 'Bras',
    score: 147,
    investment: 'R$ 124K',
    risk: 'critica',
    trend: '+12',
  },
  {
    position: 2,
    neighborhood: 'Vila Madalena',
    score: 118,
    investment: 'R$ 210K',
    risk: 'critica',
    trend: '+8',
  },
  {
    position: 3,
    neighborhood: 'Pinheiros',
    score: 94,
    investment: 'R$ 380K',
    risk: 'alta',
    trend: '+0',
  },
];

export const weeklyActivity = [
  { day: 'Seg', relatos: 42, resolvidos: 18 },
  { day: 'Ter', relatos: 67, resolvidos: 31 },
  { day: 'Qua', relatos: 55, resolvidos: 24 },
  { day: 'Qui', relatos: 89, resolvidos: 44 },
  { day: 'Sex', relatos: 103, resolvidos: 67 },
  { day: 'Sab', relatos: 78, resolvidos: 52 },
  { day: 'Dom', relatos: 61, resolvidos: 38 },
];

export const mapPoints = [
  { id: 1, name: 'Vila Madalena', type: 'Alagamento', position: [-23.546, -46.691], color: '#2469d6' },
  { id: 2, name: 'Bras', type: 'Queimada', position: [-23.545, -46.616], color: '#d62727' },
  { id: 3, name: 'Pinheiros', type: 'Arvore Caida', position: [-23.566, -46.701], color: '#63a93a' },
  { id: 4, name: 'Consolacao', type: 'Calor Extremo', position: [-23.553, -46.658], color: '#f35c22' },
];
