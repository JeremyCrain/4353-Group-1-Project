# COSC 4353 Group 1

Group Members: 
- Bhuvana Chandra Adhugiri
- Jeremy Crain
- Sean Nguyen

## Assignment 1

In this assignment we will come up with initial design for a software application that you will build in this semester. 
We will not be writing any code in this assignment, but only looking at some initial design ideas and high level architecture.

Description: 
A partner of your company has requested to build a software application that will predict the rate of the fuel based on the following criteria:
- Client Location (in-state or out-of-state)
- Client history (existing customer with previous purchase or new)
- Gallons requested
- Company profit margin (%)

Software must include following components:
- Login (Allow Client to register if not a client yet)
- Client Registration (Initially only username and Password)
- Client Profile Management (after client registers they should login first to complete profile)
- Fuel Quote Form with Pricing module (Once user enters all required information pricing module calculates the rate provides total cost)
- Fuel Quote History

Answer these questions:

1. Discuss your initial thoughts in details on how you will design this application? (2 points)

2. Discuss what development methodology you will use and why? (2 points)
3. Provide high level design / architecture of your solution that you are proposing? (6 points)

4. IMPORTANT: list who did what within the group. TAs should be able to validate the code in GitHub, otherwise team members who didn't contribute will receive a ZERO.

NOTE: Include a separate file (may be a scan of hand drawn picture if you like, or a PDF, tiff, word document, etc.) which shows a UML diagram of your design.

Here are some architecture examples: https://www.edrawsoft.com/software-architecture-example.php

What to turn in:

- Only soft copy uploaded to blackboard before due date.

- Only one submission per group.
- No extensions.

- All group members must contribute equally.

## Assignment 2

In this assignment you will build the front end for the web application that you designed in assignment 1. 
Remember, we are only building front end in this assignment.


Description: 
Same as assignment 1.

Additional Details:

Front end must include following components:
- Login (Allow Client to register if not a client yet)
- Client Registration (Initially only username and Password)
- Client Profile Management (After client registers they should login first to complete the profile). Following fields will be on Profile page / form:
	- Full Name (50 characters, required)
	- Address 1 (100 characters, required)
	- Address 2 (100 characters, optional)
	- City (100 characters, required)
	- State (Drop Down, selection required) DB will store 2 character state code
	- Zipcode (9 characters, at least 5 character code required)
	
- Fuel Quote Form with following fields: (We are not building pricing module yet)
	- Gallons Requested (numeric, required)
	- Delivery Address (Non-editable, comes from client profile)
	- Delivery Date (Calender, date picker)
	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
	- Total Amount Due (numeric non-editable, calculated (gallons * price))
	
- Fuel Quote History
	- Tabular display of all client quotes in the past. All fields from Fuel Quote are displayed.

- You should have validations in place for required fields, field types, and field lengths. 

- NOTE: Only provide a word / pdf doc. You should use GitHub for your group collaboration and code.


Answer these questions:
1. Provide link to GitHub repository for TAs to view the code? (1 point)
2. Discuss if your design and development methodology has changed since assignment 1 and why? (1 point)
3. List what front end technologies you are using and why. List who is responsible of doing what in your group? (2 points)
4. Provide screen shots of your front end, each page? (5 points)
5. IMPORTANT: list who did what within the group. TAs should be able to validate in GitHub, otherwise team members who didn't contribute will receive a ZERO. (1 point)
