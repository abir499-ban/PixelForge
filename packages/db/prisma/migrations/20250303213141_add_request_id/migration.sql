-- CreateEnum
CREATE TYPE "ModelTrainingStatus" AS ENUM ('Pending', 'Generated', 'Failed');

-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "falAirequest_id" TEXT,
ADD COLUMN     "tensor" TEXT,
ADD COLUMN     "trainingStatus" "ModelTrainingStatus" NOT NULL DEFAULT 'Pending',
ADD COLUMN     "triggerWord" TEXT;

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "falAirequest_id" TEXT;
