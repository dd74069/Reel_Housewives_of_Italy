import { motion } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Source {
  number: number;
  citation: string;
  link: string;
}

const sources: Source[] = [
  {
    number: 1,
    citation: 'Luciano, Bernadette, and Susanna Scarparo. "Women in Italian Cinema." John Wiley & Sons, Inc. EBooks, Wiley, Mar. 2017, pp. 427–46, https://doi.org/10.1002/9781119006145.ch25. Accessed 18 Apr. 2026.',
    link: 'https://doi.org/10.1002/9781119006145.ch25'
  },
  {
    number: 2,
    citation: 'Charitonidou, Marianna. "Gender and Migrant Roles in Italian Neorealist and New Migrant Films: Cinema as an Apparatus of Reconfiguration of National Identity and \'Otherness.\'" Humanities, vol. 10, no. 2, Apr. 2021, p. 71, https://doi.org/10.3390/h10020071. Accessed 18 Apr. 2026.',
    link: 'https://doi.org/10.3390/h10020071'
  },
  {
    number: 3,
    citation: 'Simi, Giulia. "\'The Actress Who Got Slapped the Most\': Monica Vitti\'s Body as a Space of Conflict in Italian-Style Comedy (1969–1975) ." Gender/Sexuality/Italy, no. 11, Dec. 2025, pp. 1–18, www.gendersexualityitaly.com/wp-content/uploads/2025/12/12.The-Actress-Who-Got-Slapped-the-Most.pdf. Open Contributions. Accessed 20 Apr. 2026.',
    link: 'https://www.gendersexualityitaly.com/wp-content/uploads/2025/12/12.The-Actress-Who-Got-Slapped-the-Most.pdf'
  },
  {
    number: 4,
    citation: 'Dolasinski, Lisa. "Video Lectures (2-4, 6, 8-10)." Dr. Lisa Dolasinski, eLC Video, 6 Jan. 2026.',
    link: 'https://www.rom.uga.edu/directory/people/lisa-dolasinski'
  },
  {
    number: 5,
    citation: 'A Special Day. Directed by Ettore Scola, performances by Sophia Loren and Marcello Mastroianni, Canafox, 1977.',
    link: 'https://www.imdb.com/title/tt0076085/'
  },
  {
    number: 6,
    citation: 'Archives, Prelinger. “Giovinezza : Istituto Nazionale Luce.” Internet Archive, 19 June 2012, archive.org/details/0684_Giovinezza_22_12_09_00. Accessed 21 Apr. 2026.',
    link: 'http://archive.org/details/0684_Giovinezza_22_12_09_00'
  },
  {
    number: 7,
    citation: 'Divorzio all\'italiana [Divorce Italian Style]. Directed by Pietro Germi, Lux/Vides/Galatea, 1961.',
    link: 'https://www.imdb.com/title/tt0055913/?ref_=nv_sr_srsg_0_tt_2_nm_0_in_0_q_divorce%20italian%20s'
  },
  {
    number: 8,
    citation: 'Il corpo delle donne. Directed by Lorella Zanardo, 2009. YouTube, https://www.youtube.com/watch?v=K7xH4c8nI9U.',
    link: 'https://www.imdb.com/title/tt28601185/'
  },
  {
    number: 9,
    citation: 'Rome, Open City. Directed by Roberto Rossellini, Excelsa Film, 1945.',
    link: 'https://www.imdb.com/title/tt0038890/?ref_=nv_sr_srsg_0_tt_3_nm_0_in_0_q_rome%20open%20city'
  },
  {
    number: 10,
    citation: 'Yesterday, Today and Tomorrow. Directed by Vittorio De Sica, performances by Sophia Loren and Marcello Mastroianni, Produzioni Atlas Consorziate (PAC), 1963.',
    link: 'https://www.imdb.com/title/tt0057171/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_yesterday%20today%20and%20tomorrow'
  }
];

export function Sources() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <BookOpen className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-[#CE2B37] mx-auto mb-4 md:mb-6" />
        <h1
          className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-center text-[#CE2B37]"
          style={{ fontFamily: 'Rye, cursive' }}
        >
          Scholarly Sources
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-2">
          Academic research and scholarly works that informed this exploration of women in Italian cinema.
        </p>

        <div className="space-y-4 md:space-y-6">
          {sources.map((source, index) => (
            <motion.div
              key={source.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl p-4 md:p-6 lg:p-8 border-2 border-[#009246] hover:border-[#CE2B37] transition-colors"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-[#CE2B37] rounded-full flex items-center justify-center">
                    <span className="text-white text-base md:text-lg lg:text-xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>
                      {source.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm lg:text-base text-gray-800 leading-relaxed mb-3 md:mb-4" style={{ textIndent: '-1.5rem', paddingLeft: '1.5rem' }}>
                    {source.citation}
                  </p>
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#009246] hover:text-[#CE2B37] transition-colors font-semibold text-xs md:text-sm"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    <ExternalLink className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
                    Access Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 lg:p-8 border-2 border-[#009246]">
          <p className="text-xs md:text-sm lg:text-base text-gray-700 text-center italic px-2">
            These sources provided essential context and analysis for understanding the evolution of women's roles in Italian cinema and society throughout the 20th and 21st centuries.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
