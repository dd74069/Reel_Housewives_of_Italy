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
    year: '1938',
    title: 'A Special Day (Film Made 1977)',
    description: 'Though created in the 1970s, this film is set during Hitler\'s 1938 visit to Rome. It tells the story of a repressed housewife who forms a brief connection with her gay neighbor while the city celebrates fascism. The film offers a feminist retrospective critique of life under Mussolini.',
    impact: 'Demonstrated how 1970s cinema could reexamine fascist-era gender conformity through contemporary feminist perspectives, humanizing those marginalized by the regime.',
    icon: 'calendar'
  },
  {
    id: 3,
    year: '1943-1945',
    title: 'Women in the Partisan Resistance',
    description: 'During WWII, thousands of Italian women joined the partisan resistance against Nazi occupation and Mussolini\'s fascist regime. They served as fighters, couriers, spies, and support networks, risking their lives for liberation and demonstrating unprecedented courage and agency.',
    impact: 'Women\'s active participation in the resistance challenged traditional gender roles and proved their capability as political and military actors, laying groundwork for postwar rights movements.',
    icon: 'sparkles'
  },
  {
    id: 4,
    year: '1945',
    title: 'Rome, Open City & Women\'s Suffrage',
    description: 'Rossellini\'s neorealist masterpiece portrayed women as active resistance fighters during Nazi occupation. The same year, Italian women gained the right to vote for the first time at liberation, recognizing their crucial role in the resistance and Italy\'s democratic rebirth.',
    impact: 'Cinema and politics converged to redefine women as complex, courageous citizens with full political rights rather than mere symbols of domesticity.',
    icon: 'film'
  },
  {
    id: 5,
    year: '1961-1963',
    title: 'Economic Boom & Gender Satire',
    description: 'Films like "Divorce, Italian Style" (1961) and "Yesterday, Today, & Tomorrow" (1963) satirized traditional gender roles and explored women\'s sexuality and independence during Italy\'s economic miracle. These comedies exposed the absurdity of patriarchal conventions.',
    impact: 'Cinema began questioning and mocking the very structures that confined women, paving the way for social change.',
    icon: 'sparkles'
  },
  {
    id: 6,
    year: '1970',
    title: 'Divorce Legalization',
    description: 'After decades of struggle, Italy legalized divorce, allowing women (and men) to dissolve marriages for the first time. This landmark legal reform was heavily influenced by films like "Divorce, Italian Style" that exposed the cruelty of laws trapping people in failed marriages.',
    impact: 'Divorce legalization represented a major victory for women\'s independence and autonomy, fundamentally transforming Italian family law and gender relations.',
    icon: 'calendar'
  },
  {
    id: 7,
    year: '1974-1978',
    title: 'The Feminist Movement',
    description: 'Italy\'s feminist movement mobilized for sweeping legal reforms including family law changes, abortion and contraception access, and criminalizing spousal rape. This period coincided with the "Years of Lead" (Anni di Piombo), a time of political terrorism, yet women persisted in demanding their rights.',
    impact: 'Despite political turmoil, feminists achieved major victories that reshaped Italian society: divorce referendum (1974), family law reform (1975), and abortion legalization (1978). These changes fundamentally altered women\'s legal status and bodily autonomy.',
    icon: 'users'
  },
  {
    id: 8,
    year: '2009',
    title: 'Il Corpo delle Donne',
    description: 'This documentary exposed the objectification and sexualization of women\'s bodies in Italian media and television, critiquing how modern media perpetuates harmful gender stereotypes and reduces women to their physical appearance.',
    impact: 'Sparked national debate about media representation and the ongoing struggle for women\'s dignity in contemporary Italian culture.',
    icon: 'users'
  },
  {
    id: 9,
    year: '2010-2018',
    title: 'Rise of Female Directors',
    description: 'A new generation of Italian female directors gained international recognition and critical acclaim. Directors like Alice Rohrwacher won the Grand Prix at Cannes (2014), Susanna Nicchiarelli earned awards at Venice, and Laura Bispuri received the Audience Award at Sundance. Notably, women had been directing films since the early 1900s in Italy, but their contributions were systematically overlooked and suppressed during the Fascist era, which sought to erase women from positions of creative and intellectual authority.',
    impact: 'This resurgence brought women\'s perspectives behind the camera to the forefront of Italian cinema, reclaiming a legacy that had been hidden for decades and proving that female voices are essential to Italy\'s cinematic identity.',
    icon: 'film'
  },
  {
    id: 10,
    year: '2013',
    title: 'Femminicidio Decree',
    description: 'Italy passed the "Femminicidio" decree to strengthen legal responses to domestic and gender-based violence. This law introduced harsher penalties for violence against women and expanded protective measures, acknowledging femicide as a distinct crime requiring urgent action.',
    impact: 'Marked institutional recognition of gendered violence as a systemic problem, though implementation challenges remain. The decree represents ongoing efforts to protect women\'s lives and rights in contemporary Italy.',
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
    <section id="timeline" className="min-h-screen bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10 py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-12 lg:mb-16 text-[#CE2B37]"
          style={{ fontFamily: 'Rye, cursive' }}
        >
          Historical Timeline
        </h2>

        <div className="relative">
          {/* Desktop vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-[#009246] via-white to-[#CE2B37] -translate-x-1/2" />
          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#009246] via-white to-[#CE2B37]" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              const Icon = iconMap[event.icon];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                >
                  {/* Mobile dot and content container */}
                  <div className="md:hidden w-full pl-10">
                    <div className="absolute left-1 top-6 w-3 h-3 bg-white border-3 border-[#CE2B37] rounded-full -translate-x-1 z-10" />
                    <motion.button
                      onClick={() => toggleExpand(event.id)}
                      className="w-full text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-white rounded-lg shadow-lg border-2 border-[#009246] p-4 md:p-6 hover:border-[#CE2B37] transition-colors">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <Icon className="w-5 md:w-6 h-5 md:h-6 text-[#CE2B37] flex-shrink-0" />
                          <span
                            className="text-lg md:text-2xl text-[#009246]"
                            style={{ fontFamily: 'Cinzel, serif' }}
                          >
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-base md:text-xl mb-2 text-[#CE2B37]" style={{ fontFamily: 'Cinzel, serif' }}>
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
                              <div className="pt-3 md:pt-4 border-t-2 border-[#009246]/20 mt-3 md:mt-4">
                                <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
                                  {event.description}
                                </p>
                                <div className="bg-[#009246]/10 p-3 md:p-4 rounded">
                                  <p className="text-xs md:text-sm text-gray-800">
                                    <strong className="text-[#CE2B37]">Impact:</strong> {event.impact}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <p className="text-xs md:text-sm text-[#009246] mt-2 md:mt-3">
                          {expandedId === event.id ? 'Click to collapse' : 'Click to expand'}
                        </p>
                      </div>
                    </motion.button>
                  </div>

                  {/* Desktop layout - hidden on mobile */}
                  <div className={`hidden md:block w-5/12 ${isLeft ? 'pr-12' : 'pl-12'}`}>
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

                  {/* Desktop dot - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-white border-4 border-[#CE2B37] rounded-full -translate-x-1/2 z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#CE2B37] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#009246] transition-colors shadow-lg text-sm md:text-base"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <ArrowUp className="w-4 md:w-5 h-4 md:h-5" />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
}
