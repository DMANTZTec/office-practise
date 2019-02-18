<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhml" xmlns:th="http://www.thymleaf.org">
<head>
<title>Student Enrollment Form</title>
<link rel="stylesheet" th:href="@{/css/style.css}"/>
<link rel="stylesheet" th:href="@{/css/custom.css}"/>
<link rel="stylesheet" th:href="@{/css/main.css}"/>
</head>
<body>

<div>
<h1>Student Enrollment Form</h1>

<form action="#" th:action="@{/save}" th:object="${student}" method="post">
<table>
<tr>
<td width="10%">First Name :</td>
<td width="90%" align="left">
<input type="text" th:field="*{firstName}"/>
<label th:if="${#fields.hasErrors('firstName')}" th:errors="*{firstName}" th:class="'error'">Error in First Name</label></td>
</tr>

<tr>
<td>Last Name :</td>
<td>
<input type="text" th:field="*{lastName}"/>
<label th:if="${#fields.hasErrors('lastName')}" th:errors="*{lastName}" th:class="'error'">Error in First Name</label></td>
</tr>

<tr>
<td>Email :</td>
<td>
<input type="text" th:field="*{email}"/>
<label th:if="${#fields.hasErrors('email')}" th:errors="*{email}" th:class="'error'">Error in First Name</label></td>
</tr>

<tr>
<td>Country :</td>
<td>
<select th:field="*{country}">
<option th:each="country : ${countries}" th:value="${country}" th:text="${country}">Country</option>
</select>
<label th:if="${#fields.hasErrors('country')}" th:errors="*{lastName}" th:class="'error'">Error in Country</label></td>
</tr>
<tr>
<td>Gender : </td>
<td>
<input type="radio" th:field="*{sex}" value="M"/><label>Male</label>
<input type="radio" th:field="*{sex}" value="F"/><label>FeMale</label>
<label th:if="${#fields.hasErrors('sex')}" th:errors="*{sex}" th:class="'error'">Error</label></td>
</tr>
<tr>
<td> </td>
<td>
<input type="submit" value="Enroll">
</td>
</tr>
</table>


</form>

</div>


</body>

</html>