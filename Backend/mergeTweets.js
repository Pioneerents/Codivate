const fs = require("fs");
let a = [
  {
    tweet:
      "Beginners will try to find the perfect first language. Your first language doesn’t matter. What matters is learning to program well. Just start coding #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learning programming languages is NOT learning how to program. Focus on programming techniques, problem-solving and analytical skills not on learning as many languages as you can. #100DaysOfCode #coding",
  },
  {
    tweet:
      "If you're committed to learning a programming language. Learn the most important libraries for your use cases. The more libraries you’re aware of the less likely you are to try reinventing the wheel. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Automation is key create some of your own tools. (But of course, if you're going to use it in production make sure it's not another wheel reinvention.) #100DaysOfCode #coding",
  },
  {
    tweet:
      "Always write code as if the person who ends up maintaining it will be a violent psychopath who knows where you live. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Name variables so that other developers can understand your code better. This is a skill you need to nurture. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t use design patterns like a hammer looking for a nail. If you don’t have a clear reason you need it don’t use it. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Reusable code is helpful and important but trying to write overgeneralised super flexible code is often a waste of time. This kind of code is usually harder to maintain and causes bugs. #100DaysOfCode #coding",
  },
  {
    tweet:
      " Commit your code in small working chunks and write detailed commit messages that will help developers find and understand bugs that may have been introduced in that commit. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Have large chunks of time set aside for focused coding each day. The quantity of time spent coding is meaningless if it’s full of interruptions such as meetings, emails and web browsing. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Googling is a crucial developer skill. Learn how to do something you haven’t done before and find optimal solutions from the collective intelligence of the developer community. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Teach. Even if you’re a novice at programming you’re knowledgeable about something. Teaching teaches the teacher. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Look for existing solutions. Most of the time every problem you are struggling with is a problem that thousands of people have already faced and probably solved.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Read read & read. The more you read the more you learn. You obviously need to practise but good books give you a solid base! #100DaysOfCode #coding",
  },
  {
    tweet:
      "To be competitive stay updated. Know about new trends in your industry. The world is changing at a very fast rhythm and almost every day you hear about awesome innovations #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t forget to live. A code marathon isn’t going to make you healthy and productive”. Don’t forget about your personal life! Disconnect go out, do sports, spend time in nature without any devices etc. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Before you start coding take the time to jot down the general structure of the feature/problem you will be working on. This will make code implementation a much smoother process and will help you see potential pitfalls. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Things change very quickly in the software industry. If you want to stay relevant as a programmer you have to keep learning new things. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don't Try To Learn Everything - Although it's important to be constantly picking up on new things you only have so many hours in your day. So be selective of what you spend your time trying to learn. #100DaysOfCode #coding",
  },
  {
    tweet:
      "You might think you're all set once you know C++ Java or Python. Yet being a great developer requires a wide range of softer skills too – like being able to empathise. After all, you’ll still be working with humans.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Under promise and over-deliver. It is better to let your team know a task will take three weeks and deliver in two rather than the other way around. By under-promising and over-delivering you'll build trust. #100DaysOfCode #coding",
  },
  {
    tweet:
      "YAGNI: You Aint Gonna Need It. Don't write code that you think you might need in future but don't need yet. This is coding for imaginary future use cases and inevitably the code will become dead code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Write defensively. Always think about what can go wrong, what will happen on invalid input and what might fail. This will help you catch many bugs before they happen. #100DaysOfCode #coding",
  },
  {
    tweet:
      "The third time you write the same piece of code is the right time to extract it into a general-purpose helper (and write tests for it). Remember (DRY) - Don't repeat yourself #100DaysOfCode #coding",
  },
  {
    tweet:
      "Contribute to open-source projects as a bridge from beginner to intermediate. Collaborate with the developers of the project and attend meetups to collaborate with other developers in person. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t let anything get in the way of that initial motivation to learn programming and just build something. Sometimes you block yourself by having too much focus on reading books or resources first #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learning programming languages is NOT learning how to program. Focus on programming techniques problem solving and analytical skills #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learn the most important libraries for your chosen programming language. The more libraries you’re aware of the less likely you are to try reinventing the wheel. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Make common programs that have been made before as a learning project. If other developers can make a calculator, To-do list, text editor, Tetris or Pong then so can you. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Always write code as if the person who ends up maintaining it will be a violent psychopath who knows where you live. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Name variables so that other developers can understand your code better. This is a skill you need to nurture. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t use design patterns like a hammer looking for a nail. If you don’t have a clear reason you need it don’t use it. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Reusable code is helpful and important but trying to write overgeneralised super flexible code is often a waste of time. This kind of code is usually harder to maintain and causes bugs. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Master the art of debugging using print statements. There are many scenarios where a sophisticated debugger is not available to you  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Know when to take on technical debt and when to pay it off so it doesn’t compound. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Within the context of your projects learn what the right amount of testing is. Too little and your software becomes unreliable and everyone is afraid to deploy to production. Too much and you’ll end up wasting too much time. #100DaysOfCode #coding",
  },
  {
    tweet:
      " Estimating time is hard. This is why iterative development methods such as Scrum are so popular. Push yourself and your team to have increasingly shorter release cycles. #100DaysOfCode #coding",
  },
  {
    tweet:
      "It's not at all important to get it right the first time. It's vitally important to get it right the last time.” #100DaysOfCode #coding",
  },
  {
    tweet:
      "You won’t get anywhere if you just sit on your ass and lament that you suck at coding. Asides from following tutorials you should work on your own projects. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Becoming a good programmer takes a long long time and a lot of tedious evenings. Be patient and you shall bear the fruits of your labour #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learn by doing. Always play with the code while learning - With every new subject the sooner you start playing with the code the faster you will learn the given concepts. #100DaysOfCode #coding",
  },
  {
    tweet:
      "As elementary as they may appear at first programming fundamentals always need to come first: the better you understand them the easier it is to learn more advanced concepts. #100DaysOfCode #coding",
  },
  {
    tweet:
      "As awesome as it would be to become the next Steve Jobs on your own the reality is that people learn faster with mentors and peer feedback.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Consistency is very important when you are learning a new language. Make a commitment to coding everyday.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "As you progress on your journey as a new programmer you may wonder if you should be taking notes. Yes you should! Taking notes by hand is best for long-term retention. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Be aware that the only constant in the tech (& programming) world is change: be open to it, accept it and dont look at it as some serious inconvenience to be fought! #100DaysOfCode #coding",
  },
  {
    tweet:
      "Take pride in what you build but be ready to have it replaced by someone or even yourself. Don't attach ego to your code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Programming can also one of the most frustrating things you will ever do. Feeling frustrated is completely normal and will probably never completely go away. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Jump into networking with other local people in the industry as soon as you can. Those connections will grow with you and be invaluable. #100DaysOfCode #coding",
  },
  {
    tweet:
      "One of the best programming skills you can have is knowing when to walk away for a while. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Comments are crucial. You won’t appreciate them until you leave your thousand-line script for a couple of days and return to and try and make sense of it. Useful comments make life easier for yourself and others who have to maintain your code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Global variables and loops are a mess and can prove problematic when your application grows to millions of lines of code (which most do!). They may influence code elsewhere that is difficult to discern. Think twice before using globals. !#100DaysOfCode #coding",
  },
  {
    tweet:
      "Learn how to learn - Everyone learns best in different ways. Some learn best from reading books and others like following video tutorials. If you figure out your learning style and use it, you'll have a much easier time learning new things. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Codes are a puzzle. A game just like any other game. - Alan Turing #100DaysOfCode #coding",
  },
  {
    tweet:
      "Make your code easy to read and understand. This makes it easier for other people (including, your future self after you’ve forgotten how your code works) to figure out what your code is doing, modify it as need be, and debug it. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Inevitably, code comments become lies over time. In practice, few people update comments when things change. Strive to make your code readable and self-documenting through good naming practices and known programming style. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Rushing any task usually ends up in disasters of the worst kind. Coding is a process that takes time. Software projects often involve the completion of a number of critical sub-tasks which cannot be messed up. Be patient. #100DaysOfCode #coding",
  },
  {
    tweet:
      "If software cannot be maintained then it will be rewritten – Dave Cheney #100DaysOfCode #coding",
  },
  {
    tweet:
      "The digital revolution is far more significant than the invention of writing or even of printing. – Douglas Engelbart #100DaysOfCode #coding",
  },
  {
    tweet:
      "Software being Done is like lawn being Mowed. - Jim Benson #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t be afraid to look at somebody else’s code and try to understand it.  If you're on a project with senior talent, this is a great opportunity to take advantage of!  Don’t be afraid to ask about things you don’t understand in their code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t Sell Yourself Short - These days, if you work in tech you’re a scarce resource. Being aware of this & more importantly being able to use this will give you better career opportunities and will ultimately result in better self-confidence. #100DaysOfCode #coding",
  },
  {
    tweet:
      "in order to stay relevant, it’s mandatory for every developer to keep learning new technologies, programming languages, frameworks, techniques, best practices and skills #100DaysOfCode #coding",
  },
  {
    tweet:
      "I love doing side projects even if I’m in a permanent role. Side projects allow you to learn new things, they're great for your CV and most importantly keep your skills up-to-date. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Having a profile on LinkedIn will give you exposure to recruiters, potential employers, and like-minded people. It will help you present your skills, connect with other people and find new job opportunities. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Whether you’re just starting your career as a software developer or have 10+ years experience, if you don’t know something, ASK! Nobody knows everything. Nobody can know everything. The software industry constantly changes at a furious speed! #100DaysOfCode #coding",
  },

  {
    tweet:
      "The technology industry is one of the most intense industries and it can be overwhelming to jump into. Remember that everyone, at some point in their careers, started where you did. All of the industry leaders in tech were once beginners.  #100DaysOfCode #coding",
  },

  {
    tweet:
      "If you want to start programming, there has to be a reason for it. Whether you love writing code, you're seeking a more lucrative career, or you are doing some Excel work and you want to automate it. Keep track of that reason as coding is hard. #100DaysOfCode #coding",
  },

  {
    tweet:
      "Find a community to support you as you start writing code. This community will be valuable because other people will be in the same place as you, offering resources that helped them and encouragement. Network on Social Media or find a Meetup group. #100DaysOfCode #coding",
  },

  {
    tweet:
      "An important part of programming is taking a large problem and breaking it into smaller solvable pieces. If you are looking at a blank text editor not knowing where to start, it may be because you haven't broken down the problem enough! #100DaysOfCode #coding",
  },

  {
    tweet:
      "Related to the previous tip, a lot of times it is beneficial to write down in detail what you are trying to do in plain words before even trying to write code. This process is called pseudocoding, and it can take whatever form you want it to. #100DaysOfCode #coding",
  },

  {
    tweet:
      "If you've been away from the classroom for a while, learning how to learn is going to be a big part of your process. There are lots of ups and downs involved, which is natural! I would brace yourself for that rollercoaster before starting out. #100DaysOfCode #coding",
  },

  {
    tweet:
      "There are a million and one resources for learning how to code. Some are free, and some are paid. I would start with the free resources, make sure you like writing code, then, you could think about moving onto paid resources or even a bootcamp. #100DaysOfCode #coding",
  },

  {
    tweet:
      "There are a lot of worlds within programming, find one world that you love and focus on that. Instead of trying to learn 8 programming languages. #100DaysOfCode #coding",
  },

  {
    tweet:
      "It will be easier to write clean code in the future if you get into the habit early. Bad habits can be hard to break #100DaysOfCode #coding",
  },
  {
    tweet:
      "Error messages are super helpful, but when you are starting out that red error message can be terrifying! One huge step to take is to read through those messages, understand them, and then use them to solve the problem. #100DaysOfCode #coding",
  },
  {
    tweet:
      "There isn't a right answer for what programming language to learn first; however, some will be easier to pick up. My top two are Python and JavaScript because they have a large community behind them and the syntax is relative straight-forward. #100DaysOfCode #coding",
  },
  {
    tweet:
      "The fundamentals of programming are invaluable, and you will use them no matter what you end up doing. Focus on having a solid knowledge of loops, conditionals, functions, data types, and (in most languages) OOP. #100DaysOfCode #coding",
  },

  {
    tweet:
      "What one programmer can do in one month two programmers can do in two months. - Fred Brooks #100DaysOfCode #coding",
  },
  {
    tweet:
      "If it doesn’t work it doesn’t matter how fast it doesn’t work. - Mich Ravera #100DaysOfCode #coding",
  },
  {
    tweet:
      "The amount of sleep that you get has a larger impact on your effectiveness than the programming language you use. – Wesley Aptekar-Cassels #100DaysOfCode #coding",
  },
  {
    tweet:
      "People have an enormous tendency to resist change. They love to say We've always done it this way. I try to fight that.” - Grace Hopper #100DaysOfCode #coding",
  },
  {
    tweet:
      "An evolving system increases its complexity unless work is done to reduce it. - Meir Lehman #100DaysOfCode #coding",
  },
  {
    tweet:
      "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do. - Ted Nelson #100DaysOfCode #coding",
  },
  {
    tweet:
      "It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading. - Douglas Crockford #100DaysOfCode #coding",
  },
  {
    tweet:
      "There’s a big difference between making a simple product & making a product simple.” - Des Traynor #100DaysOfCode #coding",
  },
  {
    tweet:
      "A good programmer is someone who always looks both ways before crossing a one-way street. — Doug Linder #100DaysOfCode #coding",
  },
  {
    tweet:
      "You’re building your own maze in a way and you might just get lost in it.” - Marijn Haverbeke Eloquent JavaScript: A Modern Introduction to Programming #100DaysOfCode #coding",
  },
  {
    tweet:
      "Programming is like pinball. The reward for doing it is the opportunity of doing it again. - Unknown #100DaysOfCode #coding",
  },
  {
    tweet:
      "It's not a bug - it's an undocumented feature. #100DaysOfCode #coding",
  },
  {
    tweet: "Software is never finished only abandoned. #100DaysOfCode #coding",
  },
  {
    tweet:
      "The most valuable thing you can make is a mistake - you can't learn anything from being perfect. - Adam Osborne #100DaysOfCode #coding",
  },
  {
    tweet:
      "There’s a very strong element of excitement of being able to share what you’ve learned with the next generation.” - Larry Tesler #100DaysOfCode #coding",
  },
  {
    tweet:
      "The best programmers can take a complex problem break it down into smaller pieces, solve each of those pieces and then put everything back together to solve the initial problem. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t let one domain pigeonhole you into one way of coding. An example would be a mobile developer who is mainly good at hooking together existing APIs but can't come up with a sane data representation. Don’t be a one-trick pony. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Plan your code away from the computer. It will help you build a clear mental model before you start. You use the same strategy in writing because if you don’t have an outline your content becomes a messy stream of consciousness. #100DaysOfCode #coding",
  },
  {
    tweet:
      "When you're stuck write your program on paper. I'm serious. It's magic. (I think it works because when you don't have to think about syntax you have more excess brainpower to solve the actual problem.)” - Joseph Gentle #100DaysOfCode #coding",
  },
  {
    tweet:
      "Contribute to open-source projects as a bridge from beginner to intermediate. Collaborate with the developers of the project and attend meetups to collaborate with other developers in person. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t let anything get in the way of that initial motivation to learn programming and just build something. Sometimes you block yourself by having too much focus on reading books or resources first. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Beginners will try to find the perfect first language. Your first language doesn’t matter. What matters is learning to program well. Just start coding #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learning programming languages is NOT learning how to program. Focus on programming techniques, problem-solving and analytical skills not on learning as many languages as you can. #100DaysOfCode #coding",
  },
  {
    tweet:
      "If you're committed to learning a programming language. Learn the most important libraries for your use cases. The more libraries you’re aware of the less likely you are to try reinventing the wheel. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Automation is key create some of your own tools. (But of course, if you're going to use it in production make sure it's not another wheel reinvention.) #100DaysOfCode #coding",
  },
  {
    tweet:
      "Always write code as if the person who ends up maintaining it will be a violent psychopath who knows where you live. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Name variables so that other developers can understand your code better. This is a skill you need to nurture. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t use design patterns like a hammer looking for a nail. If you don’t have a clear reason you need it don’t use it. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Reusable code is helpful and important but trying to write overgeneralised super flexible code is often a waste of time. This kind of code is usually harder to maintain and causes bugs. #100DaysOfCode #coding",
  },
  {
    tweet:
      " Commit your code in small working chunks and write detailed commit messages that will help developers find and understand bugs that may have been introduced in that commit. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Have large chunks of time set aside for focused coding each day. The quantity of time spent coding is meaningless if it’s full of interruptions such as meetings, emails and web browsing. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Googling is a crucial developer skill. Learn how to do something you haven’t done before and find optimal solutions from the collective intelligence of the developer community. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Teach. Even if you’re a novice at programming you’re knowledgeable about something. Teaching teaches the teacher. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Look for existing solutions. Most of the time every problem you are struggling with is a problem that thousands of people have already faced and probably solved.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Read read & read. The more you read the more you learn. You obviously need to practise but good books give you a solid base! #100DaysOfCode #coding",
  },
  {
    tweet:
      "To be competitive stay updated. Know about new trends in your industry. The world is changing at a very fast rhythm and almost every day you hear about awesome innovations #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t forget to live. A code marathon isn’t going to make you healthy and productive”. Don’t forget about your personal life! Disconnect go out, do sports, spend time in nature without any devices etc. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Before you start coding take the time to jot down the general structure of the feature/problem you will be working on. This will make code implementation a much smoother process and will help you see potential pitfalls. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Things change very quickly in the software industry. If you want to stay relevant as a programmer you have to keep learning new things. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don't Try To Learn Everything - Although it's important to be constantly picking up on new things you only have so many hours in your day. So be selective of what you spend your time trying to learn. #100DaysOfCode #coding",
  },
  {
    tweet:
      "You might think you're all set once you know C++ Java or Python. Yet being a great developer requires a wide range of softer skills too – like being able to empathise. After all, you’ll still be working with humans.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Under promise and over-deliver. It is better to let your team know a task will take three weeks and deliver in two rather than the other way around. By under-promising and over-delivering you'll build trust. #100DaysOfCode #coding",
  },
  {
    tweet:
      "YAGNI: You Aint Gonna Need It. Don't write code that you think you might need in future but don't need yet. This is coding for imaginary future use cases and inevitably the code will become dead code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Write defensively. Always think about what can go wrong, what will happen on invalid input and what might fail. This will help you catch many bugs before they happen. #100DaysOfCode #coding",
  },
  {
    tweet:
      "The third time you write the same piece of code is the right time to extract it into a general-purpose helper (and write tests for it). Remember (DRY) - Don't repeat yourself #100DaysOfCode #coding",
  },
  {
    tweet:
      "Contribute to open-source projects as a bridge from beginner to intermediate. Collaborate with the developers of the project and attend meetups to collaborate with other developers in person. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t let anything get in the way of that initial motivation to learn programming and just build something. Sometimes you block yourself by having too much focus on reading books or resources first #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learning programming languages is NOT learning how to program. Focus on programming techniques problem solving and analytical skills #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learn the most important libraries for your chosen programming language. The more libraries you’re aware of the less likely you are to try reinventing the wheel. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Make common programs that have been made before as a learning project. If other developers can make a calculator, To-do list, text editor, Tetris or Pong then so can you. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Always write code as if the person who ends up maintaining it will be a violent psychopath who knows where you live. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Name variables so that other developers can understand your code better. This is a skill you need to nurture. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t use design patterns like a hammer looking for a nail. If you don’t have a clear reason you need it don’t use it. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Reusable code is helpful and important but trying to write overgeneralised super flexible code is often a waste of time. This kind of code is usually harder to maintain and causes bugs. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Master the art of debugging using print statements. There are many scenarios where a sophisticated debugger is not available to you  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Know when to take on technical debt and when to pay it off so it doesn’t compound. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Within the context of your projects learn what the right amount of testing is. Too little and your software becomes unreliable and everyone is afraid to deploy to production. Too much and you’ll end up wasting too much time. #100DaysOfCode #coding",
  },
  {
    tweet:
      " Estimating time is hard. This is why iterative development methods such as Scrum are so popular. Push yourself and your team to have increasingly shorter release cycles. #100DaysOfCode #coding",
  },
  {
    tweet:
      "It's not at all important to get it right the first time. It's vitally important to get it right the last time.” #100DaysOfCode #coding",
  },
  {
    tweet:
      "You won’t get anywhere if you just sit on your ass and lament that you suck at coding. Asides from following tutorials you should work on your own projects. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Becoming a good programmer takes a long long time and a lot of tedious evenings. Be patient and you shall bear the fruits of your labour #100DaysOfCode #coding",
  },
  {
    tweet:
      "Learn by doing. Always play with the code while learning - With every new subject the sooner you start playing with the code the faster you will learn the given concepts. #100DaysOfCode #coding",
  },
  {
    tweet:
      "As elementary as they may appear at first programming fundamentals always need to come first: the better you understand them the easier it is to learn more advanced concepts. #100DaysOfCode #coding",
  },
  {
    tweet:
      "As awesome as it would be to become the next Steve Jobs on your own the reality is that people learn faster with mentors and peer feedback.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "Consistency is very important when you are learning a new language. Make a commitment to coding everyday.  #100DaysOfCode #coding",
  },
  {
    tweet:
      "As you progress on your journey as a new programmer you may wonder if you should be taking notes. Yes you should! Taking notes by hand is best for long-term retention. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Be aware that the only constant in the tech (& programming) world is change: be open to it, accept it and dont look at it as some serious inconvenience to be fought! #100DaysOfCode #coding",
  },
  {
    tweet:
      "Take pride in what you build but be ready to have it replaced by someone or even yourself. Don't attach ego to your code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Programming can also one of the most frustrating things you will ever do. Feeling frustrated is completely normal and will probably never completely go away. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Jump into networking with other local people in the industry as soon as you can. Those connections will grow with you and be invaluable. #100DaysOfCode #coding",
  },
  {
    tweet:
      "One of the best programming skills you can have is knowing when to walk away for a while. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Comments are crucial. You won’t appreciate them until you leave your thousand-line script for a couple of days and return to and try and make sense of it. Useful comments make life easier for yourself and others who have to maintain your code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Global variables and loops are a mess and can prove problematic when your application grows to millions of lines of code (which most do!). They may influence code elsewhere that is difficult to discern. Think twice before using globals. !#100DaysOfCode #coding",
  },
  {
    tweet:
      "Learn how to learn - Everyone learns best in different ways. Some learn best from reading books and others like following video tutorials. If you figure out your learning style and use it, you'll have a much easier time learning new things. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Codes are a puzzle. A game just like any other game. - Alan Turing #100DaysOfCode #coding",
  },
  {
    tweet:
      "Make your code easy to read and understand. This makes it easier for other people (including, your future self after you’ve forgotten how your code works) to figure out what your code is doing, modify it as need be, and debug it. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Inevitably, code comments become lies over time. In practice, few people update comments when things change. Strive to make your code readable and self-documenting through good naming practices and known programming style. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Rushing any task usually ends up in disasters of the worst kind. Coding is a process that takes time. Software projects often involve the completion of a number of critical sub-tasks which cannot be messed up. Be patient. #100DaysOfCode #coding",
  },
  {
    tweet:
      "If software cannot be maintained then it will be rewritten – Dave Cheney #100DaysOfCode #coding",
  },
  {
    tweet:
      "The digital revolution is far more significant than the invention of writing or even of printing. – Douglas Engelbart #100DaysOfCode #coding",
  },
  {
    tweet:
      "Software being Done is like lawn being Mowed. - Jim Benson #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t be afraid to look at somebody else’s code and try to understand it.  If you're on a project with senior talent, this is a great opportunity to take advantage of!  Don’t be afraid to ask about things you don’t understand in their code. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t Sell Yourself Short - These days, if you work in tech you’re a scarce resource. Being aware of this & more importantly being able to use this will give you better career opportunities and will ultimately result in better self-confidence. #100DaysOfCode #coding",
  },
  {
    tweet:
      "in order to stay relevant, it’s mandatory for every developer to keep learning new technologies, programming languages, frameworks, techniques, best practices and skills #100DaysOfCode #coding",
  },
  {
    tweet:
      "I love doing side projects even if I’m in a permanent role. Side projects allow you to learn new things, they're great for your CV and most importantly keep your skills up-to-date. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Having a profile on LinkedIn will give you exposure to recruiters, potential employers, and like-minded people. It will help you present your skills, connect with other people and find new job opportunities. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Whether you’re just starting your career as a software developer or have 10+ years experience, if you don’t know something, ASK! Nobody knows everything. Nobody can know everything. The software industry constantly changes at a furious speed! #100DaysOfCode #coding",
  },

  {
    tweet:
      "The technology industry is one of the most intense industries and it can be overwhelming to jump into. Remember that everyone, at some point in their careers, started where you did. All of the industry leaders in tech were once beginners.  #100DaysOfCode #coding",
  },

  {
    tweet:
      "If you want to start programming, there has to be a reason for it. Whether you love writing code, you're seeking a more lucrative career, or you are doing some Excel work and you want to automate it. Keep track of that reason as coding is hard. #100DaysOfCode #coding",
  },

  {
    tweet:
      "Find a community to support you as you start writing code. This community will be valuable because other people will be in the same place as you, offering resources that helped them and encouragement. Network on Social Media or find a Meetup group. #100DaysOfCode #coding",
  },

  {
    tweet:
      "An important part of programming is taking a large problem and breaking it into smaller solvable pieces. If you are looking at a blank text editor not knowing where to start, it may be because you haven't broken down the problem enough! #100DaysOfCode #coding",
  },

  {
    tweet:
      "Related to the previous tip, a lot of times it is beneficial to write down in detail what you are trying to do in plain words before even trying to write code. This process is called pseudocoding, and it can take whatever form you want it to. #100DaysOfCode #coding",
  },

  {
    tweet:
      "If you've been away from the classroom for a while, learning how to learn is going to be a big part of your process. There are lots of ups and downs involved, which is natural! I would brace yourself for that rollercoaster before starting out. #100DaysOfCode #coding",
  },

  {
    tweet:
      "There are a million and one resources for learning how to code. Some are free, and some are paid. I would start with the free resources, make sure you like writing code, then, you could think about moving onto paid resources or even a bootcamp. #100DaysOfCode #coding",
  },

  {
    tweet:
      "There are a lot of worlds within programming, find one world that you love and focus on that. Instead of trying to learn 8 programming languages. #100DaysOfCode #coding",
  },

  {
    tweet:
      "It will be easier to write clean code in the future if you get into the habit early. Bad habits can be hard to break #100DaysOfCode #coding",
  },
  {
    tweet:
      "Error messages are super helpful, but when you are starting out that red error message can be terrifying! One huge step to take is to read through those messages, understand them, and then use them to solve the problem. #100DaysOfCode #coding",
  },
  {
    tweet:
      "There isn't a right answer for what programming language to learn first; however, some will be easier to pick up. My top two are Python and JavaScript because they have a large community behind them and the syntax is relative straight-forward. #100DaysOfCode #coding",
  },
  {
    tweet:
      "The fundamentals of programming are invaluable, and you will use them no matter what you end up doing. Focus on having a solid knowledge of loops, conditionals, functions, data types, and (in most languages) OOP. #100DaysOfCode #coding",
  },

  {
    tweet:
      "What one programmer can do in one month two programmers can do in two months. - Fred Brooks #100DaysOfCode #coding",
  },
  {
    tweet:
      "If it doesn’t work it doesn’t matter how fast it doesn’t work. - Mich Ravera #100DaysOfCode #coding",
  },
  {
    tweet:
      "The amount of sleep that you get has a larger impact on your effectiveness than the programming language you use. – Wesley Aptekar-Cassels #100DaysOfCode #coding",
  },
  {
    tweet:
      "People have an enormous tendency to resist change. They love to say We've always done it this way. I try to fight that.” - Grace Hopper #100DaysOfCode #coding",
  },
  {
    tweet:
      "An evolving system increases its complexity unless work is done to reduce it. - Meir Lehman #100DaysOfCode #coding",
  },
  {
    tweet:
      "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do. - Ted Nelson #100DaysOfCode #coding",
  },
  {
    tweet:
      "It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading. - Douglas Crockford #100DaysOfCode #coding",
  },
  {
    tweet:
      "There’s a big difference between making a simple product & making a product simple.” - Des Traynor #100DaysOfCode #coding",
  },
  {
    tweet:
      "A good programmer is someone who always looks both ways before crossing a one-way street. — Doug Linder #100DaysOfCode #coding",
  },
  {
    tweet:
      "You’re building your own maze in a way and you might just get lost in it.” - Marijn Haverbeke Eloquent JavaScript: A Modern Introduction to Programming #100DaysOfCode #coding",
  },
  {
    tweet:
      "Programming is like pinball. The reward for doing it is the opportunity of doing it again. - Unknown #100DaysOfCode #coding",
  },
  {
    tweet:
      "It's not a bug - it's an undocumented feature. #100DaysOfCode #coding",
  },
  {
    tweet: "Software is never finished only abandoned. #100DaysOfCode #coding",
  },
  {
    tweet:
      "The most valuable thing you can make is a mistake - you can't learn anything from being perfect. - Adam Osborne #100DaysOfCode #coding",
  },
  {
    tweet:
      "There’s a very strong element of excitement of being able to share what you’ve learned with the next generation.” - Larry Tesler #100DaysOfCode #coding",
  },
  {
    tweet:
      "The best programmers can take a complex problem break it down into smaller pieces, solve each of those pieces and then put everything back together to solve the initial problem. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t let one domain pigeonhole you into one way of coding. An example would be a mobile developer who is mainly good at hooking together existing APIs but can't come up with a sane data representation. Don’t be a one-trick pony. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Plan your code away from the computer. It will help you build a clear mental model before you start. You use the same strategy in writing because if you don’t have an outline your content becomes a messy stream of consciousness. #100DaysOfCode #coding",
  },
  {
    tweet:
      "When you're stuck write your program on paper. I'm serious. It's magic. (I think it works because when you don't have to think about syntax you have more excess brainpower to solve the actual problem.)” - Joseph Gentle #100DaysOfCode #coding",
  },
  {
    tweet:
      "Contribute to open-source projects as a bridge from beginner to intermediate. Collaborate with the developers of the project and attend meetups to collaborate with other developers in person. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Don’t let anything get in the way of that initial motivation to learn programming and just build something. Sometimes you block yourself by having too much focus on reading books or resources first. #100DaysOfCode #coding",
  },
  {
    tweet:
      "Being a programmer is all about learning how to search for the answers to your questions. By learning to Google things effectively, you'll save a lot of development time. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "It's better to let your team know a task will take three weeks and deliver in two than the other way around. By under promising and over delivering, you'll build trust. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Be nice to your designers; they're your friends - Designers provide solutions to user pain points. Learn from them and work cohesively to build effective products. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Find someone you can learn from and bounce ideas off of. Coding Coach is a great place to get started if you need a technical mentor! #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Write useful comments - Write comments which explain the 'why' and not the 'what'. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Name variables and functions appropriately - Functions and variables should accurately denote their purpose, so myCoolFunction won't fly. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Take vacations - We all need time to de-compress. Take that trip you've been wanting. Your brain and your co-workers will thank you. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Delete unused code - No reason to accrue more technical debt. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to read code - Reading code is an undervalued skill, but an invaluable one. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Establish a healthy work/life balance - You need time to de-compress after a long workday. Shut off work notifications, remove apps off your phone. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Pair program - Pair programming allows you to play the role of both teacher and student. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      " Write great emails - Learn to capture your audience in your emails by being succinct yet clear. Nobody wants to read your four-page email Jerry. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Get involved in the community - Surrounding yourself with like-minded people will motivate you to push through the lows. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Clean up your branches - Clean up your version control branches like you'd clean your house before your in-laws came for a visit. If you don't need it, discard it; don't just throw it in the closet. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "don't gate keep - Be inclusive. don't tell others they aren't good enough to be in the industry. Everyone has value. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Keep learning - you've chosen a profession that requires continuous learning. Learn to love it. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "don't give up - It won't always be easy. But we all started at the same place. You can do it. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Take tasks that scare you - If it doesn't scare you, it isn't going to help you grow. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Clarify requirements before starting - You should understand the acceptance criteria before delving into writing the code. It will save you time and pain later down the line. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Have a toolbox - Have a set of tools which you know inside-and-out. Know which tools serve which purpose and when a project can benefit from using one over another. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to love constructive criticism - Ask trusted colleagues and friends for constructive criticism. It will help you grow as a programmer and as a human. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Be open-minded - Technology changes, and it changes quickly. don't oppose new technology; learn it and then form an opinion. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Stay relevant - Stay up-to-date on the latest tech news by following publications, blogs, podcasts, and tech news. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Focus on problem solving - Strong problem-solving skills can conquer any problem. Hone in on what it takes to solve a problem. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Stay humble - No matter what title you hold or what company you work form, stay humble. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to give a great presentation - Learn how to captivate your audience and give effective presentations. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Examine all solutions before jumping in - don't jump straight into the first possible solution. Examine all paths before delving into the code. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Find your niche - There are many divisions within the tech industry. Find the area that interests you most and become an expert. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Develop good habits - Try to build consistent, and healthy, habits such as removing distractions, being present in meetings, and starting with the most important task first. It might take some getting used to, but it'll be worth it. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to debug - Explore the browser debugger tools. Learn the ins-and-outs of debugging with your IDE. By learning the most effective methods for debugging a problem and tracing errors, you'll be able to solve even the most difficult bugs. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Understand the why - There will be times when you have to voice your opinion, so it's important to understand the why behind it. Why is solution A better than solution B? Provide a valid argument and your opinions will be much more sound. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Know your worth - You are a commodity and should be paid appropriately. Be aware of the industry averages in your geographic location. If you're making less money, it’s time to have a chat with your manager. Go after what you deserve. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "don't be afraid to ask for help - If you're stuck on a problem and spending too much time searching for a solution, it's time to ask for help. We’re all human. We all need help. There is no shame in reaching out to a colleague for support. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to learn - People learn in different ways. Some learn best through video tutorials, others through reading a book. Figure out your learning style and practice it diligently. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Be kind - There will be times when you're asked to provide feedback on a colleague. Be kind. You can voice your opinions about Deborah’s lack of initiative without ripping her to shreds. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to love code reviews - Having someone read and analyse your code can be terrifying but can offer you invaluable feedback which will make you a better programmer. You should also work on your ability to conduct a good code review. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn about tangential spaces - Learn some basics about tangential spaces, such as design, marketing, frontend development or backend development. It will help you to become a more well-rounded programmer. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Review your own code - Before opening a pull request, review your own code. If this were the work of a colleague, what comments would you make? It's important to first try to diagnose problems or mistakes before requesting a code review. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Learn from your failures - Failure is simply not achieving the expected outcome and is not necessarily a bad thing. We all have many failures during our careers. Learn from your downfalls. What can you do differently next time? #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Recognize your weaknesses - Get to know yourself. What are your weaknesses ? Maybe you always forget to update the tests before pushing. Or maybe you are really bad at replying to emails. Learn your weaknesses so you can actively work to address them. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Stay curious - This industry is ever - evolving, so curiosity will be important. If you don 't understand something, be it a project requirement or a line of code, speak up. Nobody will criticize you for asking for clarification and you'll create better code as a result. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "don 't try to learn everything - There is an infinity pool of knowledge in the world and it is simply impossible to conquer it all. Pick several topics to master and leave the rest be. You can acquire working or tangential knowledge about other areas, but you cannot possibly master everything. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Kill your darlings - Just because you write some code doesn't mean you need to be emotionally attached to it. Nobody likes their work being thrown out, but code has a life cycle, so there's no need to be territorial about it. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Have your team's back - Good teams have each other’s backs. This creates a safe space to try new things without fear of retribution. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Find inspiration in the community - Find a few people in the industry you admire. It will inspire you to keep working on your projects or try new things. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Value your work - Regardless of how much experience you have or what your job title is, your work has value. Give it the value it deserves. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Disable distractions - Turning off Slack notifications, text messages, emails, and social media will help you focus and maximize your workday. Jerry won't fall apart if it takes you 30 minutes to respond to his message. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Be supportive - Try and support your team members whether that's by attending an important presentation or helping them if they get stuck. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Give credit where credit is due - If someone does great work, tell them. Positive re - enforcement is a great way to build trust with your team members and help their careers. They'll be more likely to help you along as well. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Test your code - Tests are important. Unit tests, regression tests, integration tests, end-to-end tests. Test your code and your product will be much more stable. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Plan out your approach - When you receive a new feature request or get a new bug ticket, first plan your attack. What do you need to solve this problem or develop this feature? Taking even just a few minutes to plan your attack can save you hours of frustration. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to pseudocode - Pseudocoding is a great skill to have because it allows you to think through complex problems without wasting time writing lines of code. Write an approach down on paper, run through different test cases and see where the pitfalls are. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Keep track of your achievements - If you win an award at work, write it down. If you develop a crucial feature, write it down. you'll create a backlog of things which can aid with a promotion or boost your morale on a tough day. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn programming foundations - Learn some basic sorting and searching algorithms and data structures. These are language-agnostic and can help you solve problems across languages. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Choose technology for longevity & maintainability - Although it's fun to test out the newest technologies, pick those which will be easy to maintain within an enterprise application. Your team will thank you for years to come. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Learn design patterns - Design patterns are useful tools for architecting code. You may not need them for every project but having a basic understanding of them will help scaffold out larger applications. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Reduce ambiguity - Instead of writing convoluted code which shows off your snazzy programming skills, aim for readability and simplicity. This will make it easier for your team members to contribute. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Pay off technical debt - Technical debt can have massive performance implications, so if you 're able to refactor, you should. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Ship often - Instead of shipping a massive upgrade once every month, ship more frequently with smaller changelogs. you're less likely to introduce bugs and breaking changes. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Commit early and often - Committing early and committing often is the best way to ensure that your work remains clean and also reduces the stress of accidentally reverting important changes. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Learn when to ask for help - Not only should you not be afraid to ask for help, but you should learn when to ask for help. You should always try to solve a problem before asking for help and keep track of the things you try. But when you 've been stumped by a simple problem for over an hour, the cost outweighs the benefit, and you should reach out to a colleague. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Ask effective questions - When asking a question, try to be as specific as possible. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Get feedback on unfinished work - Your work doesn't need to be finished for you to get feedback. If you 're uncertain of the direction, ask a trusted colleague to review the validity of your solution. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Read documentation - Documentation is the purest source of truth about a technology, so learning to read it can quickly help you to become an expert. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Try all the things - Nothing is stopping you from trying a solution to a problem. What do you have to lose? #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Speak up in meetings - Your ideas and opinions are valuable so participating in meetings will help you develop a rapport with your team as well as management. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Collaborate cross-team - If you get an opportunity to with another team in your company, go for it. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Have passion projects - When you work 40 hours a week, it's important to take time for passion projects. They help you reinvigorate your love of programming and try new technologies you might not have access to at work. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Define your career goals - It's important to have an idea of your ideal trajectory for your career. If you don't, you're trying to shoot an arrow without having a target. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Get involved in the conversation - Comment on blogs, participate in Twitter threads. Engage with the community. you'll learn a lot more from being an active bystander than a wallflower. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Prioritize tasks - Learning to prioritize your tasks will help you enhance your productivity. Keep an active to - do list of immediate daily tasks as well as longer - term tasks and order them by most important. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "don 't overlook the details - Details can make a big difference in a project. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Trust your teammates -Your teammates were hired for their skills. Use them and trust them to get the job done. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Learn to delegate - If you're in a leadership position, learn how to delegate effectively. It will save you time and frustration. You cannot do it all. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "don 't compare yourself to others - The only thing you should compare yourself to is who you were yesterday. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Surround yourself with allies - Learning to program will be a long, and not always easy, journey. Surround yourself with the people who build you up and encourage you to keep going. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "don't start for scale - Starting for scale is a sure-fire way to become overwhelmed. Build with scalability in mind, but don 't start scaling until you need it. This way you don't overwhelm your team with unnecessary bloat, but you maintain the ability to grow. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Weigh performance implications - If you want to use a cool, new technology you should weigh the performance implications of doing so. Could you implement something similar without taking a performance hit ? If so, you may want to re - think your approach. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "don 't discriminate - don't discriminate against new technologies or ideas. Be open - minded about the possibility of learning new skills. Also don 't discriminate against people. We all deserve respect. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Apply for jobs you aren't qualified for -You will never meet every requirement for a job. So, take a chance and apply! What do you have to lose ? #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Modularize your code - You could write all of your code in one long file, but this isn't maintainable. By modularizing, we ensure that our code is easily digestible and testable. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "don't JUST copy and paste - If you 're going to copy and paste a solution from Stack Overflow, you should understand exactly what it does. Be intentional about the code you choose to introduce. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Create an inspiring environment/setup - you'll be much more motivated to work if you enjoy your workspace and technical setup. Make it you. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Remember where you came from - We all started from the same place. As your skills and your job titles evolve, don’t forget where you came from. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Try to remain optimistic - If something goes wrong, try and be optimistic. Tomorrow is a new day. Optimism will help your team dynamic and your mental health. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Continually re-assess your workflow - Just because something works now doesn't mean it always will. Re - evaluate your workflow and make adjustments where necessary. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Learn how to work from home - If you have the ability to work from home, learn to do so effectively. Find a separate office space, devoid of distractions. Boneskull wrote a great article on working from home you should check out. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Code for accessibility - Accessibility isn't an afterthought, and it doesn't have to be difficult. Everyone should be able to use your products. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Honour your commitments - If you tell someone you'll deliver something by a certain date, honour that commitment. And if you can no longer make the deadline, speak up early. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Be proactive - If you have some extra bandwidth, find a task to help your team! They'll be thankful you were proactive. #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Build an amazing portfolio - A great portfolio sets you apart from the crowd. Use this as a chance to show off your programming and design skills! #100DaysOfCode #CodeNewbie",
  },
  {
    tweet:
      "Remember why you love programming - You got into this profession because it sparked an interest. If you're getting frustrated and resentful, take a break. Give yourself space to reignite your passion for programming. #100DaysOfCode #CodeNewbie ",
  },
  {
    tweet:
      "Share your knowledge - If you learn something cool, share it! Present at a local meetup or conference. Teach your co-worker or mentee during lunch. Sharing your knowledge reinforces your knowledge while spreading the wealth. #100DaysOfCode #CodeNewbie ",
  },
];

let b = [
  "Treat global variables like someone has a knife to your throat.",
  "Hate working with undocumented code? Get into the habit of writing comments to enforce better habits for others to adopt.",
  "Learn to start one programming language and stick with that. Build a solid foundation first.",
  "Don't choke up on syntax. It hardly matters. Try to work on your logics and patterns.",
  "Use a Coding Standard to increase readability of code.",
  "Write Useful Comments to open doors for collaboration.",
  "Stuck on a problem? Write it out. It'll open up different angles that you couldn't see before.",
  "The most disastrous thing that you can ever learn is your first programming language. Oh, and then comes exiting vim/nano.",
  "Learning to code is learning to create and innovate.",
  "When naming variables, use meaningful names.",
  "Don’t rely on coffee or energy drinks to keep you ‘buzzing’. This is a clear indication that you’re too tired to do good work.",
  "Use version control software to help manage your source code better.",
  "In your own time, work on your own code. Do something fun. Do something pointless. Abandon with abandon. There is no pressure to finish anything other than the pressure you put on yourself",
  "Do not repeat code: use loops or functions instead",
  "Group global variables into records, objects or structures",
  "Set some time aside to work on technical debt.",
  "Throw yourself in the deep end once in a while. You'll come out stronger and more confident.",
  "Never copy-paste the code, Understand the logic behind the program.",
  "To improve your skills write the same code until you fully satisfied that you will never forget the code.",
  "Clean code is the best form of documentation",
  "An UI is like a joke. If you have to explain it, it’s not that good.",
  "Backward compatability: keeping our old mistakes",
  "Profanity is the one language all programmers know best.",
  "Developer: an organism that turns coffee into code.",
  "The best error message is the one that never shows up - Thomas Fuchs",
  "The most damaging phrase in the language is...it has always been done this way - Grace Hopper",
  "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job",
  "Did you know? The collective noun for a group of programmers is a merge-conflict.",
  "Simplcitity > Complexity",
  "Do not complicate a problem by overengineering.",
  "You don't need to know everything at the beginning. Focus on the fundamentals first.",
  "Set goals to complete the game. Set systems to continue playing the game.",
  "Try coding by hand. Your career might depend on it",
  "Get the basics nailed. You’ll reap the rewards long term.",
  "Learn to fail fast",
  "When developing web apps, ensure that you test on different browsers.",
  "Finding it difficult to remember concepts? Try explaining it to someone.",
  "Make mistakes, ask questions, get rapid feedback, get uncomfortable, compare it to what you know, keep going.",
  "Good programmers know what to write, but great ones know what to rewrite (and reuse).",
  "Googling is a crucial developer skill.",
  "Don’t be afraid to share your unfinished work with others frequently.",
  "It's always best to get another pair of eyes so code reviews are important.",
  "There's never enough. Always keep learning.",
  "Do not be afraid to reuse your code from existing projects",
  "git log --graph --decorate --oneline --all\nShows all your branches/commits in a pretty graph.",
  "Focus on learning a language, not a framework. By this I mean JavaScript > (React || Angular || Vue.js).",
  "Writing tests saves time. Really. Though it takes a lot of discipline to actually write them.",
  "Try to make your code as general as possible. This allows for extensions later on",
  "Try to automate repetitive time consuming tasks.",
  "Logging is crucial to software development. It gives you an audit trail of where things went wrong.",
  "Break tasks down into the smallest pieces possible.",
  "Stuck on a problem for hours? TAKE A BREAK.\nYour brain is exhausted and needs time to recharge.",
  "Code formatters can save you a lot of time trying to tidy up your code.",
  "Coding is thinking, not writing. That’s why people say think 10 times, then write code.",
  "Want to run your scripts daily/weekly/monthly but don't know how? Look into cronjobs",
  "To improve your skills write the same code until you fully satisfied that you will never forget the code.",
  "Focus on fixing your own problems. Linus Torvalds only wrote Linux and Git because he wanted to fix problems he had himself.",
  "Use the internet. Every problem you have in the first year you learn to program is a problem 100 other people have had before you.",
  "Be obsessively consistent in everything. Names, syntax, patterns etc.",
  "Refactoring your code frequently will reduce technical debt in the long run.",
  "Learn Object Oriented Programming to build reusable components.",
  "Don't be afraid to fail. We learn from experience. It consolidates our existing knowledge.",
  "Dependencies are a nightmare to maintain. Only use them when you really have to.",
  "When using libraries/tools it's best to start with the official documentation.",
  "Keep working on pet projects to build up your portfolio.",
  "There will be a time where you will have to touch frontend and backend. Diversification is important!",
  "Think twice code once.",
  "Don't be afraid to ask for help. People learn by teaching.",
  "Think out loud during a coding interview. This shows interviewers you can problem solve.",
  "Best way to get better at programming is to program. Consistency is key.",
  "You'll break things; everyone does at some point. Learn from it.",
  "Do not learn a language to follow the crowd. Learn it to build what you envision",
  "Learn by hands on coding, not just reading.",
  "Start looking at other peoples code. There'll come a time where you have to work on existing codebases.",
  "Have an idea for a product? Try coding the minimal requirements first.",
  "Build things you enjoy. You'll learn more that way.",
  "The code you write today can empower someone tomorrow.",
  "git commit -m 'fix x'\ngit commit -m 'another fix for x'\ngit commit -m 'final fix for x'\n\nHave to thank git for squash and rebase.",
  "Platforms developers should sign up on to enhance their portfolio:\n- GitHub - Storing source code\n- LinkedIn - Networking with recruiters\n- StackOverflow - Network with developers",
  "JS Question: What is Hoisting and why is it used?",
  "Python Question: What immutable types does Python support?",
  "JS Question: Do you know what ASI is?",
  "JS Question: Explain the differences between var, let, const.",
  "Remember to delete obsolete code",
  "Get into the habit of pushing to seperate branches other than master. Open a PR to merge.",
  "Learn to debug. You can print out variables with console.log() in JS and print() in python.",
  "Modularize your code; ensure that you do not stuff everything into one file",
  "Remember to commit frequently. This makes it 10x easier to find and fix bugs.",
  "Do not rely on a framework or library. That library may discontinue support in the future.",
  "By sharing your knowledge, it'll not only help others but also strengthen your memory.",
  "Do 'man <insert cmd here>' on linux to get more information on a command",
  "Split up a function or method if it has too many arguments.",
  "Many companies use Docker for software deployment so it's important to know how containers work.",
  "Perfect UI: Does not redirect users.",
  "Learning to code but too busy? Try doing 5 minutes everyday until those 5 minutes turn into 5 hours without you noticing.",
  "Interview tip: When solving a problem, write down your thoughts. This shows interviewers you can problem solve.",
  "I wonder if coding courses teach the basics of googling coding problems.",
  "Purpose of software engineering is to reduce complexity not create it.",
  "If debugging is the process of removing bugs then programming must be the process of putting them in - Dijkstra",
  "You want less code to do more things, not more code to do less things.",
  "Engineers: If it aint broke it hasn't got enough features.",
  "Imagine life without version control systems like Git. We'd be sending source code files via email.",
  "To think my first programming language was Java and now I barely use it.",
  "Before picking up a framework, ensure you get comfortable with the underlying programming language.",
  'What would you have replaced "Hello World" with?',
  "Do you code better in the morning or evening?",
  "Person: On my mark...3..2..1...GO!'\nDeveloper: What are you waiting for? Say 0 already",
  "rm -rf 2020\n\ngit delete 2020\n\ndel 2020\n\nIf only it was that easy.",
  "What aided you the most when coding? Books, videos or online tutorials?",
  "Try think of everyday problems you have. Use a programming language to solve it.",
  "Am I the only one that is really picky when it comes to typos in documentation/comments?",
  "What is the one thing a developer cannot live without?",
  "As a developer, how many hours of sleep are you averaging?",
  "Do you use git on the command line or as a plugin in your IDE?\n\nI prefer using the CLI",
  "Today's plan: undefined",
  "The greatest threat to success is boredom.\n\nOnce you develop a desire to code, success is imminent.",
  "Being a jack of all trades is often frown upon. In the tech industry, it's one of the greatest skills to have.",
  "You should always add comments to your code. In 6 months another person may pick it up.",
  "Remember to keep asking questions. Even senior developers do it.",
  "I cannot stress enough how important it is for a developer to push their projects on GitHub. This allows you to showcase some of your best work.",
  "Linux or windows for coding?",
  "Always assume your code has bugs in it.",
  "If coffee didn't exist, what would developers drink for fuel instead?",
  "Anyone can write a program that a computer understands. Good programmers write programs that others can understand.",
  'When someone finds out you code:\n"Can you hack"?',
  "I make notes on everything. It helps me retain the majority of my knowledge.",
  "If you were to interview a developer, what would you ask them?\nWrong questions only.\n\nMe: Print out the alphabet using integers only.",
  "It's harder to read code than to write it - Joel spolsky",
  "One thing developers cannot master: naming things",
  "Simplicity is a prequisite for reliability - Edsger Dijkstra",
  "Make sure to add logs to your code. It provides you with an audit trail.",
  "Coding is similar to riding a bicycle or driving a car. If you don't do it for ages, you'll get rusty.",
  "Automate tedious repetitive tasks.",
  "Tech job adverts are full of many buzzwords. Instead of trying to learn all those technologies at once, try and prioritise what you think will benefit you in the long run.",
  "If you could go back in time, what would you tell your younger self before you started coding?",
  "Try out pair programming with someone. Not only will it prepare you for interviews, but it'll give you the opportunity to work with other developers.",
  "When you're not coding what do you do?",
  "Short code is better than longer if you achieve the same result.",
  "Do not hide bugs. Solve them.",
  "Do you have a home office?",
  "If you could rename Github, what would you call it?",
  "It's important to learn different types of data structures to appropiately store certain data.",
  "Algorithms can help you efficiently process information. See if they can help you!",
];

const newTweets = a.map((i) => {
  return i.tweet;
});

newTweets.push(...b);

let clean = new Set(newTweets);

let cleanArray = Array.from(clean);

fs.writeFile("newQuotes.js", JSON.stringify(cleanArray), function (err) {
  if (err) return console.log(err);
  console.log("wrote file");
});