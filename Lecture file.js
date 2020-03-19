<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<script type="text/javascript" src="js_lec_5_dom.js">

	</script>

	</head>
	<body>

		<p>This is Paragrah!</p>

		<form>
			Number 1: <input type="number" name="num1" id="num1">

			Number 2: <input type="number" name="num2" id="num2">

			<input type="button" name="" value="Submit" onclick="return validate()">

			<input type="button" name="" value="-" onclick="return calculateDifference()">
		</form>

	</body>
</html>











 41  index.html 
@@ -0,0 +1,41 @@
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- <script type="text/javascript" src="script.js"></script> -->
	<!-- <script type="text/javascript" src="js_lec_2.js"> -->
	<!-- <script type="text/javascript" src="js_lec_3.js"> -->

	<!-- <script type="text/javascript" src="js_lec_4.js"> -->

	<script type="text/javascript" src="js_lec_6.js">

	</script>
</head>
<body>

	<!-- <table style="width:100%">
	  <tr>
	    <th>ID</th>
	    <th>Name</th> 
	    <th>CNIC</th>
	    <th>Domain</th>
	  </tr>
	  <tr>
	    <td>1</td>
	    <td>Shajeel</td> 
	    <td>35302</td>
	    <td>Domain</td>
	  </tr>
	</table> -->

	<!-- <script type="text/javascript">
		
		document.write("<h1>Hello World!</h1>");
		alert("This is the dialog box!");
	</script> -->

</body>
</html> 
 108  js_lec_2.js 
@@ -0,0 +1,108 @@
//comparision operators

// == used to compare equal values

var a = 20;
var b = 20;

document.write(a == b);

// === used for comparison but 
// data type is also checked

var x = 100;
var y = "100";

document.write("<br><br>");

// if/else statement 
if(a > b){
	document.write("Han a bara he b se");
} else {
	document.write("Nahi, a chota he.");
}

// if/else-if statement 
if(a > b){
	document.write("a is greater than b");
} else if(b > a) {
	document.write("b is greater than a");
} else {
	document.write("koi condition true nahi he");
}

document.write("<br><br>");
document.write(x == y);

document.write("<br><br>");
document.write(x === y);

// != (not equal to)

document.write("<br><br>");
document.write(a != b);

// !== (not equal to, the data type is also checked)

document.write("<br><br>");
document.write(x !== y);


// > (greater than)

document.write("<br><br>");
document.write(a > b);

// > (less than)

document.write("<br><br>");
document.write(a < b);

document.write("<br><br>");
document.write("The End");

// >= (great than OR equal to) 

document.write("<br><br>");
document.write(a >= b);

// <= (less than OR equal to)

// &&, ||, !

document.write("<br><br>");
document.write(a >= b);

// ternoary operator

document.write("<br><br>");
var isAdult;
var age = 50;
isAdult = (age < 18) ? "Too Young" : "Old Enough";
document.write(isAdult);

// String Concatination

document.write("<br><br>");
var firstName = "Shajeel ";
var secondName = "Afzal";
var fullName = firstName + secondName;



















 126  js_lec_3.js 
@@ -0,0 +1,126 @@
// switch statement

// Syntax
// switch(expression){
// 	case n1:
// 		statements;
// 		break;
// 	case n2:
// 		statements;
// 		break;
// 	default:
// 		statements;
// }


var number = 2;
switch(number){
	case 1:
		document.write("Case 1 Matched!");
		break;
	case 2:
		document.write("Case 2 Matched!<br>");
		break;
	case 10:
		document.write("Case 10 Matched!");
		break;	
	default:
		document.write("Default Case Matched!");
}

// loops
// document.write("eRozgaar<br>");
// for(statement 1; statement 2; statement 3){
// 	// statements
// }

// statement 1: executes before the loop 
// starts

// statement 2: define the condition
// for running the app.

// statement 3: executes after every loop

// for(var i=0; i < 1000; i++){
// 	document.write("eRozgaar<br>");
// }

// for(var a=0; false; a++){
// 	document.write("eRozgaar<br>");	
// }

// document.write("Ajeeb c for loop<br><br>");

// var x = 1;
// for(document.write("for loop statement 1<br>"); 
// 	x <= 2; 
// 	document.write("for loop statement 3<br>"))
// {
// 	document.write("eRozgaar<br>");	
// 	x++;
// }

// document.write("<br><br>Ajeeb c for loop<br><br>");

// var z=1;
// for(;z<=10;){
// 	z++
// 	document.write("eRozgaar<br>");
// }

document.write("<table><tr><th>ID</th><th>Name</th><th>CNIC</th><th>Domain</th></tr>");
for(var z=0; z<=9; z++){
	document.write("<tr><td>"+ z +"</td><td>Shajeel</td><td>35302</td><td>Domain</td></tr>");
}
document.write("</table>");

var html = '<table style="width:100%"> \
	  <tr>\
	    <th>ID</th>\
	    <th>Name</th> \
	    <th>CNIC</th> \
	    <th>Domain</th> \
	  </tr> \
	  <tr> \
	    <td>1</td> \
	    <td>Shajeel</td> \
	    <td>35302</td> \
	    <td>Domain</td> \
	  </tr> \
	</table> \
	'

var str = '<div data-role="page" data-add-back-btn="true" id="Gallery2" class="gallery-page"> \
    <div data-role="header">  \
        <h1>Second Gallery</h1> \
    </div> \
    <div data-role="content"> \  
        <ul class="gallery"> \
            <li><a href="images/full/010.jpg" rel="external"><img src="images/thumb/010.jpg" alt="Image 010" /></a></li> \
            <li><a href="images/full/011.jpg" rel="external"><img src="images/thumb/011.jpg" alt="Image 011" /></a></li> \
            <li><a href="images/full/012.jpg" rel="external"><img src="images/thumb/012.jpg" alt="Image 012" /></a></li> \
            <li><a href="images/full/013.jpg" rel="external"><img src="images/thumb/013.jpg" alt="Image 013" /></a></li> \
            <li><a href="images/full/014.jpg" rel="external"><img src="images/thumb/014.jpg" alt="Image 014" /></a></li> \
            <li><a href="images/full/015.jpg" rel="external"><img src="images/thumb/015.jpg" alt="Image 015" /></a></li> \
            <li><a href="images/full/016.jpg" rel="external"><img src="images/thumb/016.jpg" alt="Image 016" /></a></li> \
            <li><a href="images/full/017.jpg" rel="external"><img src="images/thumb/017.jpg" alt="Image 017" /></a></li> \
            <li><a href="images/full/018.jpg" rel="external"><img src="images/thumb/018.jpg" alt="Image 018" /></a></li> \
        </ul> \
    </div> \
    <div data-role="footer"> \
        <h4>&copy; 2011 Code Computerlove</h4> \
    </div> \
</div>';












 85  js_lec_4.js 
@@ -0,0 +1,85 @@
/*
condition can be any statement 
but it should return true or false
while(condition){
	code block
}
*/

// var i=0;
// while(i<5){
// 	document.write("<br>While Loop");
// 	i++;
// }

// while(1){
// 	document.write("<br>While Loop");	
// }

// var x = 1;
// do{
// 	document.write("Do While Loop<br>");
// }while(x <= 5);

// var z = 0;
// while(true){
// 	document.write("Do While Loop<br>");
// 	z++;
// 	if (z > 10) {
// 		break;
// 	}	
// }`

// for(var i=0; i < 5; i++){
// 	if (i == 3) {
// 		continue;
// 	}

// 	document.write("Continue statement");
// }

// function doCalculation(){
// 	var x = 10;
// 	var y = 20;
// 	document.write(x+y);
// 	document.write("<br>");
// }

// doCalculation();
// doCalculation();

// function doCalculation(x, y){
// 	document.write(x+y);
// 	document.write("<br>");

// 	return x+y;
// }

// var sum = doCalculation(50, 20);
// doCalculation(50.5, 20);

// var result = confirm("Are you to delete?");
// if (result==true) {
// 	alert("OK Selected");
// } else {
// 	alert("Cancel Selected");
// }

var name = prompt("Enter your name");















 52  js_lec_5_dom.js 
@@ -0,0 +1,52 @@

/*
document.getElementById();
document.getElementByClassName();
document.getElementByTagName();
*/

var paragraphs = document.getElementsByTagName("p");
paragraphs[0].innerHTML = "Hi There";

function validate(){
	var n1 = document.getElementById("num1");
	var n2 = document.getElementById("num2");

	var inputNum1 = n1.value;
	var inputNum2 = n2.value;

	if (inputNum1 == "" || inputNum2 == "") {
		alert("Empty Fields")
		return false;
	} else {
		alert(inputNum1 + inputNum2);
		return true;
	}

	var number1 = parseInt(inputNum1);
	var number2 = parseInt(inputNum2);
}






















 58  js_lec_6.js 
@@ -0,0 +1,58 @@

// 1st way of creating Arrays
var students = new Array("35303","35302", "35301");
students[0] = "35304";
document.write(students[0]+"<br>");

// 2nd way of creating Arrays
var courses = new Array();
courses[0] = "Technical";
courses[1] = "Non-Technical";
courses[2] = "Creative";
document.write(courses+"<br>");

// 3rd way of creating Arrays;
var programmingLangues = ["Python", "C++","Java", "PHP", "JavaScript"];
document.write(programmingLangues.length);
document.write("<br>"+courses.length);

var stdCourses = courses.concat(students);
document.write("<br>"+stdCourses);

// associative arrays
var person1 = [];
person1["name"] = "Shajeel";
person1["domain"] = "Technical";

var person2 = [];
person2["name"] = "Studnet2";
person2["domain"] = "Technical";


document.write("<br>"+person1["domain"]);

var persons = [];
persons[0] = person1;
person2[1] = person2;

document.write("<br>" + persons);

document.write("<br><br>Looping through Arrays<br><br>");
for(var i=0; i<courses.length;i++){
	document.write(courses[i]+"<br>");
}

document.write("<br><h1>Math Object</h1><br>");

document.write(Math.PI);











 71  script.js 
@@ -0,0 +1,71 @@
document.write("<h1>Hello World from External JS!</h1>");
// alert("This is the dialog box!"); 

// this show alert

/*
	This is multiline comment.
*/

var z;
z = 100;
var x = 10;
var X = 20;
// var first name; (invalid variable name)
// var 0firtstName; (invalid variable name)
// var first0Name; (valid variable name)
// var _firstName; (valid variable name)
// var $firstName; (valid variable name)
// var x+y; (invalid variable name)

/*
	
	1- variables names cannot contain spaces
	2- variables cannot start with a number
	3- researved words cannot be used
	4- variable names can start with any letter, 
	   underscore ( _ ) or a dollar sign ($)
	5- Subsequent characters maybe letters, digits,
	   underscore, or dollar signs.    
*/

document.write(X);

var sayHello = "<br>\'Hello World!\'";

// \n new line
// \r cariage return
// \t tab

document.write(sayHello);

var isActive = true;
var isHoliday = false;

// +, -, *, /, %, ++, --

document.write("<br><br>");

var i = 19;

i++;

document.write(--i);
document.write("<br><br>");
document.write(i);












