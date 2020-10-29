Inventory Management System is a semi-automatic system that manages inventory for a College in a University.
The inventory objects are of different types.

The actors of this system are the Technical Assistants of Labs, Care taker of the college, Store Keeper, Faculty, Incharges and Principal of the college. 
Details- email, role, other details- name, employee id, password.

They can log in to use the system. After authentication, the system allows the user to view the inventory of the department which is categorized in various groups. The system allows the user to add, edit, and delete the items in the database (DB). The system also allows the user to request for one or more of the existing inventory or report on any such inventory. The system restricts the users from accessing all features based on role, depending on the user’s level of permissions. The level of permission is a default package, which is not assigned by the system. However, the system accepts change in the user’s level or modifications made to the permissions in the present level of any user.
Each user has a username, password and role that are stored in the database.

·   	These details are matched with the database and the type of user is checked. Then the required information and functions become available to the user according to his/her type. 

·   	Provision to enter the necessary details on the front end.

·   	Verification of username and password.

Request generation- Using this feature of the system, any user can place a request for an item, or adding some staff.


·   	The request for an item can be placed by any authorized user of the system.

·   	To request for any object, the user is supposed to select the object type from the pre defined drop down list. This list can be changed the DB admin on request directly in the db as of now.

·   	Then provision to add other specifications is provided after which the send request button should be clicked to forward the request in the hierarchy.

·   	Provision for all the authorized users to enter a request for any item and to forward it.

·   	The date, time, and name of the sender will be automatically noted by the system.

Request approval- This feature allows a low-level user and a high-level user to request and approve/reject requests respectively, for the department.

·   	A user at the lower level of the hierarchy sends a request to his hierarchical parent. For example, the technical assistant sends a request to the lab incharge.

·   	That request moves upwards till it reaches the Principal / rejected at a particular level and notification is send to the PRincipal.

·   	The Principal then approves/rejects unrejected requests. All requests are finally approved by the Principal . In case of rejection, he has to mention a reason for rejection.

·   	The request for items of high priority/perishable/ daily consumption items(markers etc.) can defy the hierarchy by contacting the Storekeeper directly. For these items, approval of Principal is not needed.

·   	The priority of an item is determined by the Storekeeper and is predefined in the DB.

·   	
·   	A high level user can view all the requests that his subordinates have received and can approve/reject them as desired.

·       Provision for adding a request.

·       Provision for viewing and approving the request by the proper authorities.

·       Provision for forwarding a request.

·       Provision for setting a priority for the request to the Storekeeper.

·       Provision to enter a reason in case the request is rejected.

Update inventory records- This feature allows authorized users to add delete modify inventory records.

Provision is given to add/delete or modify the inventory records.

·       For adding: The authorized user adds new items that are bought. This information is added to the database.

·       For deleting: The authorized user enters information about the record/records that he wants to delete. The records are deleted from the database.

·       For modification: The authorized user enters information about the record that he has to modify.

·       Complete record is displayed.


·       The user modifies anyone or more details as desired.

·       The new record is stored in the database along with the date/time of modification.

·       The authorized user for the central repository(store) is the Storekeeper.

·       Provision to check whether the user is authorized or not. (This is done by the login feature).

·       Provision to add/delete & modify various databases.

·       Display of proper error messages like “record to be modified is not found” etc.

·       Display of affirmative messages if the task is completed like “records deleted” etc.

·       In case of modification, the date & time of modification is also stored.

View inventory request- This feature allows various users to view inventory records, and requests that they have sent/received.

After the user logs in, he/she can see inventory details /requests that he has access to. The subject line of every request will be displayed. On clicking it,the whole text can be seen. The chairman and the Storekeeper can view all requests and all the inventory records of the central repository and individuals. The incharge can view his subordinate requests and the inventory record of the lab under his dominion.

Only authorized users can view inventory records/requests. That means verification of the user provided by the login feature. Others can view only the requests they have made.
·       Multiple views of the database/ parts of the database depending on user.

·       The technical assistant can only view the inventory record of his own unit.

·       Multiple user interfaces for different kinds of users.

·       No user must be granted access to sensitive information that he/she is not entitled to view.

·       The security of the system must be maintained.

Passwords are supposed to be encrypted using hashing and salting before storage.

Threshold notification- This feature will provide a notification/alert to the Storekeeper incharge when the stock of perishable items is below a certain level.

Whenever the database is changed, the number of items available in the database will be checked against a threshold.

·   	If the numbers of items are less than the threshold, it will show a red notification mark and a message to the Storekeeper incharge.

·   	The threshold for consumable items is defined by Storekeeper.

·   	It should check automatically whenever the database is changed.(May need trigger stored procedure like thing)
Add new staff- This feature allows us to update the staff details in order to add new member or delete some old ones. Request for addition (deletion/ updating) of a staff member or for adding new infrastructure can only be made by the chairman.

The request for new staff/ should be made by the chairman only and no one else.

Ø  It allows the PRincipal of department to login as admin in the system.

Ø  It allows PRincipal to generate requests/ messages for addition and deletion of staff.

Ø  It allows PRincipal to view overall functioning of the system.

Ø  It allows Storekeeper to add items, view, and check threshold notifications etc.

Ø  It allows various in-charges (faculty in-charge, lab in-charge etc.) to view its own and subordinate requests.

Ø  It allows technicians to generate and view requests of its own units.

The various user classes who will be involved in using this product were department employees. These will range from chairman of the department (highest authority) to teaching staff, students, lab technicians and non-teaching staff. Every user class has different needs and it is designed to accommodate all of them. They are differentiated according to their level in hierarchy in department and this software functions based on their works. The software verifies the user class by login feature. All the user classes are equally important as all of them are required in functioning of the department. The main user classes and their characteristics are shown in class diagram below:
 Every item updates should be notified to only a one-higher actor in the hierarchy.
 
            Principal
Store History of approved / disapproved requests
 -View entire inventory
-Approve/Reject requests
-generate request for adding new staff or infrastructure
 
         	Storekeeper
       
Purchase history
Items in stock
Item distribution history
 -Update stock
-Generate request
Out of stock- Warning if trying to fulfill order without
enough stock on hand. Notification sent
-threshold indication
-vie all request and inventory. Stock on hand values are updated when orders are fulfilled.
 
         Technical Assistant
-View request status
-Generate request
 Out of stock- Warning if trying to fulfill order without
enough stock on hand. Notification sent
In-charge
Current Items
Lab history
-Request generate
-Request approve and forward or Reject
-view own inventory records

DB design-
Item- type  (many to many), 
status- active, inactive, condemned- used, written off, theft, damaged.
Item belongs to a category

Request status- pending, rejected, approved, procurement request sent, received.

Notification-
New request
On status of request change
On status of product change
On need of restocking (threshold reached)

Funds Account- displayed to principal and accountant
Fund, balance, on executing request- update fund.

Request execution- quantity, cost per quantity, total cost. Fund - total cost= Funds remaining.

Current active inventory of all infrastructure-
Report generation is an important feature. System capable of generating report of all requests and procurements and fund details from one date to another for the Principal and accountant. And without the fund details for the storekeeper.
Also incharges of labs can generate similar report for their labs. 

Phases of development-
Phase 1- Development of single warehouse IMS 	//Design for Scalability
Phase 2- Development of multiple warehouse IMS- Create multiple stock locations, shift
stock between them, receive and send
goods into / from a specific location.
You can track the locations of your
product variants in different
warehouses, & print out Pick Lists once
your orders reach the Shipping stage.
Move stock between your different
warehouses and stock locations

Need to add-
Use case diagrams
Activity sequence diagrams
Sequence diagram for every use case
Mockups

MongoDB schema for each Item-
EquipmentName - 300 characters
Specifications	- 2000 characters
Name_of_manufacturer
Mapping_with_MainInventoryCollectionID
{BillNumber
Billdate
SellerName}
Conditionwhenreceived	
isVerifiedbyIC
{isTransferred? 
TransferredRecipientName
InfrastructureMappingID}	
Remarks

Action items
0. Schema validations- UI validations/Controller validations (Check how validations happen in MongoDB)
1. Convert excel file to correct schema
2. JSON - Tool to convert- 
3. MongoDB feed
4. Render data from MongoDB to UI
5. CRUD APIs
6. Test APIs from UI
