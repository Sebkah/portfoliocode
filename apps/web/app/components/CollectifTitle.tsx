const CollectifTitle = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mix-blend-difference z-100">
        <div className="h-min w-min">
          <div className="title-line">COL</div>
          <div className="title-line">LEC</div>
          <div className="title-line">TIF</div>
          <div className="title-line">99°</div>
        </div>
      </div>
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"

      >
        <source src="video/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CollectifTitle;
