const questions = [
{
  question: "In which year was the novel 'Frankenstein' by Mary Shelley first published?",
  answers: [
    {"text": "1805", "correct": false},
    {"text": "1818", "correct": true},
    {"text": "1832", "correct": false},
    {"text": "1850", "correct": false}
  ]
},
{
  question: "Who wrote the classic sci-fi novel 'Dune'?",
  answers: [
    {"text": "Isaac Asimov", "correct": false},
    {"text": "Philip K. Dick", "correct": false},
    {"text": "Arthur C. Clarke", "correct": false},
    {"text": "Frank Herbert", "correct": true}
  ]
},
{
  question: "What is the name of the spacecraft in the movie 'Alien'?",
  answers: [
    {"text": "Enterprise", "correct": false},
    {"text": "Millennium Falcon", "correct": false},
    {"text": "Nostromo", "correct": true},
    {"text": "Serenity", "correct": false}
  ]
},
{
  question: "Who is the author of 'The War of the Worlds'?",
  answers: [
    {"text": "H.G. Wells", "correct": true},
    {"text": "Jules Verne", "correct": false},
    {"text": "Ray Bradbury", "correct": false},
    {"text": "George Orwell", "correct": false}
  ]
},
{
  question: "What is the name of the artificial intelligence in '2001: A Space Odyssey'?",
  answers: [
    {"text": "HAL 9000", "correct": true},
    {"text": "R2-D2", "correct": false},
    {"text": "C-3PO", "correct": false},
    {"text": "Skynet", "correct": false}
  ]
},
{
  question: "Which sci-fi film popularized the concept of time travel using a DeLorean car?",
  answers: [
    {"text": "Back to the Future", "correct": true},
    {"text": "The Terminator", "correct": false},
    {"text": "Primer", "correct": false},
    {"text": "Interstellar", "correct": false}
  ]
},
{
  question: "Who wrote the novel 'Neuromancer,' often credited with popularizing the cyberpunk genre?",
  answers: [
    {"text": "William Gibson", "correct": true},
    {"text": "Neal Stephenson", "correct": false},
    {"text": "Margaret Atwood", "correct": false},
    {"text": "Ursula K. Le Guin", "correct": false}
  ]
},
{
  question: "What is the name of the main character in 'The Hitchhiker's Guide to the Galaxy' series?",
  answers: [
    {"text": "Luke Skywalker", "correct": false},
    {"text": "Arthur Dent", "correct": true},
    {"text": "Harry Potter", "correct": false},
    {"text": "Frodo Baggins", "correct": false}
  ]
},
{
  question: "Which sci-fi TV series features a crew exploring the universe aboard a spaceship called the USS Enterprise?",
  answers: [
    {"text": "Battlestar Galactica", "correct": false},
    {"text": "Stargate SG-1", "correct": false},
    {"text": "Star Trek", "correct": true},
    {"text": "Firefly", "correct": false}
  ]
},
{
  question: "Who wrote the novel 'Do Androids Dream of Electric Sheep?,' which inspired the film 'Blade Runner'?",
  answers: [
    {"text": "Arthur C. Clarke", "correct": false},
    {"text": "Isaac Asimov", "correct": false},
    {"text": "Philip K. Dick", "correct": true},
    {"text": "Ray Bradbury", "correct": false}
  ]
}/*,
{
  question: "What is the name of the protagonist in 'The Hunger Games' series?",
  answers: [
    {"text": "Katniss Everdeen", "correct": true},
    {"text": "Hermione Granger", "correct": false},
    {"text": "Bella Swan", "correct": false},
    {"text": "Tris Prior", "correct": false}
  ]
},
{
  question: "Which sci-fi film features a genetically engineered dinosaur theme park?",
  answers: [
    {"text": "Jurassic Park", "correct": true},
    {"text": "Godzilla", "correct": false},
    {"text": "King Kong", "correct": false},
    {"text": "The Matrix", "correct": false}
  ]
},
{
  question: "Who is the director of the sci-fi film 'The Matrix' trilogy?",
  answers: [
    {"text": "Christopher Nolan", "correct": false},
    {"text": "James Cameron", "correct": false},
    {"text": "The Wachowskis (Lana and Lilly)", "correct": true},
    {"text": "Steven Spielberg", "correct": false}
  ]
},
{
  question: "What is the name of the robot in the movie 'Wall-E'?",
  answers: [
    {"text": "EVE", "correct": true},
    {"text": "R2-D2", "correct": false},
    {"text": "BB-8", "correct": false},
    {"text": "Optimus Prime", "correct": false}
  ]
},
{
  question: "Who wrote the novel 'The Martian,' which was adapted into a popular film starring Matt Damon?",
  answers: [
    {"text": "Andy Weir", "correct": true},
    {"text": "Dan Simmons", "correct": false},
    {"text": "Neal Stephenson", "correct": false},
    {"text": "Ann Leckie", "correct": false}
  ]
},
{
  question: "What is the name of the planet destroyed by the Death Star in 'Star Wars: Episode IV - A New Hope'?",
  answers: [
    {"text": "Endor", "correct": false},
    {"text": "Alderaan", "correct": true},
    {"text": "Tatooine", "correct": false},
    {"text": "Hoth", "correct": false}
  ]
},
{
  question: "Who directed the sci-fi film 'E.T. the Extra-Terrestrial'?",
  answers: [
    {"text": "George Lucas", "correct": false},
    {"text": "James Cameron", "correct": false},
    {"text": "Steven Spielberg", "correct": true},
    {"text": "Ridley Scott", "correct": false}
  ]
},
{
  question: "In which sci-fi series does a group of survivors navigate a post-apocalyptic world",
  answers: [
    {"text": "The Walking Dead", "correct": true},
    {"text": "Stranger Things", "correct": false},
    {"text": "Black Mirror", "correct": false},
    {"text": "Westworld", "correct": false}
  ]
},
{
  question: "Who wrote the novel 'Brave New World,' which depicts a dystopian society with a rigid caste system?",
  answers: [
    {"text": "Aldous Huxley", "correct": true},
    {"text": "George Orwell", "correct": false},
    {"text": "Margaret Atwood", "correct": false},
    {"text": "Kazuo Ishiguro", "correct": false}
  ]
},
{
  question: "What is the name of the alien species in the 'Predator' film series?",
  answers: [
    {"text": "Xenomorphs", "correct": false},
    {"text": "Klingons", "correct": false},
    {"text": "Predators", "correct": true},
    {"text": "Daleks", "correct": false}
  ]
},
{
  question: "Who directed the sci-fi film 'Inception'?",
  answers: [
    {"text": "Christopher Nolan", "correct": true},
    {"text": "Denis Villeneuve", "correct": false},
    {"text": "James Cameron", "correct": false},
    {"text": "Ridley Scott", "correct": false}
  ]
},
{
  question: "Which sci-fi novel features a young girl who discovers she has the ability to manipulate time and space?",
  answers: [
    {"text": "'Divergent' by Veronica Roth", "correct": false},
    {"text": "'The Giver' by Lois Lowry", "correct": false},
    {"text": "'A Wrinkle in Time' by Madeleine L'Engle", "correct": true},
    {"text": "'The Maze Runner' by James Dashner", "correct": false}
  ]
},
{
  question: "What is the name of the supercomputer in '2001: A Space Odyssey'?",
  answers: [
    {"text": "Deep Thought", "correct": false},
    {"text": "HAL 9000", "correct": true},
    {"text": "Skynet", "correct": false},
    {"text": "VIKI", "correct": false}
  ]
},
{
  question: "Who directed the sci-fi film 'Blade Runner'?",
  answers: [
    {"text": "Ridley Scott", "correct": true},
    {"text": "George Lucas", "correct": false},
    {"text": "Steven Spielberg", "correct": false},
    {"text": "James Cameron", "correct": false}
  ]
},
{
  question: "What is the name of the artificial intelligence in 'The Terminator' series?",
  answers: [
    {"text": "HAL 9000", "correct": false},
    {"text": "Skynet", "correct": true},
    {"text": "Ultron", "correct": false},
    {"text": "Jarvis", "correct": false}
  ]
},
{
  question: "Who wrote the classic sci-fi novel 'The Time Machine'?",
  answers: [    {"text": "H.G. Wells", "correct": true},
    {"text": "Jules Verne", "correct": false},
    {"text": "Isaac Asimov", "correct": false},
    {"text": "Arthur C. Clarke", "correct": false}
  ]
},
{
  question: "What is the name of the spacecraft in the TV series 'Firefly'?",
  answers: [
    {"text": "Serenity", "correct": true},
    {"text": "Nostromo", "correct": false},
    {"text": "TARDIS", "correct": false},
    {"text": "Voyager", "correct": false}
  ]
},
{
  question: "Who directed the sci-fi film 'Interstellar'?",
  answers: [
    {"text": "Christopher Nolan", "correct": true},
    {"text": "Denis Villeneuve", "correct": false},
    {"text": "James Cameron", "correct": false},
    {"text": "Ridley Scott", "correct": false}
  ]
},
{
  question: "Which sci-fi novel features a dystopian society divided into factions based on personality traits?",
  answers: [
    {"text": "'Brave New World' by Aldous Huxley", "correct": false},
    {"text": "'1984' by George Orwell", "correct": false},
    {"text": "'The Giver' by Lois Lowry", "correct": false},
    {"text": "'Divergent' by Veronica Roth", "correct": true}
  ]
},
{
  question: "What is the name of the computer system in 'The Matrix' series?",
  answers: [
    {"text": "HAL 9000", "correct": false},
    {"text": "Trinity", "correct": false},
    {"text": "Oracle", "correct": false},
    {"text": "The Matrix", "correct": true}
  ]
},
{
  question: "Who wrote the novel 'I, Robot,' which introduced the Three Laws of Robotics?",
  answers: [
    {"text": "Isaac Asimov", "correct": true},
    {"text": "Philip K. Dick", "correct": false},
    {"text": "Arthur C. Clarke", "correct": false},
    {"text": "Ray Bradbury", "correct": false}
  ]
},
{
  question: "What is the name of the AI assistant in the film 'Her'?",
  answers: [
    {"text": "Siri", "correct": false},
    {"text": "Cortana", "correct": false},
    {"text": "Samantha", "correct": true},
    {"text": "Alexa", "correct": false}
  ]
},
{
  question: "Who directed the sci-fi film 'Avatar'?",
  answers: [
    {"text": "James Cameron", "correct": true},
    {"text": "Christopher Nolan", "correct": false},
    {"text": "Steven Spielberg", "correct": false},
    {"text": "Ridley Scott", "correct": false}
  ]
},
{
  question: "Which sci-fi novel features a society where emotions are suppressed to maintain peace?",
  answers: [
    {"text": "'Brave New World' by Aldous Huxley", "correct": false},
    {"text": "'Fahrenheit 451' by Ray Bradbury", "correct": false},
    {"text": "'The Giver' by Lois Lowry", "correct": true},
    {"text": "'1984' by George Orwell", "correct": false}
  ]
}*/

]

const questionElement = document.getElementById ("question");
const answerButton = document.getElementById("answerButtons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer =>{
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

function resetState(){
	nextButton.style.display = "none";
	while(answerButton.firstChild){
		answerButton.removeChild(answerButton.firstChild);
	}
}

function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButton.children).forEach(button=>{
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore(){
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
	nextButton.style.display = "block";
	nextButton.innerHtml = `Play Again`;

}

function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex<questions.length){
		handleNextButton();
	}else{
		startQuiz();
	}
})

startQuiz();
