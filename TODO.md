## <u>TODO</u>

### *~~CSS~~*
- _There are certainly problems here, but nothing specific yet._

### *~~HTML~~*
- _Some minor structural issues, but nothing of concern just yet._

### JS

#### index.js

##### All of those variables in index.js are going to be added to a JSON object array

##### Dropdown states should be conditional, rather than separate similar functions.

---

#### functions.js

##### What if `request()` was tracked as an object, possibly using **knockout.js**?
 - Then $('#send_request').click() could send a function with an obj and a _string:'submit'|'update'_.
 - It might make the function slightly DRYer also.

##### Linear Gradients need ported from Firefox into Chrome and Internet Explorer.

##### Implement jsPDF for printer page 
  - Doesn't retain style, come back to this at `jspdf.php`.

##### There is no proper check for duplicate name entry on `send_request()`.
- Possibly add a new checkbox that says _"no date,"_ or _"none"_ that will void the date instead of it being based on _"today"_.
  - Default dates now use _"today's date"_.

##### If a checkbox is false, make sure to set the dates back to default _0000-00-00_ or, eventually, _none_.
  - Still missing date for _Title Work Ordered_.

##### **[bug]** Radio buttons get a little messed up when there's nothing to go into them, add a default false value to them.

---

#### dropdown.js

##### The dropdown will be rewritten in Javascript, which allows for seamless refreshes, and JSON; dropdown.close.click functionality could be changed from XML, which does work, into a real JSON file.
- *Currently being worked on.*

---

#### Logger

##### The following functions need to be logged:  
- Customer Additions, Updates, Resets, and Removals
- User log in/out
