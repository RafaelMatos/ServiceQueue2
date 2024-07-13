-- DropForeignKey
ALTER TABLE "patients" DROP CONSTRAINT "patients_user_id_fkey";

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
