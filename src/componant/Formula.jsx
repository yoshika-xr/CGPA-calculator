import React from 'react'

function Formula() {
  return (
    <div>
      GPA Calculation

GPA (Grade Point Average) is calculated for one semester.

Formula

GPA=
∑Credits
∑(Grade Point×Credit)
	​


Steps
Multiply each subject’s Grade Point × Credit
Add all the values
Add total credits
Divide total grade points by total credits
Example
Subject	Grade Point	Credit	GP × Credit
Maths	9	4	36
Java	8	3	24
DBMS	10	3	30
Total = 36 + 24 + 30 = 90
Total Credits = 4 + 3 + 3 = 10
GPA

GPA=
10
90
	​

=9.0

CGPA Calculation

CGPA (Cumulative Grade Point Average) is calculated using all semester GPAs.

Formula

CGPA=
Number of Semesters
∑Semester GPAs
	​


Example
Semester	GPA
Sem 1	8.5
Sem 2	9.0
Sem 3	8.8
CGPA

CGPA=
3
8.5+9.0+8.8
	​

=8.76
    </div>
  )
}

export default Formula