import { motion } from 'motion/react';
import { Film as FilmIcon, User, Calendar } from 'lucide-react';
import fascistPropagandaImg from '../../imports/fascist-propaganda.jpeg';
import romeOpenCityImg from '../../imports/rome-open-city-pina.jpg';
import divorceItalianStyleImg from '../../imports/divorce-italian-style.jpg';
import yesterdayTodayTomorrowImg from '../../imports/yesterday-today-tomorrow.jpg';
import aSpecialDayImg from '../../imports/a-special-day.jpg';
import ilCorpoDelleDonneImg from '../../imports/il-copro-delle-donne.png';

interface FilmData {
  title: string;
  year: number;
  director: string;
  synopsis: string;
  impact: string;
  imageUrl: string;
}

const films: FilmData[] = [
  {
    title: "Fascist Propaganda Films",
    year: 1920,
    director: "Benito Mussolini, Cinecittà, Luce, (State-Sponsored)",
    synopsis: "During Mussolini's regime, Italian cinema was weaponized to promote fascist ideology. He is even quoted as saying, 'Cinema is the strongest weapon.' These propaganda films portrayed women as idealized mothers devoted to the state, reinforcing the regime's vision of traditional domesticity and high birth rates as patriotic duty. Propaganda also encouraged women to give up their wedding bands and incentivized births with special medals.",
    impact: "Negative: These films restricted representations of women to narrow, oppressive roles that served authoritarian ideology, establishing harmful stereotypes that postwar cinema would later challenge and deconstruct.",
    imageUrl: fascistPropagandaImg
  },
  {
    title: "Rome, Open City",
    year: 1945,
    director: "Roberto Rossellini",
    synopsis: "A landmark of Italian Neorealism, this film depicts the Nazi occupation of Rome through the eyes of ordinary citizens. Women are portrayed as courageous resistance fighters and moral anchors, showing strength and sacrifice in the face of fascist oppression.",
    impact: "Positive: Revolutionized the portrayal of women in Italian cinema by depicting them as complex, active agents of change rather than passive symbols. The film helped establish women's roles in the anti-fascist resistance as central to Italy's postwar identity.",
    imageUrl: romeOpenCityImg
  },
  {
    title: "Divorce, Italian Style",
    year: 1961,
    director: "Pietro Germi",
    synopsis: "A dark comedy satirizing Italy's archaic marriage laws before divorce was legalized. The film follows a Sicilian baron who plots to murder his wife to marry his young cousin, exploiting legal loopholes around 'honor killings' that were more lenient than divorce.",
    impact: "Positive: Through biting satire, the film exposed the absurdity and cruelty of laws that trapped women in marriages and legitimized violence. It contributed to public discourse that led to divorce legalization in 1970, advancing women's rights and autonomy.",
    imageUrl: divorceItalianStyleImg
  },
  {
    title: "Yesterday, Today, and Tomorrow",
    year: 1963,
    director: "Vittorio De Sica",
    synopsis: "An anthology film starring Sophia Loren in three different stories, each portraying women navigating different social classes and circumstances in 1960s Italy. The film showcases women's sexuality, cunning, and adaptability across Naples, Milan, and Rome.",
    impact: "Positive: Celebrated women's multifaceted nature and sexual agency during Italy's Economic Boom. By portraying women in diverse roles (from streetwise survivor to wealthy sophisticate) the film challenged one-dimensional representations and highlighted female complexity.",
    imageUrl: yesterdayTodayTomorrowImg
  },
  {
    title: "A Special Day",
    year: 1977,
    director: "Ettore Scola",
    synopsis: "Set during Hitler's 1938 visit to Rome, this film tells the story of a repressed housewife who forms a brief but profound connection with her gay neighbor while the rest of the city celebrates the fascist spectacle. The film offers a feminist retrospective on life under Mussolini.",
    impact: "Positive: Made during Italy's feminist movement, the film critiqued fascist-era gender conformity and isolation. It humanized those marginalized by the regime and sparked conversations about the lingering effects of authoritarianism on personal freedom and women's agency.",
    imageUrl: aSpecialDayImg
  },
  {
    title: "Il Corpo delle Donne",
    year: 2009,
    director: "Lorella Zanardo, Marco Malfi Chindemi, Cesare Cantù",
    synopsis: "This hard-hitting documentary examines the pervasive objectification and sexualization of women's bodies on Italian television. It exposes how mainstream media reduces women to physical appearance, perpetuating harmful stereotypes and undermining gender equality.",
    impact: "Mixed: The documentary sparked crucial national debate about media representation and women's dignity in contemporary Italy. However, it also revealed how deeply entrenched sexism remains in Italian media culture, showing that the fight for equal representation continues.",
    imageUrl: ilCorpoDelleDonneImg
  }
];

export function Films() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <FilmIcon className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-[#CE2B37] mx-auto mb-4 md:mb-6" />
        <h1
          className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-center text-[#CE2B37]"
          style={{ fontFamily: 'Rye, cursive' }}
        >
          Featured Films
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-2">
          Explore (some of) the films that shaped and reflected the evolution of women's roles in Italian society.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {films.map((film, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#009246] hover:border-[#CE2B37] transition-colors flex flex-col"
            >
              <div className="h-40 md:h-48 lg:h-64 overflow-hidden bg-gray-200">
                <img
                  src={film.imageUrl}
                  alt={film.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-1">
                <h2
                  className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-[#CE2B37]"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {film.title}
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 mb-3 md:mb-4 text-xs md:text-sm text-gray-600 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{film.year}</span>
                  </div>
                  <div className="flex items-center gap-2 md:flex-wrap">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate md:truncate-none text-xs md:text-sm">{film.director}</span>
                  </div>
                </div>

                <div className="mb-3 md:mb-4 flex-1">
                  <h3 className="font-bold text-[#009246] mb-1 md:mb-2 text-sm md:text-base">Synopsis</h3>
                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                    {film.synopsis}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#009246] mb-1 md:mb-2 text-sm md:text-base">Social Impact</h3>
                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                    {film.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
