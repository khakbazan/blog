import MainLayout from "@/layouts/main-layout";

export default function Loading() {
  return (
    <MainLayout>
      <div className="box">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-x-2">
            <div className="skeleton w-11 h-11 rounded-full"></div>

            <div className="space-y-2">
              <div className="w-20 h-3 skeleton"></div>
              <div className="w-16 h-2 skeleton"></div>
            </div>
          </div>

          <div className="flex items-center gap-x-1.5">
            <div className="w-5 h-6 rounded-sm skeleton"></div>
            <div className="w-5 h-6 rounded-sm skeleton"></div>
            <div className="w-5 h-6 rounded-sm skeleton"></div>
            <div className="w-5 h-6 rounded-sm skeleton"></div>
          </div>
        </div>

        <div className="w-full h-80 skeleton mb-4 rounded-sm"></div>
        <div className="w-2/3 skeleton h-6 rounded-sm"></div>

        <div className="space-y-3 mt-6">
          {Array.from({ length: 15 }, (_, idx) => (
            <div
              key={`textx-loading-${idx}`}
              className="w-full skeleton h-3.5 rounded-sm"
            ></div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
