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
    npx prisma generate
```

5. Sync prisma Schema with the database and generate migration files.
```sh
    npx prisma migrate dev
```



-----------------------------------------

## Extra Commands

To pull changes from the db and populate you .prisma/schema.prisma file:
```bsh
        npx prisma db pull
```

To sync your db with schema without generating migration files
```bsh
    npx prisma db push
```

