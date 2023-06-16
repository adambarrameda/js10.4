// SkillCrush Javascript 10.4
// Properties & Dot Notation

// Starter Code
const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

// Create an Object & Properties with Dot Notation
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
    "Build JS programs",
    "Create dynamic and interesting webpages for my friends' businesses",
    "Get a job",
    "Enjoy it!"
];
learning.category = "Front End Development";
learning.topicImportance = "High";

console.log(learning);

// Change & Remove Values
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

console.log(learning);

// Display Text & Remove a Class
topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
