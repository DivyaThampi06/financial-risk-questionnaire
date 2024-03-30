// screens/QuestionScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const questions = [
  {
    question: 'Question 1: How would you describe your approach to saving and investing for retirement?',
    options: [
      { label: 'Novice', score: 1 },
      { label: 'Intermediate', score: 2 },
      { label: 'Advanced', score: 3 },
    ],
  },
  {
    question: 'Question 2: How would you rate your comfort level with investing in high-risk financial products?',
    options: [
      { label: 'Novice', score: 1 },
      { label: 'Intermediate', score: 2 },
      { label: 'Advanced', score: 3 },
    ],
  },
  {
    question: 'Question 3: How would you rate your risk tolerance?',
    options: [
      { label: 'Very Risk-Averse', score: 1 },
      { label: 'Somewhat Risk-Averse', score: 2 },
      { label: 'Neutral', score: 3 },
      { label: 'Somewhat Risk-Tolerant', score: 4 },
      { label: 'Very Risk-Tolerant', score: 5 },
    ],
  },
  {
    question: 'Question 4: How comfortable are you with fluctuations in the value of your investments?',
    options: [
      { label: 'Very Risk-Averse', score: 1 },
      { label: 'Somewhat Risk-Averse', score: 2 },
      { label: 'Neutral', score: 3 },
      { label: 'Somewhat Risk-Tolerant', score: 4 },
      { label: 'Very Risk-Tolerant', score: 5 },
    ],
  },
  {
    question: 'Question 5: How do you perceive the relationship between risk and return in investing?',
    options: [
      { label: 'Very Risk-Averse', score: 1 },
      { label: 'Somewhat Risk-Averse', score: 2 },
      { label: 'Neutral', score: 3 },
      { label: 'Somewhat Risk-Tolerant', score: 4 },
      { label: 'Very Risk-Tolerant', score: 5 },
    ],
  },
  // Add more questions as needed
];

function QuestionScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const dispatch = useDispatch();
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    const currentQuestionOptions = questions[currentQuestion].options;
    const selectedOptionScore = currentQuestionOptions.find(
      (option) => option.label === selectedOption
    ).score;
    setScore(score + selectedOptionScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate('Result', { score });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <Button
          key={index}
          title={option.label}
          onPress={() => handleAnswer(option.label)}
        />
      ))}
    </View>
  );
}

export default QuestionScreen;

