//challenge 2
function findStudentName(studentList, sn) {
    studentList = studentList.sort(function (a, b) {
        return a.sn - b.sn
    });
    return studentList[sn - 1].name;
}

function findStudent(studentList, sn) {
    studentList = studentList.sort(function (a, b) {
        return a.sn - b.sn
    });
    return studentList[sn - 1];
}

//challenge 3
function filterName(studentList, s) {
    return studentList.filter((student) => {
        return student.name.includes(s);
    })
}

//challenge 4
function sortStudents(studentList) {
    studentList = studentList.sort(function (a, b) {
        return a.sn - b.sn
    });
    return studentList.sort(function (a, b) {
        return a.grade - b.grade
    });
}

//challenge 5
function createStudent(studentList, name, grade){
    studentList.push({name, grade, sn : studentList.length + 1});
    return studentList;
}

function main() {
    //challenge1
    let studentList = [
        {
            name: "Alice",
            grade: 11,
            sn: 1
        }, {
            name: "Bob",
            grade: 12,
            sn: 2
        }, {
            name: "Charlie",
            grade: 9,
            sn: 3
        }, {
            name: "David",
            grade: 9,
            sn: 4
        }, {
            name: "Elvis",
            grade: 10,
            sn: 5
        }, {
            name: "George",
            grade: 11,
            sn: 7
        }, {
            name: "Anna",
            grade: 10,
            sn: 6
        }
    ]

    //challenge 2
    console.log("findStudentName: ", findStudentName(studentList, 2)); //test challenge 2.0
    console.log("findStudent: ", findStudent(studentList, 4)); //test challenge 2.1
    //challenge 3
    console.log("\nChallenge 3:")
    console.table(filterName(studentList, "a"));
    console.table(filterName(studentList, "vi"));
    console.table(filterName(studentList, "x"));
    //challenge 4
    console.log("\nChallenge 4:")
    console.table(sortStudents(studentList));
    //challenge 5
    console.log("\nChallenge 5:");
    studentList = createStudent("Alina", 12);
    console.table(studentList);
}

main();