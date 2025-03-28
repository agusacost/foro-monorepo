-- CreateTable
CREATE TABLE "tipousuario" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "tipousuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipoUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipousuario_descripcion_key" ON "tipousuario"("descripcion");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_tipoUsuarioId_fkey" FOREIGN KEY ("tipoUsuarioId") REFERENCES "tipousuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
