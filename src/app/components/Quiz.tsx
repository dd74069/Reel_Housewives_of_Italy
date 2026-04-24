import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questionBank: Question[] = [
  {
    id: 1,
    question: "During the Fascist era under Mussolini, what was the primary role promoted for women?",
    options: ["Political leaders", "Industrial workers", "Mothers and homemakers", "Film directors"],
    correctAnswer: "C"
  },
  {
    id: 2,
    question: "What symbolic act did many Italian women perform during Fascism to support the regime?",
    options: ["Cutting their hair short", "Donating their wedding rings", "Leaving the workforce", "Voting in elections"],
    correctAnswer: "B"
  },
  {
    id: 3,
    question: "Fascist policies rewarded women primarily for:",
    options: ["Academic achievements", "Military service", "Having many children", "Working abroad"],
    correctAnswer: "C"
  },
  {
    id: 4,
    question: "Italian Neorealist films often focused on:",
    options: ["Royal families", "Everyday struggles of ordinary people", "Mythology", "Science fiction"],
    correctAnswer: "B"
  },
  {
    id: 5,
    question: "In Neorealist cinema, women were often portrayed as:",
    options: ["Passive figures", "Strong figures facing hardship", "Comic relief only", "Villains"],
    correctAnswer: "B"
  },
  {
    id: 6,
    question: "What economic shift influenced changing gender roles in Italy during the 1950s–60s?",
    options: ["Industrial collapse", "The Economic Boom", "Colonial expansion", "Agricultural reform"],
    correctAnswer: "B"
  },
  {
    id: 7,
    question: "A key theme in 'Divorce, Italian Style' is:",
    options: ["Romantic idealism", "War heroism", "Religious devotion", "Criticism of outdated marriage laws"],
    correctAnswer: "D"
  },
  {
    id: 8,
    question: "Before divorce was legalized in 1970, some men exploited what loophole?",
    options: ["Moving abroad", "Legal separation", "Honor killing laws", "Church approval"],
    correctAnswer: "C"
  },
  {
    id: 9,
    question: "'Yesterday, Today, and Tomorrow' is notable for:",
    options: ["One continuous story", "Multiple portrayals of women across social classes", "A political documentary style", "Focus on war"],
    correctAnswer: "B"
  },
  {
    id: 10,
    question: "What defines commedia all’italiana?",
    options: ["Pure slapstick", "Comedy mixed with social critique", "Romance-focused plots", "Silent film techniques"],
    correctAnswer: "B"
  },
  {
    id: 11,
    question: "How did comedy function in these films?",
    options: ["Avoided serious issues", "Reinforced stereotypes", "Critiqued society through humor", "Focused only on entertainment"],
    correctAnswer: "C"
  },
  {
    id: 12,
    question: "What major legal change occurred in Italy in 1970?",
    options: ["Women gained voting rights", "Divorce was legalized", "Equal pay laws passed", "University access expanded"],
    correctAnswer: "B"
  },
  {
    id: 13,
    question: "What is a central theme of 'A Special Day'?",
    options: ["Conformity under Fascism", "Economic success", "Military victory", "Religious unity"],
    correctAnswer: "A"
  },
  {
    id: 14,
    question: "The documentary 'Il Corpo delle Donne' critiques:",
    options: ["Ancient traditions", "Political corruption", "Media objectification of women", "Immigration"],
    correctAnswer: "C"
  },
  {
    id: 15,
    question: "What tension is frequently shown in Italian cinema about women?",
    options: ["Urban vs rural", "Tradition vs modernity", "North vs South", "Art vs science"],
    correctAnswer: "B"
  },
  {
    id: 16,
    question: "During the Economic Boom, women increasingly:",
    options: ["Entered public and consumer life", "Stayed at home", "Lost rights", "Left cities"],
    correctAnswer: "A"
  },
  {
    id: 17,
    question: "Italian cinema acts as a “cultural mirror,” meaning:",
    options: ["It copies other countries", "It reflects societal realities", "It avoids politics", "It focuses only on fiction"],
    correctAnswer: "B"
  },
  {
    id: 18,
    question: "What role did satire play in changing perceptions of women?",
    options: ["Reinforced norms", "Made criticism more acceptable", "Removed seriousness", "Avoided gender topics"],
    correctAnswer: "B"
  },
  {
    id: 19,
    question: "The feminist movement in Italy (1960s–70s) primarily pushed for:",
    options: ["Greater legal and social equality", "Return to tradition", "Religious reform", "Military roles"],
    correctAnswer: "A"
  },
  {
    id: 20,
    question: "The “Years of Lead” in Italy were marked by:",
    options: ["Economic prosperity", "Political violence and unrest", "Cultural isolation", "Artistic decline"],
    correctAnswer: "B"
  },

  // HARDER QUESTIONS (more A/D balance)

  {
    id: 21,
    question: "What was the purpose of the Fascist 'Battle for Births' campaign?",
    options: ["Reduce urban population", "Increase Italy’s population for national strength", "Promote women’s careers", "Encourage immigration"],
    correctAnswer: "B"
  },
  {
    id: 22,
    question: "What did Fascist medals awarded to women symbolize?",
    options: ["Military achievement", "Political loyalty", "Educational success", "Motherhood as national duty"],
    correctAnswer: "D"
  },
  {
    id: 23,
    question: "Why is commedia all’italiana considered subversive?",
    options: ["It avoided politics", "It used humor to expose societal contradictions", "It promoted Fascism", "It ignored gender roles"],
    correctAnswer: "B"
  },
  {
    id: 24,
    question: "In 'Divorce, Italian Style', the protagonist’s behavior mainly critiques:",
    options: ["Women’s independence", "Religious institutions", "Economic inequality", "Male privilege and hypocrisy"],
    correctAnswer: "D"
  },
  {
    id: 25,
    question: "How did the feminist movement influence Italian cinema?",
    options: ["Removed female characters", "Led to more complex and autonomous female roles", "Focused only on male perspectives", "Ended comedic films"],
    correctAnswer: "B"
  },
  {
    id: 26,
    question: "What is a key contrast between Neorealist women and later commedia all’italiana women?",
    options: ["Realism vs fantasy", "Passive vs comedic", "Survival-focused vs socially navigating modern life", "Rural vs urban only"],
    correctAnswer: "C"
  },
  {
    id: 27,
    question: "The 'Femminicidio' decree primarily addresses:",
    options: ["Workplace inequality", "Voting rights", "Education reform", "Gender-based violence and protection laws"],
    correctAnswer: "D"
  },
  {
    id: 28,
    question: "Why is 'A Special Day' set during a major Fascist event?",
    options: ["To celebrate it", "To contrast public spectacle with private oppression", "To focus on politics", "To show economic success"],
    correctAnswer: "B"
  },
  {
    id: 29,
    question: "What broader shift do modern critiques like 'Il Corpo delle Donne' highlight?",
    options: ["From political oppression to media-driven objectification", "From rural to urban life", "From religion to science", "From war to peace"],
    correctAnswer: "A"
  },
  {
    id: 30,
    question: "Across your timeline, what is the most consistent evolution in women’s portrayal?",
    options: ["Increasing invisibility", "Movement from controlled roles to self-defined identities", "Decline in importance", "Shift only in economic roles"],
    correctAnswer: "B"
  }
];

const getResultInfo = (score: number) => {
  if (score === 0) {
    return {
      title: "Silent Film Extra",
      description: "You're currently off-screen and out of the loop. Time to head back to the archives and learn the history of the Italian screen!",
      color: "text-gray-600"
    };
  } else if (score >= 1 && score <= 3) {
    return {
      title: "Fascist-Era Extra",
      description: "You're just getting started—time to step out of the background and into the spotlight.",
      color: "text-amber-700"
    };
  } else if (score >= 4 && score <= 5) {
    return {
      title: "Neorealist Observer",
      description: "You see the bigger picture, but there's more depth to uncover.",
      color: "text-orange-600"
    };
  } else if (score >= 6 && score <= 7) {
    return {
      title: "Commedia Critic",
      description: "You understand the satire and social shifts—nice work.",
      color: "text-yellow-600"
    };
  } else if (score === 8) {
    return {
      title: "Cultural Commentator",
      description: "You've got a strong grasp of how cinema reflects society.",
      color: "text-green-600"
    };
  } else if (score === 9) {
    return {
      title: "Italian Cinema Connoisseur",
      description: "You clearly know your stuff—impressive.",
      color: "text-blue-600"
    };
  } else {
    return {
      title: "La Diva Intellettuale",
      description: "You've mastered the material—worthy of the Italian screen.",
      color: "text-purple-600"
    };
  }
};

export function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);

  useEffect(() => {
    if (showResult && score === 10) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#009246', '#CE2B37', '#FFFFFF', '#FFD700']
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#009246', '#CE2B37', '#FFFFFF', '#FFD700']
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [showResult, score]);

  const selectRandomQuestions = () => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  };

  const startQuiz = () => {
    const questions = selectRandomQuestions();
    setSelectedQuestions(questions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnsweredCorrectly(null);
  };

  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option);
    const optionLetter = String.fromCharCode(65 + selectedQuestions[currentQuestionIndex].options.indexOf(option));
    const isCorrect = optionLetter === selectedQuestions[currentQuestionIndex].correctAnswer;
    setAnsweredCorrectly(isCorrect);

    const newAnswers = [...userAnswers, optionLetter];
    setUserAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnsweredCorrectly(null);
    } else {
      setShowResult(true);
    }
  };

  const retakeQuiz = () => {
    startQuiz();
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Film className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-[#CE2B37] mx-auto mb-4 md:mb-6" />
          <h1
            className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-[#CE2B37]"
            style={{ fontFamily: 'Rye, cursive' }}
          >
            Spotlight Quiz
          </h1>
          <h2
            className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-[#009246]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Beyond the Reel: The Evolution
            <br />
            of Italian Womanhood
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-8 md:mb-12 leading-relaxed px-2">
            A 10-question journey through the cultural mirror of Italian cinema. See if you can spot the shift from social propaganda to cinematic liberation.
          </p>
          <motion.button
            onClick={startQuiz}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#CE2B37] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg lg:text-xl hover:bg-[#009246] transition-colors shadow-lg"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Start Quiz
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (showResult) {
    const result = getResultInfo(score);
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={score === 10 ? {
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1, 1]
            } : {}}
            transition={{ duration: 1, repeat: score === 10 ? Infinity : 0, repeatDelay: 2 }}
          >
            <Award className={`w-12 md:w-16 lg:w-24 h-12 md:h-16 lg:h-24 mx-auto mb-4 md:mb-6 ${result.color}`} />
          </motion.div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mb-4 text-[#CE2B37]"
            style={{ fontFamily: 'Rye, cursive' }}
          >
            Quiz Complete!
          </h2>
          <motion.div
            className="bg-white rounded-lg shadow-2xl p-4 md:p-8 lg:p-12 border-4 border-[#009246] mb-6 md:mb-8"
            animate={score === 10 ? {
              borderColor: ['#009246', '#CE2B37', '#FFD700', '#009246']
            } : {}}
            transition={{ duration: 2, repeat: score === 10 ? Infinity : 0 }}
          >
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6"
              animate={score === 10 ? {
                scale: [1, 1.2, 1],
                color: ['#000000', '#CE2B37', '#009246', '#000000']
              } : {}}
              transition={{ duration: 2, repeat: score === 10 ? Infinity : 0 }}
            >
              {score}/10
            </motion.p>
            <h3
              className={`text-lg md:text-2xl lg:text-3xl mb-3 md:mb-4 ${result.color}`}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {result.title}
            </h3>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed px-2">
              {result.description}
            </p>
          </motion.div>
          <motion.button
            onClick={retakeQuiz}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 md:gap-3 bg-[#009246] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base lg:text-lg hover:bg-[#CE2B37] transition-colors shadow-lg mx-auto"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <RotateCcw className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
            Retake Quiz
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-gradient-to-b from-[#009246]/10 to-[#CE2B37]/10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-3 md:mb-4 gap-2">
            <span className="text-xs md:text-sm lg:text-lg text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
              Q{currentQuestionIndex + 1}/10
            </span>
            <span className="text-xs md:text-sm lg:text-lg text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestionIndex + 1) / 10) * 100}%` }}
              className="bg-gradient-to-r from-[#009246] to-[#CE2B37] h-2 md:h-3 rounded-full"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-lg shadow-2xl p-4 md:p-6 lg:p-8 border-4 border-[#009246]"
          >
            <h3 className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-[#CE2B37]" style={{ fontFamily: 'Cinzel, serif' }}>
              {currentQuestion.question}
            </h3>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {currentQuestion.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65 + index);
                const isCorrect = optionLetter === currentQuestion.correctAnswer;
                const isSelected = option === selectedAnswer;

                let buttonClasses = "w-full text-left p-3 md:p-4 rounded-lg border-2 transition-all";

                if (selectedAnswer === null) {
                  buttonClasses += " border-gray-300 hover:border-[#009246] hover:bg-[#009246]/5";
                } else if (isSelected) {
                  if (answeredCorrectly) {
                    buttonClasses += " border-green-500 bg-green-50";
                  } else {
                    buttonClasses += " border-red-500 bg-red-50";
                  }
                } else if (isCorrect && selectedAnswer !== null) {
                  buttonClasses += " border-green-500 bg-green-50";
                } else {
                  buttonClasses += " border-gray-300";
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={selectedAnswer !== null}
                    className={buttonClasses}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-start md:items-center gap-3 md:gap-4">
                      <span className="text-lg md:text-xl font-bold text-[#CE2B37] flex-shrink-0">{optionLetter}.</span>
                      <span className="text-sm md:text-base lg:text-lg text-left">{option}</span>
                      {selectedAnswer !== null && isCorrect && (
                        <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-500 ml-auto flex-shrink-0" />
                      )}
                      {selectedAnswer !== null && isSelected && !answeredCorrectly && (
                        <XCircle className="w-5 md:w-6 h-5 md:h-6 text-red-500 ml-auto flex-shrink-0" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={nextQuestion}
                className="w-full bg-[#CE2B37] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base lg:text-lg hover:bg-[#009246] transition-colors shadow-lg"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {currentQuestionIndex < selectedQuestions.length - 1 ? 'Next Question' : 'See Results'}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
