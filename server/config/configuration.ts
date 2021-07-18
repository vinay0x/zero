export default () => ({
  port: process.env.PORT || 3000,
  mail: {
    service: 'ethereal',
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    user: 'roy.marvin92@ethereal.email',
    pass: 'FNWeMsenWEA3Nzz7u3',
    from: 'support@zeronest.com',
    queueName: 'mail',
  },
});
