export default () => ({
  port: process.env.PORT || 3000,
  mail: {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    user: 'katrine.dicki50@ethereal.email',
    password: '1c9bD4yaPy4C5eJufR',
    from: 'support@zeronest.com',
    queueName: 'mail',
  },
});
