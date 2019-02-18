<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhml" xmlns:th="http://www.thymleaf.org">
<head>
<title>Student List</title>
<link rel="stylesheet" th:href="@{/css/style.css}"/>
<link rel="stylesheet" th:href="@{/css/main.css}"/>
</head>
<body>
<h1 align="center">Student List</h1>
<table id="t02" cellpadding="2">
<tr>
<th>
<a href ="enroll"><h2>Home Page Enroll New Student</h2></a>
</th>
<th>
<a align="right" href="/delete"><h2>Delete All Students</h2></a>
</th>
</tr>
</table>

<table>


</table>
<form : form>
<table id="t01" border="2" width="70%" cellpadding="2">
<tr><th>Id</th><th>FirstName</th><th>LastName</th>
<th>Sex</th><th>Date Modified</th>
<th>Email</th><th>Section</th><th>Country</th>
<th>Edit</th><th>Delete</th></tr>

<tr th:each="student :${list}">
<td th:text="${student.id}"></td>
<td th:text="${student.firstName}"></td>
<td th:text="${student.lastName}"></td>
<td th:text="${student.sex}"></td>
<td th:text="${student.createdAt}"></td>
<td th:text="${student.email}"></td>
<td th:text="${student.section}"></td>
<td th:text="${student.country}"></td>

<td><a th:href="@{'/editstudent/' + ${student.id}}">Edit</a></td>
<td><a th:href="'/deletestudent/' + ${student.id}}">Delete</a></td>
</table>
<br/>

</form>
</body>
</html>