# Mr. Rogers number converter

#### **This webpage takes user input and converts it to a friendly Mr. Rogers-esque response based on simple rules. Patrick Osten, 10/23/2020**

**[Click here to open in web browser](https://posten040.github.io/week-2-project/index.html)**

## Description

The program made primarily in Javascript and **Test**ed with TDD, takes a number as an input and returns a range of number from 0 to the input with the exceptions that 1, 2, and 3 are replaced with english phrases. For example 5, should return [0, beep, boop, "won't you be my neighbor?", 4, 5].

## Installation Requirements

- Up to date internet browser ([Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy9jwgkNels1LOSIWTx4sDazLfEgC6PylTug62KqyWPeA0EMyr3254aAjTTEALw_wcB&gclsrc=aw.ds), [Mozilla](https://www.mozilla.org/en-US/firefox/), [Opera](https://www.opera.com/)).
 
 
 -**optional**- 
- Code editor like [VsCode](https://**Code**.visualstudio.com/download) to view source **Code**.

## Setup

#### From the web
1. Go to this [GitHub Repo Page](https://github.com/POsten040/week-3-project).
2. Click the "Code" and click the 'Download zip' option.
3. Unzip the file, navigate to the root directory (week-1-project folder).
4. opent the 'index.html' file with your web browser.

--or--

#### From Terminal

1. Open GitBash/Bash, type 
: `git clone {https://github.com/POsten040/week-3-project}`
2. Navigate to the week-1-project directory and type
: `**Code** .`
3. Your **Code** editor will open the files, from there you must open the index.html file in your browser.

## Specs

Description: mrRogerizer()



****Test****: Should accept user input and convert it to a number.  
**Code**: let input = parseInt($("formInput").val());  
 **Expect**: user types "5", should return 5.

**Test**: Should take input and return array of numbers 0 - input.  
**Code**: let n = 5;
const empty = []
for (let i = 0; i < n+1; i++) {
    empty.push(i);}  
**Expect**: input (5), console.log(0,1,2,3,4,5). stop. 

**Test**: return array as a string of numbers  
**Code**: array.join(" ")  
**Expect**:  mrRogerizer(5) returns "0 1 2 3 4 5"  

**Test**: replace 3 with "wont you be my neighbor"  
**Code**: string.replace(/3/g, "won't you be my neighbor");  
**Expect**: input [1,2,3,4] returns [1,2,"wont you be my neighbor",4]  

**Test**: replace 2 with "boop"  
**Code**: string.replace(/2/g, "boop");  
**Expect**: input [1,2,3,4] returns [1,"boop",3,4,] 

**Test**: replace 1 with "beep"  
**Code**: string.replace(/1/g, "beep"); 
**Expect**: input [1,2,3,4] returns ["beep",2,3,4] 

**Test**: create rule where, if numbers are grouped (ie: 13, 11, 24) replace both numbers with appropriate string.  
**Code**: n/a  
**Expect**: input [13] returns ["Wont you be my neighbor"]  

**Test**: change regular expressions to single out 1, 2, 3 and change only them
**Code**:
**Expect**: input "1, 13, 3" returns "beep", 13, "wont you be my neighbor"

**Test**: add many variables that each single out instances of 1, 2, 3 to be converted.  
**Expect**: input.replace(/\d3/g, "word") replaces "23" with word, but not "32".  
<!-- I'm not happy about how this works -->

**Test**: take array and get the index of instances of "3", and splice "wont you be my neighbor" into that spot.
**Code**: if(array.includes(3)).Replace3with(newElement)
**Expect**: input([1,2,3] returns [1,2,newElement]

**Test**: use forEach to loop through whole array and replace "3"s
**Code**: 
**Expect**: input(1,2,3,4,5,3) returns (1,2,newElement,4,5,newElement)



## Known Bugs
*  numbers with triple digits are not compatible with the function mrRogerizer, they return fractured numbers and phrases. ex: 101 return "1 beep", instead of "beep".

## Support and contact details

Feel free to reach me through email with any comments:
*Patrickosten040@gmail.com*

## Technologies Used

- HTML5 language  
- CSS 
- Bootstrap
- Javascript
- JQuery

## License

[MIT license](https://opensource.org/licenses/MIT)

## Copyright (c) 2020 **_Patrick Osten_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.