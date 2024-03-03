/* Questions Storage File */

/*
    - Guidance to questions management 
    - In case you where tasked to insert or modify the questions list, use the following rules 
    to insure no errors after the changes: {
        - There are 4 constant variables containing questions for the 4 test modes in the game
        - Each question object inside the constant contains 4 different information
        - 1- The "question" property is used to contain the content of the question that will be displayed
        - 2- The "type" property is used to define the type of question used, MCQ or FRQ
        - 3- The "choices" property is used in the MCQ question type to define the options given (must be 4 options)
        - 4- The "correct" property is used to define the correct expected answer
        - The "questions" property is expecing a string
        - The "type" property is expecting a string containing either "MCQ" or "FRQ"
        - The "choices" property is expecting an array containing 4 element (numbers)
        - The "correct" property is expecting a number
    }
*/

const addition_questions = [
    {
        question:
            "Addy has 3 bananas, she buys 6 more. How much does she have in total?",
        type: "MCQ",
        choices: [6, 7, 8, 9],
        correct: 9,
    },
    {
        question:
            "Addy has 15 dolls, her mother buys her 30 more. How much does she have in total?",
        type: "MCQ",
        choices: [25, 35, 45, 55],
        correct: 45,
    },
    {
        question:
            "Addy has 215 Lego pieces, her brother gives her 125 more. How much does she have now?",
        type: "MCQ",
        choices: [340, 330, 240, 345],
        correct: 340,
    },
    {
        question:
            "Addy climbed 1200 stairs on a mountain side of Himalaya, on another mountain she climbs a flight of 345. How many stairs did she climb in total?",
        type: "MCQ",
        choices: [1550, 1645, 1540, 1545],
        correct: 1545,
    },
    {
        question:
            "Addy's mother, Ruby, owns a 30 floors building, she adds 15, and her co-worker Mike adds 5. How many floors do they have now?",
        type: "MCQ",
        choices: [55, 50, 60, 45],
        correct: 50,
    },
    {
        question:
            "Ruby needs $2,500, she currently has $1,500, Mike lends her $500. How much in total does she have now?",
        type: "FRQ",
        correct: 2000,
    },
    {
        question:
            "Ruby and Mark want to add 2 workers to their 12 workers team, and after 3 months they will add one more, how many workers will there be after 3 months?",
        type: "FRQ",
        correct: 15,
    },
    {
        question:
            "Mark owns 8 printers in his office, Ruby and Addy decided to gift him some more printers, each of them will buy 2, how many printers will Mark have?",
        type: "FRQ",
        correct: 12,
    },
    {
        question:
            "Ruby and Mike want to add tables, they currently have 250 tables in total. How many tables would there be if they added 100 more?",
        type: "FRQ",
        correct: 350,
    },
    {
        question:
            "Mike, Ruby, and Addy decided to collect money for charity, Mike gave 3383$, Ruby gave 4757$, and Addy gave 1292$. What is the total amount of money?",
        type: "FRQ",
        correct: 9432,
    },
];

const subtraction_questions = [
    {
        question:
            "Ann had 3 apples , she gave two to her sister. How many apples does she have left?",
        type: "MCQ",
        choices: [1, 2, 3, 4],
        correct: 1,
    },
    {
        question:
            "Ahmed has 12 drinks and he has 2 friends, he gave each friend 3 drinks .how many drinks does Ahmed have left?",
        type: "MCQ",
        choices: [14, 15, 6, 7],
        correct: 6,
    },
    {
        question:
            "Abdullah’s class consists of 32 students, Abdullah had 40 pies and he gave each student a pie. How many pies does he have left?",
        type: "MCQ",
        choices: [10, 8, 6, 72],
        correct: 8,
    },
    {
        question:
            "Steven had 5 siblings and he won 15$ and gave each kid 2 .how many $ would he have left?",
        type: "MCQ",
        choices: [17, 13, 10, 5],
        correct: 5,
    },
    {
        question:
            "Sam has 150 chairs in her theater 167 people came to the theater. How many people would not have chairs to sit on?",
        type: "MCQ",
        choices: [27, 7, 17, 57],
        correct: 17,
    },
    {
        question:
            "Kate had 300$ and gave 10$ to her brother and brought a 235$ ring. How much money does she have left?",
        type: "FRQ",
        correct: 55,
    },
    {
        question:
            "Jimmy has 28 assignments, he finished 15 of them, how many assignments are left for Jimmy to do?",
        type: "FRQ",
        correct: 13,
    },
    {
        question:
            "Allen has 627 cakes and gave 368 to his friend James. How much would he have left?",
        type: "FRQ",
        correct: 259,
    },
    {
        question:
            "Ryan won 1,000,000$, he gave his father 250,500$, how much if left with Ryan?",
        type: "FRQ",
        correct: 750000,
    },
    {
        question:
            "Eric has 37 marbles and he played two games. In the first game he won 24 and in the second game he lost 18. How many marbles does Eric have left?",
        type: "FRQ",
        correct: 43,
    },
];

const multiplication_question = [
    {
        question:
            "A fashlight requires 2 batteries to function. How many batteries in all would 7 such fashlights require?",
        type: "MCQ",
        choices: [5, 9, 12, 14],
        correct: 14,
    },
    {
        question:
            "Norah uses an ounce of butter to bake 5 cookies. How many cookies can she bake with 4 ounces of butter?",
        type: "MCQ",
        choices: [24, 20, 15, 9],
        correct: 20,
    },
    {
        question:
            "Norah cooks 3 eggs for each visitor. How many eggs will she have to cook if 9 visitors came?",
        type: "MCQ",
        choices: [20, 25, 27, 30],
        correct: 27,
    },
    {
        question:
            "George visits a store to buy 2 fash drives. They are priced at $12 each. How much does he need to spend on his purchase?",
        type: "MCQ",
        choices: [14, 18, 24, 28],
        correct: 24,
    },
    {
        question:
            "Jim goes to a movie with his parents and brother. Each movie ticket costs $20. How much in all does Jim pay for the tickets?",
        type: "MCQ",
        choices: [90, 120, 60, 80],
        correct: 80,
    },
    {
        question:
            "During a practice session, Frank swims an average of 19 laps in an hour. If he were to atttend 5 practice sessions, how many laps will he be able to cover on an average?",
        type: "FRQ",
        correct: 95,
    },
    {
        question:
            "It takes an hour for a car manufacturing company to assemble 12 cars. How many cars can the company assemble in 11 hours?",
        type: "FRQ",
        correct: 132,
    },
    {
        question:
            "The auditorium at Lion’s school has 28 rows in all. If each row consists of 30 seats, calculate the total capacity of the auditorium?",
        type: "FRQ",
        correct: 840,
    },
    {
        question:
            "Rachel sells oval pot planters. A particular variety was priced at $109. She sold 110 such pot planters. What was the revenue generated from the sales she made?",
        type: "FRQ",
        correct: 11990,
    },
    {
        question:
            "A group of 11 students can write 5 complete books in 12 days. How many books can 22 students write in 24 days?",
        type: "FRQ",
        correct: 20,
    },
];

const division_questions = [
    {
        question:
            "Saif had 4 carrots, he wants to split them with his little brother in half. How many carrots are left with Saif?",
        type: "MCQ",
        choices: [2, 4, 8, 10],
        correct: 2,
    },
    {
        question:
            "Khalil bought 8 playstations and he has 3 friends, he wants to split the playstations between him and his friends evenly, How many playstations will each of the 4 friends have?",
        type: "MCQ",
        choices: [24, 4, 2.6, 2],
        correct: 2,
    },
    {
        question:
            "Samantha baked 16 chocolate cupcakes for her children. If the cupcakes are shared equally among four of her children, how many cupcakes will each child get?",
        type: "MCQ",
        choices: [2, 4, 6, 8],
        correct: 4,
    },
    {
        question:
            "Olivia took along four friends to a local farm to pick apples. They picked 40 apples in all. How many apples will each one get, if they decided to share them equally?",
        type: "MCQ",
        choices: [8, 10, 12, 20],
        correct: 8,
    },
    {
        question:
            "Cheryl, a grade 1 teacher, distributes 36 pencils equally among nine children in her class. How many pencils will each child receive?",
        type: "MCQ",
        choices: [3, 12, 4, 8],
        correct: 4,
    },
    {
        question:
            "Students of grade 4 were divided into seven teams for a game of dumb charades. If the class comprises 49 students, how many students can be found on each team?",
        type: "FRQ",
        correct: 7,
    },
    {
        question:
            "Kris bought a pack of 150 glossy photo papers. If the pack costs $30, how much does each photo paper cost?",
        type: "FRQ",
        correct: 5,
    },
    {
        question:
            "Michelle baked 264 swiss rolls which were to be delivered for a party. If she plans to pack 24 in a box, how many boxes in all will she require to pack all the swiss rolls?",
        type: "FRQ",
        correct: 11,
    },
    {
        question:
            "A school distributed masks among 170 students in a school trip, there were 680 masks. How many masks will each student get?",
        type: "FRQ",
        correct: 4,
    },
    {
        question:
            "A cars factory made 6500 cars and decided to distribute them evenly over 130 dealerships. How many cars will each dealership get?",
        type: "FRQ",
        correct: 50,
    },
];
