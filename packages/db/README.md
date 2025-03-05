## Starter commands for Prisma


1. To install Prisma ORM in your project:
```sh
npm i -d prisma
```

2. To initialize Prisma and set its DB 
```sh
npx prisma init --datasource-provider postgresql
```

**Write the Database Schema in the ./prisma/schema.prisma file**

3. Install package for Prisma Client:
```sh
npm install @prisma/client
```

4. Generate the Prisma Client
```sh
    prisma generate
```

5. Sync prisma Schema with the database and generate migration files.
```sh
    npx prisma generate dev
```