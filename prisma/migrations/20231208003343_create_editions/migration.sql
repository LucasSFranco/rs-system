-- CreateTable
CREATE TABLE "editions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "editions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_configs" (
    "id" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "editionId" TEXT NOT NULL,
    "questionsAmount" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_configs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "editions_name_key" ON "editions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "test_configs_subjectId_editionId_key" ON "test_configs"("subjectId", "editionId");

-- AddForeignKey
ALTER TABLE "test_configs" ADD CONSTRAINT "test_configs_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_configs" ADD CONSTRAINT "test_configs_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
