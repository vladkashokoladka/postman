let dat1 = '09.10.2021';
let dat2 = '10.10.2021';

var user0 = new Map();
user0.set('firstName', 'John');
user0.set('lastName', 'Caper');
user0.set('phone', '7436676737634');
user0.set('registrationDate', '12.10.2021');

var user1 = new Map();
user1.set('firstName', 'Clark');
user1.set('lastName', 'Kent');
user1.set('phone', '4346676737634');
user1.set('registrationDate', '10.10.2021');

var users = [user0, user1];

function findDateOfReg(users) {
   
   for (let i = 0; i < users.length; i++){
      
         if(dat2==users[i].get('registrationDate') || dat1==users[i].get('registrationDate'))
            console.log(users[i])
     
   }

   return ;
}

findDateOfReg(users);

