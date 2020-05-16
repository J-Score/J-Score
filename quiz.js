// import generatePentagon from './pentagon';

// 1: Yuki Ai
// 2: Flake
// 3: Trash gamer LMAO
// 4: Omega Stink
// 5: DY Ai
// 6: gay

// question string
// option array of strings
// points array of ints

// {
//   question: "Is your name jake?",
//   options: ["Yes", "No"],
//   yuki_ai_score: [0, 0],
//   flake_score: [0, 0],
//   trash_gamer_score: [0, 0],
//   omega_stink_score: [0, 0],
//   dy_ai_score : [0, 0],
//   gay_score: [0,0]
// }

(function () {
  var allQuestions = [{
    question: "Is your name jake?",
    options: ["Yes", "No"],
    yuki_ai_score: [10, 0],
    flake_score: [10, 0],
    trash_gamer_score: [10, 0],
    omega_stink_score: [10, 0],
    dy_ai_score : [10, 0],
    gay_score: [10, 10]
  }, {
    question: "What do your balls smell like?",
    options: ["麻辣鍋", "Yuki's Breath", "Dy's Mouth", "Dy's Feet"],
    yuki_ai_score: [0, 20, 0, 0],
    flake_score: [0, 0, 0, 0],
    trash_gamer_score: [0, 0, 0, 0],
    omega_stink_score: [10, 0, 0, 0],
    dy_ai_score : [0, 0, 10, 20],
    gay_score: [0, 0, 10, 15]
  }, {
    question: "Favorite man",
    options: ["Dy", "Hub", "Joseph", "YUKI!!!!!", "Jake"],
    yuki_ai_score: [0, 0, 0, 10, 10],
    flake_score: [0, 0, 0, 0, 10],
    trash_gamer_score: [0, 10, 10, 0, 15],
    omega_stink_score: [5, 0, 0, 0, 20],
    dy_ai_score : [20, 0, 0, 0, 0],
    gay_score: [10, 15, 15, -5, 15]
  }, {
    question: "Which one of the following would you eat:",
    options: ["malaguo", "Dy's feet", "Mid laners blue buff", "Dy Poop", "Frosty Flake (cause jake a flaker)"],
    yuki_ai_score: [0, -5, 0, -5, 0],
    flake_score: [0, 0, 5, 0, 20],
    trash_gamer_score: [0, 0, 10, 0, 0],
    omega_stink_score: [20, 10, 0, 15, 0],
    dy_ai_score : [0, 20, 0, 15, 0],
    gay_score: [0, 10, 10, 10, 0]
  }, {
    question: "How would you flame Dy?",
    options: ["唔魯塞 米吉特", "ping ??? Dy in leauge lul", "Jg Diff (1-5-4 Lee Sin no drag gg)", "ugly", "rat bastard", "Marry Yuki?"],
    yuki_ai_score: [0, 0, 0, 0, 0, -10],
    flake_score: [5, 15, 20, 0, 5, 0],
    trash_gamer_score: [0, 10, 30, 0, 0, 0],
    omega_stink_score: [0, 0, 0, 0, 0, 0],
    dy_ai_score : [-5, -5, -5, -5, -5, 15],
    gay_score: [0, 0, 0, 0, 0, 10]
  }, {
    question: "What to do now as a jg?",
    options: ["go to bottom and get triple killed", "no ganks and farm up till 40 min", "afk and play with Yuki", "lose dragon and baron (no smite)", "flame teammates 0-8-3", "don't do sht and less dmg than support"],
    yuki_ai_score: [0, 0, 15, 0, 0, 0],
    flake_score: [0, 15, 15, 10, 0, 10],
    trash_gamer_score: [20, 10, 20, 15, 15, 20],
    omega_stink_score: [0, 0, 0, 0, 0, 0],
    dy_ai_score : [0, 0, 0, 0, 0, 0],
    gay_score: [5, 5, -5, 5, 5, 10]
  }, {
    question: "Bleeker says you shouldn't swear in class what do you do?",
    options: ["REEEEEEEEEEEEEE", "TILTEDDDD", "Fuck you", "*Throws arms in the air*", "i'm sorry, but that's ridiculous. 'you have freedom of speech as long as it's something i am ok with you saying' is literally nazism. hate speech IS free speech, some of the greatest ideas to revolutionize humanity were considered rude, offensive, etc. offense can never be given, only taken, not to mention we've all heard 'sticks and stones will break my bones but words will never hurt me.' what you're promoting is VERY common in our generation and it is literally censorious and evil behavior, i know YOU aren't an evil person and you're just repeating what people or teachers have filled your head with but you really should expand your mind, i suggest plato's republic or some entry level philosophy, it'll make you a better person!"],
    yuki_ai_score: [0, 0, 0, 0, 0],
    flake_score: [0, 0, 0, 0, 0],
    trash_gamer_score: [0, 0, 0, 0, 0],
    omega_stink_score: [0, 0, 0, 0, 0],
    dy_ai_score : [0, 0, 0, 0, 0],
    gay_score: [5, 0, 5, 5, 30]
  }, {
    question: "Are you gay?",
    options: ["Yes", "Yes", "But Yuki though"],
    yuki_ai_score: [0, 0, 20],
    flake_score: [0, 0, 0],
    trash_gamer_score: [0, 0, 0],
    omega_stink_score: [0, 0, 0],
    dy_ai_score : [0, 0, 0],
    gay_score: [10, 10, -5]
  }, {
    question: "Would you suck on someone's balls if it smells like ranscid 麻辣鍋",
    options: ["Yes, if it's for Jake", "Yes, I would suck on my own balls", "No, unless it's dy's", "Does Yuki have balls?", ],
    yuki_ai_score: [0, 0, 0, 15],
    flake_score: [0, 0, 20, 10],
    trash_gamer_score: [0, 0, 0, 0],
    omega_stink_score: [10, 5, 15, 0],
    dy_ai_score : [-5, -5, 20, -5],
    gay_score: [10, 15, 5, 0]
  }, {
    question: "What did you dream about the other night?",
    options: [
      "i dreamed for some reason i was in a room with m2k and some black guy", 
      "I dream about anime tiddies mostly so yeah", 
      "so last night i was dreaming and i was like in assassins creed for some reason like i could tell it was the game", 
      "i literally had a dream that i took the longest piss ever in a nice ass bathroom and then woke up for a nice pee", 
    ],
    yuki_ai_score: [-5, 0, 0, 0],
    flake_score: [0, 10, 0, 0],
    trash_gamer_score: [0, 0, 0, 0],
    omega_stink_score: [0, 0, 0, 10],
    dy_ai_score : [-5, -5, 0, 0],
    gay_score: [10, 0, 10, 10]
  }, {
    question: "How would you react to this person's dream : i dreamed that i was still at the desert but then a big part of it was the ocean so it was like the beach and i was with dom and alex hsu and jerry jen and powell and those guys and i was like what the fuck this is supposed to be the desert and i kept saying this is a dream and alex hsu said shut the fuck up just come down and the moment i said fuck it lets go i wake up from that dream and i leave the building and i see some other people also there but for like missionary trips or something who're carrying food and i see them im like oh shit i need to pack up my stuff so i go back in to gather my shit and i was like wait my bag is too small for all my things which makes no sense and after panicking i woke up holy im a lil shook",
    options: [
      "「裝不下便當🍱，oh no!😱」", 
      "Gay sex hit you hard 😰 get some rest", 
      "傑哥也想跟我在沙灘上摩擦膝蓋嗎", 
      "Jake dream full of guys, Kinda sus ngl, No hot girls, Jake what that mean, Big giey?"
    ],
    yuki_ai_score: [0, -5, -5, -5],
    flake_score: [0, 0, 0, 5],
    trash_gamer_score: [0, 0, 0, 0],
    omega_stink_score: [0, 0, 0, 0],
    dy_ai_score : [0, -5, -5, -5],
    gay_score: [0,10, 10, 10]
  }, {
    question: "Jake Wyat?",
    options: ["Jake Ywat?", "Jake Wyat?", "*Calls Jake*", "Jake we are worried );", "Hanging out with Yako :-)"],
    yuki_ai_score: [0, 0, 0, 0, 15],
    flake_score: [20, 20, 25, 25, 25],
    trash_gamer_score: [0, 0, 0, 0, 0],
    omega_stink_score: [0, 0, 0, 0, 0],
    dy_ai_score : [0, 0, 0, 0, 0],
    gay_score: [0, 0, 0, 0, 0, 0]
  }, {
    question: "What is Jake most likely to argue about?",
    options: [
      "That you can't get better at sucknig pp", 
      "jake tried to argue that my acne is my defining feature and that i should learn to accept it rather than try to eliminate it"
    ],
    yuki_ai_score: [0, 0],
    flake_score: [0, 0],
    trash_gamer_score: [0, 0],
    omega_stink_score: [0, 0],
    dy_ai_score : [0, 0],
    gay_score: [0,0]
  }, {
    question: "What Smash character do you ship jake with?",
    options: ["King K Rool", "Donkey Kong", "King Dedede", "Bowser", "Jake dressed as Palutena"],
    yuki_ai_score: [0, 0, 0, 0, 0],
    flake_score: [0, 0, 0, 0, 0],
    trash_gamer_score: [20, 15, 20, 15, 0],
    omega_stink_score: [5, 0, 0, 0, 0],
    dy_ai_score : [0, 0, 0, 0, 0],
    gay_score: [5, 5, 5, 5, 5]
  }, {
    question: "SMASH",
    options: ["Yes", "No"],
    yuki_ai_score: [0, 0],
    flake_score: [0, 0],
    trash_gamer_score: [0, 0],
    omega_stink_score: [0, 0],
    dy_ai_score : [0, 0],
    gay_score: [0,0]
  }, {
    question: "Who should marry Yuki?",
    options: [
      "Alan (美男子）",
      "Andrew (壯丁)",
      "Anthony (緣投)", 
      "Brian (蕃仔)", 
      "Deyang (臭鼠)", 
      "George (?)", 
      "Hong (猴子)", 
      "Hubert (神)", 
      "Jake (近親相姦)", 
      "Joseph (痘痘男)", 
      "Luke (底ㄉ一ㄠˊ)", 
      "Michael (植物人)"
    ],
    yuki_ai_score: [-10, -10, 80, -15, -30, -15, -15, 80, 50, 10, -15, -15],
    flake_score: [0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0],
    trash_gamer_score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    omega_stink_score: [0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    dy_ai_score : [0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0],
    gay_score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    question: "Who's a great homie",
    options: ["Jacky"],
    yuki_ai_score: [5],
    flake_score: [5],
    trash_gamer_score: [5],
    omega_stink_score: [5],
    dy_ai_score : [5],
    gay_score: [5]
  }];

  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');

  nextQuestion();
  displayResult();

  $('#next').click(function () {
    chooseOption();
    if (isNaN(selectOptions[quesCounter])) {
      alert('Please select an option !');
    }
    else {
      quesCounter++;
      nextQuestion();
    }
  });

  $('#prev').click(function () {
    chooseOption();
    quesCounter--;
    nextQuestion();
  });

  function createElement(index) {
    var element = $('<div>', { id: 'question' });
    var header = $('<h3>Question #' + (index + 1) + ':</h3>');
    element.append(header);

    var question = $('<p>').append(allQuestions[index].question);
    element.append(question);

    var radio = radioButtons(index);
    element.append(radio);

    return element;
  }

  function radioButtons(index) {
    var radioItems = $('<ul>');
    var item;
    var input = " ";
    for (var i = 0; i < allQuestions[index].options.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += allQuestions[index].options[i];
      item.append(input);
      radioItems.append(item);
    }
    return radioItems;
  }

  function chooseOption() {
    selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
  }

  function nextQuestion() {
    quizSpace.fadeOut(function () {
      $('#question').remove();
      if (quesCounter < allQuestions.length) {
        var nextQuestion = createElement(quesCounter);
        quizSpace.append(nextQuestion).fadeIn();
        if (!(isNaN(selectOptions[quesCounter]))) {
          $('input[value=' + selectOptions[quesCounter] + ']').prop('checked', true);
        }
        if (quesCounter === 1) {
          $('#prev').show();
        }
        else if (quesCounter === 0) {
          $('#prev').hide();
          $('#next').show();
        }
      }
      else {
        var scoreRslt = displayResult();
        quizSpace.append(scoreRslt).fadeIn();
        $('#next').hide();
        $('#prev').hide();
      }
    });
  }

  function displayResult() {
    var score = $('<p>', { id: 'question' });

    var yuki_ai = 0;
    var flake = 0;
    var trash_jungle = 0;
    var omega_stink = 0;
    var dy_ai = 0;
    
    
    score.append('You are Jake');
    generatePentagon([[0.5, 0.5, 0.5, 0.5, 0.5]]);
    return score;
  }
})();
