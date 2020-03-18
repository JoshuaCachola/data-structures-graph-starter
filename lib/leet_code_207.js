// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  // loop through prerequisites
  // create an adjacency list
  // 1: [0] length 1 < num of courses

  // helper function that builds graph

  let graph = buildGraph(prerequisites);
}

function buildGraph(prerequisites) {
  let graph = {};
  prerequisites.forEach(prerequisite => {
    // let [courseToTake, courseNeeded] = prerequisite;
    let courseToTake = prerequisite[0];
    let courseNeeded = prerequisite[1];

    if (courseToTake in graph) {
      graph[courseToTake].push(courseNeeded);
    } else {
      graph[courseToTake] = [courseNeeded];
    }

  });

  return graph;
}