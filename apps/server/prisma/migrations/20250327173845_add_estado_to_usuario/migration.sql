-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('ACTIVO', 'INACTIVO');

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "estado" "Estado" NOT NULL DEFAULT 'ACTIVO';
