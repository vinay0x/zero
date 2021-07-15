export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'vinay',
  password: '',
  database: 'project-zero',
  synchronize: process.env.NODE_ENV == "development"
}