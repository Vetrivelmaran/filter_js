const data = [
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.org' },
    { name: 'User 3', email: 'user3@gmail.com' },
    { name: 'User 4', email: 'user4@example.com' },
    { name: 'User 5', email: 'user5@gmail.net' }
  ];

const fil_domain='gmail.com';
const filterd_data=data.filter(e => e.email.includes(`@${fil_domain}`) );
console.log(filterd_data)


