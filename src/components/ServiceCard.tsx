
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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 hover:border-orange-300">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-gradient-sunset rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-gradient-sunset rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
