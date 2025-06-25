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

To spin off Prisma Studio:
```bsh
    npx prisma studio
```


-------------------------------------------------------
## How to resolve already existing and populated Neon db with prisma:
1. Create a branch of your neon db and name it `prisma_test` (just like a GIT branch)

2. initalize prisma in your project.
   `npm i -d prisma
   npx prisma init --datasource-provider postgresql
   npm install @prisma/client`

3. Pull the complete schema of your db into `.primsa/schema.prisma` file:
`npx prisma db pull`

4. Create the first migration file:
   `mkdir prisma/migrations/init`

5. Create the SQL script from your current schema:
   `npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql`

6. Apply base migrations:
    ` npx prisma migrate resolve --applied init`
