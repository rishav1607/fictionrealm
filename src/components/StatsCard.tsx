interface StatsCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}

const StatsCard = ({ icon, value, label }: StatsCardProps) => {
  return (
    <div className="bg-solid-card rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-primary rounded-lg text-primary-foreground">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;