const Specialising = () => {
  return (
    <section className="px-4 md:px-8 py-16 min-h-screen flex flex-col bg-transparent backdrop-blur-[2px]">
      <h2 className="text-4xl md:text-7xl page-specific-font-pp mb-12 text-left text-white border-b border-gray-700 pb-8">
        Specialising
      </h2>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://res.cloudinary.com/dxmnledfa/image/upload/v1772694600/Frame_1_x6ngpo.png"
            alt="UX work"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://res.cloudinary.com/dxmnledfa/image/upload/v1772694596/Frame_2_zs1uqa.png"
            alt="UI work"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://res.cloudinary.com/dxmnledfa/image/upload/v1772694619/Frame_3_rvjavl.png"
            alt="Prototyping"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://res.cloudinary.com/dxmnledfa/image/upload/v1772694602/Frame_4_atirlr.png"
            alt="Wireframing"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Specialising;
