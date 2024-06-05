import { FaRegCircleDot } from "react-icons/fa6";

export default function Cards() {
  return (
    <div className="container flex-1 relative justify-between flex flex-wrap max-xl:gap-8 xl:py-32 py-16 max-xl:px-6">
      <div className="xl:h-[calc(80vh-160px)] flex flex-col gap-8 max-xl:w-full">
        <img
          src="https://www.gigbi.com/cdn/image/category/710/ilkokul-matematik-ozel-ders.jpg"
          className="xl:max-h-[250px] object-center object-cover rounded-2xl "
          alt="Erdem Hoca"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium "><span className="text-secondary">Erdem</span> Hoca</h1>
          <p className="text-base font-medium">
            İstanbul Üniversitesi - Cerrahpaşa
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Hizmetler</h2>
          <ul className="list-disc ">
            <li className="flex items-center gap-1.5">
              <FaRegCircleDot className="text-xs" />
              A1-C1 Seviyesinde İngilizce Eğitimleri
            </li>
            <li className="flex items-center gap-1.5">
              <FaRegCircleDot className="text-xs" />
              A1-A2 Seviyesinde Almanca Eğitimleri
            </li>
            <li className="flex items-center gap-1.5">
              <FaRegCircleDot className="text-xs" />
              İlkokul, Ortaokul, Lise Öğrencileri ve Yetişkinler İçin Özel
              Dersler
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:absolute border-indigo-500 z-50 left-[50%] xl:rotate-45 
      max-xl:w-full max-xl:mx-6 xl:h-[calc(80vh)] xl:-translate-y-[60px] border-[1.2px] border-dashed"/>

      <div className="w-1/2 xl:h-[calc(80vh-160px)] items-end flex justify-end flex-col gap-8 max-xl:w-full">
        <img
          src="https://media.istockphoto.com/id/1187764379/tr/foto%C4%9Fraf/gen%C3%A7-k%C4%B1za-bireysel-e%C4%9Fitim-veren-kad%C4%B1n-%C3%B6%C4%9Fretmen-%C3%B6zel-ders.jpg?s=1024x1024&w=is&k=20&c=cjkWZGaTY_HoOuSuW8FEiFO9T_NgLI_z0fc0DN-t8hc="
          className="xl:max-h-[250px] xl:w-[497.67px] object-center object-cover rounded-2xl"
          alt="Erdem Hoca"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium text-right">Zeynep <span className="text-secondary">Hoca</span></h1>
          <p className="text-base font-medium text-right">
            Kocaeli Üniversitesi
          </p>
        </div>

        <div className="flex items-end flex-col gap-4">
          <h2 className="text-xl font-medium">Hizmetler</h2>
          <ul className="flex flex-col items-end">
            <li className="flex items-center gap-1.5">
              Ortaokul Öğrencilerine Matematik Özel Dersleri
              <FaRegCircleDot className="text-xs" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
