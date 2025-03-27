/*****(************************/
/******* Rainikka Corprew *****/
/********* JAVASCRIPT *********/
/********** SBA 308  **********/
/******************************/

/******************************/
/********* JavaScript *********/
/******* Fundamentals *********/
/******** 26-MAR-2025 *********/

/******* CodeSandbox Information *********/

// Provided Course Information
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// Provided Assignment Group
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// Provided Learner Submission
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

/*** Your goal is to analyze and transform this data such that the output of your program
 *** is an array of objects, each containing the following information in the following format:
 *
 * 1. the ID of the learner for which this data has been collected "id": number,
 * 2. the learner’s total, weighted average, in which assignments with more points_possible should be counted for more
 * e.g. a learner with 50/100 on one assignment and 190/200 on another would have a weighted average score of 240/300 = 80%."avg":
 * each assignment should have a key with its ID, and the value associated with it should be the percentage that
 * the learner scored on the assignment (submission.score / points_possible) <assignment_id>: number,
 * if an assignment is not yet due, it should not be included in either the average or the keyed dictionary of scores
 *
 * 3. Create a function named getLearnerData() that accepts these values as parameters, in the order listed:
 * (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns formatted result, which should be an array of objects.
****/

/** Learner Id
 * Total Weighted Average
 * Number of Assignments
 * Total Possible Points of All Assignments
 * 
 * Each Assignment: Key: Assignment Id, Value: Learner Score
 * Total Possible Points for Each Assignment
 * Assignment Due Date
 * 

/***
 * Course Information
 * Number of Assignments
 * List of All Assignments
 * Total Possible Points
 * Total Possible Points to Date
 * 
 * ***/
/*** 
  * 3. Create a function named getLearnerData() that accepts these values as parameters, in the order listed:
 * (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns formatted result, which should be an array of objects.
****/

console.log(`\n/*** Course Id & Name ***/`)
/*** Course Id & Name ***/
let courseIdentity = {};
courseIdentity["id"] = CourseInfo.id;
courseIdentity["name"] = CourseInfo.name;
console.log(courseIdentity);

console.log(`\n/*** Assignment Group Id & Name ***/`)
/*** Assignment Group Id & Name ***/
let groupIdentity = {};
groupIdentity["id"] = AssignmentGroup.id;
groupIdentity["name"] = AssignmentGroup.name;
console.log(groupIdentity);

console.log(`\n/*** Student Assignment Scores ***/`)
/******* Student Scores *********/
let studentScores = {);
studentScores["studentId"] = submission.learner_id;
studentScores["assignId"] = submission.assignment_id;
studentScores["assignmentScore"] = submission.submission.score;
console.log(studentScores);

// console.log(`\n/*** All Group Assignment Info ***/`)
// /*** All Group Assignment Info ***/
// let assignGroup = (AssignmentGroup.assignments)
// console.log(assignGroup);

function assignByDueDate(assignGroup) {
  return AssignmentGroup.assignments.filter(assignment => {
    /*** Knowledge Inspiration: MDN: Date Constructors ***/
    let dateDue = Date.parse(assignment.due_at);
    return dateDue < Date.now();
  });
}
console.log(assignByDueDate(AssignmentGroup));



// Name & Id of each Assignment
function assignId(group) {
  return group.assignments.map(({ id, name }) => ({ id, name }));
}

// Assign  Total Points

// Sort Group Assignment By Due Date


/** Filter Course */



/***
 * Assignment Information
   * Name an Id of Each Assignment
     * Assignment Possible Points
       * Weight of Each Assignment
         * Due Date of Assignment
           *
* Learner Information
 * Learner Id
   * Each Assignment earned Points
     *
***/

/**Create a function named getLearnerData() that accepts these values as parameters, in the order listed:
 * (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns formatted result, which should be an array of objects. **/





