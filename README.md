
# Covid19 vaccine slot availability checker (CoWin Portal API - India)

Just plain simple js code to check if any vaccine slots are available for a given date, age, and in a specified district.

**Instructions:**

1.) Run following commands

> git clone https://github.com/sudo-tilakvardhan/covid19-vaccine-slot-checker
> 
> npm install

2.) In the config folder, edit the *prod_v2.js* file and enter details as per your search.
NOTE: For district code refer - #ToDo

3.) Run 

> node checkVaccineStatus.js

You'll get a list of all the centres for a given district where free slots are available.


**Next Steps:**

Run the below command in one of your tab and it will automatically update after every 100s
To change refresh time, edit the value after -n flag below
> watch -n 100 node checkVaccineStatus.js

