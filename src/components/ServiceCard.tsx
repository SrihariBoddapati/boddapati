
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
    <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-gradient-vibrant rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold gradient-text mb-2">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-base font-bold leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-bold text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
