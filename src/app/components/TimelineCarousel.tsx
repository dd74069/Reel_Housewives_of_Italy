import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Film, Users, Sparkles, ArrowUp } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  impact: string;
  icon: 'calendar' | 'film' | 'users' | 'sparkles';
}

const events: TimelineEvent[] = [
  {
    id: 1,
    year: '1920s-1940s',
    title: 'Fascist Propaganda Era',
    description: 'Mussolini\'s regime utilized cinema as a propaganda tool, promoting idealized images of Italian women as devoted mothers and keepers of the domestic sphere. These films reinforced traditional gender roles and the fascist vision of femininity.',
    impact: 'Fascist cinema established restrictive ideals of womanhood that would be challenged and deconstructed in postwar Italian filmmaking.',
    icon: 'users'
  },
  {
    id: 2,
    year: '1945',
    title: 'Rome, Open City',
    description: 'Rossellini\'s neorealist masterpiece portrayed women as active resistance fighters and moral anchors during the Nazi occupation. The film showed women\'s strength, sacrifice, and agency in the face of oppression, breaking from fascist-era portrayals.',
    impact: 'Marked a radical shift in depicting women as complex, courageous individuals rather than mere symbols of domesticity.',
    icon: 'film'
  },
  {
    id: 3,
    year: '1961-1963',
    title: 'Economic Boom & Gender Satire',
    description: 'Films like "Divorce, Italian Style" (1961) and "Yesterday, Today, & Tomorrow" (1963) satirized traditional gender roles and explored women\'s sexuality and independence during Italy\'s economic miracle. These comedies exposed the absurdity of patriarchal conventions.',
    impact: 'Cinema began questioning and mocking the very structures that confined women, paving the way for social change.',
    icon: 'sparkles'
  },
  {
    id: 4,
    year: '1977',
    title: 'A Special Day',
    description: 'Set during Mussolini\'s era but made in the 1970s, this film offered a retrospective critique of fascism through the story of a housewife finding connection outside her oppressive domestic life, reflecting the feminist movements of the time.',
    impact: 'Demonstrated how cinema could reexamine historical periods through contemporary feminist perspectives.',
    icon: 'calendar'
  },
  {
    id: 5,
    year: '2009',
    title: 'Il Corpo delle Donne',
    description: 'This documentary exposed the objectification and sexualization of women\'s bodies in Italian media and television, critiquing how modern media perpetuates harmful gender stereotypes and reduces women to their physical appearance.',
    impact: 'Sparked national debate about media representation and the ongoing struggle for women\'s dignity in contemporary Italian culture.',
    icon: 'users'
  }
];

const iconMap = {
  calendar: Calendar,
  film: Film,
  users: Users,
  sparkles: Sparkles
};

export function TimelineCarousel() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="timeline" className="min-h-screen bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl text-center mb-16 text-[#CE2B37]"
          style={{ fontFamily: 'Rye, cursive' }}
        >
          Historical Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-[#009246] via-white to-[#CE2B37] -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = iconMap[event.icon];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                    <motion.button
                      onClick={() => toggleExpand(event.id)}
                      className="w-full text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-white rounded-lg shadow-lg border-2 border-[#009246] p-6 hover:border-[#CE2B37] transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-[#CE2B37]" />
                          <span
                            className="text-2xl text-[#009246]"
                            style={{ fontFamily: 'Cinzel, serif' }}
                          >
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-xl mb-2 text-[#CE2B37]" style={{ fontFamily: 'Cinzel, serif' }}>
                          {event.title}
                        </h3>

                        <AnimatePresence>
                          {expandedId === event.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t-2 border-[#009246]/20 mt-4">
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                  {event.description}
                                </p>
                                <div className="bg-[#009246]/10 p-4 rounded">
                                  <p className="text-sm text-gray-800">
                                    <strong className="text-[#CE2B37]">Impact:</strong> {event.impact}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <p className="text-sm text-[#009246] mt-3">
                          {expandedId === event.id ? 'Click to collapse' : 'Click to expand'}
                        </p>
                      </div>
                    </motion.button>
                  </div>

                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-white border-4 border-[#CE2B37] rounded-full -translate-x-1/2 z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#CE2B37] text-white px-8 py-4 rounded-lg hover:bg-[#009246] transition-colors shadow-lg"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <ArrowUp className="w-5 h-5" />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
}
