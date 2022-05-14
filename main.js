var studentsArray=[];
function submit() {
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    studentsArray.push(name1);
    studentsArray.push(name2);
    studentsArray.push(name3);
    studentsArray.push(name4);
    document.getElementById("display_names").innerHTML=studentsArray;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}
function sorting() {
    studentsArray.sort();
    document.getElementById("display_names").innerHTML=studentsArray;
}