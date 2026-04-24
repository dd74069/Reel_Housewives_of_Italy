import { Laugh, Heart, MessageCircle } from 'lucide-react';

export function CommediaSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl text-center mb-12 text-[#CE2B37]"
          style={{ fontFamily: 'Rye, cursive' }}
        >
          La Commedia all'Italiana
        </h2>

        <div className="bg-gradient-to-br from-[#009246]/5 to-[#CE2B37]/5 p-8 rounded-lg border-2 border-[#009246] mb-12">
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <em style={{ fontFamily: 'Cinzel, serif' }}>La commedia all'italiana</em> (Italian-style comedy) emerged in the late 1950s and flourished through the 1970s, becoming one of Italy's most significant cultural exports. This genre masterfully blended humor with biting social commentary, using comedy as a vehicle to critique Italian society's contradictions, hypocrisies, and rapidly changing values.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            For the portrayal of women, <em>la commedia all'italiana</em> was revolutionary. Behind the laughter lay sharp observations about gender dynamics, sexual politics, and the constraining social norms that governed women's lives. These films didn't just entertain—they exposed the absurdity of patriarchal structures while showcasing women's wit, resilience, and emerging independence during Italy's economic boom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#009246] hover:border-[#CE2B37] transition-colors">
            <div className="flex justify-center mb-4">
              <Laugh className="w-12 h-12 text-[#CE2B37]" />
            </div>
            <h3 className="text-xl mb-3 text-center text-[#009246]" style={{ fontFamily: 'Cinzel, serif' }}>
              Satire as Weapon
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Comedy allowed filmmakers to mock restrictive gender roles and outdated traditions without direct confrontation, making social criticism palatable and powerful.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#009246] hover:border-[#CE2B37] transition-colors">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-[#CE2B37]" />
            </div>
            <h3 className="text-xl mb-3 text-center text-[#009246]" style={{ fontFamily: 'Cinzel, serif' }}>
              Complex Women
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Female characters transcended stereotypes, portrayed as sexually autonomous, economically aware, and morally complex individuals navigating societal expectations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#009246] hover:border-[#CE2B37] transition-colors">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-[#CE2B37]" />
            </div>
            <h3 className="text-xl mb-3 text-center text-[#009246]" style={{ fontFamily: 'Cinzel, serif' }}>
              Cultural Mirror
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              These films captured the tension between Italy's traditional Catholic values and modern secular life, documenting women's real struggles in a changing society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
