/*
  Warnings:

  - The values [AsianAmerican,EastAsian,SouthEastAsian,SouthAsian,MiddleEastern] on the enum `ModelEthnicty` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ModelEthnicty_new" AS ENUM ('Black', 'Asian_American', 'East_Asian', 'South_East_Asian', 'South_Asian', 'Middle_Eastern', 'Pacific', 'Hispanic');
ALTER TABLE "Model" ALTER COLUMN "ethicity" TYPE "ModelEthnicty_new" USING ("ethicity"::text::"ModelEthnicty_new");
ALTER TYPE "ModelEthnicty" RENAME TO "ModelEthnicty_old";
ALTER TYPE "ModelEthnicty_new" RENAME TO "ModelEthnicty";
DROP TYPE "ModelEthnicty_old";
COMMIT;
