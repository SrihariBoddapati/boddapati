
import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 50, label: 'Projects Completed' },
    { value: 0, target: 5, label: 'Years Experience' },
    { value: 0, target: 40, label: 'Happy Clients' },
    { value: 0, target: 24, label: '24/7 Support' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.target
        }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bounce-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 count-up">
                {stat.value}{stat.label.includes('24/7') ? '/7' : '+'}
              </div>
              <div className="text-gray-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
