
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-orange-100 hover:border-orange-300 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-6 p-4 bg-gradient-vibrant rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800 mb-3">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-base text-gray-700">
              <div className="w-2 h-2 bg-gradient-vibrant rounded-full mr-4 flex-shrink-0"></div>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
