import {
  BrainCircuit,
  ChartColumn,
  Cpu,
  Database,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  Search,
  TrendingUp,
  Users,
  Zap,
  type LucideProps,
} from "lucide-react";

const map = {
  search: Search,
  trend: TrendingUp,
  dashboard: LayoutDashboard,
  bolt: Zap,
  database: Database,
  users: Users,
  pin: MapPin,
  chart: ChartColumn,
  cap: GraduationCap,
  brain: BrainCircuit,
  file: FileText,
  cpu: Cpu,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp aria-hidden strokeWidth={1.9} {...props} />;
}

export const toneClasses = {
  green: "bg-green-soft text-green-accent",
  gold: "bg-gold-soft text-[#A06B22]",
  plum: "bg-plum-soft text-plum",
  clay: "bg-clay-soft text-clay",
} as const;
