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
<h1>Student Enroll Form</h1>

<form action="#" th:action="@{editsave}" th:object="${student}" method="post">
<input type="hidden" th:value="${id}" th:field="{id}"/>
<table>
<tr>
<td width="15%">First Name :</td>
<td width="85%" align="left"><input type="text" th:field="*{firstName}"/></td>
</tr>
<tr>
<td> Last Name  :></td>
<td><input type="text" th:field="*{lastname}"/></td>
</tr>
<tr>
<td> Email  :></td>
<td><input type="text" th:field="*{email}"/></td>
</tr>
<tr>
<td> Country  :></td>
<td><input type="text" th:field="*{country}"/></td>
</tr>
<tr>
<td>
<input type="radio" th:field="*{sex}" value="M"/><label>Male</label>
<input type="radio" th:field="*{sex}" value="F"/><label>FeMale</label>
</td>
</tr>
<tr>
<td>Section  : </td>
<td>
<select th:field="*{section}">
<option th:each="section : ${sections}" th:vallue="${section}" th:text="${section}">Section</option>
</select>
</td>
</tr>
</table>

</form>
</div>
</body>
</html>
