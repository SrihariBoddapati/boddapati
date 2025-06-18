
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white/95 backdrop-blur-sm shadow-lg hover:border-orange-300">
      <CardHeader className="text-center pb-3">
        <div className="mx-auto mb-3 p-3 bg-gradient-vibrant rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold gradient-text mb-2 leading-tight">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-sm font-bold leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-bold text-xs leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
